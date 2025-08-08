
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FkaLogo } from '@/components/common/logo';
import { Search, User, Menu } from 'lucide-react';
import { AudienceSwitcher } from '../common/audience-switcher';

const navItems = [
  { name: 'Driftsmidler', href: '#' },
  { name: 'Maskin og Redskap', href: '#' },
  { name: 'Fag og Rådgivning', href: '#' },
  { name: 'Bærekraft', href: '#' },
  { name: 'Min Gård', href: '#' },
];

export function BondeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/bonde" aria-label="Til forsiden for Bonde">
            <FkaLogo className="h-10" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild>
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <AudienceSwitcher />
          </div>
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
