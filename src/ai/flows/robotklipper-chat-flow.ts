
'use server';
/**
 * @fileOverview An AI-powered chatbot for robotic lawnmowers.
 * - robotklipperChat - A function that handles the chatbot conversation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { searchRobotklippere, type RobotklipperProduct } from '@/lib/robotklipper-data';

const searchRobotklippereTool = ai.defineTool(
  {
    name: 'searchRobotklippere',
    description: 'Searches for robotic lawnmowers and related products. Use this to answer questions about specific products or recommend products based on features like lawn size or brand.',
    inputSchema: z.object({ query: z.string().describe('The search query, e.g., product name, brand, or feature like "for 3000m2".') }),
    outputSchema: z.array(z.object({
        id: z.string(),
        title: z.string(),
        brand: z.string().optional(),
        price: z.string(),
        salePrice: z.string().optional(),
        productUrl: z.string(),
        description: z.string().optional().describe('A brief description of the product.'),
        usp: z.array(z.string()).optional().describe('A list of unique selling propositions (USPs) for the product.'),
    })),
  },
  async ({ query }) => {
    const products = await searchRobotklippere(query);
    // Return a subset of fields relevant to the LLM
    return products.slice(0, 5).map((p: RobotklipperProduct) => ({
        id: p.id,
        title: p.title,
        brand: p.brand,
        price: p.price,
        salePrice: p.salePrice,
        productUrl: p.productUrl,
        description: p.description,
        usp: p.usp,
    }));
  }
);

const HistorySchema = z.array(
    z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
    })
);

const RobotklipperChatInputSchema = z.object({
  history: HistorySchema,
  question: z.string(),
});


const robotklipperChatFlow = ai.defineFlow(
    {
        name: 'robotklipperChatFlow',
        inputSchema: RobotklipperChatInputSchema,
        outputSchema: z.string(),
    },
    async ({history, question}) => {

        const cleanHistory = (history || []).filter(h => h.content && typeof h.content === 'string' && h.content.trim() !== '' && h.role && ['user', 'model'].includes(h.role));
        
        const systemPrompt = `Du er en hjelpsom og vennlig Felleskjøpet-ekspert som KUN spesialiserer seg på robotgressklippere.
Ditt ansvarsområde er begrenset til:
- Spesifikke robotgressklipper-modeller og deres funksjoner.
- Tilbehør som garasjer, kniver, og installasjonssett.
- Generelle råd om installasjon, vedlikehold og feilsøking av robotgressklippere.

VIKTIG: Hvis brukeren spør om noe utenfor dette emnet (f.eks. andre produkter som hundemat, traktorer, eller generelle hagespørsmål), skal du høflig avslå og forklare at din ekspertise kun er robotgressklippere.

- Svar alltid på Norsk.
- Vær hyggelig og serviceinnstilt.
- Bruk 'searchRobotklippere' verktøyet for å finne produkter. Bruk produktinformasjonen, spesielt beskrivelsen og salgspunktene (usp), for å gi en god begrunnelse for hvorfor du anbefaler et produkt.
- Når du anbefaler et produkt, inkluder ALLTID produktnavnet og en Markdown-lenke til produktsiden.
- Hold svarene dine konsise og til poenget.`;

        const llmResponse = await ai.generate({
            model: 'googleai/gemini-2.5-flash',
            tools: [searchRobotklippereTool],
            history: cleanHistory,
            prompt: `${systemPrompt}\n\nBrukerspørsmål: ${question}`,
        });

        return llmResponse.text ?? "Beklager, jeg forstod ikke helt. Kan du prøve å spørre på en annen måte?";
    }
);

export async function robotklipperChat(input: z.infer<typeof RobotklipperChatInputSchema>): Promise<string> {
    return robotklipperChatFlow(input);
}
