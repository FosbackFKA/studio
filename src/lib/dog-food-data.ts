
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

// Helper function to score products based on special needs by searching across multiple fields.
function countMatches(product: DogFoodProduct, terms: string[]): number {
  // Create a single searchable text block for each product.
  const productText = `
    ${product.title.toLowerCase()} 
    ${product.brand.toLowerCase()} 
    ${product.description.toLowerCase()} 
    ${product.usp.join(' ').toLowerCase()}
    ${product.tags.join(' ')} 
  `;
  
  // Count how many of the search terms appear in the product text.
  return terms.reduce((score, term) => {
    if (productText.includes(term)) {
      return score + 1;
    }
    return score;
  }, 0);
}

export async function searchDogFood(query: { age: string; size: string; specialNeeds?: string; }): Promise<DogFoodProduct[]> {
  const { age, size, specialNeeds } = query;
  // Sanitize and split special needs into individual terms
  const specialNeedsTerms = specialNeeds?.toLowerCase().split(/[ ,]+/).filter(Boolean) || [];

  let filteredProducts = allDogFoodProducts as DogFoodProduct[];

  // 1. Stricter filtering by mandatory tags (age and size). This is a non-negotiable first step.
  if (age) {
    filteredProducts = filteredProducts.filter(p => p.tags.includes(age.toLowerCase()));
  }
  if (size) {
    const sizeMap: Record<string, string[]> = {
        'x-small': ['x-small', 'small'],
        'mini': ['mini', 'small'],
        'medium': ['medium'],
        'maxi': ['maxi', 'large'],
        'giant': ['giant', 'large']
    };
    const relevantSizeTags = new Set(sizeMap[size.toLowerCase()] || [size.toLowerCase()]);
    filteredProducts = filteredProducts.filter(p => p.tags.some(tag => relevantSizeTags.has(tag)));
  }

  // If after mandatory filtering, there are no products, return empty.
  if (filteredProducts.length === 0) {
      return [];
  }

  // 2. If specialNeeds are provided, use them to rank the already-filtered results.
  // This combines the hard filtering of tags with intelligent text-based ranking.
  if (specialNeedsTerms.length > 0) {
    filteredProducts.sort((a, b) => {
      const aScore = countMatches(a, specialNeedsTerms);
      const bScore = countMatches(b, specialNeedsTerms);
      // Sort by score descending. Higher score means more matches.
      return bScore - aScore;
    });
  }

  // The list is now filtered by age/size and sorted by relevance to special needs.
  return filteredProducts;
}
