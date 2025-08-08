
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FkaLogo } from '@/components/common/logo';
import { Search, User, Menu } from 'lucide-react';
import { AudienceSwitcher } from '../nav/AudienceSwitcher';
import { Input } from '@/components/ui/input';

const navItems = [
  { name: 'Driftsmidler', href: '#' },
  { name: 'Maskin og Redskap', href: '#' },
  { name: 'Fag og Rådgivning', href: '#' },
  { name: 'Bærekraft', href: '#' },
  { name: 'Min Gård', href: '#' },
];

// Forenklet søkekomponent inntil videre
function BondeSearch() {
  return (
    <div className="relative w-full max-w-lg">
      <Input
        type="search"
        placeholder="Søk i produkter og tjenester for bonden"
        className="h-10 w-full rounded-full border border-primary/50 bg-input pl-10 pr-4 text-sm"
      />
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}


export function BondeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      
      {/* Top bar for audience switcher on desktop */}
      <div className="container mx-auto hidden h-10 items-center justify-start px-4 max-w-[1542px] lg:flex">
        <AudienceSwitcher />
      </div>
      
      {/* Main header content */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-[1542px]">
        <div className="flex items-center gap-4">
          <Link href="/bonde" aria-label="Til forsiden for Bonde">
            <FkaLogo className="h-10 md:h-12" priority />
          </Link>
        </div>

        <div className="hidden flex-1 justify-end px-8 lg:flex">
          <BondeSearch />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button variant="ghost" size="icon" className="h-12 w-12 lg:hidden">
            <Search className="h-8 w-8 text-primary" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 text-primary">
            <User className="h-8 w-8" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 lg:hidden text-primary">
            <Menu className="h-8 w-8" />
          </Button>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="hidden border-t bg-card lg:block">
        <nav className="container mx-auto flex h-12 max-w-[1542px] items-center justify-start px-4">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Button key={item.name} variant="ghost" asChild className="font-headline text-sm font-normal">
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
        </nav>
      </div>

    </header>
  );
}
