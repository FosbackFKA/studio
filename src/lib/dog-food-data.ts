
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

// Helper function to score products based on special needs
function countMatches(product: DogFoodProduct, terms: string[]): number {
  const productText = `
    ${product.title.toLowerCase()} 
    ${product.brand.toLowerCase()} 
    ${product.description.toLowerCase()} 
    ${product.usp.join(' ').toLowerCase()}
    ${product.tags.join(' ')}
  `;
  
  return terms.reduce((score, term) => {
    if (productText.includes(term)) {
      return score + 1;
    }
    return score;
  }, 0);
}

export async function searchDogFood(query: { age: string; size: string; specialNeeds?: string; }): Promise<DogFoodProduct[]> {
  const { age, size, specialNeeds } = query;
  const specialNeedsTerms = specialNeeds?.toLowerCase().split(/[ ,]+/).filter(Boolean) || [];

  let filteredProducts = allDogFoodProducts as DogFoodProduct[];

  // 1. Stricter filtering by mandatory tags (age and size)
  if (age) {
    filteredProducts = filteredProducts.filter(p => p.tags.includes(age.toLowerCase()));
  }
  if (size) {
    // This map helps include "small" products when user selects "mini", etc.
    const sizeMap: Record<string, string[]> = {
        'x-small': ['x-small', 'small'],
        'mini': ['mini', 'small'],
        'medium': ['medium'],
        'maxi': ['maxi', 'large'],
        'giant': ['giant', 'large']
    };
    // Use a Set for efficient checking
    const relevantSizeTags = new Set(sizeMap[size.toLowerCase()] || [size.toLowerCase()]);
    filteredProducts = filteredProducts.filter(p => p.tags.some(tag => relevantSizeTags.has(tag)));
  }

  // If no primary matches based on age/size, we should not proceed.
  if (filteredProducts.length === 0) {
      return [];
  }

  // 2. If specialNeeds are provided, use them to rank the results, not just filter.
  // This gives more flexibility and prevents returning zero results if the need is too specific.
  if (specialNeedsTerms.length > 0) {
    filteredProducts.sort((a, b) => {
      const aScore = countMatches(a, specialNeedsTerms);
      const bScore = countMatches(b, specialNeedsTerms);
      return bScore - aScore; // Sort descending by match score
    });
  }

  return filteredProducts;
}

