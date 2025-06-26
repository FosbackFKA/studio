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

const DogFoodInputSchema = z.object({
  age: z.string().describe("The dog's age category (e.g., puppy, adult, senior)."),
  size: z.string().describe("The dog's size category (e.g., small, medium, large)."),
  specialNeeds: z.string().optional().describe('Any special needs or health concerns the dog has (e.g., sensitive skin, weight control).'),
});
export type DogFoodInput = z.infer<typeof DogFoodInputSchema>;

const DogFoodOutputSchema = z.object({
  productName: z.string().describe('The specific name of the recommended Royal Canin product.'),
  justification: z.string().describe("A detailed explanation of why this product is recommended, referencing the dog's specific details."),
  imageUrl: z.string().describe("A placeholder image URL for the product in the format 'https://placehold.co/300x300.png'."),
});
export type DogFoodOutput = z.infer<typeof DogFoodOutputSchema>;

export async function recommendDogFood(input: DogFoodInput): Promise<DogFoodOutput> {
  return dogFoodFlow(input);
}

const dogFoodRecommendationPrompt = ai.definePrompt({
  name: 'dogFoodRecommendationPrompt',
  input: { schema: DogFoodInputSchema },
  output: { schema: DogFoodOutputSchema },
  prompt: `You are an expert pet nutritionist specializing in Royal Canin dog food. Your task is to recommend the single best Royal Canin product based on the dog's details provided.

Your recommendation must be a real, specific Royal Canin product line (e.g., "Royal Canin Maxi Adult", "Royal Canin Pug Adult", "Royal Canin Hypoallergenic").

Dog Details:
- Age: {{age}}
- Size/Weight Category: {{size}}
- Special Needs or Health Concerns: {{specialNeeds}}

Provide a justification explaining why this specific food is the best choice, referencing how it addresses the dog's age, size, and any special needs. Also, provide a placeholder image URL for the product, in the format 'https://placehold.co/300x300.png'.`,
});

const dogFoodFlow = ai.defineFlow(
  {
    name: 'dogFoodFlow',
    inputSchema: DogFoodInputSchema,
    outputSchema: DogFoodOutputSchema,
  },
  async (input) => {
    const { output } = await dogFoodRecommendationPrompt(input);
    return output!;
  }
);
