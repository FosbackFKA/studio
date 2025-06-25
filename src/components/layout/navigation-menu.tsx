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

const simpleMenuList: Record<string, { title: string; href: string }[]> = {
  'Kjæledyr': [
    { title: 'Hund', href: '#' },
    { title: 'Katt', href: '#' },
    { title: 'Hest', href: '#' },
    { title: 'Hobbyhøns', href: '#' },
    { title: 'Smådyr', href: '#' },
    { title: 'Utstyr og fôr', href: '#' },
  ],
  'Klær og sko': [
    { title: 'Herre', href: '#' },
    { title: 'Dame', href: '#' },
    { title: 'Barn', href: '#' },
    { title: 'Støvler og sko', href: '#' },
    { title: 'Arbeidstøy og verneutstyr', href: '#' },
    { title: 'Regntøy', href: '#' },
    { title: 'Tilbehør', href: '#' },
  ],
  'Hjem og fritid': [
    { title: 'Matlaging og konservering', href: '#' },
    { title: 'Inneklima og oppvarming', href: '#' },
    { title: 'Vask og rengjøring', href: '#' },
    { title: 'Jakt og fiske', href: '#' },
    { title: 'Bålpanner og tilbehør', href: '#' },
    { title: 'Leker og spill', href: '#' },
  ],
  'Verktøy og redskap': [
    { title: 'Håndverktøy', href: '#' },
    { title: 'El-verktøy og maskiner', href: '#' },
    { title: 'Hageredskap', href: '#' },
    { title: 'Snørydding og strøing', href: '#' },
    { title: 'Bygg og anlegg', href: '#' },
    { title: 'Kjøretøy og garasje', href: '#' },
    { title: 'Maling og Fuge', href: '#' },
  ],
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
      const simpleMenu = simpleMenuList[item.name];
      const isMegaMenu = item.name === 'Hage og uterom';
      
      return (
        <NavigationMenuItem key={item.name}>
          <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            {isMegaMenu ? (
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
