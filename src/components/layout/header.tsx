
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FkaLogo } from '@/components/common/logo';
import { MainNavMenu } from '@/components/layout/navigation-menu';
import { User, ShoppingCart, Search, Menu as MenuIcon, MapPin } from 'lucide-react';

export function HeaderComponent() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar: Privat/Bonde */}
      <div className="container mx-auto px-4 py-1.5">
        <div className="flex justify-start">
          <div className="flex items-center space-x-1">
            <Button 
                size="sm" 
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 h-auto text-xs"
            >
                Privat
            </Button>
            <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-primary text-primary hover:bg-primary/10 px-3 py-1 h-auto text-xs"
            >
                Bonde & Bedrift
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Header Content */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" aria-label="Til forsiden">
            <FkaLogo className="h-10 w-auto md:h-12" priority />
          </Link>
        </div>

        <div className="hidden flex-1 px-8 lg:flex justify-center">
          <div className="relative w-full max-w-lg">
            <Input
              type="search"
              placeholder="Søk"
              className="h-10 w-full rounded-full border bg-input pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button variant="ghost" className="hidden items-center px-2 text-sm font-medium hover:text-primary lg:flex">
            <MapPin className="mr-1 h-5 w-5" />
            Velg min butikk
          </Button>
          <Button variant="ghost" className="hidden items-center px-2 text-sm font-medium hover:text-primary lg:flex">
            <ShoppingCart className="mr-1 h-5 w-5" />
            Handlekurv
          </Button>
          {/* Mobile specific icons */}
          <Button variant="ghost" size="icon" aria-label="Velg butikk" className="lg:hidden">
            <MapPin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Handlekurv" className="relative lg:hidden">
            <ShoppingCart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Meny">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Search (visible on small screens) */}
      <div className="container mx-auto px-4 pb-2 lg:hidden">
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="Søk"
            className="h-10 w-full rounded-full border bg-input pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="border-t bg-card">
         <MainNavMenu />
      </div>
    </header>
  );
}
