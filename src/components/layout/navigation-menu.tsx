
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

// Import products for campaign menu
import popular1 from '../common/aktuelle-kampanjer/1.webp';
import popular2 from '../common/aktuelle-kampanjer/2.webp';
import popular3 from '../common/aktuelle-kampanjer/3.webp';

const kampanjeProducts = [
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
  { name: 'Lagersalg', href: '#' },
  { name: 'Merkevarer', href: '#' },
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
    ],
    [
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
      {
        title: 'Småfugler', href: '#',
        links: [
            { name: 'Fuglekasser', href: '#' },
            { name: 'Fuglemat', href: '#' },
            { name: 'Fuglematere', href: '#' },
        ],
      },
    ],
    [ // Column 3
      {
        title: 'Hund', href: '#',
        links: [
          { name: 'Hundefôr', href: '#' },
          { name: 'Hundens helse', href: '#' },
          { name: 'Hundens luftetur', href: '#' },
          { name: 'Hundepleie', href: '#' },
          { name: 'Hundeutstyr', href: '#' },
          { name: 'Hundefôr-velger', href: '/hundefor' },
        ],
      },
    ],
    [ // Column 4
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
    ],
    [ // Column 4
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
  footerLink: { name: 'Se alt i klær og sko', href: '#' },
};

export const hjemOgFritidMenuData = {
  columns: [
    [ // Column 1
      {
        title: 'Brannvern og sikkerhet', href: '#',
        links: [
          { name: 'Alarm og overvåkning', href: '#' },
          { name: 'Brannsikring', href: '#' },
        ],
      },
      {
        title: 'Interiør', href: '#',
        links: [
          { name: 'Dekorasjon', href: '#' },
          { name: 'Lykter og telysholdere', href: '#' },
          { name: 'Lys og servietter', href: '#' },
          { name: 'Oppbevaring', href: '#' },
        ],
      },
      {
        title: 'Tur og friluftsutstyr', href: '#',
        links: [
          { name: 'Friluftsutstyr', href: '#' },
          { name: 'Turmat', href: '#' },
        ],
      },
    ],
    [ // Column 2
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
    ],
    [ // Column 3
      {
        title: 'Fanshop', href: '#',
        links: [
          { name: 'Felleskjøpet fanshop', href: '#' },
          { name: 'John Deere fanshop', href: '#' },
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
    [ // Column 4
      {
        title: 'Fyring og oppvarming', href: '#',
        links: [
          { name: 'Lighter, gass og tennvæske', href: '#' },
          { name: 'Propan', href: '#' },
          { name: 'Utstyr til ildsted', href: '#' },
          { name: 'Vedbag', href: '#' },
          { name: 'Varmeovner', href: '#' },
          { name: 'Se flere', href: '#' },
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
        title: 'Snørydding og avising', href: '#',
        links: [
            { name: 'Brøytestikker', href: '#' },
            { name: 'Snøskuffer', href: '#' },
            { name: 'Strøsand og veisalt', href: '#' },
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
    [ // Column 4
      {
        title: 'El-artikler og belysning', href: '#',
        links: [
          { name: 'Alarm og overvåkning', href: '#' },
          { name: 'Arbeidsbelysning', href: '#' },
          { name: 'Lyspærer og lysrør', href: '#' },
          { name: 'Skjøteledninger og kabeltromler', href: '#' },
          { name: 'Småbatterier', href: '#' },
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
  ],
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
    ],
    [ // Column 4
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
  ],
  products: kampanjeProducts,
  footerLink: { name: 'Se alle kampanjer', href: '#' }
};

export const lagersalgMenuData = {
  links: [
    { title: 'Siste sjanse', href: '#' },
    { title: 'Utgående varer', href: '#' },
  ],
  footerLink: { name: 'Se alle tilbud', href: '#' }
};

// Helper components for menus
const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

const MegaMenuColumn = ({ title, links, href }: { title?: string; href?: string; links: { name: string; href: string }[] }) => (
  <div className="flex flex-col">
    {title && href ? (
      <Link href={href} className="group/megamenu-title flex items-center gap-1 p-2 font-bold text-foreground hover:text-primary">
        <ChevronRight className="h-4 w-4 text-primary" />
        <span className="border-b-2 border-transparent group-hover/megamenu-title:border-primary">{title}</span>
      </Link>
    ) : null}
    <ul className={cn(
      "flex flex-col gap-0.5",
      title && href ? "pl-8" : "pl-2"
    )}>
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className="block rounded-md p-1 text-sm text-sidebar-foreground/80 hover:bg-black/5 hover:text-primary">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const menuDataMap: Record<string, any> = {
  'Hage og uterom': hageUteromMenuData,
  'Kjæledyr': kjaeledyrMenuData,
  'Klær og sko': klaerOgSkoMenuData,
  'Hjem og fritid': hjemOgFritidMenuData,
  'Verktøy og redskap': verktoyOgRedskapMenuData,
  'Skog og ved': skogOgVedMenuData,
  'Merkevarer': merkevarerMenuData,
  'Kampanjer': kampanjerMenuData,
  'Lagersalg': lagersalgMenuData,
};

export const allMegaMenusData = leftNavItems.map(item => ({
  name: item.name,
  data: menuDataMap[item.name],
}));


// Main Navigation Component
export function MainNavMenu() {
  const renderNavItems = (items: typeof leftNavItems) => {
    return items.map((item) => {
      const megaMenuData = menuDataMap[item.name];
      
      return (
        <NavigationMenuItem key={item.name}>
          <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            {megaMenuData ? (
              megaMenuData.columns ? (
              // Standard megamenu with columns (Hage, Kjæledyr, Merkevarer...)
              <>
                <div className="container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-4 py-8 md:grid-cols-4">
                  {megaMenuData.columns.map((col: any[], idx: number) => (
                    <div key={idx} className="flex flex-col gap-4">
                      {col.map((group) => (
                        <MegaMenuColumn key={group.title || group.links[0].name} {...group} />
                      ))}
                    </div>
                  ))}
                </div>
                {megaMenuData.footerLink && (
                  <div className="container mx-auto max-w-[1542px] border-t border-sidebar-border px-4 py-4">
                    <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                      <Link href={megaMenuData.footerLink.href}>
                        <ChevronRight className="mr-2 h-4 w-4" />
                        {megaMenuData.footerLink.name}
                      </Link>
                    </Button>
                  </div>
                )}
              </>
            ) : megaMenuData.links ? (
              // Special menu for Kampanjer and Lagersalg
              <div className="container mx-auto max-w-[1542px] px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Column for links */}
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
                  {/* Columns for products (if they exist) */}
                  {megaMenuData.products && (
                      <div className="md:col-span-3">
                           <h3 className="px-3 text-lg font-bold text-primary">Utvalgte kampanjeprodukter</h3>
                           <Separator className="mb-2" />
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                              {megaMenuData.products.map((product: any) => (
                                  <div key={product.id} className="max-w-xs">
                                    <ProductCard {...product} />
                                  </div>
                              ))}
                          </div>
                      </div>
                  )}
                </div>
                {megaMenuData.footerLink && (
                <div className="mt-8 border-t border-sidebar-border pt-4">
                  <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                    <Link href={megaMenuData.footerLink.href}>
                      <ChevronRight className="mr-2 h-4 w-4" />
                      {megaMenuData.footerLink.name}
                    </Link>
                  </Button>
                </div>
              )}
              </div>
            ) : null
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
