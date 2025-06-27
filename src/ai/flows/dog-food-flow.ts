
'use server';
/**
 * @fileOverview An AI-powered dog food recommender.
 *
 * - recommendDogFood - A function that recommends dog food based on dog's details.
 * - DogFoodInput - The input type for the recommendDogFood function.
 * - DogFoodOutput - The return type for the recommendDogFood function.
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

const DogFoodOutputSchema = z.object({
  productName: z.string().describe('The exact name of the recommended product (from the `title` field).'),
  brand: z.string().describe('The brand of the recommended product.'),
  price: z.string().describe('The price of the product.'),
  shippingWeight: z.string().describe('The shipping weight of the product.'),
  justification: z.string().describe("The exact, unmodified product description (from the `description` field) of the chosen product. Do not generate new text."),
  imageUrl: z.string().describe("The image URL for the product (from the `image_link` field)."),
  productUrl: z.string().describe("The URL to the product page (from the `link` field)."),
});
export type DogFoodOutput = z.infer<typeof DogFoodOutputSchema>;

const findDogFoodProducts = ai.defineTool(
  {
    name: 'findDogFoodProducts',
    description: 'Searches the product catalog for dog food based on the dog\'s characteristics.',
    inputSchema: DogFoodInputSchema,
    outputSchema: z.array(z.object({
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
    })),
  },
  async (input): Promise<DogFoodProduct[]> => {
    return await searchDogFood(input);
  }
);


export async function recommendDogFood(input: DogFoodInput): Promise<DogFoodOutput> {
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
  prompt: `Du er en produktvelger-assistent for Felleskjøpet. Din ENESTE oppgave er å velge det beste produktet fra en gitt liste og returnere informasjonen i et spesifikt format. Svarene dine til brukeren må være på norsk.

**REGELSETT:**
1.  **BRUK KUN DENNE LISTEN:** Du vil få en liste med "Tilgjengelige produkter". Du har KUN lov til å velge ett produkt fra denne listen. Ikke finn på produkter eller informasjon.
2.  **PRIORITERING:** Merkene "Labb" og "Appetitt" er Felleskjøpets egne merker. Hvis et produkt fra disse merkene er relevant for hundens behov, skal det prioriteres over andre merker.
3.  **DATAOVERFØRING:** Fyll ut output-feltene nøyaktig som beskrevet:
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
  - Merke: {{{this.brand}}}
  - Beskrivelse: {{{this.description}}}
  - Salgspunkter (USPs): {{{this.usp}}}
  - Pris: {{{this.price}}}
  - Vekt: {{{this.shipping_weight}}}
  - URL: {{{this.link}}}
  - Bilde-URL: {{{this.image_link}}}
{{/each}}

Velg det ENE beste produktet fra listen over basert på hundens detaljer og fyll ut alle feltene i output-formatet med nøyaktig data fra det valgte produktet.
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
    const products = await findDogFoodProducts(input);

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

    // Step 3: Pass the dog's details and the product list to the selection prompt.
    const { output } = await dogFoodSelectionPrompt({
        dogDetails: input,
        productList: products,
    });
    
    if (!output) {
        throw new Error("AI-en klarte ikke å generere en anbefaling. Prøv igjen.");
    }

    // Step 4: Validate the returned image URL to prevent crashes.
    const allowedHosts = ['www.felleskjopet.no', 'felleskjopet.no', 'placehold.co'];
    let isAllowedHost = false;
    try {
        const url = new URL(output.imageUrl);
        if (allowedHosts.includes(url.hostname)) {
            isAllowedHost = true;
        }
    } catch (e) {
        // Invalid URL, will use fallback.
    }

    if (!isAllowedHost) {
        output.imageUrl = 'https://placehold.co/300x300.png';
    }

    return output;
  }
);
