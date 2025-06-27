
'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/product-card';
import { ArrowRight, SlidersHorizontal, X } from 'lucide-react';
import type { Product } from '@/types/product';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

// Import images
import heroImage from '@/components/common/gressklipper/gressklipper1.webp';
import guideImage from '@/components/common/navimow/1.jpg';
import gressklipper1 from '@/components/common/gressklipper/gressklipper1.webp';
import gressklipper2 from '@/components/common/gressklipper/gressklipper2.webp';
import gressklipper3 from '@/components/common/gressklipper/gressklipper3.webp';
import gressklipper4 from '@/components/common/gressklipper/gressklipper4.webp';
import gressklipper5 from '@/components/common/gressklipper/gressklipper5.webp';
import popular1 from '@/components/common/aktuelle-kampanjer/1.webp';
import popular3 from '@/components/common/aktuelle-kampanjer/3.webp';

const allProductsAndGuides = [
    {
      type: 'product',
      id: 'SEGNAVH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      badgeText: '- 14 %',
      imageUrl: popular1,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 63,
    },
    {
      type: 'product',
      id: 'GARDSILENO',
      title: 'Robotklipper Smart Sileno Free 1500',
      brand: 'Gardena',
      price: '25 999,-',
      salePrice: '20 799,-',
      badgeText: '- 20 %',
      imageUrl: gressklipper3,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: false,
      storeStockCount: 41,
    },
    {
      type: 'guide',
      title: 'Slik velger du riktig robotgressklipper',
      excerpt: 'Få en perfekt plen uten å løfte en finger. Les vår guide for å finne modellen som passer din hage, enten den er stor, liten, enkel eller kompleks.',
      imageUrl: guideImage,
      link: '#',
      span: 'col-span-2 lg:col-span-3', // This guide will span full width
    },
    {
      type: 'product',
      id: 'SEGNAVI108E',
      title: 'Robotgressklipper Navimow i108e',
      brand: 'Segway',
      price: '15 999,-',
      imageUrl: gressklipper2,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 4,
    },
     {
      type: 'product',
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
    {
      type: 'product',
      id: 'SEGNAVIX330E',
      title: 'Robotgressklipper Navimow X330e',
      brand: 'Segway',
      price: '39 999,-',
      imageUrl: gressklipper5,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 55,
    },
    {
      type: 'product',
      id: 'GARDENASMART',
      title: 'Robotgressklipper Smart Sileno life 1000m²',
      brand: 'Gardena',
      price: '18 999,-',
      imageUrl: gressklipper1,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 22,
    },
     {
      type: 'product',
      id: 'STIHLIMOW5',
      title: 'Robotgressklipper iMow 5',
      brand: 'Stihl',
      price: '21 990,-',
      imageUrl: gressklipper4,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 18,
    },
];


const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Hage og uterom', href: '#' },
    { name: 'Gressklippere', href: '#' },
    { name: 'Robotklippere', href: '/robotgressklipper' },
];

function FilterPanel() {
    return (
        <Accordion type="multiple" defaultValue={['brand', 'area', 'price']} className="w-full">
            <AccordionItem value="brand">
                <AccordionTrigger className="text-base font-semibold">Merke</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="segway" />
                        <Label htmlFor="segway">Segway</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="gardena" />
                        <Label htmlFor="gardena">Gardena</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="stihl" />
                        <Label htmlFor="stihl">Stihl</Label>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="area">
                <AccordionTrigger className="text-base font-semibold">Plenareal</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="area-1000" />
                        <Label htmlFor="area-1000">Opptil 1000 m²</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="area-2000" />
                        <Label htmlFor="area-2000">1000 - 2000 m²</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="area-3000" />
                        <Label htmlFor="area-3000">2000 - 3000 m²</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="area-5000" />
                        <Label htmlFor="area-5000">3000 m² og mer</Label>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
                <AccordionTrigger className="text-base font-semibold">Pris</AccordionTrigger>
                <AccordionContent className="pt-4">
                    <Slider defaultValue={[10000, 40000]} max={50000} min={5000} step={1000} />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>5 000,-</span>
                        <span>50 000,-</span>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

function GuideCard({ title, excerpt, imageUrl, link, span }: { title: string; excerpt: string; imageUrl: StaticImageData; link: string; span?: string; }) {
  return (
    <div className={cn("group relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-auto", span)}>
      <Link href={link} className="block h-full w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="font-headline text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-white/90 line-clamp-2">{excerpt}</p>
          <Button asChild size="lg" className="mt-4">
            <span className='z-10 relative'>Les guiden <ArrowRight className="ml-2 h-4 w-4" /></span>
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default function RobotklipperPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  const products = allProductsAndGuides.filter(item => item.type === 'product');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow">
        <section className="relative h-[300px] w-full md:h-[400px]">
          <Image
            src={heroImage}
            alt="Robotgressklipper på en grønn plen"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-center justify-center px-4 text-center">
            <h1 className="font-headline text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Få en perfekt plen, helt automatisk
            </h1>
            <p className="mt-2 max-w-2xl text-lg text-gray-200">
                Utforsk vårt utvalg av smarte robotgressklippere som gir deg mer tid til å nyte hagen.
            </p>
          </div>
        </section>
        
        <div className="container mx-auto max-w-[1542px] px-4 py-8 lg:py-12">
            <Breadcrumb items={breadcrumbs} />
        </div>

        <div id="products" className="container mx-auto max-w-[1542px] px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* Filters - Sidebar for Desktop */}
                <aside className="hidden lg:block lg:col-span-1">
                    <div className="sticky top-32">
                        <h2 className="text-xl font-bold mb-4">Filtre</h2>
                        <FilterPanel />
                    </div>
                </aside>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                        <h2 className="text-2xl font-bold whitespace-nowrap">Alle robotgressklippere ({products.length})</h2>
                        
                        <div className="flex w-full sm:w-auto items-center gap-4">
                             {/* Mobile Filter Trigger */}
                            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="outline" className="lg:hidden flex-1">
                                        <SlidersHorizontal className="mr-2 h-4 w-4" /> Filter
                                    </Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader className="flex-row items-center justify-between border-b p-4">
                                        <SheetTitle>Filtre</SheetTitle>
                                         <SheetClose asChild>
                                            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
                                                <X className="h-8 w-8 text-primary" />
                                            </Button>
                                        </SheetClose>
                                    </SheetHeader>
                                    <div className="p-4">
                                       <FilterPanel />
                                    </div>
                                </SheetContent>
                            </Sheet>

                            <Select defaultValue="popularitet">
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="Sorter etter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="popularitet">Popularitet</SelectItem>
                                    <SelectItem value="pris-lav-hoy">Pris: Lav-høy</SelectItem>
                                    <SelectItem value="pris-hoy-lav">Pris: Høy-lav</SelectItem>
                                    <SelectItem value="nyeste">Nyeste</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {allProductsAndGuides.map((item, index) => {
                            if (item.type === 'guide') {
                                return <GuideCard key={index} {...item} />;
                            }
                            if (item.type === 'product') {
                                return <ProductCard key={item.id} {...item} />;
                            }
                            return null;
                        })}
                    </div>
                    
                    <div className="mt-12 flex justify-center">
                        <Button variant="outline" size="lg">Last inn flere</Button>
                    </div>
                </div>
            </div>
        </div>

      </main>
      <FooterComponent />
    </div>
  );
}
