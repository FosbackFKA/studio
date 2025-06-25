'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FkaLogo } from '@/components/common/logo';
import { allMegaMenusData, MainNavMenu, rightNavItems, simpleMenuList } from '@/components/layout/navigation-menu';
import { ShoppingCart, Search, Menu as MenuIcon, MapPin, ChevronRight, X, User, ArrowLeft } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [navStack, setNavStack] = React.useState<any[]>([]);

  const handleNavigate = (menuData: any) => {
    setNavStack((prev) => [...prev, menuData]);
  };

  const handleBack = () => {
    setNavStack((prev) => prev.slice(0, -1));
  };
  
  React.useEffect(() => {
    // Reset navigation stack when main menu is closed
    if (!isMenuOpen) {
      // Use a timeout to avoid seeing the reset before the sheet closes
      setTimeout(() => {
        setNavStack([]);
      }, 300);
    }
  }, [isMenuOpen]);

  const currentMenu = navStack.length > 0 ? navStack[navStack.length - 1] : null;

  const renderMainMenu = () => (
    <ul className="flex flex-col">
      {allMegaMenusData.map((menu) => (
        <li key={menu.name}>
          <button
            onClick={() => handleNavigate({
              title: menu.name,
              items: menu.data.columns.flat(),
              footerLink: menu.data.footerLink,
            })}
            className="flex w-full items-center justify-between py-3 font-medium text-foreground"
          >
            <span>{menu.name}</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </li>
      ))}
      <Separator className="my-2" />
      {rightNavItems.map((item) => {
        const subItems = simpleMenuList[item.name] || [];
        if (subItems.length > 0) {
          return (
            <li key={item.name}>
              <button
                onClick={() => handleNavigate({ title: item.name, items: subItems, isSimpleList: true })}
                className="flex w-full items-center justify-between py-3 font-medium text-primary"
              >
                <span>{item.name}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </li>
          );
        }
        return null;
      })}
       <Separator className="my-2" />
       <li>
          <Link href="#" className="flex items-center justify-between py-3 font-medium" onClick={() => setIsMenuOpen(false)}>
              <span>Våre butikker</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>
      </li>
    </ul>
  );

  const renderSubMenu = (menuData: any) => {
    // Handling for simple lists like "Kampanjer"
    if (menuData.isSimpleList) {
      return (
        <ul className="flex flex-col">
          {menuData.items.map((item: any) => (
            <li key={item.title}>
              <Link href={item.href} className="flex w-full items-center justify-between py-3 font-medium" onClick={() => setIsMenuOpen(false)}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    // Handling for megamenus (Level 2: list of groups)
    if (menuData.items && menuData.items[0]?.links) {
      return (
        <ul className="flex flex-col">
          {menuData.footerLink && (
             <li>
                <Link href={menuData.footerLink.href} className="flex w-full items-center justify-between py-3 font-medium text-primary" onClick={() => setIsMenuOpen(false)}>
                  <span>{menuData.footerLink.name}</span>
                   <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              </li>
          )}
          {menuData.items.map((group: any) => (
            <li key={group.title}>
              <button onClick={() => handleNavigate({ title: group.title, items: group.links, parentTitle: menuData.title })} className="flex w-full items-center justify-between py-3 font-medium">
                <span>{group.title}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </li>
          ))}
        </ul>
      );
    }
    
    // Handling for final links (Level 3)
    return (
       <ul className="flex flex-col">
        {menuData.items.map((link: any) => (
            <li key={link.name}>
            <Link href={link.href} className="flex w-full items-center justify-between py-3 font-medium" onClick={() => setIsMenuOpen(false)}>
                <span>{link.name}</span>
            </Link>
            </li>
        ))}
        </ul>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto hidden h-10 items-center justify-start px-4 max-w-[1542px] lg:flex">
        <div className="flex items-center space-x-1">
          <Button size="sm" className="rounded-full bg-primary px-3 py-1 h-auto text-xs font-medium text-primary-foreground hover:bg-primary/90">
            Privat
          </Button>
          <Button variant="outline" size="sm" className="rounded-full border-primary bg-transparent px-3 py-1 h-auto text-xs font-medium text-primary hover:bg-primary/10">
            Bonde & Bedrift
          </Button>
        </div>
      </div>

      <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-[1542px]">
        <div className="flex items-center">
          <Link href="/" aria-label="Til forsiden" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            <FkaLogo className="h-10 w-auto md:h-12" priority />
          </Link>
        </div>

        <div className="hidden flex-1 px-8 lg:flex justify-center">
          <div className="relative w-full max-w-lg">
            <Input type="search" placeholder="Søk" className="h-10 w-full rounded-full border border-primary/50 bg-input pl-10 pr-4 text-sm" />
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
          
          <Button variant="ghost" size="icon" aria-label="Handlekurv" className="relative text-primary lg:hidden">
            <ShoppingCart className="h-9 w-9" />
          </Button>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary" aria-label="Meny">
                <MenuIcon className="h-9 w-9" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full max-w-sm flex-col bg-background p-0 sm:max-w-sm">
               <SheetHeader className="relative flex flex-row items-center justify-center border-b p-4 text-center">
                {navStack.length > 0 && (
                  <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2" onClick={handleBack}>
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                )}
                <div className="font-bold text-lg text-primary">
                  {navStack.length === 0 ? <FkaLogo className="h-8 w-auto" /> : currentMenu?.title}
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">
                     <X className="h-8 w-8" />
                     <span className="sr-only">Lukk</span>
                  </Button>
                </SheetClose>
              </SheetHeader>
              
              <div className="flex-grow overflow-y-auto overflow-x-hidden">
                <div className="relative h-full">
                  {/* Main Menu Panel */}
                  <div className={cn(
                      "absolute inset-0 p-4 transition-transform duration-300 ease-in-out",
                      navStack.length > 0 ? "-translate-x-full" : "translate-x-0"
                    )}
                  >
                    <Button variant="outline" className="w-full justify-start text-left h-12 text-base font-medium mb-4">
                      <User className="mr-2 h-5 w-5"/>
                      Logg inn
                    </Button>
                    {renderMainMenu()}
                  </div>

                  {/* Sub Menu Panels */}
                   <div className={cn(
                      "absolute inset-0 bg-background p-4 transition-transform duration-300 ease-in-out",
                      navStack.length > 0 ? "translate-x-0" : "translate-x-full"
                    )}
                   >
                     {currentMenu && renderSubMenu(currentMenu)}
                   </div>
                </div>
              </div>

              <div className="border-t p-4">
                <div className="flex items-center space-x-2">
                   <Button size="lg" className="flex-1 rounded-full bg-primary px-3 py-1 h-auto font-medium text-primary-foreground hover:bg-primary/90">Privat</Button>
                   <Button variant="outline" size="lg" className="flex-1 rounded-full border-primary bg-transparent px-3 py-1 h-auto font-medium text-primary hover:bg-primary/10">Bonde & Bedrift</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-3 lg:hidden max-w-[1542px]">
        <div className="relative w-full">
          <Input type="search" placeholder="Søk" className="h-10 w-full rounded-full border border-primary/50 bg-input pl-10 pr-4 text-sm" />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="hidden border-t bg-card lg:block">
         <MainNavMenu />
      </div>
    </header>
  );
}
