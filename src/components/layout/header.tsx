
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FkaLogo } from '@/components/common/logo';
import { MainNavMenu } from '@/components/layout/navigation-menu';
import { User, ShoppingCart, Search, Menu as MenuIcon, MapPin } from 'lucide-react';

export function HeaderComponent() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="container mx-auto flex h-10 items-center justify-start px-4 max-w-[1542px]">
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
          <Link href="/" aria-label="Til forsiden">
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
          <Button variant="ghost" size="icon" aria-label="Velg butikk" className="text-primary lg:hidden">
            <MapPin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Handlekurv" className="relative text-primary lg:hidden">
            <ShoppingCart className="h-6 w-6" />
            {/* Optional: Add a badge for cart items */}
            {/* <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">3</span> */}
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden text-primary" aria-label="Meny">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Search (visible on small screens below main header content) */}
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

      {/* Navigation Menu */}
      <div className="border-t bg-card">
         <MainNavMenu />
      </div>
    </header>
  );
}
