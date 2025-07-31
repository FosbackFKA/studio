
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
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ProductCard } from '@/components/common/product-card';
import type { Product } from '@/types/product';
import { ArticleCard } from '@/components/common/article-card';


// Import products for campaign menu
import popular1 from '../common/aktuelle-kampanjer/1.webp';
import popular2 from '../common/aktuelle-kampanjer/2.webp';
import popular3 from '../common/aktuelle-kampanjer/3.webp';
import popular4 from '@/components/common/aktuelle-kampanjer/4.webp';
import popular5 from '@/components/common/aktuelle-kampanjer/5.webp';


// Import product images
import hund1 from '@/components/common/hund/hund1.webp';
import hund2 from '@/components/common/hund/hund2.webp';
import hund3 from '@/components/common/hund/hund3.webp';

import gressklipper1 from '@/components/common/gressklipper/gressklipper1.webp';
import gressklipper2 from '@/components/common/gressklipper/gressklipper2.webp';
import gressklipper3 from '@/components/common/gressklipper/gressklipper3.webp';

// Import article images for the new menu
import artikkel1 from '@/components/common/artikler/1.webp';
import artikkel2 from '@/components/common/artikler/2.webp';
import artikkel3 from '@/components/common/artikler/3.webp';


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
];

const hageProducts: Product[] = [
    {
      id: 'SEGNAVH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      imageUrl: gressklipper1,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 63,
    },
    {
      id: 'SEGNAVI108E',
      title: 'Robotgressklipper Navimow i108e',
      brand: 'Segway',
      price: '15 999,-',
      imageUrl: gressklipper2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 4,
    },
    {
      id: 'GARDSILENO',
      title: 'Robotklipper Smart Sileno Free 1500',
      brand: 'Gardena',
      price: '25 999,-',
      salePrice: '20 799,-',
      badgeText: '- 20 %',
      imageUrl: gressklipper3,
      productUrl: '#',
      onlineStock: false,
      storeStockCount: 41,
    },
];

const kjaeledyrArticles = [
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
    {
      title: 'Velg riktig utstyr til valpen',
      excerpt: 'En ny valp i huset? Her er en sjekkliste over alt du trenger av utstyr for å gi den en trygg og god start på livet.',
      imageUrl: hund3,
      articleUrl: '#',
      dataAiHint: 'puppy playing toys'
    },
];

const verktoyProducts: Product[] = [
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
      id: 'GARDENACLAS30',
      title: 'Hageslange Classic (1/2") 30 M',
      brand: 'Gardena',
      price: '499,-',
      salePrice: '379,-',
      imageUrl: popular5,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
];

const guideArticles = [
   {
      title: 'Slik velger du riktig høytrykkspyler',
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
]

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
          { name: 'Gressklippere', href: '#' },
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
  products: hageProducts,
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
  products: verktoyProducts.slice(0,3),
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
  products: verktoyProducts,
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
  products: kampanjeProducts.slice(0,3),
  footerLink: { name: 'Se alt i skog og ved', href: '#' },
};

export const merkevarerMenuData = {
  columns: [
    [
      {
        links: [
          { name: 'Stihl', href: '#' },
          { name: 'Segway', href: '#' },
          { name: 'Felleskjøpet', href: '#' },
          { name: 'Ryobi', href: '#' },
          { name: 'Espegard', href: '#' },
        ],
      },
    ],
    [
      {
        links: [
          { name: 'Gaupen', href: '#' },
          { name: 'Champion Europe', href: '#' },
          { name: 'Ariens', href: '#' },
          { name: 'Gardena', href: '#' },
          { name: 'Stiga', href: '#' },
        ],
      },
    ],
    [
      {
        links: [
          { name: '3M', href: '#' },
          { name: 'DeLaval', href: '#' },
          { name: 'Labb', href: '#' },
          { name: 'John Deere', href: '#' },
          { name: 'Appetitt', href: '#' },
        ],
      },
    ],
    [
      {
        links: [
          { name: 'Falkeberg', href: '#' },
          { name: 'Champion', href: '#' },
          { name: 'Katrin', href: '#' },
          { name: 'Kerbl', href: '#' },
          { name: 'Kärcher', href: '#' },
        ],
      },
    ],
  ],
  footerLink: { name: 'Se alle merkevarer', href: '#' },
};

export const kampanjerMenuData = {
  links: [
    { title: 'Ukens kampanjer', href: '#' },
    { title: 'Tilbud på robotgressklippere', href: '#' },
    { title: 'Tilbud på klær og sko', href: '#' },
    { title: 'Lagersalg', href: '#' },
  ],
  products: kampanjeProducts,
  footerLink: { name: 'Se alle kampanjer', href: '#' }
};

export const guiderOgArtiklerMenuData = {
  columns: [
     [
      {
        title: 'Hage og uterom',
        href: '#',
        links: [
          { name: 'Slik velger du riktig gressklipper', href: '#' },
          { name: 'Guide til høytrykkspyler', href: '#' },
          { name: 'Slik blir du kvitt ugress i plenen', href: '#' },
          { name: 'Vedlikehold av utemøbler', href: '#' },
        ],
      },
      {
        title: 'Skog og ved',
        href: '#',
        links: [
            { name: 'Tips til vedlikehold av motorsag', href: '#' },
            { name: 'Slik kløyver du ved trygt og effektivt', href: '#' },
        ],
      },
    ],
    [
      {
        title: 'Kjæledyr',
        href: '#',
        links: [
          { name: 'Slik velger du riktig fôr til hunden din', href: '/hundefor' },
          { name: 'Førstehjelp til hund', href: '#' },
          { name: 'Velg riktig utstyr til valpen', href: '#' },
        ],
      },
    ],
     [
      {
        title: 'Vedlikehold og redskap',
        href: '#',
        links: [
          { name: 'Hvordan velge riktig motorsag?', href: '#' },
          { name: 'Vask og vedlikehold av bil', href: '#' },
          { name: 'Slik bruker du en kompostkvern', href: '#' },
        ],
      },
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
  const renderNavItems = (items: typeof leftNavItems) => {
    return items.map((item) => {
      const megaMenuData = menuDataMap[item.name];
      
      const isCampaign = item.name === 'Kampanjer';

      return (
        <NavigationMenuItem key={item.name}>
          <NavigationMenuTrigger 
            className={cn(isCampaign && "bg-yellow-300 text-primary hover:bg-yellow-300/90 focus:bg-yellow-300/90 data-[active]:bg-yellow-300/90 data-[state=open]:bg-yellow-300/90")}>
              {item.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {megaMenuData ? (
              <div className="container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-4 py-8 md:grid-cols-5">
                  <div className={cn("grid md:grid-cols-3 gap-x-8 col-span-3")} >
                      {megaMenuData.columns?.map((col: any[], idx: number) => (
                        <div key={idx} className="flex flex-col gap-4">
                          {col.map((group) => (
                            <MegaMenuColumn key={group.title || group.links[0].name} {...group} />
                          ))}
                        </div>
                      ))}
                      {!megaMenuData.columns && megaMenuData.links && (
                           <div className="flex flex-col gap-2 md:col-span-1">
                              <h3 className="px-3 text-lg font-bold text-primary">{item.name}</h3>
                              <Separator className="mb-2" />
                              {megaMenuData.links.map((link: { title: string, href: string }) => (
                                  <Link key={link.title} href={link.href} className="flex items-center justify-between rounded-md p-3 text-base font-medium text-foreground hover:bg-black/5 hover:text-primary">
                                      <span>{link.title}</span>
                                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                  </Link>
                              ))}
                          </div>
                      )}
                  </div>
                  {(megaMenuData.products || megaMenuData.articles) && (
                    <div className="md:col-span-2 flex gap-8">
                       <Separator orientation="vertical" className="h-auto" />
                       <div className="flex-1">
                          {megaMenuData.products && (
                            <div>
                               <h3 className="px-3 text-lg font-bold text-primary">Populære produkter</h3>
                               <Separator className="mb-2" />
                               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {megaMenuData.products.slice(0,3).map((product: any) => (
                                      <ProductCard key={product.id} {...product} />
                                    ))}
                                </div>
                            </div>
                          )}
                          {megaMenuData.articles && (
                            <div>
                              <h3 className="px-3 text-lg font-bold text-primary">Populære artikler</h3>
                              <Separator className="mb-2" />
                              <div className="grid grid-cols-1 gap-4">
                                  {megaMenuData.articles.slice(0,3).map((article: any) => (
                                    <ArticleCard key={article.title} {...article} />
                                  ))}
                              </div>
                           </div>
                          )}
                       </div>
                    </div>
                  )}
                 
                 {megaMenuData.footerLink && (
                  <div className="md:col-span-5 mt-8 border-t border-sidebar-border pt-4">
                    <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                      <Link href={megaMenuData.footerLink.href}>
                        <ChevronRight className="mr-2 h-4 w-4" />
                        {megaMenuData.footerLink.name}
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
