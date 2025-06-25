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
  { name: 'Hage og uterom', href: '#', megamenu: true },
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

const hageUteromMenuData = {
  columns: [
    [
      {
        title: 'Dyrk og plante',
        href: '#',
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
        title: 'Småfugler',
        href: '#',
        links: [
          { name: 'Fuglekasser', href: '#' },
          { name: 'Fuglemat', href: '#' },
          { name: 'Fuglematere', href: '#' },
        ],
      },
    ],
    [
      {
        title: 'Hagemaskiner',
        href: '#',
        links: [
          { name: 'Batteri og tilbehør', href: '#' },
          { name: 'Gressklippere', href: '#' },
          { name: 'Øvrige maskiner', href: '#' },
          { name: 'Snøfresere', href: '#' },
        ],
      },
      {
        title: 'Uteplassen',
        href: '#',
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
        title: 'Hagestell',
        href: '#',
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
        title: 'Skadedyrbekjempelse',
        href: '#',
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

const MegaMenuColumn = ({ title, links, href }: { title: string; href: string; links: { name: string; href: string }[] }) => (
  <div className="flex flex-col">
    <Link href={href} className="group/megamenu-title flex items-center gap-1 p-2 font-bold text-foreground hover:text-primary">
      <ChevronRight className="h-4 w-4 text-primary" />
      <span className="border-b-2 border-transparent group-hover/megamenu-title:border-primary">{title}</span>
    </Link>
    <ul className="flex flex-col gap-0.5 pl-8">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className='block rounded-md p-1 text-sm text-sidebar-foreground/80 hover:bg-black/5 hover:text-primary'>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export function MainNavMenu() {
  return (
    <nav className="bg-card">
      <NavigationMenu>
        <div className="container mx-auto max-w-[1542px]">
          <NavigationMenuList className="flex h-12 items-center justify-between px-4">
            {/* Left Nav */}
            <div className="flex items-center space-x-1">
              {leftNavItems.map((item) =>
                item.megamenu ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger>
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="container mx-auto grid max-w-[1542px] gap-x-8 gap-y-4 px-6 py-8 md:grid-cols-4">
                        <div className="flex flex-col gap-4">
                          <MegaMenuColumn {...hageUteromMenuData.columns[0][0]} />
                          <MegaMenuColumn {...hageUteromMenuData.columns[0][1]} />
                        </div>
                        <div className="flex flex-col gap-4">
                          <MegaMenuColumn {...hageUteromMenuData.columns[1][0]} />
                          <MegaMenuColumn {...hageUteromMenuData.columns[1][1]} />
                        </div>
                        <div className="flex flex-col gap-4">
                          <MegaMenuColumn {...hageUteromMenuData.columns[2][0]} />
                        </div>
                        <div className="flex flex-col gap-4">
                          <MegaMenuColumn {...hageUteromMenuData.columns[3][0]} />
                        </div>
                      </div>
                      <div className="container mx-auto max-w-[1542px] border-t border-sidebar-border px-6 py-4">
                        <Button asChild variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                          <Link href={hageUteromMenuData.footerLink.href}>
                            <ChevronRight className="mr-2 h-4 w-4" />
                            {hageUteromMenuData.footerLink.name}
                          </Link>
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className='hover:border-b-2 hover:border-primary'>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </div>

            {/* Right Nav */}
            <ul className="hidden items-center space-x-1 lg:flex">
              {rightNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn("font-semibold text-primary", "hover:border-b-2 hover:border-primary")}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </ul>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </nav>
  );
}
