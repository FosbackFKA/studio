'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FkaLogo } from '@/components/common/logo';
import { MainNavMenu, leftNavItems, rightNavItems } from '@/components/layout/navigation-menu';
import { ShoppingCart, Search, Menu as MenuIcon, MapPin, ChevronRight, X, User } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar - Desktop Only */}
      <div className="container mx-auto hidden h-10 items-center justify-start px-4 max-w-[1542px] lg:flex">
        <div className="flex items-center space-x-1">
          <Button
            size="sm"
            className="rounded-full bg-primary px-3 py-1 h-auto text-xs font-medium text-primary-foreground hover:bg-primary/90"
          >
            Privat
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary bg-transparent px-3 py-1 h-auto text-xs font-medium text-primary hover:bg-primary/10"
          >
            Bonde & Bedrift
          </Button>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-[1542px]">
        <div className="flex items-center">
          <Link href="/" aria-label="Til forsiden" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            <FkaLogo className="h-10 w-auto md:h-12" priority />
          </Link>
        </div>

        <div className="hidden flex-1 px-8 lg:flex justify-center">
          <div className="relative w-full max-w-lg">
            <Input
              type="search"
              placeholder="Søk"
              className="h-10 w-full rounded-full border border-primary/50 bg-input pl-10 pr-4 text-sm"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button variant="ghost" className="hidden items-center px-2 py-2 text-sm font-medium text-primary hover:bg-accent hover:text-accent-foreground lg:flex">
            <MapPin className="mr-1 h-5 w-5" />
            Velg min butikk
          </Button>
          <Button variant="ghost" className="hidden items-center px-2 py-2 text-sm font-medium text-primary hover:bg-accent hover:text-accent-foreground lg:flex">
            <ShoppingCart className="mr-1 h-5 w-5" />
            Handlekurv
          </Button>
          
          {/* Mobile specific icons */}
          <Button variant="ghost" size="icon" aria-label="Handlekurv" className="relative text-primary lg:hidden">
            <ShoppingCart className="h-6 w-6" />
          </Button>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary" aria-label="Meny">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-background p-0 sm:max-w-sm">
                <div className="flex h-full flex-col">
                    <SheetHeader className="flex flex-row items-center justify-between border-b p-4 text-left">
                        <FkaLogo className="h-10 w-auto" />
                        <SheetClose>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Lukk</span>
                        </SheetClose>
                    </SheetHeader>
                    <div className="flex-grow overflow-y-auto p-4">
                        <Button variant="outline" className="w-full justify-start text-left h-12 text-base font-medium">
                            <User className="mr-2 h-5 w-5"/>
                            Logg inn
                        </Button>
                        <Separator className="my-4" />
                        <nav>
                          <ul className="flex flex-col">
                            {leftNavItems.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="flex items-center justify-between py-3 font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>
                                  <span>{item.name}</span>
                                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </nav>
                        <Separator className="my-4" />
                        <nav>
                          <ul className="flex flex-col">
                            {rightNavItems.map((item) => (
                               <li key={item.name}>
                                <Link href={item.href} className="flex items-center justify-between py-3 font-semibold text-primary" onClick={() => setIsMenuOpen(false)}>
                                  <span>{item.name}</span>
                                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </nav>
                        <Separator className="my-4" />
                         <nav>
                          <ul className="flex flex-col">
                             <li>
                                <Link href="#" className="flex items-center justify-between py-3 font-medium" onClick={() => setIsMenuOpen(false)}>
                                    <span>Våre butikker</span>
                                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </Link>
                            </li>
                          </ul>
                        </nav>
                    </div>

                    <div className="border-t p-4">
                        <div className="flex items-center space-x-2">
                           <Button size="lg" className="flex-1 rounded-full bg-primary px-3 py-1 h-auto font-medium text-primary-foreground hover:bg-primary/90">
                            Privat
                           </Button>
                           <Button variant="outline" size="lg" className="flex-1 rounded-full border-primary bg-transparent px-3 py-1 h-auto font-medium text-primary hover:bg-primary/10">
                            Bonde & Bedrift
                           </Button>
                        </div>
                    </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="container mx-auto px-4 pb-3 lg:hidden max-w-[1542px]">
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="Søk"
            className="h-10 w-full rounded-full border border-primary/50 bg-input pl-10 pr-4 text-sm"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden border-t bg-card lg:block">
         <MainNavMenu />
      </div>
    </header>
  );
}
