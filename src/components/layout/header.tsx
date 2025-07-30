
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FkaLogo } from '@/components/common/logo';
import { allMegaMenusData, MainNavMenu, rightNavItems, menuDataMap } from '@/components/layout/navigation-menu';
import { ShoppingCart, Search, Menu as MenuIcon, MapPin, ChevronRight, X, User, ArrowLeft, Trash2, Plus, Minus, CheckCircle2, Heart, Phone, Clock, Info, Navigation, Store as StoreIcon, TrendingUp } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { CartItem } from '@/hooks/use-cart-store';
import { useCartStore, selectCartItems, selectTotalItems, selectTotalPrice } from '@/hooks/use-cart-store';
import popular1 from '@/components/common/aktuelle-kampanjer/1.webp';
import popular2 from '@/components/common/aktuelle-kampanjer/2.webp';
import popular3 from '@/components/common/aktuelle-kampanjer/3.webp';
import type { Store } from '@/types/store';
import { allStores } from '@/lib/store-data';
import { useStoreStore } from '@/hooks/use-store-store';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { Product } from '@/types/product';
import { ProductCard } from '../common/product-card';


const parsePrice = (priceString?: string): number => {
    if (!priceString) return 0;
    return parseFloat(priceString.replace(/,-/g, '').replace(/\s/g, ''));
}

function SearchPopover() {
  const [open, setOpen] = React.useState(false);
  const [previousSearches, setPreviousSearches] = React.useState([
    'høytrykkspyler K4',
    'Labb hundefôr',
    'vernesko',
  ]);

  const popularSearches = [
    'robotgressklipper',
    'høytrykkspyler',
    'motorsag',
    'hundefôr',
    'gjødsel',
    'tilhenger',
  ];

  const recommendedProducts: Product[] = [
    {
      id: 'SEGNAVH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      imageUrl: popular1,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 63,
    },
    {
      id: 'CHAMP92001I',
      title: 'Strømaggregat 92001I-EU bensin inverter 2,2 kW',
      brand: 'Champion Europe',
      price: '7 999,-',
      salePrice: '5 999,-',
      imageUrl: popular2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
    {
      id: 'STIHLRM22R',
      title: 'Bensindrevet bio gressklipper RM 2,2 R',
      brand: 'Stihl',
      price: '4 449,-',
      salePrice: '3 999,-',
      imageUrl: popular3,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 68,
    },
  ];

  const handleRemoveSearch = (e: React.MouseEvent, searchToRemove: string) => {
    e.preventDefault();
    e.stopPropagation();
    setPreviousSearches(searches => searches.filter(s => s !== searchToRemove));
  };


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full max-w-lg">
          <Input 
            type="search" 
            placeholder="Søk" 
            className="h-10 w-full rounded-full border border-primary/50 bg-input pl-10 pr-4 text-sm"
            onFocus={() => setOpen(true)}
           />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[640px] p-4 mt-1" side="bottom" align="start">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="flex items-center text-sm font-semibold text-foreground mb-2">
                    <Clock className="mr-2 h-4 w-4" />
                    Tidligere søk
                  </h3>
                  <div className="flex flex-col items-start">
                    {previousSearches.map(search => (
                      <Button
                        key={search}
                        variant="ghost"
                        className="group flex h-auto w-full items-center justify-between px-2 py-1.5 text-left font-normal text-muted-foreground hover:bg-accent/20 hover:text-primary"
                      >
                        <span className="truncate">{search}</span>
                        <X
                          className="h-4 w-4 flex-shrink-0 text-muted-foreground/50 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={(e) => handleRemoveSearch(e, search)}
                        />
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center text-sm font-semibold text-foreground mb-2">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Populære søk
                  </h3>
                  <div className="flex flex-col items-start">
                    {popularSearches.map(search => (
                      <Button key={search} variant="ghost" className="h-auto w-full px-2 py-1.5 text-left font-normal text-muted-foreground hover:bg-accent/20 hover:text-primary">
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
            </div>
            
            <Separator />
            
            <div>
                 <h3 className="text-sm font-semibold text-foreground mb-2">Anbefalte produkter</h3>
                 <div className="grid grid-cols-3 gap-2">
                   {recommendedProducts.map(product => (
                    <Link href={product.productUrl} key={product.id} className="group rounded-md p-2 text-xs hover:bg-accent/20">
                        <div className="relative aspect-square w-full bg-white rounded-md">
                          <Image src={product.imageUrl} alt={product.title} fill className="rounded-md object-contain border p-1" sizes="120px" />
                        </div>
                        <p className="font-semibold mt-2 truncate group-hover:text-primary">{product.title}</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-destructive font-bold">{product.salePrice}</p>
                            <p className="text-muted-foreground line-through text-xs">{product.price}</p>
                        </div>
                     </Link>
                  ))}
                </div>
            </div>

          </div>
      </PopoverContent>
    </Popover>
  );
}

function CartItemCard({ item }: { item: CartItem }) {
  const { removeItem, updateQuantity } = useCartStore();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };
  
  const displayPrice = parsePrice(item.salePrice || item.price);
  const originalPrice = item.salePrice ? parsePrice(item.price) : undefined;


  return (
    <div className="flex items-start gap-4">
      <div className="relative h-24 w-24 flex-shrink-0">
        <Image src={item.imageUrl} alt={item.title} fill sizes="96px" className="rounded-md border p-1 object-contain" />
        {item.badgeText && <Badge variant="outline" className="absolute -left-1 -top-1 border-none bg-accent/20 px-1.5 py-0.5 text-xs font-semibold text-primary">{item.badgeText}</Badge>}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div className="pr-2">
            {item.brand && <p className="text-sm font-semibold text-primary">{item.brand}</p>}
            <p className="text-sm font-medium line-clamp-2">{item.title}</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0" onClick={() => removeItem(item.id)}>
            <Trash2 className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
        <div className="text-xs text-primary flex items-center gap-4 mt-1">
          {item.onlineStock && <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> På nettlager</div>}
          {item.storeStockCount && <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Finnes i {item.storeStockCount} butikker</div>}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 border rounded-full p-0.5">
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={() => handleQuantityChange(item.quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-right">
            <p className="font-bold text-primary">kr {displayPrice.toLocaleString('nb-NO')},-</p>
            {originalPrice && <p className="text-sm text-muted-foreground line-through">kr {originalPrice.toLocaleString('nb-NO')},-</p>}
          </div>
        </div>
      </div>
    </div>
  )
}


function ShoppingCartSheet() {
  const items = useCartStore(selectCartItems);
  const totalItems = useCartStore(selectTotalItems);
  const totalPrice = useCartStore(selectTotalPrice);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    // This is just for demonstration purposes.
    if (useCartStore.getState().items.length === 0) {
      useCartStore.getState().addItem({
        id: 'SEGNAVH3000E',
        title: 'Robotgressklipper Navimow H3000E med VisionFence',
        brand: 'Segway',
        price: '34 999,-',
        salePrice: '29 999,-',
        imageUrl: popular1,
        productUrl: '#',
        onlineStock: true,
        storeStockCount: 60,
        badgeText: '- 14 %'
      });
    }
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Handlekurv"
          className="relative h-12 w-12 lg:w-auto lg:h-auto lg:px-2 lg:py-2 lg:text-sm lg:font-medium text-primary"
        >
          <ShoppingCart className="h-8 w-8 lg:h-5 lg:w-5" />
          <span className="hidden lg:inline lg:ml-1">Handlekurv</span>
          {totalItems > 0 && (
            <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-xs font-bold text-primary ring-2 ring-background lg:hidden">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col bg-card">
          <SheetHeader className="flex flex-row items-center justify-between border-b p-4">
              <SheetTitle className="text-lg font-semibold text-foreground">Handlekurv ({totalItems})</SheetTitle>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="text-primary rounded-full h-12 w-12">
                  <X className="h-8 w-8" />
                  <span className="sr-only">Lukk</span>
                </Button>
              </SheetClose>
          </SheetHeader>
          {items.length > 0 ? (
            <div className="flex flex-1 flex-col">
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-4">
                  {items.map(item => <CartItemCard key={item.id} item={item} />)}
                </div>
              </ScrollArea>
              <div className="border-t bg-background p-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-muted-foreground">Prisdetaljer</span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>kr {totalPrice.toLocaleString('nb-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Inkl. mva. Frakt beregnes i kassen</p>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">Aktiver rabattkode</Link>
                </div>
                <Button asChild className="w-full mt-4 h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#">Gå til kasse</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center p-4">
              <p className="text-muted-foreground">Handlekurven din er tom.</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function StoreCard({ store, onSelect }: { store: Store; onSelect: () => void }) {
  const { selectStore, favoriteStores, toggleFavorite } = useStoreStore();
  const isFavorite = favoriteStores.includes(store.id);

  const handleSelect = () => {
    selectStore(store);
    onSelect();
  };

  return (
    <div className="space-y-3 rounded-lg border p-4">
      <div className="flex items-start justify-between">
        <h3 className="font-headline text-lg font-bold">{store.name}</h3>
        <Button
          variant="ghost"
          size="icon"
          className="-mt-1 -mr-2 h-8 w-8 flex-shrink-0"
          onClick={() => toggleFavorite(store.id)}
          aria-label={isFavorite ? 'Fjern favoritt' : 'Legg til favoritt'}
        >
          <Heart
            className={cn(
              'h-5 w-5 text-muted-foreground',
              isFavorite && 'fill-red-500 text-red-500'
            )}
          />
        </Button>
      </div>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>
            {store.address}, {store.postalCode} {store.city}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 flex-shrink-0" />
          <a href={`tel:${store.phone}`} className="hover:underline">
            {store.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span>{store.hours}</span>
        </div>
        {store.specialHours && (
          <div className="flex items-center gap-2 text-primary">
            <Info className="h-4 w-4 flex-shrink-0" />
            <span>{store.specialHours}</span>
          </div>
        )}
      </div>
      <Button onClick={handleSelect} className="w-full">
        Velg denne butikken
      </Button>
    </div>
  );
}

function StoreSheetContent({ onStoreSelect }: { onStoreSelect: () => void }) {
  const [stores, setStores] = React.useState(allStores);
  const [search, setSearch] = React.useState('');
  const { favoriteStores } = useStoreStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearch(term);
    setStores(
      allStores.filter(
        (store) =>
          store.name.toLowerCase().includes(term) ||
          store.city.toLowerCase().includes(term) ||
          store.postalCode.toLowerCase().includes(term)
      )
    );
  };
  
  const sortedStores = React.useMemo(() => {
    return [...stores].sort((a, b) => {
      const aIsFavorite = favoriteStores.includes(a.id);
      const bIsFavorite = favoriteStores.includes(b.id);
      if (aIsFavorite && !bIsFavorite) return -1;
      if (!aIsFavorite && bIsFavorite) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [stores, favoriteStores]);

  return (
    <SheetContent>
      <div className="p-0 flex flex-col h-full bg-card">
        <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
          <SheetTitle>Velg din butikk</SheetTitle>
          <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
              <X className="h-8 w-8 text-primary" />
              <span className="sr-only">Lukk</span>
              </Button>
          </SheetClose>
        </SheetHeader>
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Søk butikk eller sted" value={search} onChange={handleSearch} className="pl-10" />
          </div>
          <Button variant="outline" className="w-full mt-3">
            <Navigation className="mr-2 h-4 w-4" />
            Finn nærmeste butikk
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-4">
            {sortedStores.map(store => <StoreCard key={store.id} store={store} onSelect={onStoreSelect} />)}
          </div>
        </ScrollArea>
      </div>
    </SheetContent>
  )
}

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [navStack, setNavStack] = React.useState<any[]>([]);

  const { selectedStore } = useStoreStore();
  const [hasMounted, setHasMounted] = React.useState(false);
  
  React.useEffect(() => { setHasMounted(true); }, []);

  const handleNavigate = (menuData: any) => {
    setNavStack((prev) => [...prev, menuData]);
  };

  const handleBack = () => {
    setNavStack((prev) => prev.slice(0, -1));
  };
  
  React.useEffect(() => {
    if (!isMenuOpen) {
      setTimeout(() => {
        setNavStack([]);
      }, 300);
    }
  }, [isMenuOpen]);

  const currentMenu = navStack.length > 0 ? navStack[navStack.length - 1] : null;
  const [storeSheetOpen, setStoreSheetOpen] = React.useState(false);

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
            className="flex w-full items-center justify-between py-3 font-medium text-primary"
          >
            <span>{menu.name}</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </li>
      ))}
      <Separator className="my-2" />
      {rightNavItems.map((item) => {
        const menuData = menuDataMap[item.name];
        if (!menuData) return null;

        if (menuData.columns || menuData.products) {
          return (
            <li key={item.name}>
              <button
                onClick={() => handleNavigate({
                  title: item.name,
                  items: menuData.columns ? menuData.columns.flat() : menuData.links,
                  products: menuData.products, // pass products
                  footerLink: menuData.footerLink,
                })}
                className="flex w-full items-center justify-between py-3 font-medium text-primary"
              >
                <span>{item.name}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </li>
          );
        }

        if (menuData.links) {
          const subItems = menuData.links.map((link: { title: string; href: string }) => ({
            title: link.title,
            href: link.href,
          }));

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
          <Link href="#" className="flex items-center justify-between py-3 font-medium text-primary" onClick={() => setIsMenuOpen(false)}>
              <span>Våre butikker</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>
      </li>
    </ul>
  );

  const renderSubMenu = (menuData: any) => {
    if (menuData.isSimpleList) {
      return (
        <ul className="flex flex-col">
          {menuData.items.map((item: any) => (
            <li key={item.title}>
              <Link href={item.href} className="flex w-full items-center justify-between py-3 font-medium text-primary" onClick={() => setIsMenuOpen(false)}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      );
    }

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
              <button onClick={() => handleNavigate({ title: group.title, items: group.links, parentTitle: menuData.title })} className="flex w-full items-center justify-between py-3 font-medium text-primary">
                <span>{group.title}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </li>
          ))}
        </ul>
      );
    }
    
    return (
       <ul className="flex flex-col">
        {menuData.items.map((link: any) => (
            <li key={link.title || link.name}>
            <Link href={link.href} className="flex w-full items-center justify-between py-3 font-medium text-primary" onClick={() => setIsMenuOpen(false)}>
                <span>{link.title || link.name}</span>
            </Link>
            </li>
        ))}
        </ul>
    );
  };

  return (
    <Sheet open={storeSheetOpen} onOpenChange={setStoreSheetOpen}>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="border-b">
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
        </div>

        <div>
          <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-[1542px]">
            <div className="flex items-center">
              <Link href="/" aria-label="Til forsiden" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
                <FkaLogo className="h-10 md:h-12" priority />
              </Link>
            </div>

            <div className="hidden flex-1 px-8 lg:flex justify-center">
              <SearchPopover />
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <SheetTrigger asChild>
                  <Button variant="ghost" className="hidden items-center px-2 py-2 text-sm font-medium text-primary lg:flex">
                    <StoreIcon className="mr-1 h-5 w-5" />
                    {hasMounted && selectedStore ? selectedStore.name : 'Velg min butikk'}
                  </Button>
                </SheetTrigger>

              <div className="hidden lg:flex">
                <ShoppingCartSheet />
              </div>
              
              <div className="lg:hidden">
                <ShoppingCartSheet />
              </div>
              
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-12 w-12 lg:hidden text-primary" aria-label="Meny">
                    <MenuIcon className="h-8 w-8" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex h-full flex-col bg-card">
                    <SheetHeader className="relative flex flex-row items-center justify-center border-b p-4 text-center">
                      {navStack.length > 0 && (
                        <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12" onClick={handleBack}>
                          <ArrowLeft className="h-6 w-6" />
                        </Button>
                      )}
                      <div className="font-bold text-lg text-primary flex items-center justify-center">
                          {navStack.length === 0 ? <FkaLogo className="h-8" /> : currentMenu?.title}
                      </div>
                      <SheetTitle className="sr-only">
                          {currentMenu?.title || 'Hovedmeny'}
                      </SheetTitle>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-12 w-12">
                          <X className="h-8 w-8" />
                          <span className="sr-only">Lukk</span>
                        </Button>
                      </SheetClose>
                    </SheetHeader>
                    
                    <div className="flex-grow overflow-y-auto overflow-x-hidden">
                      <div className="relative h-full">
                        <div className={cn(
                            "absolute inset-0 p-4 transition-transform duration-300 ease-in-out",
                            navStack.length > 0 ? "-translate-x-full" : "translate-x-0"
                          )}
                        >
                          <div className="flex flex-col gap-2 mb-4">
                            <Button variant="outline" className="w-full justify-start text-left h-12 text-base font-medium">
                                <User className="mr-2 h-5 w-5"/>
                                Logg inn
                            </Button>
                            <Button 
                                variant="outline" 
                                className="w-full justify-start text-left h-12 text-base font-medium"
                                onClick={() => {
                                    setStoreSheetOpen(true);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <StoreIcon className="mr-2 h-5 w-5"/>
                                {hasMounted && selectedStore ? selectedStore.name : 'Velg min butikk'}
                            </Button>
                          </div>
                          {renderMainMenu()}
                        </div>

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
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="lg:hidden border-t">
          <div className="container mx-auto px-4 py-3 max-w-[1542px] flex items-center gap-2">
            <div className="relative w-full">
                <Input type="search" placeholder="Søk" className="h-10 w-full rounded-full border border-primary/50 bg-input pl-10 pr-4 text-sm" />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="hidden border-b bg-card lg:block">
            <MainNavMenu />
        </div>
      </header>
      <StoreSheetContent onStoreSelect={() => setStoreSheetOpen(false)} />
    </Sheet>
  );
}

