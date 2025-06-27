
import type { Product } from '@/types/product';
import allRobotklipperProducts from '@/data/robotklipper_products.json';

export interface RobotklipperProduct extends Omit<Product, 'imageUrl'> {
  imageUrl: string; // Identifier for the image
  description?: string;
  usp?: string[];
}

function scoreProduct(product: RobotklipperProduct, query: string): number {
  const productText = `${product.title.toLowerCase()} ${product.brand?.toLowerCase()} ${product.description?.toLowerCase()} ${product.usp?.join(' ').toLowerCase()}`;
  const queryTerms = query.split(/\s+/);
  
  // Score based on how many query terms are found in the product text
  const score = queryTerms.reduce((currentScore, term) => {
    if (productText.includes(term)) {
      return currentScore + 1;
    }
    return currentScore;
  }, 0);

  return score;
}

export async function searchRobotklippere(query?: string): Promise<RobotklipperProduct[]> {
  const products = allRobotklipperProducts.filter(p => p.type === 'product') as RobotklipperProduct[];

  if (!query) {
    return products;
  }

  const lowercasedQuery = query.toLowerCase();

  return products
    .map(product => ({
      product,
      score: scoreProduct(product, lowercasedQuery),
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
}
