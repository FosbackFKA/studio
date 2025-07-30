
'use server';
/**
 * @fileOverview An AI-powered chatbot for robotic lawnmowers.
 * - robotklipperChat - A function that handles the chatbot conversation.
 * - RobotklipperChatInput - The input type for the chatbot.
 * - RobotklipperChatOutput - The output type for the chatbot.
 * - RecommendedProduct - The type for a product recommendation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { searchRobotklippere, type RobotklipperProduct } from '@/lib/robotklipper-data';

// Tool to search for products
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
        imageUrl: z.string().describe("The identifier for the product's image."),
        description: z.string().optional().describe('A brief description of the product.'),
        usp: z.array(z.string()).optional().describe('A list of unique selling propositions (USPs) for the product.'),
    })),
  },
  async ({ query }) => {
    const products = await searchRobotklippere(query);
    // Return a subset of fields relevant to the LLM and frontend.
    return products.slice(0, 5).map((p: RobotklipperProduct) => ({
        id: p.id,
        title: p.title,
        brand: p.brand,
        price: p.price,
        salePrice: p.salePrice,
        productUrl: p.productUrl,
        imageUrl: p.imageUrl,
        description: p.description,
        usp: p.usp,
    }));
  }
);

// Schema for chat history from the client
const HistorySchema = z.array(
    z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
    })
);

// Input schema for the main chat function
const RobotklipperChatInputSchema = z.object({
  history: HistorySchema,
  question: z.string(),
});
export type RobotklipperChatInput = z.infer<typeof RobotklipperChatInputSchema>;

// Schema for a single recommended product in the output
const RecommendedProductSchema = z.object({
    id: z.string(),
    title: z.string(),
    brand: z.string().optional(),
    price: z.string(),
    salePrice: z.string().optional(),
    productUrl: z.string(),
    imageUrl: z.string(),
});
export type RecommendedProduct = z.infer<typeof RecommendedProductSchema>;

// Output schema for the chatbot's response
const RobotklipperChatOutputSchema = z.object({
  responseText: z.string().describe("The conversational, text-based response to the user's question."),
  recommendedProducts: z.array(RecommendedProductSchema).optional().describe("A list of products recommended in the responseText. Only populate this if you are recommending specific products."),
});
export type RobotklipperChatOutput = z.infer<typeof RobotklipperChatOutputSchema>;

// The system prompt that defines the chatbot's personality and rules
const systemPrompt = `Du er en hjelpsom og vennlig Felleskjøpet-ekspert som KUN spesialiserer seg på robotgressklippere.
Ditt ansvarsområde er begrenset til:
- Spesifikke robotgressklipper-modeller og deres funksjoner.
- Tilbehør som garasjer, kniver, og installasjonssett.
- Generelle råd om installasjon, vedlikehold og feilsøking av robotgressklippere.

VIKTIG: Hvis brukeren spør om noe utenfor dette emnet (f.eks. andre produkter som hundemat, traktorer, eller generelle hagespørsmål), skal du høflig avslå og forklare at din ekspertise kun er robotgressklippere.

- Svar alltid på Norsk.
- Vær hyggelig og serviceinnstilt.
- Bruk 'searchRobotklippere' verktøyet for å finne produkter. Bruk produktinformasjonen, spesielt beskrivelsen og salgspunktene (usp), for å gi en god begrunnelse for hvorfor du anbefaler et produkt.
- Når du anbefaler et produkt, inkluder ALLTID produktnavnet og en Markdown-lenke til produktsiden i \`responseText\`.
- I TILLEGG til å inkludere lenker i teksten, MÅ du fylle ut \`recommendedProducts\`-listen med de fulle detaljene for HVERT produkt du anbefaler, hentet direkte fra verktøysvaret. Ikke legg til produkter du ikke eksplisitt anbefaler i tekstsvaret.
- Hold svarene dine konsise og til poenget.`;


// The main flow function
const robotklipperChatFlow = ai.defineFlow(
    {
        name: 'robotklipperChatFlow',
        inputSchema: RobotklipperChatInputSchema,
        outputSchema: RobotklipperChatOutputSchema,
    },
    async (input) => {
        // 1. Prepare the chat history for the Gemini API.
        const history = [
            {role: 'system', content: [{text: systemPrompt}]},
            ...(input.history || []).map(h => ({
                role: h.role as 'user' | 'model',
                content: [{ text: h.content }],
            }))
        ];
        
        // 2. Call the model.
        const llmResponse = await ai.generate({
            model: 'googleai/gemini-2.5-flash',
            history: history,
            prompt: input.question,
            tools: [searchRobotklippereTool],
            output: { schema: RobotklipperChatOutputSchema },
        });

        const output = llmResponse.output();
        if (!output) {
            return { responseText: "Beklager, jeg fikk ikke generert et svar. Prøv igjen." };
        }
        return output;
    }
);

// Exported wrapper function for the client to call.
export async function robotklipperChat(input: RobotklipperChatInput): Promise<RobotklipperChatOutput> {
    return robotklipperChatFlow(input);
}
