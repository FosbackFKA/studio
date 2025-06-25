'use client';

import * as React from 'react';
import Link from 'next/link';
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
const hageUteromMenuData = {
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

const kjaeledyrMenuData = {
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

const klaerOgSkoMenuData = {
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

const hjemOgFritidMenuData = {
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

const verktoyOgRedskapMenuData = {
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


const simpleMenuList: Record<string, { title: string; href: string }[]> = {
  'Skog og ved': [
    { title: 'Motorsag og ryddesag', href: '#' },
    { title: 'Vedkløyver og vedkapper', href: '#' },
    { title: 'Økser og sager', href: '#' },
    { title: 'Verneutstyr', href: '#' },
    { title: 'Skog og tømmerutstyr', href: '#' },
    { title: 'Tilbehør', href: '#' },
  ],
  'Kampanjer': [
    { title: 'Ukens kampanjer', href: '#' },
    { title: 'Tilbud på robotgressklippere', href: '#' },
    { title: 'Tilbud på klær og sko', href: '#' },
  ],
  'Lagersalg': [
    { title: 'Siste sjanse', href: '#' },
    { title: 'Utgående varer', href: '#' },
    { title: 'Se alle tilbud', href: '#' },
  ],
  'Merkevarer': [
    { title: 'Stihl', href: '#' },
    { title: 'Kärcher', href: '#' },
    { title: 'Gardena', href: '#' },
    { title: 'Non-stop dogwear', href: '#' },
    { title: 'Labb', href: '#' },
    { title: 'Appetitt', href: '#' },
  ],
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

const MegaMenuColumn = ({ title, links, href }: { title: string; href: string; links: { name: string; href: string }[] }) => (
  <div className="flex flex-col">
    <Link href={href} className="group/megamenu-title flex items-center gap-1 p-2 font-bold text-foreground hover:text-primary">
      <ChevronRight className="h-4 w-4 text-primary" />
      <span className="border-b-2 border-transparent group-hover/megamenu-title:border-primary">{title}</span>
    </Link>
    <ul className="flex flex-col gap-0.5 pl-8">
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

// Main Navigation Component
export function MainNavMenu() {
  const renderNavItems = (items: typeof leftNavItems) => {
    return items.map((item) => {
      const isHageUteromMenu = item.name === 'Hage og uterom';
      const isKjaeledyrMenu = item.name === 'Kjæledyr';
      const isKlaerOgSkoMenu = item.name === 'Klær og sko';
      const isHjemOgFritidMenu = item.name === 'Hjem og fritid';
      const isVerktoyOgRedskapMenu = item.name === 'Verktøy og redskap';
      const simpleMenu = simpleMenuList[item.name];
      
      return (
        <NavigationMenuItem key={item.name}>
          <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            {isHageUteromMenu ? (
              <>
                <div className="container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-6 py-8 md:grid-cols-4">
                  {hageUteromMenuData.columns.map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                      {col.map((group) => (
                        <MegaMenuColumn key={group.title} {...group} />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="container mx-auto max-w-[1542px] border-t border-sidebar-border px-6 py-4">
                  <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                    <Link href={hageUteromMenuData.footerLink.href}>
                      <ChevronRight className="mr-2 h-4 w-4" />
                      {hageUteromMenuData.footerLink.name}
                    </Link>
                  </Button>
                </div>
              </>
            ) : isKjaeledyrMenu ? (
                <>
                  <div className="container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-6 py-8 md:grid-cols-4">
                    {kjaeledyrMenuData.columns.map((col, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        {col.map((group) => (
                          <MegaMenuColumn key={group.title} {...group} />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="container mx-auto max-w-[1542px] border-t border-sidebar-border px-6 py-4">
                    <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                      <Link href={kjaeledyrMenuData.footerLink.href}>
                        <ChevronRight className="mr-2 h-4 w-4" />
                        {kjaeledyrMenuData.footerLink.name}
                      </Link>
                    </Button>
                  </div>
                </>
            ) : isKlaerOgSkoMenu ? (
                <>
                  <div className="container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-6 py-8 md:grid-cols-4">
                    {klaerOgSkoMenuData.columns.map((col, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        {col.map((group) => (
                          <MegaMenuColumn key={group.title} {...group} />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="container mx-auto max-w-[1542px] border-t border-sidebar-border px-6 py-4">
                    <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                      <Link href={klaerOgSkoMenuData.footerLink.href}>
                        <ChevronRight className="mr-2 h-4 w-4" />
                        {klaerOgSkoMenuData.footerLink.name}
                      </Link>
                    </Button>
                  </div>
                </>
            ) : isHjemOgFritidMenu ? (
                <>
                  <div className="container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-6 py-8 md:grid-cols-4">
                    {hjemOgFritidMenuData.columns.map((col, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        {col.map((group) => (
                          <MegaMenuColumn key={group.title} {...group} />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="container mx-auto max-w-[1542px] border-t border-sidebar-border px-6 py-4">
                    <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                      <Link href={hjemOgFritidMenuData.footerLink.href}>
                        <ChevronRight className="mr-2 h-4 w-4" />
                        {hjemOgFritidMenuData.footerLink.name}
                      </Link>
                    </Button>
                  </div>
                </>
            ) : isVerktoyOgRedskapMenu ? (
                <>
                  <div className="container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-6 py-8 md:grid-cols-4">
                    {verktoyOgRedskapMenuData.columns.map((col, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        {col.map((group) => (
                          <MegaMenuColumn key={group.title} {...group} />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="container mx-auto max-w-[1542px] border-t border-sidebar-border px-6 py-4">
                    <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                      <Link href={verktoyOgRedskapMenuData.footerLink.href}>
                        <ChevronRight className="mr-2 h-4 w-4" />
                        {verktoyOgRedskapMenuData.footerLink.name}
                      </Link>
                    </Button>
                  </div>
                </>
            ) : (
              <ul className="grid w-[250px] gap-3 p-4 md:w-[300px]">
                {simpleMenu?.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href} />
                ))}
              </ul>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    });
  };

  return (
    <nav className="bg-card">
      <NavigationMenu>
        <div className="container mx-auto max-w-[1542px]">
          <NavigationMenuList className="flex h-12 items-center justify-between px-4">
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
