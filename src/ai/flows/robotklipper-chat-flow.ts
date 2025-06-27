
'use server';
/**
 * @fileOverview An AI-powered chatbot for robotic lawnmowers.
 * - robotklipperChat - A function that handles the chatbot conversation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { searchRobotklippere } from '@/lib/robotklipper-data';

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
    })),
  },
  async ({ query }) => {
    const products = await searchRobotklippere(query);
    // Return a subset of fields relevant to the LLM
    return products.slice(0, 5).map(p => ({
        id: p.id,
        title: p.title,
        brand: p.brand,
        price: p.price,
        salePrice: p.salePrice,
        productUrl: p.productUrl,
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

const robotklipperChatPrompt = ai.definePrompt({
    name: 'robotklipperChatPrompt',
    model: 'googleai/gemini-2.5-flash',
    tools: [searchRobotklippereTool],
    system: `Du er en hjelpsom og vennlig Felleskjøpet-ekspert som spesialiserer seg på robotgressklippere.
- Svar alltid på Norsk.
- Vær hyggelig og serviceinnstilt.
- Hvis du anbefaler et produkt, inkluder alltid produktnavnet og en lenke til produktsiden i svaret ditt, formatert som en Markdown-lenke.
- Bruk 'searchRobotklippere' verktøyet for å finne produkter når brukeren spør om det. Ikke finn på produkter. Ikke bare list opp produkter, men gi en kort begrunnelse for hvorfor det er en god anbefaling.
- Hold svarene dine konsise og til poenget.`,
    input: { schema: z.object({ question: z.string() }) },
    prompt: `{{question}}`
});


const robotklipperChatFlow = ai.defineFlow(
    {
        name: 'robotklipperChatFlow',
        inputSchema: RobotklipperChatInputSchema,
        outputSchema: z.string(),
    },
    async ({history, question}) => {

        const cleanHistory = (history || []).filter(h => h.content && typeof h.content === 'string' && h.content.trim() !== '' && h.role);
        
        const llmResponse = await robotklipperChatPrompt(
            { question }, 
            { history: cleanHistory }
        );

        return llmResponse.text ?? "Beklager, jeg forstod ikke helt. Kan du prøve å spørre på en annen måte?";
    }
);

export async function robotklipperChat(input: z.infer<typeof RobotklipperChatInputSchema>): Promise<string> {
    return robotklipperChatFlow(input);
}
