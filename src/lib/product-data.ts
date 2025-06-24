
import type { Product } from '@/types/product';

// Sample data simulating a product feed structure.
// In a real application, this data would be fetched and parsed from the XML feed.

export const sampleAktueltProducts: Product[] = [
  {
    id: 'FK50097000',
    title: 'PLANTEJORD 40L FK',
    brand: 'Felleskjøpet',
    price: '79,-',
    imageUrl: 'https://placehold.co/300x225.png', // Placeholder, replace with actual image_link from feed
    productUrl: '#', // Replace with actual product link from feed
    dataAiHint: 'potting soil bag',
    subText: 'Felleskjøpet',
    onlineStock: true,
    storeStockCount: 110,
  },
  {
    id: 'FK50102000',
    title: 'PLANTEGJØDSEL UNIVERSAL 8L FK',
    brand: 'Felleskjøpet',
    price: '199,-',
    imageUrl: 'https://placehold.co/300x225.png',
    productUrl: '#',
    dataAiHint: 'fertilizer bottle',
    subText: 'Felleskjøpet',
    onlineStock: true,
    storeStockCount: 95,
  },
  {
    id: 'MC12345',
    title: 'GRESSKLIPPER BENSIN MCCULLOCH',
    brand: 'McCulloch',
    price: '3999,-',
    imageUrl: 'https://placehold.co/300x225.png',
    productUrl: '#',
    dataAiHint: 'lawnmower petrol',
    subText: 'McCulloch',
    onlineStock: false,
    storeStockCount: 34,
  },
  {
    id: 'GW67890',
    title: 'GRENSAG BATTERI GREENWORKS',
    brand: 'Greenworks',
    price: '1290,-',
    imageUrl: 'https://placehold.co/300x225.png',
    productUrl: '#',
    dataAiHint: 'chainsaw battery',
    subText: 'Greenworks',
    onlineStock: true,
    storeStockCount: 0,
  },
  {
    id: 'KC54321',
    title: 'HØYTRYKKVASKER K5 POWER CONTROL',
    brand: 'Kärcher',
    price: '4490,-',
    salePrice: '3990,-',
    badgeText: '- 11%',
    imageUrl: 'https://placehold.co/300x225.png',
    productUrl: '#',
    dataAiHint: 'pressure washer',
    subText: 'Kärcher',
    onlineStock: true,
    storeStockCount: 55,
  },
];

export const sampleKjaeledyrProducts: Product[] = [
  { id: 'APPETITT01', title: 'Appetitt Adult Maintenance hundefôr', brand: 'Appetitt', price: '699,-', imageUrl: 'https://placehold.co/200x200.png', productUrl: '#', dataAiHint: 'dog food bag', onlineStock: true, storeStockCount: 88 },
  { id: 'FLEXI01', title: 'Kobbel Flexi Classic Snor M 5m', brand: 'Flexi', price: '249,-', imageUrl: 'https://placehold.co/200x200.png', productUrl: '#', dataAiHint: 'dog leash', onlineStock: true, storeStockCount: 102 },
  { id: 'LABB01', title: 'Labb Sensitiv Lam & Ris kattemat', brand: 'Labb', price: '349,-', imageUrl: 'https://placehold.co/200x200.png', productUrl: '#', dataAiHint: 'cat food dry', onlineStock: true, storeStockCount: 73 },
  { id: 'TORRFISK01', title: 'Tørrfisk Biter torsk', brand: 'Felleskjøpet', price: '89,-', imageUrl: 'https://placehold.co/200x200.png', productUrl: '#', dataAiHint: 'dried fish dog treat', onlineStock: true, storeStockCount: 150 },
];

export const sampleRobotgressklipperProducts: Product[] = [
  { id: 'IMOW422P', title: 'Robotklipper iMOW RMI 422 P', brand: 'Stihl', price: '12990,-', imageUrl: 'https://placehold.co/200x200.png', productUrl: '#', dataAiHint: 'robotic lawnmower orange', onlineStock: true, storeStockCount: 21 },
  { id: 'IMOW422PC', title: 'Robotklipper iMOW RMI 422 PC', brand: 'Stihl', price: '15990,-', salePrice: '14490,-', badgeText: '- 9 %', imageUrl: 'https://placehold.co/200x200.png', productUrl: '#', dataAiHint: 'robotic lawnmower smart', onlineStock: true, storeStockCount: 15 },
  { id: 'IMOW5EVO', title: 'Robotklipper iMOW 5 EVO', brand: 'Stihl', price: '24990,-', imageUrl: 'https://placehold.co/200x200.png', productUrl: '#', dataAiHint: 'robotic lawnmower advanced', onlineStock: false, storeStockCount: 8 },
  { id: 'IMOW6EVO', title: 'Robotklipper iMOW 6 EVO', brand: 'Stihl', price: '31990,-', imageUrl: 'https://placehold.co/200x200.png', productUrl: '#', dataAiHint: 'robotic lawnmower large', onlineStock: true, storeStockCount: 5 },
];

export const sampleVanningProducts: Product[] = [
  { id: 'VOGNSL01', title: 'Vognslange Classic 60 HG', brand: 'Gardena', price: '459,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'hose reel cart', onlineStock: true, storeStockCount: 45 },
  { id: 'SLGTROM01', title: 'Slangetrommel Veggmontert RollUp M', brand: 'Gardena', price: '1290,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'wall mounted hose reel', onlineStock: true, storeStockCount: 30 },
  { id: 'VKANNE01', title: 'Vannekanne Svart 2L', brand: 'Felleskjøpet', price: '79,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'watering can black', onlineStock: true, storeStockCount: 200 },
  { id: 'VKANNE02', title: 'Vannekanne Turkis 10L', brand: 'Felleskjøpet', price: '149,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'watering can turquoise', onlineStock: true, storeStockCount: 180 },
  { id: 'VANNSP01', title: 'Vannspreder Comfort Aquazoom S', brand: 'Gardena', price: '499,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'garden sprinkler', onlineStock: true, storeStockCount: 60 },
];

export const sampleSaaingProducts: Product[] = [
  { id: 'SAMASK01', title: 'Såmaskin batteri WE-B', brand: 'Wolf-Garten', price: '899,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'seed spreader battery', onlineStock: true, storeStockCount: 25 },
  { id: 'GJODSEL01', title: 'Gjødselspreder Handy Green II', brand: 'Substral', price: '299,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'fertilizer spreader hand', onlineStock: true, storeStockCount: 70 },
  { id: 'SAVOGN01', title: 'Såvogn Classic 300', brand: 'Gardena', price: '499,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'seed cart classic', onlineStock: true, storeStockCount: 40 },
  { id: 'GJODSEL02', title: 'Gjødselspreder Spreader L', brand: 'Gardena', price: '1190,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'fertilizer spreader large', onlineStock: true, storeStockCount: 15 },
  { id: 'GJODSEL03', title: 'Gjødselspreder Spreader XL', brand: 'Gardena', price: '1590,-', imageUrl: 'https://placehold.co/300x225.png', productUrl: '#', dataAiHint: 'fertilizer spreader extra large', onlineStock: true, storeStockCount: 10 },
];


// Simulate fetching data asynchronously
export async function getProductsFromFeed(category: 'aktuelt' | 'kjaeledyr' | 'robotgressklippere' | 'vanning' | 'saaing'): Promise<Product[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));

  switch (category) {
    case 'aktuelt':
      return sampleAktueltProducts;
    case 'kjaeledyr':
      return sampleKjaeledyrProducts;
    case 'robotgressklippere':
      return sampleRobotgressklipperProducts;
    case 'vanning':
      return sampleVanningProducts;
    case 'saaing':
      return sampleSaaingProducts;
    default:
      return [];
  }
}
