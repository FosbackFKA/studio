
export interface Product {
  id: string; // from <g:id> or similar unique identifier
  title: string; // from <title>
  brand?: string; // from <g:brand> or equivalent
  price: string; // from <g:price>, should be original price
  salePrice?: string; // from <g:sale_price> if available
  imageUrl: string; // from <g:image_link> or equivalent
  productUrl: string; // from <link> or equivalent
  imageAlt?: string; // Optional, can be derived from title
  badgeText?: string; // For manually added badges like "- 14 %" or "Nyhet"
  dataAiHint?: string; // For placeholder image generation
  subText?: string; // Fallback or additional info, can often be same as brand
  productType?: string; // from <g:product_type> for potential filtering/categorization
  onlineStock?: boolean;
  storeStockCount?: number;
}
