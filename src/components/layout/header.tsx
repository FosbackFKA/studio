
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FkaLogo } from '@/components/common/logo';
import { MainNavMenu } from '@/components/layout/navigation-menu';
import { User, ShoppingCart, Search, Menu as MenuIcon } from 'lucide-react';

export function HeaderComponent() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Main Header */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" aria-label="Til forsiden">
            <FkaLogo className="h-10 w-auto" priority />
          </Link>
        </div>

        <div className="hidden flex-1 px-8 lg:flex">
          <div className="relative w-full max-w-xl">
            <Input
              type="search"
              placeholder="Søk etter produkter, tjenester og artikler"
              className="h-10 w-full rounded-md border bg-input pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" className="hidden items-center px-2 text-sm font-medium hover:text-primary md:flex">
            <User className="mr-1 h-5 w-5" />
            Logg inn
          </Button>
           <Button variant="ghost" className="hidden items-center px-2 text-sm font-medium hover:text-primary md:flex">
            Min side
          </Button>
          <Button variant="ghost" size="icon" aria-label="Handlekurv" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {/* Optional: Add a badge for cart items count 
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">0</span>
            */}
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Meny">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Search (visible on small screens) */}
      <div className="container mx-auto px-4 pb-3 lg:hidden">
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="Søk etter produkter..."
            className="h-10 w-full rounded-md border bg-input pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="hidden border-t bg-card lg:block">
         <MainNavMenu />
      </div>
    </header>
  );
}
