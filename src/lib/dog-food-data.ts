
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

export const allDogFoodProducts: DogFoodProduct[] = [
  // Royal Canin
  {
    id: 'rc_maxi_adult',
    title: 'Royal Canin Maxi Adult hundefôr',
    brand: 'Royal Canin',
    description: 'Hundefôr for voksne hunder av stor rase (26-44 kg) fra 15 måneder. Fremmer optimal fordøyelse og sunne ledd.',
    link: 'https://www.felleskjopet.no/kjaledyr/hund/hundefor/torrfor/royal-canin-maxi-adult-torrfor-15kg/',
    image_link: 'https://placehold.co/300x300.png',
    price: '899,-',
    shipping_weight: '15 kg',
    usp: [
      'Støtter optimal fordøyelighet takket være en eksklusiv formel.',
      'Bidrar til å støtte skjelett og ledd hos store hunder.',
      'Beriket med omega-3-fettsyrer (EPA-DHA) for å bidra til sunn hud.'
    ],
    tags: ['voksen', 'maxi', 'large', 'fordøyelse', 'ledd'],
  },
  {
    id: 'rc_mini_puppy',
    title: 'Royal Canin Mini Puppy hundefôr',
    brand: 'Royal Canin',
    description: 'Tørrfôr for valper av små raser (voksenvekt opptil 10 kg) opptil 10 måneder. Støtter immunforsvaret og fremmer sunn vekst.',
    link: 'https://www.felleskjopet.no/kjaledyr/hund/hundefor/torrfor/royal-canin-mini-puppy-torrfor-8kg/',
    image_link: 'https://placehold.co/300x300.png',
    price: '649,-',
    shipping_weight: '8 kg',
    usp: [
      'Støtter utviklingen av valpens immunforsvar.',
      'Høyt energiinnhold for å støtte intens vekst.',
      'Bidrar til god tannhelse.'
    ],
    tags: ['valp', 'puppy', 'mini', 'small', 'vekst', 'immunforsvar'],
  },
  {
    id: 'rc_hypoallergenic',
    title: 'Royal Canin Hypoallergenic DR21 hundefôr',
    brand: 'Royal Canin',
    description: 'En komplett diettfôr for hunder formulert for å redusere intoleranse for ingredienser og næringsstoffer. Utvalgte kilder til protein og karbohydrater.',
    link: 'https://www.felleskjopet.no/kjaledyr/hund/hundefor/veterinaerfor/royal-canin-hypoallergenic-dr21-torrfor-14kg/',
    image_link: 'https://placehold.co/300x300.png',
    price: '1 299,-',
    shipping_weight: '14 kg',
    usp: [
      'Hydrolyserte proteiner med lav molekylvekt for å sikre at fôret er hypoallergent.',
      'Formulert for å støtte hudens naturlige beskyttende barriere.',
      'Fettsyrer som bidrar til å opprettholde en sunn fordøyelse og en sunn hud.'
    ],
    tags: ['valp', 'voksen', 'senior', 'alle raser', 'small', 'medium', 'large', 'hypoallergenic', 'allergi', 'intoleranse', 'sensitiv', 'hud', 'veterinærfôr'],
  },
  // Labb
  {
    id: 'labb_voksen_aktiv',
    title: 'Labb Voksen Aktiv hundefôr',
    brand: 'Labb',
    description: 'Et norskprodusert fullfôr med et høyt energi- og næringsinnhold tilpasset voksne hunder med et høyt aktivitetsnivå.',
    link: 'https://www.felleskjopet.no/kjaledyr/hund/hundefor/torrfor/labb-aktiv-voksen-torrfor-15kg/',
    image_link: 'https://placehold.co/300x300.png',
    price: '729,-',
    shipping_weight: '15 kg',
    usp: [
      'Høyt innhold av animalsk og marint protein.',
      'Inneholder smakelig animalsk fett og lakseolje.',
      'Tilsatt kondroitin fra laks og kylling for sunne ledd og bein.'
    ],
    tags: ['voksen', 'alle raser', 'aktiv', 'høyt aktivitetsnivå', 'energi', 'ledd'],
  },
  {
    id: 'labb_sensitiv_lam',
    title: 'Labb Sensitiv med lam hundefôr',
    brand: 'Labb',
    description: 'Tilpasset for voksne hunder med sensitiv fordøyelse eller fôrintoleranser. Inneholder lam som eneste kilde til animalsk protein.',
    link: 'https://www.felleskjopet.no/kjaledyr/hund/hundefor/torrfor/labb-sensitiv-m-lam-torrfor-12kg/',
    image_link: 'https://placehold.co/300x300.png',
    price: '799,-',
    shipping_weight: '12 kg',
    usp: [
      'Lett fordøyelig lam som eneste animalske proteinkilde.',
      'Frukto-oligosakkarider fra sikorirot for en sunn fordøyelse.',
      'Inneholder beta-glukaner for hundens generelle helse.'
    ],
    tags: ['voksen', 'sensitiv', 'fordøyelse', 'lam', 'allergi'],
  },
  {
    id: 'labb_vektkontroll',
    title: 'Labb Vektkontroll hundefôr',
    brand: 'Labb',
    description: 'Et fôr for voksne hunder med tendens til overvekt eller lavt aktivitetsnivå. Redusert fettinnhold og høyt fiberinnhold for metthetsfølelse.',
    link: 'https://www.felleskjopet.no/kjaledyr/hund/hundefor/torrfor/labb-vektkontroll-torrfor-15kg/',
    image_link: 'https://placehold.co/300x300.png',
    price: '689,-',
    shipping_weight: '15 kg',
    usp: [
      'Lavere energiinnhold for å hjelpe til med vektkontroll.',
      'Høyt innhold av fiber for å fremme metthet.',
      'L-karnitin kan ha en positiv effekt på fettforbrenning.'
    ],
    tags: ['voksen', 'senior', 'vektkontroll', 'overvekt', 'lav aktivitet', 'kastrert', 'sterilisert'],
  },
];

export async function searchDogFood(query: { age: string; size: string; specialNeeds?: string; }): Promise<DogFoodProduct[]> {
  const searchTerms = [query.age, query.size, ...(query.specialNeeds?.toLowerCase().split(/[ ,]+/) || [])].filter(Boolean).map(t => t.toLowerCase());

  const results = allDogFoodProducts.filter(product => {
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
      return allDogFoodProducts.filter(product => {
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
