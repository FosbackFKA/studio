
export interface DogFoodProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  imageUrl: string;
  productUrl: string;
  tags: string[]; // e.g., ['voksen', 'medium', 'sensitiv hud']
}

export const allDogFoodProducts: DogFoodProduct[] = [
  // Royal Canin
  {
    id: 'rc_maxi_adult',
    name: 'Royal Canin Maxi Adult',
    brand: 'Royal Canin',
    description: 'For voksne hunder av stor rase (26-44 kg). Fremmer optimal fordøyelse og sunne ledd. Inneholder antioksidanter for å støtte immunforsvaret.',
    imageUrl: 'https://placehold.co/300x300.png',
    productUrl: '#',
    tags: ['voksen', 'maxi', 'large', 'fordøyelse', 'ledd'],
  },
  {
    id: 'rc_mini_puppy',
    name: 'Royal Canin Mini Puppy',
    brand: 'Royal Canin',
    description: 'For valper av liten rase (opptil 10 kg). Støtter immunforsvaret under vekst og har et høyt energiinnhold tilpasset valpens behov.',
    imageUrl: 'https://placehold.co/300x300.png',
    productUrl: '#',
    tags: ['valp', 'puppy', 'mini', 'small', 'vekst'],
  },
  {
    id: 'rc_hypoallergenic',
    name: 'Royal Canin Hypoallergenic',
    brand: 'Royal Canin',
    description: 'Veterinærfôr for hunder med fôrallergi eller intoleranse. Hydrolyserte proteiner for å redusere risikoen for reaksjoner. For alle størrelser og aldre.',
    imageUrl: 'https://placehold.co/300x300.png',
    productUrl: '#',
    tags: ['valp', 'voksen', 'senior', 'small', 'medium', 'large', 'hypoallergenic', 'allergi', 'intoleranse', 'sensitiv'],
  },
  // Labb
  {
    id: 'labb_voksen',
    name: 'Labb Voksen',
    brand: 'Labb',
    description: 'Et norskprodusert fullfôr for voksne hunder av alle raser. Høyt innhold av animalsk protein. Inneholder kondroitin for leddhelse.',
    imageUrl: 'https://placehold.co/300x300.png',
    productUrl: '#',
    tags: ['voksen', 'alle raser', 'leddhelse'],
  },
  {
    id: 'labb_sensitiv',
    name: 'Labb Sensitiv med lam',
    brand: 'Labb',
    description: 'Passer for voksne hunder med sensitiv fordøyelse. Inneholder lam som eneste kilde til animalsk protein for å redusere faren for fôrreaksjoner.',
    imageUrl: 'https://placehold.co/300x300.png',
    productUrl: '#',
    tags: ['voksen', 'sensitiv', 'fordøyelse', 'lam'],
  },
  {
    id: 'labb_senior',
    name: 'Labb Senior',
    brand: 'Labb',
    description: 'Tilpasset eldre hunder (over 7 år). Redusert fettinnhold for vektkontroll og tilsatt glukosamin og kondroitin for å støtte leddene.',
    imageUrl: 'https://placehold.co/300x300.png',
    productUrl: '#',
    tags: ['senior', 'vektkontroll', 'ledd'],
  }
];

export async function searchDogFood(query: { age: string; size: string; specialNeeds?: string; }): Promise<DogFoodProduct[]> {
  const searchTerms = [query.age, query.size, ...(query.specialNeeds?.toLowerCase().split(' ') || [])].filter(Boolean).map(t => t.toLowerCase());

  const results = allDogFoodProducts.filter(product => {
    const productText = `${product.name.toLowerCase()} ${product.description.toLowerCase()} ${product.tags.join(' ')}`;
    // Check if every search term is present in the product text
    return searchTerms.every(term => productText.includes(term));
  });

  // If no specific match is found, broaden the search to find products that match at least one term.
  // This prevents returning an empty list if the user is too specific.
  if (results.length === 0) {
      return allDogFoodProducts.filter(product => {
        const productText = `${product.name.toLowerCase()} ${product.description.toLowerCase()} ${product.tags.join(' ')}`;
        return searchTerms.some(term => productText.includes(term));
      });
  }

  return results;
}
