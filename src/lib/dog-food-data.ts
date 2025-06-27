
import allDogFoodProducts from '@/data/dog_food_products.json';

export interface DogFoodProduct {
  id: string;
  title: string;
  brand: string;
  description: string;
  link: string;
  image_link: string;
  price: string;
  shipping_weight: string;
  usp: string[]; // Unique Selling Propositions
  tags: string[]; // Internal tags for easier matching (age, size, etc.)
}

export async function searchDogFood(query: { age: string; size: string; specialNeeds?: string; }): Promise<DogFoodProduct[]> {
  const searchTerms = [query.age, query.size, ...(query.specialNeeds?.toLowerCase().split(/[ ,]+/) || [])].filter(Boolean).map(t => t.toLowerCase());

  const results = (allDogFoodProducts as DogFoodProduct[]).filter(product => {
    const productText = `
      ${product.title.toLowerCase()} 
      ${product.brand.toLowerCase()} 
      ${product.description.toLowerCase()} 
      ${product.usp.join(' ').toLowerCase()}
      ${product.tags.join(' ')}
    `;
    
    // Check if every search term is present in the product text
    return searchTerms.every(term => productText.includes(term));
  });

  // If no specific match is found, broaden the search to find products that match at least one term.
  if (results.length === 0) {
      return (allDogFoodProducts as DogFoodProduct[]).filter(product => {
        const productText = `
          ${product.title.toLowerCase()} 
          ${product.brand.toLowerCase()} 
          ${product.description.toLowerCase()} 
          ${product.usp.join(' ').toLowerCase()}
          ${product.tags.join(' ')}
        `;
        return searchTerms.some(term => productText.includes(term));
      });
  }

  return results;
}
