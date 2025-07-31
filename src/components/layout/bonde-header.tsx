
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FkaLogo } from '@/components/common/logo';
import { Search, Menu as MenuIcon, User, StoreIcon, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-[1542px]">
        <div className="flex items-center gap-4">
          <Link href="/bonde" aria-label="Til forsiden for Bonde & Bedrift">
            <FkaLogo className="h-10 md:h-12" priority />
          </Link>
          <div className="hidden lg:block border-l pl-4 ml-4">
            <p className="font-headline text-lg text-primary">Bonde & Bedrift</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 5).map(item => (
                 <Button key={item.name} asChild variant="ghost" className="text-sm font-medium h-auto py-2">
                    <Link href={item.href}>{item.name}</Link>
                 </Button>
            ))}
             <Button asChild variant="ghost" className="text-sm font-medium h-auto py-2">
                <Link href="#">Flere <span className="text-xs ml-1">▼</span></Link>
             </Button>
        </nav>


        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button variant="ghost" size="icon" className="h-12 w-12 text-primary">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 text-primary">
            <User className="h-6 w-6" />
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
                            <StoreIcon className="mr-2 h-5 w-5"/>
                            Finn butikk
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-left h-12 text-base font-medium">
                            <Link href="/">Til Privat</Link>
                        </Button>
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
