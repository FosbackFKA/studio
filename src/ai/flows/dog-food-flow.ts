
'use server';
/**
 * @fileOverview An AI-powered dog food recommender.
 *
 * - recommendDogFood - A function that recommends dog food based on dog's details.
 * - DogFoodInput - The input type for the recommendDogFood function.
 * - DogFoodRecommendation - The type for a single recommended product.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { searchDogFood, type DogFoodProduct } from '@/lib/dog-food-data';

const DogFoodInputSchema = z.object({
  age: z.string().describe("The dog's age category (e.g., puppy, adult, senior)."),
  size: z.string().describe("The dog's size category (e.g., small, medium, large)."),
  specialNeeds: z.string().optional().describe('Any special needs, health concerns or brand preferences the dog has (e.g., sensitive skin, weight control, royal canin).'),
});
export type DogFoodInput = z.infer<typeof DogFoodInputSchema>;

const RecommendedProductSchema = z.object({
  productName: z.string().describe('The exact name of the recommended product (from the `title` field).'),
  brand: z.string().describe('The brand of the recommended product.'),
  price: z.string().describe('The price of the product.'),
  shippingWeight: z.string().describe('The shipping weight of the product.'),
  justification: z.string().describe("The exact, unmodified product description (from the `description` field) of the chosen product. Do not generate new text."),
  imageUrl: z.string().describe("The image URL for the product (from the `image_link` field)."),
  productUrl: z.string().describe("The URL to the product page (from the `link` field)."),
});

const DogFoodOutputSchema = z.array(RecommendedProductSchema);

export type DogFoodRecommendation = z.infer<typeof RecommendedProductSchema>;

export async function recommendDogFood(input: DogFoodInput): Promise<DogFoodRecommendation[]> {
  return dogFoodFlow(input);
}

const dogFoodSelectionPrompt = ai.definePrompt({
  name: 'dogFoodSelectionPrompt',
  input: { schema: z.object({
    dogDetails: DogFoodInputSchema,
    productList: z.array(z.object({
        id: z.string(),
        title: z.string(),
        brand: z.string(),
        description: z.string(),
        link: z.string(),
        image_link: z.string(),
        price: z.string(),
        shipping_weight: z.string(),
        usp: z.array(z.string()),
        tags: z.array(z.string()),
    }))
  })},
  output: { schema: DogFoodOutputSchema },
  prompt: `Du er en ekspert produktvelger-assistent for Felleskjøpet. Din ENESTE oppgave er å velge de beste produktene fra en gitt liste og returnere informasjonen i et spesifikt format. Svarene dine til brukeren må være på norsk.

**REGELSETT:**
1.  **VURDERING:** Analyser hundens alder, størrelse, og spesielle behov NØYE. Velg det eller de produktene fra listen som er den **mest presise matchen** for ALLE disse kriteriene. For eksempel, hvis hunden er "voksen", MÅ du velge et produkt for voksne hunder, ikke valper.
2.  **BRUK KUN DENNE LISTEN:** Du vil få en liste med "Tilgjengelige produkter". Du har KUN lov til å velge ett eller flere produkter fra denne listen. Ikke finn på produkter eller informasjon.
3.  **PRIORITERING:** Merkene "Labb" og "Appetitt" er Felleskjøpets egne merker. Hvis et produkt fra disse merkene er relevant for hundens behov, skal det prioriteres.
4.  **DATAOVERFØRING:** Fyll ut output-feltene nøyaktig som beskrevet for hvert produkt du anbefaler:
    - \`productName\`: Kopier \`title\` fra det valgte produktet.
    - \`justification\`: Kopier \`description\` fra det valgte produktet. IKKE skriv din egen tekst.
    - \`imageUrl\`: Kopier \`image_link\` fra det valgte produktet.
    - \`productUrl\`: Kopier \`link\` fra det valgte produktet.
    - Kopier \`brand\`, \`price\`, og \`shipping_weight\` direkte.

**Hundens detaljer:**
- Alder: {{dogDetails.age}}
- Størrelse: {{dogDetails.size}}
- Behov/Ønsker: {{#if dogDetails.specialNeeds}}{{dogDetails.specialNeeds}}{{else}}Ingen spesifisert{{/if}}

**Tilgjengelige produkter:**
{{#each productList}}
- Produkt: {{{this.title}}}
  - ID: {{{this.id}}}
  - Merke: {{{this.brand}}}
  - Beskrivelse: {{{this.description}}}
  - Salgspunkter (USPs): {{{this.usp}}}
  - Tags: {{{this.tags}}}
  - Pris: {{{this.price}}}
  - Vekt: {{{this.shipping_weight}}}
  - URL: {{{this.link}}}
  - Bilde-URL: {{{this.image_link}}}
{{/each}}

Velg opptil de 3 BESTE produktene fra listen over basert på hundens detaljer. Returner en liste med produktobjekter. Hvis du bare finner ett godt treff, returner kun det ene.
`,
});

const dogFoodFlow = ai.defineFlow(
  {
    name: 'dogFoodFlow',
    inputSchema: DogFoodInputSchema,
    outputSchema: DogFoodOutputSchema,
  },
  async (input) => {
    // Step 1: Programmatically call the tool to get a list of relevant products.
    const products = await searchDogFood(input);

    // Handle case where no products are found.
    if (!products || products.length === 0) {
      throw new Error("Beklager, vi fant ingen produkter som matchet søket ditt. Prøv å være mindre spesifikk, eller sjekk for skrivefeil.");
    }

    // Step 2: Prioritize Labb and Appetitt brands by sorting them to the top of the list.
    const prioritizedBrands = ['labb', 'appetitt'];
    products.sort((a, b) => {
      const aIsPrioritized = prioritizedBrands.includes(a.brand.toLowerCase());
      const bIsPrioritized = prioritizedBrands.includes(b.brand.toLowerCase());
      if (aIsPrioritized && !bIsPrioritized) return -1;
      if (!aIsPrioritized && bIsPrioritized) return 1;
      return 0;
    });

    // Step 3: Pass the dog's details and the top N product candidates to the selection prompt.
    const productCandidates = products.slice(0, 15);

    const { output } = await dogFoodSelectionPrompt({
        dogDetails: input,
        productList: productCandidates,
    });
    
    if (!output) {
        throw new Error("AI-en klarte ikke å generere en anbefaling. Prøv igjen.");
    }

    // Step 4: Validate the returned image URLs to prevent crashes.
    const validatedOutput = output.map(rec => {
        const allowedHosts = ['www.felleskjopet.no', 'felleskjopet.no', 'placehold.co'];
        let isAllowedHost = false;
        try {
            const url = new URL(rec.imageUrl);
            if (allowedHosts.includes(url.hostname)) {
                isAllowedHost = true;
            }
        } catch (e) {
            // Invalid URL
        }

        if (!isAllowedHost) {
            rec.imageUrl = 'https://placehold.co/300x300.png';
        }
        return rec;
    });

    return validatedOutput;
  }
);

