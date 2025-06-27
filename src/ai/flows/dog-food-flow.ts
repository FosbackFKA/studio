
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
  justification: z.string().describe("A detailed explanation of why this product is recommended, referencing the dog's specific details and the product's description and USPs."),
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

const dogFoodRecommendationPrompt = ai.definePrompt({
  name: 'dogFoodRecommendationPrompt',
  input: { schema: DogFoodInputSchema },
  output: { schema: DogFoodOutputSchema },
  tools: [findDogFoodProducts],
  prompt: `You are an expert pet nutritionist and a helpful assistant for Felleskjøpet, a Norwegian retailer.
Your task is to recommend the single best dog food product from the Felleskjøpet catalog based on the dog's details provided.

Your process is as follows:
1. Use the 'findDogFoodProducts' tool to search the product catalog. Provide all the user's input (age, size, special needs) to the tool to get a list of relevant products. The user might mention a preferred brand in the special needs, so include that in your search.
2. If the tool returns an empty list, you must inform the user that you could not find a specific match and recommend a general-purpose product as a fallback, explaining why.
3. If the tool returns products, review the list and select the ONE product that is the absolute best fit.
4. Your final recommendation MUST be one of the products returned by the tool.
5. Create a compelling justification for your choice. Explain *why* this specific product is the best choice, referencing how its description and unique selling points (USPs) address the dog's age, size, and any special needs.
6. Populate the output with the exact data from the selected product (productName from \`title\`, brand, price, shippingWeight from \`shipping_weight\`, imageUrl from \`image_link\`, productUrl from \`link\`).

Dog Details:
- Age: {{age}}
- Size/Weight Category: {{size}}
- Special Needs or Health Concerns: {{#if specialNeeds}}{{specialNeeds}}{{else}}None specified{{/if}}
`,
});

const dogFoodFlow = ai.defineFlow(
  {
    name: 'dogFoodFlow',
    inputSchema: DogFoodInputSchema,
    outputSchema: DogFoodOutputSchema,
  },
  async (input) => {
    const { output } = await dogFoodRecommendationPrompt(input);
    
    if (!output) {
        throw new Error("The AI could not generate a recommendation. Please try again.");
    }

    // If the AI hallucinates an image, provide a default one.
    if (!output.imageUrl || !output.imageUrl.startsWith('http')) {
        output.imageUrl = 'https://placehold.co/300x300.png';
    }

    return output;
  }
);
