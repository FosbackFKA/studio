import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FelleskjoepetLogo } from '@/components/common/logo';
import { MainNavMenu } from '@/components/layout/navigation-menu';
import { MapPin, Phone, User, ShoppingCart, Search, Menu as MenuIcon } from 'lucide-react';

export function HeaderComponent() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <div className="container mx-auto flex h-10 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link href="#" className="flex items-center hover:text-primary">
              <Phone className="mr-1 h-4 w-4" />
              Kundeservice
            </Link>
            <Link href="#" className="flex items-center hover:text-primary">
              <MapPin className="mr-1 h-4 w-4" />
              Finn butikk
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="flex items-center hover:text-primary">
              <User className="mr-1 h-4 w-4" />
              Bli medlem / Logg inn
            </Link>
            <Link href="#" className="hidden items-center hover:text-primary md:flex">
              Min side
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" aria-label="Til forsiden">
            <FelleskjoepetLogo className="h-10 w-auto" />
          </Link>
        </div>

        <div className="hidden flex-1 px-8 md:flex">
          <div className="relative w-full max-w-xl">
            <Input
              type="search"
              placeholder="Søk etter produkter..."
              className="h-10 w-full rounded-md border pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Handlekurv">
            <ShoppingCart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Meny">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Search (visible on small screens) */}
      <div className="container mx-auto px-4 pb-3 md:hidden">
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="Søk etter produkter..."
            className="h-10 w-full rounded-md border pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {/* Navigation Menu */}
      <MainNavMenu />
    </header>
  );
}
