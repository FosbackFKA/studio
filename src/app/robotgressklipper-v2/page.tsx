
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
import allProductsAndGuides from '@/data/robotklipper_products.json';
import chatbotIcon from '@/components/common/chat-bot.png';

// Import images
import heroImage from '@/components/common/gressklipper/gressklipper1.webp';
import guideImage from '@/components/common/navimow/1.jpg';
import gressklipper1 from '@/components/common/gressklipper/gressklipper1.webp';
import gressklipper2 from '@/components/common/gressklipper/gressklipper2.webp';
import gressklipper3 from '@/components/common/gressklipper/gressklipper3.webp';
import gressklipper4 from '@/components/common/gressklipper/gressklipper4.webp';
import gressklipper5 from '@/components/common/gressklipper/gressklipper5.webp';
import popular1 from '@/components/common/aktuelle-kampanjer/1.webp';

const imageMap: Record<string, StaticImageData> = {
  heroImage, guideImage, gressklipper1, gressklipper2, gressklipper3, gressklipper4, gressklipper5, popular1,
  '50346128': gressklipper1,
  '50347730': gressklipper1,
  '50346127': gressklipper1,
  '50347731': gressklipper1,
  '50346126': gressklipper1,
  '50303783': gressklipper1,
  '50332450': gressklipper1,
  '50345835': popular1,
  '50343154': popular1,
  '50345834': popular1,
  '50345830': gressklipper5,
  '50345831': gressklipper5,
  '50345832': gressklipper5,
  '50314043': gressklipper1,
  '50328134': gressklipper1,
  '50325745': gressklipper1,
  '50325746': gressklipper1,
  '50337114': gressklipper1,
  '50337115': gressklipper1,
  '50337116': gressklipper1,
  '50337118': gressklipper1,
  '50337119': gressklipper1,
  '50337117': gressklipper1,
  '50345826': gressklipper2,
  '50347966': gressklipper5,
  '50314430': guideImage,
  '50322795': guideImage,
  '50322796': guideImage,
  '50303798': guideImage,
  '50346131': guideImage,
  '50346130': guideImage,
  '50303799': guideImage,
  '50346129': guideImage,
  '50322797': guideImage,
  '50314432': guideImage,
  '50325749': guideImage,
  '92744345': guideImage,
  '50314050': guideImage,
  '35229522': guideImage,
  '50324558': guideImage,
  '50345828': guideImage,
  '50345827': guideImage,
  '50345829': guideImage,
  '50303796': guideImage,
  '50346521': guideImage,
  '50346522': guideImage,
  '50346519': guideImage,
  '50343155': guideImage,
  '50343157': guideImage,
  '50346515': guideImage,
  '50343158': guideImage,
  '50343156': guideImage,
  '50343160': guideImage,
  '50346520': guideImage,
  '50314697': guideImage,
  '50315263': guideImage,
  '50286825': guideImage,
  '50337104': guideImage,
  '50337106': guideImage,
  '50337110': guideImage,
  '50337111': guideImage,
  '50337113': guideImage,
  '50337108': guideImage,
  '50340399': guideImage,
  '50340400': guideImage,
  '92522231': guideImage,
  '92714050': guideImage,
  '50337107': guideImage,
  '50337121': guideImage,
  '50337434': guideImage,
  '50337105': guideImage,
};


const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Hage og uterom', href: '#' },
    { name: 'Gressklippere', href: '#' },
    { name: 'Robotklippere V2', href: '/robotgressklipper-v2' },
];

function FilterPanel() {
    return (
        <Accordion type="multiple" defaultValue={['brand', 'area', 'price']} className="w-full">
            <AccordionItem value="brand">
                <AccordionTrigger className="text-base font-semibold">Merke</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="segway" /><Label htmlFor="segway">Segway</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="gardena" /><Label htmlFor="gardena">Gardena</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="stihl" /><Label htmlFor="stihl">Stihl</Label>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="area">
                <AccordionTrigger className="text-base font-semibold">Plenareal</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2"><Checkbox id="area-1000" /><Label htmlFor="area-1000">Opptil 1000 m²</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="area-2000" /><Label htmlFor="area-2000">1000 - 2000 m²</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="area-3000" /><Label htmlFor="area-3000">2000 - 3000 m²</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="area-5000" /><Label htmlFor="area-5000">3000 m² og mer</Label></div>
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
    <div className={cn("group w-full overflow-hidden rounded-lg shadow-md", span)}>
      <Link href={link} className="block h-full w-full">
        <div className="relative h-full min-h-[250px] w-full lg:aspect-[2/1]">
            <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="font-headline text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-white/90 line-clamp-2">{excerpt}</p>
            <Button asChild size="lg" className="mt-4">
                <span className='z-10 relative'>Les guiden <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Button>
            </div>
        </div>
      </Link>
    </div>
  );
}

function DialogFlowChatbot() {
  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      df-messenger {
        z-index: 999;
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        --df-messenger-bot-message: hsl(var(--card));
        --df-messenger-button-titlebar-color: hsl(var(--primary));
        --df-messenger-button-titlebar-font-color: hsl(var(--primary-foreground));
        --df-messenger-chat-background: hsl(var(--background));
        --df-messenger-font-color: hsl(var(--foreground));
        --df-messenger-input-box-background: hsl(var(--card));
        --df-messenger-input-font-color: hsl(var(--foreground));
        --df-messenger-input-placeholder-font-color: hsl(var(--muted-foreground));
        --df-messenger-minimized-chat-close-icon-color: #fff;
        --df-messenger-send-icon: hsl(var(--primary));
        --df-messenger-titlebar-background: hsl(var(--primary));
        --df-messenger-titlebar-font-color: hsl(var(--primary-foreground));
        --df-messenger-user-message: hsl(var(--primary));
        --df-messenger-user-font-color: hsl(var(--primary-foreground));
      }
      df-messenger::part(chat-wrapper) {
        border-radius: 1rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      }
       df-messenger::part(header) {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
      df-messenger::part(input) {
        border-radius: 9999px;
      }
       df-messenger::part(launcher) {
        background-color: transparent !important;
        border: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return React.createElement('df-messenger', {
    'project-id': 'fka-genai-for-marketing',
    'agent-id': '1fd4ca46-2441-43f3-ab50-565c70728878',
    'language-code': 'no',
    'max-query-length': -1,
    'chat-icon': chatbotIcon.src,
    children: React.createElement('df-messenger-chat-bubble', {
      'chat-title': 'KI-Eksperten',
    }),
  });
}


export default function RobotklipperV2Page() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  
  const products = allProductsAndGuides.filter(item => item && item.type === 'product') as (Product[] & {imageUrl: string});
  const guide = allProductsAndGuides.find(item => item && item.type === 'guide');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow">
        <section className="relative h-[300px] w-full md:h-[400px]">
          <Image src={heroImage} alt="Robotgressklipper på en grønn plen" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-center justify-center px-4 text-center">
            <h1 className="font-headline text-4xl font-bold text-white md:text-5xl lg:text-6xl">Få en perfekt plen, helt automatisk (v2)</h1>
            <p className="mt-2 max-w-2xl text-lg text-gray-200">Utforsk vårt utvalg av smarte robotgressklippere som gir deg mer tid til å nyte hagen.</p>
          </div>
        </section>
        
        <div className="container mx-auto max-w-[1542px] px-4 py-8 lg:py-12">
            <Breadcrumb items={breadcrumbs} />
        </div>

        <div id="products" className="container mx-auto max-w-[1542px] px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                <aside className="hidden lg:block lg:col-span-1">
                    <div className="sticky top-32">
                        <h2 className="text-xl font-bold mb-4">Filtre</h2>
                        <FilterPanel />
                    </div>
                </aside>
                <div className="lg:col-span-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                        <h2 className="text-2xl font-bold whitespace-nowrap">Alle robotgressklippere ({products.length})</h2>
                        <div className="flex w-full sm:w-auto items-center gap-4">
                            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="outline" className="lg:hidden flex-1">
                                        <SlidersHorizontal className="mr-2 h-4 w-4" /> Filter
                                    </Button>
                                </SheetTrigger>
                                <SheetContent>
                                     <div className="flex h-full flex-col bg-card">
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
                                    </div>
                                </SheetContent>
                            </Sheet>
                            <Select defaultValue="popularitet">
                                <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Sorter etter" /></SelectTrigger>
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
                        {products.map((p: any) => {
                          const imageSrc = imageMap[p.id as string] || imageMap[p.image_link as string] || guideImage;
                          if (!p.id) return null; // Make sure product has an ID
                          
                          // Assign a valid image source
                          const finalImageUrl = imageMap[p.id] || imageMap[p.image_link] || guideImage;

                          // Ensure the product object has the imageUrl field for ProductCard
                          const productData: Product & { imageUrl: StaticImageData | string } = {
                            ...p,
                            imageUrl: finalImageUrl,
                          };

                          return (
                            <ProductCard 
                                key={p.id} 
                                {...productData}
                                productUrl={`/products/SEGNAVH3000E`} // Hardcoded for demo
                            />
                          )
                        })}
                        {guide && imageMap[(guide as any).image_link as string] && (
                            <div className="col-span-2 lg:col-span-3">
                                <GuideCard {...(guide as any)} imageUrl={imageMap[(guide as any).image_link as string]} />
                            </div>
                        )}
                    </div>
                    
                    <div className="mt-12 flex justify-center">
                        <Button variant="outline" size="lg">Last inn flere</Button>
                    </div>
                </div>
            </div>
        </div>

      </main>
      <FooterComponent />
      {hasMounted && <DialogFlowChatbot />}
    </div>
  );
}
