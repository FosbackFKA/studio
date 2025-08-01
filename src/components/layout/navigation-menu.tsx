

'use client';

import * as React from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ChevronRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Product } from '@/types/product';
import { ArticleCard } from '@/components/common/article-card';
import { ProductCard } from '@/components/common/product-card';


// Import products for campaign menu
import popular1 from '../common/aktuelle-kampanjer/1.webp';
import popular2 from '../common/aktuelle-kampanjer/2.webp';
import popular3 from '../common/aktuelle-kampanjer/3.webp';
import popular4 from '../common/aktuelle-kampanjer/4.webp';

// Import product images
import hund1 from '@/components/common/hund/hund1.webp';
import hund2 from '@/components/common/hund/hund2.webp';
import hund3 from '@/components/common/hund/hund3.webp';
import gressklipper1 from '@/components/common/gressklipper/gressklipper1.webp';
import gressklipper2 from '@/components/common/gressklipper/gressklipper2.webp';
import gressklipper3 from '@/components/common/gressklipper/gressklipper3.webp';
import vanning1 from '@/components/common/vanning/vanning1.webp';
import saaing1 from '@/components/common/saaing/saaing1.webp';


// Import article images for the new menu
import artikkel1 from '@/components/common/artikler/1.webp';
import artikkel2 from '@/components/common/artikler/2.webp';
import artikkel3 from '@/components/common/artikler/3.webp';
import rabbitHeroImage from '@/components/common/stegforstegmal/hero.jpg';

const kampanjeProducts: Product[] = [
    {
      id: 'SEGNAVH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      imageUrl: popular1,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 63,
    },
    {
      id: 'CHAMP92001I',
      title: 'Strømaggregat 92001I-EU bensin inverter 2,2 kW',
      brand: 'Champion Europe',
      price: '7 999,-',
      salePrice: '5 999,-',
      imageUrl: popular2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
    {
      id: 'STIHLRM22R',
      title: 'Bensindrevet bio gressklipper RM 2,2 R',
      brand: 'Stihl',
      price: '4 449,-',
      salePrice: '3 999,-',
      imageUrl: popular3,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 68,
    },
     {
      id: 'KARCHERK4P',
      title: 'Høytrykkspyler K4 Premium',
      brand: 'Kärcher',
      price: '3 199,-',
      salePrice: '2 699,-',
      imageUrl: popular4,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 81,
    },
];

const hageArticles = [
   {
      title: 'Guide: Slik velger du riktig høytrykkspyler',
      excerpt: 'En høytrykkspyler er et fantastisk verktøy for rengjøring. Lær deg hva du bør se etter for å finne modellen som passer dine behov perfekt.',
      imageUrl: artikkel1,
      dataAiHint: 'pressure washer cleaning',
      articleUrl: '#',
    },
    {
      title: 'Vedlikehold av utemøbler i tre',
      excerpt: 'Med riktig vedlikehold kan utemøblene dine i tre vare i mange år. Følg våre enkle steg for å beskytte og bevare treverket.',
      imageUrl: artikkel2,
      dataAiHint: 'wooden outdoor furniture',
      articleUrl: '#',
    },
    {
      title: 'Skap en summende oase for biene',
      excerpt: 'Hjelp de viktige pollinatorene! Lær hvilke blomster du kan plante for å skape en frodig og bievennlig hage eller balkong.',
      imageUrl: artikkel3,
      dataAiHint: 'bees flowers garden',
      articleUrl: '#',
    },
];

const kjaeledyrArticles = [
     {
      title: 'Guide: Slik trives kaninen ute',
      excerpt: 'Å la kaninen bo ute kan gi den et rikt og stimulerende liv. Følg våre steg for å skape et trygt og komfortabelt hjem for din langørede venn.',
      imageUrl: rabbitHeroImage,
      articleUrl: '/artikler/stegforsteg',
      dataAiHint: 'rabbit hutch'
    },
    {
      title: 'Slik velger du riktig fôr til hunden din',
      excerpt: 'Det kan være vanskelig å vite hvilket fôr som er best. Les vår guide for å finne det perfekte fôret tilpasset din hunds alder, størrelse og aktivitetsnivå.',
      imageUrl: hund1,
      articleUrl: '/hundefor',
      dataAiHint: 'dog eating food'
    },
    {
      title: 'Førstehjelp til hund',
      excerpt: 'Ulykker kan skje. Vær forberedt med vår guide til førstehjelp for hund. Lær hva du skal gjøre ved kutt, forgiftning eller andre akutte situasjoner.',
      imageUrl: hund2,
      articleUrl: '#',
      dataAiHint: 'veterinarian dog checkup'
    },
];

const guideArticles = [
   {
      title: 'Guide: Slik trives kaninen ute',
      excerpt: 'Å la kaninen bo ute kan gi den et rikt og stimulerende liv. Følg våre steg for å skape et trygt og komfortabelt hjem for din langørede venn.',
      imageUrl: rabbitHeroImage,
      articleUrl: '/artikler/stegforsteg',
      dataAiHint: 'rabbit hutch'
    },
   {
      title: 'Slik velger du riktig høytrykkspyler',
      excerpt: 'En høytrykkspyler er et fantastisk verktøy for rengjøring. Lær deg hva du bør se etter for å finne modellen som passer dine behov perfekt.',
      imageUrl: artikkel1,
      dataAiHint: 'pressure washer cleaning',
      articleUrl: '#',
    },
    {
      title: 'Skap en summende oase for biene',
      excerpt: 'Hjelp de viktige pollinatorene! Lær hvilke blomster du kan plante for å skape en frodig og bievennlig hage eller balkong.',
      imageUrl: artikkel3,
      dataAiHint: 'bees flowers garden',
      articleUrl: '#',
    },
];

const skogOgVedArticles = [
    {
      title: 'Tips til vedlikehold av motorsag',
      excerpt: 'En skarp og velfungerende motorsag er tryggere og mer effektiv. Lær hvordan du vedlikeholder sagen din for optimal ytelse og levetid.',
      imageUrl: artikkel1,
      dataAiHint: 'chainsaw maintenance',
      articleUrl: '#',
    },
    {
      title: 'Slik kløyver du ved trygt og effektivt',
      excerpt: 'Riktig teknikk og utstyr er nøkkelen til sikker og effektiv vedkløyving. Følg våre beste tips for å forberede vinterveden.',
      imageUrl: artikkel2,
      dataAiHint: 'chopping wood axe',
      articleUrl: '#',
    },
    {
      title: 'Hvordan velge riktig verneutstyr?',
      excerpt: 'Sikkerhet først! Vår guide hjelper deg å velge riktig hjelm, visir, hansker og vernebukse for trygt arbeid i skogen.',
      imageUrl: artikkel3,
      dataAiHint: 'safety equipment forest',
      articleUrl: '#',
    }
];

export const leftNavItems = [
  { name: 'Hage og uterom', href: '#' },
  { name: 'Kjæledyr', href: '#' },
  { name: 'Klær og sko', href: '#' },
  { name: 'Hjem og fritid', href: '#' },
  { name: 'Verktøy og redskap', href: '#' },
  { name: 'Skog og ved', href: '#' },
];

export const rightNavItems = [
  { name: 'Kampanjer', href: '#' },
  { name: 'Merkevarer', href: '#' },
  { name: 'Guider og artikler', href: '#' },
];

// Data for all menus
export const hageUteromMenuData = {
  columns: [
    [
      {
        title: 'Dyrk og plante', href: '#',
        links: [
          { name: 'Blomsterpotter og plantekasser', href: '#' },
          { name: 'Drivhus og veksthus', href: '#' },
          { name: 'Gjødsel og kalk', href: '#' },
          { name: 'Gress og frø', href: '#' },
          { name: 'Jord, torv, bark', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
      {
        title: 'Småfugler', href: '#',
        links: [{ name: 'Fuglekasser', href: '#' }, { name: 'Fuglemat', href: '#' }, { name: 'Fuglematere', href: '#' }],
      },
    ],
    [
      {
        title: 'Hagemaskiner', href: '#',
        links: [
          { name: 'Batteri og tilbehør', href: '#' },
          { name: 'Gressklippere', href: '/robotgressklipper' },
          { name: 'Øvrige maskiner', href: '#' },
          { name: 'Snøfresere', href: '#' },
        ],
      },
      {
        title: 'Uteplassen', href: '#',
        links: [
          { name: 'Bålpanner og utstyr', href: '#' },
          { name: 'Hagedekorasjon', href: '#' },
          { name: 'Levegger og gjerder', href: '#' },
          { name: 'Utebelysning', href: '#' },
          { name: 'Utemøbler', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
    ],
    [
      {
        title: 'Hagestell', href: '#',
        links: [
          { name: 'Beskjæringsutstyr', href: '#' },
          { name: 'Hageredskap', href: '#' },
          { name: 'Snørydding og avising', href: '#' },
          { name: 'Stell og vedlikehold', href: '#' },
          { name: 'Vanning', href: '#' },
        ],
      },
       {
        title: 'Skadedyrbekjempelse', href: '#',
        links: [
          { name: 'Fugleskremsel', href: '#' },
          { name: 'Insektmiddel', href: '#' },
          { name: 'Mus og rotter', href: '#' },
          { name: 'Snegler', href: '#' },
          { name: 'Insektfelle', href: '#' },
        ],
      },
    ],
  ],
  articles: hageArticles,
  footerLink: { name: 'Se alt i hage og uterom', href: '#' },
};

export const kjaeledyrMenuData = {
  columns: [
    [ // Column 1
      {
        title: 'Hest og rytter', href: '#',
        links: [
          { name: 'Gjerder og grinder', href: '#' },
          { name: 'Hestefôr og tilskudd', href: '#' },
          { name: 'Hestesko og hovslagerutstyr', href: '#' },
          { name: 'Hesteutstyr', href: '#' },
          { name: 'Rytter', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
      {
        title: 'Smådyr', href: '#',
        links: [
            { name: 'Bur og innredning', href: '#' },
            { name: 'Mat til smådyrene', href: '#' },
            { name: 'Pelspleie og klopleie', href: '#' },
            { name: 'Annet utstyr til smådyr', href: '#' },
        ],
      },
    ],
    [ // Column 2
      {
        title: 'Hobbyhøns', href: '#',
        links: [
          { name: 'Eggproduksjon', href: '#' },
          { name: 'Fôr og tilskudd', href: '#' },
          { name: 'Fôringsutstyr', href: '#' },
          { name: 'Hønsehus', href: '#' },
          { name: 'Utstyr til høns', href: '#' },
        ],
      },
    ],
    [ // Column 3
      {
        title: 'Hund', href: '#',
        links: [
          { name: 'Hundefôr', href: '/hundefor' },
          { name: 'Hundens helse', href: '#' },
          { name: 'Hundens luftetur', href: '#' },
          { name: 'Hundepleie', href: '#' },
          { name: 'Hundeutstyr', href: '#' },
          { name: 'Hundefôr-velger', href: '/hundefor' },
        ],
      },
       {
        title: 'Katt', href: '#',
        links: [
          { name: 'Kattemat', href: '#' },
          { name: 'Kattens helse', href: '#' },
          { name: 'Kattepleie', href: '#' },
          { name: 'Katteutstyr', href: '#' },
        ],
      },
    ],
  ],
  articles: kjaeledyrArticles,
  footerLink: { name: 'Se alt i kjæledyr', href: '#' },
};

export const klaerOgSkoMenuData = {
  columns: [
    [ // Column 1
      {
        title: 'Hansker', href: '#',
        links: [
          { name: 'Arbeidshansker', href: '#' },
          { name: 'Engangshansker', href: '#' },
          { name: 'Hagehansker', href: '#' },
          { name: 'Kjemikaliehansker', href: '#' },
        ],
      },
      {
        title: 'Verneklær og vernesko', href: '#',
        links: [
          { name: 'Engangsbekledning', href: '#' },
          { name: 'Verneklær', href: '#' },
          { name: 'Vernesko og vernestøvler', href: '#' },
        ],
      },
    ],
    [ // Column 2
      {
        title: 'Arbeidsklær', href: '#',
        links: [
          { name: 'Arbeidsbukser', href: '#' },
          { name: 'Arbeidsjakker', href: '#' },
          { name: 'Refleksvester', href: '#' },
          { name: 'Varmedresser og kjeledresser', href: '#' },
          { name: 'Varselklær', href: '#' },
        ],
      },
      {
        title: 'Verneutstyr', href: '#',
        links: [
          { name: 'Åndedrettsvern', href: '#' },
          { name: 'Førstehjelpsutstyr', href: '#' },
          { name: 'Hjelmer og visir', href: '#' },
          { name: 'Hørselvern', href: '#' },
          { name: 'Vernebriller', href: '#' },
        ],
      },
    ],
    [ // Column 3
      {
        title: 'Fritidsklær', href: '#',
        links: [
          { name: 'Bukser og shorts', href: '#' },
          { name: 'Caps og luer', href: '#' },
          { name: 'Gensere og jakker', href: '#' },
          { name: 'Refleksvester', href: '#' },
          { name: 'Regntøy', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
       {
        title: 'Sko og støvler', href: '#',
        links: [
          { name: 'Brodder', href: '#' },
          { name: 'Gummistøvler', href: '#' },
          { name: 'Sko', href: '#' },
          { name: 'Skotilbehør', href: '#' },
        ],
      },
    ],
  ],
  articles: skogOgVedArticles,
  footerLink: { name: 'Se alt i klær og sko', href: '#' },
};

export const hjemOgFritidMenuData = {
  columns: [
    [
      {
        title: 'Brannvern og sikkerhet', href: '#',
        links: [
          { name: 'Alarm og overvåkning', href: '#' },
          { name: 'Brannsikring', href: '#' },
        ],
      },
      {
        title: 'Tur og friluftsutstyr', href: '#',
        links: [
          { name: 'Friluftsutstyr', href: '#' },
          { name: 'Turmat', href: '#' },
        ],
      },
      {
        title: 'Fanshop', href: '#',
        links: [
          { name: 'Felleskjøpet fanshop', href: '#' },
          { name: 'John Deere fanshop', href: '#' },
        ],
      },
    ],
    [
      {
        title: 'El-artikler og belysning', href: '#',
        links: [
          { name: 'Arbeidsbelysning', href: '#' },
          { name: 'Lyspærer og lysrør', href: '#' },
          { name: 'Plantelys', href: '#' },
          { name: 'Skjøteledninger og kabeltromler', href: '#' },
          { name: 'Småbatterier', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
      {
        title: 'Leker', href: '#',
        links: [
          { name: 'Andre leker', href: '#' },
          { name: 'Leketraktorer', href: '#' },
        ],
      },
    ],
    [
      {
        title: 'Vask og renhold', href: '#',
        links: [
          { name: 'Desinfeksjonsmidler', href: '#' },
          { name: 'Personlig pleie', href: '#' },
          { name: 'Rengjøringmiddel innendørs', href: '#' },
          { name: 'Rengjøringmiddel utendørs', href: '#' },
          { name: 'Renholdsutstyr', href: '#' },
        ],
      },
      {
        title: 'Mat og drikke', href: '#',
        links: [
          { name: 'Matproduksjon', href: '#' },
          { name: 'Matvarer og drikkevarer', href: '#' },
          { name: 'Saft og sylting', href: '#' },
        ],
      },
    ],
  ],
  articles: hageArticles, 
  footerLink: { name: 'Se alt i hjem og fritid', href: '#' },
};

export const verktoyOgRedskapMenuData = {
  columns: [
    [ // Column 1
      {
        title: 'Bensin, olje og smøremidler', href: '#',
        links: [
          { name: 'Bensin', href: '#' },
          { name: 'Bensinkanner', href: '#' },
          { name: 'Olje og kjemikalier', href: '#' },
          { name: 'Sagkjedeolje', href: '#' },
          { name: 'Smøremidler', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
      {
        title: 'Rengjøringsmaskiner', href: '#',
        links: [
            { name: 'Feiemaskiner', href: '#' },
            { name: 'Grovstøvsuger', href: '#' },
            { name: 'Høytrykkspylere og tilbehør', href: '#' },
            { name: 'Støvsugere', href: '#' },
        ],
      },
    ],
    [ // Column 2
      {
        title: 'Bilpleie og bilutstyr', href: '#',
        links: [
          { name: 'Bilstereo', href: '#' },
          { name: 'Bilutstyr', href: '#' },
          { name: 'Eksteriørvask', href: '#' },
          { name: 'Frostvæske og spylevæske', href: '#' },
          { name: 'Interiørvask', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
       {
        title: 'Verktøy og maskiner', href: '#',
        links: [
          { name: 'Byggtørkere', href: '#' },
          { name: 'Elektroverktøy', href: '#' },
          { name: 'Håndverktøy', href: '#' },
          { name: 'Kappemaskiner', href: '#' },
          { name: 'Kompressor og tilbehør', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
    ],
    [ // Column 3
      {
        title: 'Bygg og jernvare', href: '#',
        links: [
          { name: 'Festemateriell', href: '#' },
          { name: 'Verkstedutstyr', href: '#' },
          { name: 'Drenering', href: '#' },
        ],
      },
      {
        title: 'Tilhengere', href: '#',
        links: [
          { name: 'ATV hengere', href: '#' },
          { name: 'Båthengere', href: '#' },
          { name: 'Bilhengere', href: '#' },
          { name: 'Biltraller', href: '#' },
          { name: 'Boggihengere', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
    ],
  ],
  articles: hageArticles,
  footerLink: { name: 'Se alt i verktøy og redskap', href: '#' },
};

export const skogOgVedMenuData = {
  columns: [
    [ // Column 1
      {
        title: 'Motorsager og utstyr', href: '#',
        links: [
          { name: 'Batteri og ladere', href: '#' },
          { name: 'Bensin, olje og smøremidler', href: '#' },
          { name: 'Fileutstyr', href: '#' },
          { name: 'Motorsager', href: '#' },
          { name: 'Sagkjeder', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
    ],
    [ // Column 2
      {
        title: 'Vedproduksjon', href: '#',
        links: [
          { name: 'Skogsredskap', href: '#' },
          { name: 'Skogsvinsjer', href: '#' },
          { name: 'Avstands- og fuktighetsmålere', href: '#' },
          { name: 'Kappsager og vedkløyvere', href: '#' },
          { name: 'Merkebånd og markering', href: '#' },
          { name: 'Se flere', href: '#' },
        ],
      },
    ],
    [ // Column 3
      {
        title: 'Verneklær og vernesko', href: '#',
        links: [
          { name: 'Engangsbekledning', href: '#' },
          { name: 'Verneklær', href: '#' },
          { name: 'Vernesko og vernestøvler', href: '#' },
        ],
      },
       {
        title: 'Verneutstyr', href: '#',
        links: [
          { name: 'Åndedrettsvern', href: '#' },
          { name: 'Førstehjelpsutstyr', href: '#' },
          { name: 'Hjelmer og visir', href: '#' },
          { name: 'Hørselvern', href: '#' },
          { name: 'Vernebriller', href: '#' },
        ],
      },
    ],
  ],
  articles: skogOgVedArticles,
  footerLink: { name: 'Se alt i skog og ved', href: '#' },
};

export const merkevarerMenuData = {
  columns: [
    [
      { links: [{ name: 'Felleskjøpet', href: '#' }, { name: 'Appetitt', href: '#' }, { name: 'Labb', href: '#' }, { name: 'Champion', href: '#' }, { name: 'Falkeberg', href: '#' }] },
    ],
    [
      { links: [{ name: 'Stihl', href: '#' }, { name: 'Kärcher', href: '#' }, { name: 'Gardena', href: '#' }, { name: 'John Deere', href: '#' }, { name: 'Segway', href: '#' }] },
    ],
    [
      { links: [{ name: 'Ryobi', href: '#' }, { name: 'Gaupen', href: '#' }, { name: 'Ariens', href: '#' }, { name: 'Stiga', href: '#' }, { name: 'Espegard', href: '#' }] },
    ],
    [
      { links: [{ name: 'DeLaval', href: '#' }, { name: 'Katrin', href: '#' }, { name: 'Kerbl', href: '#' }, { name: '3M', href: '#' }, { name: 'Champion Europe', href: '#' }] },
    ]
  ],
  footerLink: { name: 'Se alle merkevarer', href: '#' },
};

export const kampanjerMenuData = {
  columns: [
    [
      {
        title: 'Alle kampanjer',
        href: '#',
        links: [
          { name: 'Lagersalg', href: '#' },
          { name: 'Søndagskupp', href: '#', isSundayOnly: false },
        ],
      },
    ],
  ],
  products: kampanjeProducts.slice(0, 4),
  productsTitle: 'Utvalgte produkter på kampanje',
  footerLink: { name: 'Se alle produkter på kampanje', href: '#' },
};

export const guiderOgArtiklerMenuData = {
  columns: [
    [
      {
        title: '🌿 Hage og dyrking', href: '#',
        links: [
          { name: '8 tips for nabolagets grønneste plen', href: '#' },
          { name: 'Slik velger du riktig gressklipper', href: '#' },
          { name: 'Guide: robotklippere og installasjon', href: '#' },
          { name: 'Dyrk dine egne poteter', href: '#' },
          { name: 'Gjør hagen din bievennlig', href: '#' },
        ],
      },
      {
        title: '🧰 Maskiner og utstyr', href: '#',
        links: [
            { name: 'Hvilken motorsag skal jeg velge?', href: '#' },
            { name: 'Vedlikehold og oppbevaring av motorsag', href: '#' },
            { name: 'Slik velger du riktig snøfreser', href: '#' },
        ],
      },
    ],
    [
      {
        title: '🚗 Bil og garasje', href: '#',
        links: [
          { name: 'Slik velger du riktig høytrykkspyler', href: '#' },
          { name: 'Dekkskift – guide for å bytte selv', href: '#' },
          { name: 'Kjør sikkert med tilhenger', href: '#' },
        ],
      },
      {
        title: '🏠 Hus og hjem', href: '#',
        links: [
            { name: 'Slik holder du huset fritt for mus', href: '#' },
            { name: 'Egenberedskap – dette bør du ha hjemme', href: '#' },
            { name: 'Synlig og sikker med refleks', href: '#' },
        ],
      },
    ],
     [
      {
        title: '🐶 Kjæledyr (hund og katt)', href: '#',
        links: [
          { name: 'Slik velger du riktig hundefôr', href: '/hundefor' },
          { name: 'Hva trenger hunden eller valpen?', href: '#' },
          { name: 'Guide: Slik trives kaninen ute', href: '/artikler/stegforsteg' },
          { name: 'Kattemat og fôring', href: '#' },
        ],
      },
      {
        title: '🐓 Hobbyhøns og smådyr',
        href: '#',
        links: [
          { name: 'Høner i hagen: ansvar og stell', href: '#' },
          { name: 'Kanin og hamster: stell og behov', href: '#' },
        ]
      }
    ],
  ],
  articles: guideArticles,
  footerLink: { name: 'Se alle guider og artikler', href: '#' },
};


export const menuDataMap: Record<string, any> = {
  'Hage og uterom': hageUteromMenuData,
  'Kjæledyr': kjaeledyrMenuData,
  'Klær og sko': klaerOgSkoMenuData,
  'Hjem og fritid': hjemOgFritidMenuData,
  'Verktøy og redskap': verktoyOgRedskapMenuData,
  'Skog og ved': skogOgVedMenuData,
  'Merkevarer': merkevarerMenuData,
  'Kampanjer': kampanjerMenuData,
  'Guider og artikler': guiderOgArtiklerMenuData,
};

export const allMegaMenusData = leftNavItems.map(item => ({
  name: item.name,
  data: menuDataMap[item.name],
}));


const MegaMenuColumn = ({ title, links, href }: { title?: string; href?: string; links: { name: string; href: string }[] }) => (
  <div className="flex flex-col">
    {title && href ? (
      <Link href={href} className="group/megamenu-title mb-2 flex items-center gap-2 p-2">
        <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover/megamenu-title:translate-x-1" />
        <span className="font-headline text-lg font-medium text-foreground underline-offset-4 group-hover/megamenu-title:text-primary group-hover/megamenu-title:underline">{title}</span>
      </Link>
    ) : null}
    <ul className={cn(
      "flex flex-col gap-1",
      title && href ? "pl-9" : "pl-2"
    )}>
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className="block rounded-md p-2 text-sm text-sidebar-foreground/80 hover:bg-black/5 hover:text-primary">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);


// Main Navigation Component
export function MainNavMenu() {
  const isSunday = new Date().getDay() === 0;
  
  const renderNavItems = (items: typeof leftNavItems) => {
    return items.map((item) => {
      const megaMenuData = menuDataMap[item.name];
      
      const isCampaign = item.name === 'Kampanjer';
      const isBrands = item.name === 'Merkevarer';

      return (
        <NavigationMenuItem key={item.name}>
          <NavigationMenuTrigger 
            className={cn(isCampaign && "bg-yellow-300 text-primary hover:bg-yellow-300/90 focus:bg-yellow-300/90 data-[active]:bg-yellow-300/90 data-[state=open]:bg-yellow-300/90")}>
              {item.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {megaMenuData ? (
               <div className={cn(
                  "container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-4 py-8",
                  "md:grid-cols-4"
                )}>
                  
                  <div className={cn("grid gap-x-8", 
                    isCampaign ? "md:grid-cols-1 md:col-span-1" :
                    isBrands ? "md:grid-cols-4 md:col-span-4" : 
                    "md:grid-cols-3 md:col-span-3"
                  )}>
                      {megaMenuData.columns?.map((col: any[], idx: number) => (
                        <div key={idx} className="flex flex-col gap-4">
                          {col.map((group: any) => {
                             const links = group.links?.filter((l: any) => !(l.isSundayOnly && !isSunday));
                             if (!links || links.length === 0) return null;
                            
                             return <MegaMenuColumn key={group.title || group.links[0].name} {...group} links={links} />;
                          })}
                        </div>
                      ))}
                  </div>
                 
                 {megaMenuData.products && (
                    <div className={cn("flex gap-8", "md:col-span-3")}>
                       <Separator orientation="vertical" className="h-auto" />
                       <div className="flex-1">
                            {megaMenuData.productsTitle && (
                                <>
                                 <h3 className="px-3 text-lg font-bold text-primary">{megaMenuData.productsTitle}</h3>
                                  <Separator className="mb-2" />
                                </>
                            )}
                           <div className={cn("grid gap-4", "grid-cols-4")}>
                               {megaMenuData.products.slice(0, 4).map((product: Product) => (
                                 <ProductCard key={product.id} {...product} />
                               ))}
                           </div>
                           {megaMenuData.footerLink && (
                              <div className="mt-4">
                                <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                                  <Link href={megaMenuData.footerLink.href}>
                                    {megaMenuData.footerLink.name}
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            )}
                       </div>
                    </div>
                 )}

                 {megaMenuData.articles && (
                    <div className="md:col-span-1 flex gap-8">
                        <Separator orientation="vertical" className="h-auto" />
                        <div className="flex-1">
                            <div>
                                <h3 className="px-3 text-lg font-bold text-primary">Populære artikler</h3>
                                <Separator className="mb-2" />
                                <div className="flex flex-col gap-2">
                                  {megaMenuData.articles[0] && <ArticleCard {...megaMenuData.articles[0]} />}
                                <div className="mt-2 flex flex-col gap-1 pl-2">
                                    {megaMenuData.articles.slice(1).map((article: any) => (
                                        <Link href={article.articleUrl} key={article.title} className="group flex items-center gap-2 rounded-md p-2 text-sm text-sidebar-foreground/80 hover:bg-black/5 hover:text-primary">
                                            <FileText className="h-4 w-4 flex-shrink-0 text-primary/80" />
                                            <span className="truncate group-hover:underline">{article.title}</span>
                                        </Link>
                                    ))}
                                </div>
                                <Button asChild variant="link" className="justify-start mt-2">
                                    <Link href="#">
                                    Se alle artikler i {item.name.toLowerCase()}
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                 )}

                 {megaMenuData.footerLink && !megaMenuData.products && (
                  <div className="md:col-span-4 mt-8 border-t border-sidebar-border pt-4">
                    <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                      <Link href={megaMenuData.footerLink.href}>
                        {megaMenuData.footerLink.name}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ) : null}
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    });
  };

  return (
    <nav className="bg-card">
      <NavigationMenu>
        <div className="container mx-auto max-w-[1542px] px-4">
          <NavigationMenuList className="flex h-12 items-center justify-between">
            {/* Left Nav */}
            <div className="flex items-center space-x-1">{renderNavItems(leftNavItems)}</div>
            {/* Right Nav */}
            <div className="hidden items-center space-x-1 lg:flex">{renderNavItems(rightNavItems)}</div>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </nav>
  );
}
