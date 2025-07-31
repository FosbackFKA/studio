
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FkaLogo } from '@/components/common/logo';
import { Search, Menu as MenuIcon, User, Store, X, ShoppingCart, MapPin } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Input } from '../ui/input';
import { useStoreStore } from '@/hooks/use-store-store';
import { allStores } from '@/lib/store-data';

const navItems = [
  { name: 'Plantekultur', href: '#' },
  { name: 'Husdyr', href: '#' },
  { name: 'Maskin og redskap', href: '#' },
  { name: 'Verksted', href: '#' },
  { name: 'Bygg', href: '#' },
  { name: 'Skog og utmark', href: '#' },
  { name: 'Driftsmidler', href: '#' },
  { name: 'Innendørsmekanisering', href: '#' },
  { name: 'Presisjonsjordbruk', href: '#' },
  { name: 'Tjenester og rådgivning', href: '#' },
];

export function BondeHeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { selectedStore } = useStoreStore();
  const [hasMounted, setHasMounted] = React.useState(false);
  
  React.useEffect(() => { setHasMounted(true); }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-10 items-center justify-between px-4 max-w-[1542px]">
        <div className="flex items-center space-x-1">
          <Button asChild variant="outline" size="sm" className="rounded-full border-primary bg-transparent px-3 py-1 h-auto text-xs font-medium text-primary hover:bg-primary/10">
            <Link href="/">Privat</Link>
          </Button>
          <Button size="sm" className="rounded-full bg-primary px-3 py-1 h-auto text-xs font-medium text-primary-foreground hover:bg-primary/90">
            Bonde & Bedrift
          </Button>
        </div>
        <div className="flex items-center space-x-4 text-xs font-medium text-muted-foreground">
          <Link href="#" className="hover:text-primary">Våre butikker</Link>
          <Link href="#" className="hover:text-primary">Kundeservice</Link>
          <Link href="#" className="hover:text-primary">Logg inn</Link>
        </div>
      </div>
      <Separator />
      <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-[1542px]">
        <div className="flex items-center gap-4">
          <Link href="/bonde" aria-label="Til forsiden for Bonde & Bedrift">
            <FkaLogo className="h-10 md:h-12" priority />
          </Link>
        </div>

        <div className="hidden flex-1 justify-center px-8 lg:flex">
            <div className="relative w-full max-w-lg">
                <Input placeholder="Søk i Bonde & Bedrift" className="h-10 rounded-full border-primary/50 bg-input pl-10" />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button variant="ghost" size="icon" className="h-12 w-12 text-primary lg:hidden">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 text-primary">
            <User className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 text-primary">
            <ShoppingCart className="h-6 w-6" />
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 lg:hidden text-primary" aria-label="Meny">
                <MenuIcon className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex h-full flex-col bg-card">
                 <SheetHeader className="flex flex-row items-center justify-between border-b p-4">
                    <SheetTitle>Meny</SheetTitle>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
                          <X className="h-8 w-8 text-primary" />
                          <span className="sr-only">Lukk</span>
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <div className="p-4">
                     <ul className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="block w-full rounded-md p-3 font-medium text-primary hover:bg-accent/20" onClick={() => setIsMenuOpen(false)}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Separator className="my-4"/>
                    <div className="flex flex-col gap-2">
                         <Button variant="outline" className="w-full justify-start text-left h-12 text-base font-medium">
                            <Store className="mr-2 h-5 w-5"/>
                            {hasMounted && selectedStore ? selectedStore.name : 'Velg min butikk'}
                        </Button>
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
       <div className="hidden border-t bg-card lg:block">
            <nav className="container mx-auto max-w-[1542px] px-4">
                <ul className="flex h-12 items-center justify-center space-x-2">
                    {navItems.map(item => (
                        <li key={item.name}>
                            <Button asChild variant="ghost" className="text-sm font-medium h-auto py-2">
                                <Link href={item.href}>{item.name}</Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
  );
}
