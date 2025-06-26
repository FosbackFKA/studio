
'use client'; 

import * as React from 'react';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShoppingCart, Truck, MapPin, Info, Minus, Plus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from '@/hooks/use-cart-store';
import { cn } from '@/lib/utils';

import navimowMainImage from '@/components/common/gressklipper/gressklipper4.webp';


const productData = {
  id: 'SEGNAVH3000E',
  title: 'Robotgressklipper Navimow H3000E med VisionFence',
  brand: 'Segway',
  price: '34 999,-',
  salePrice: '29 999,-',
  imageUrl: navimowMainImage, 
  productUrl: '/products/SEGNAVH3000E',
  onlineStock: true,
  storeStockCount: 63,
  badgeText: '- 14 %',
  gallery: [
    navimowMainImage,
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
    "https://placehold.co/400x400.png",
  ],
  specs: [
      'For plen (opptil) 3000 m²',
      'Klippebredde 21 cm',
      'Maksimal stigning 45%',
      'Ingen kantledning',
  ],
  description: `Segway Navimow H3000E er en intelligent robotklipper som bruker en virtuell grense, som betyr at du ikke trenger komplisert kantledning. Enkel å betjene og vedlikeholde, Navimow gir deg mer fritid til å gjøre det du elsker. Navigerer enkelt i hagen din og klipper på den mest effektive måten. Resultatet er en perfekt klippet plen hver gang. Appen kobles enkelt til klipperen med Bluetooth, og deretter kobles den til med Wi-fi eller 4G. VisionFence inkluderer AI-teknologi og en integrert AI-algoritme. Den kan gjenkjenne kanter på plenen og navigere rundt hindringer i hagen. VisionFence hjelper Navimow å jobbe mer intelligent og effektivt.`,
  included: [
      '1 stk. Segway Navimow',
      '1 stk. Strømforsyning',
      '1 stk. Ladestasjon',
      '1 stk. Deksel for ladestasjon',
      '1 stk. Antenne-monteringssett',
      '10 m strømforlengelseskabel',
      '1 stk. Antenne',
      '1stk. Installasjonsmateriell',
      '1 stk. Brukerveiledning'
  ],
  breadcrumbs: [
    { name: 'Forsiden', href: '/' },
    { name: 'Hage og uterom', href: '#' },
    { name: 'Gressklippere', href: '#' },
    { name: 'Robotklippere', href: '#' },
    { name: 'Robotgressklipper Navimow H3000E med VisionFence', href: '/products/SEGNAVH3000E' },
  ]
};


export default function ProductPage({ params }: { params: { slug: string } }) {
  if (params.slug !== 'SEGNAVH3000E') {
    return <div>Product not found</div>;
  }
  
  const product = productData;
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [quantity, setQuantity] = React.useState(1);
  const [mainImage, setMainImage] = React.useState(product.gallery[0]);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: quantity });
    toast({
      title: "Lagt i handlekurven",
      description: `${quantity} x ${product.title}`,
    });
  };

  return (
     <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow py-8">
        <div className="container mx-auto max-w-[1542px] px-4">
          <Breadcrumb items={product.breadcrumbs} className="mb-6" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
               <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-white">
                 <Image src={typeof mainImage === 'object' && 'src' in mainImage ? mainImage.src : mainImage} alt={product.title} layout="fill" objectFit="contain" className="p-4" />
                 <Badge variant="outline" className="absolute left-3 top-3 border-none bg-accent/20 px-2 py-1 text-sm font-semibold text-primary">{product.badgeText}</Badge>
               </div>
               <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, idx) => {
                  const imgSrc = typeof img === 'object' && 'src' in img ? img.src : img;
                  return (
                    <button key={idx} onClick={() => setMainImage(img)} className={cn('relative aspect-square w-full overflow-hidden rounded-md border-2 bg-white', mainImage === img ? 'border-primary' : 'border-transparent')}>
                      <Image 
                        src={imgSrc} 
                        alt={`Thumbnail ${idx+1}`} 
                        layout="fill" 
                        objectFit="contain" 
                        className="p-1" 
                        data-ai-hint={idx > 0 ? "robotic lawnmower" : undefined}
                      />
                    </button>
                  );
                })}
               </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <p className="font-semibold text-primary">{product.brand}</p>
              <h1 className="font-headline text-3xl font-bold text-foreground">{product.title}</h1>
              
              <div className="mt-4 flex items-baseline gap-3">
                <p className="text-4xl font-bold text-destructive">{product.salePrice}</p>
                <p className="text-xl text-muted-foreground line-through">{product.price}</p>
              </div>
              <p className="text-sm text-muted-foreground">Kampanjepris gyldig t.o.m. 28.07.24</p>
              
              <ul className="mt-6 space-y-2 text-foreground">
                {product.specs.map(spec => (
                   <li key={spec} className="flex items-center gap-2">
                     <CheckCircle2 className="h-5 w-5 text-primary" />
                     <span>{spec}</span>
                   </li>
                ))}
              </ul>
              
              <Separator className="my-6" />

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border rounded-full p-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setQuantity(q => Math.max(1, q-1))} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center text-lg font-medium">{quantity}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setQuantity(q => q+1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                 <Button size="lg" className="flex-1 h-12 text-base" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Legg i handlekurv
                </Button>
              </div>

              <div className="mt-6 space-y-4 rounded-lg border bg-secondary/30 p-4">
                 <div className="flex items-start gap-3">
                    <Truck className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">På nettlager</p>
                      <p className="text-sm text-muted-foreground">Forventet leveringstid 2-5 dager</p>
                    </div>
                 </div>
                 <Separator />
                 <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Sjekk lagerstatus i butikk</p>
                      <p className="text-sm text-muted-foreground">Finnes i 63 Felleskjøpet-butikker</p>
                      <Button variant="link" className="p-0 h-auto text-sm mt-1">Velg din butikk</Button>
                    </div>
                 </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                 <span className="font-bold text-pink-500 text-2xl">Klarna.</span>
                 <Info className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="mt-8">
                 <Accordion type="single" collapsible defaultValue="description" className="w-full">
                    <AccordionItem value="description">
                      <AccordionTrigger className="text-lg font-bold">Beskrivelse</AccordionTrigger>
                      <AccordionContent className="prose prose-sm max-w-none text-base text-foreground">
                        <p>{product.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="included">
                      <AccordionTrigger className="text-lg font-bold">Inkludert i esken</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-1 text-foreground">
                          {product.included.map(item => <li key={item}>{item}</li>)}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                 </Accordion>
              </div>

            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}
