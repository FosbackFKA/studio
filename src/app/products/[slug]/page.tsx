
'use client'; 

import * as React from 'react';
import type { SVGProps } from 'react';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import Image, { type StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShoppingCart, Truck, MapPin, Minus, Plus, Cpu, Scissors, AreaChart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from '@/hooks/use-cart-store';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { StarRating } from '@/components/common/star-rating';
import { RelatedProductsSection } from '@/components/sections/related-products-section';
import { FaqSection } from '@/components/sections/faq-section';

// Import local images
import navimow1 from '@/components/common/navimow/1.jpg';
import navimow2 from '@/components/common/navimow/2.jpg';
import navimow3 from '@/components/common/navimow/3.jpg';
import navimow4 from '@/components/common/navimow/4.jpg';


const productData = {
  id: 'SEGNAVH3000E',
  title: 'Robotgressklipper Navimow H3000E med VisionFence',
  brand: 'Segway',
  price: '34 999,-',
  salePrice: '29 999,-',
  imageUrl: navimow1, 
  productUrl: '/products/SEGNAVH3000E',
  onlineStock: true,
  storeStockCount: 63,
  badgeText: '- 14 %',
  rating: 4.5,
  reviewCount: 28,
  gallery: [navimow1, navimow2, navimow3, navimow4],
  highlights: [
      { icon: AreaChart, text: 'For plen opptil 3000 m²' },
      { icon: Scissors, text: '21 cm klippebredde' },
      { icon: Cpu, text: 'Ingen kantledning nødvendig' },
  ],
  specs: [
      { label: 'For plen (opptil)', value: '3000 m²' },
      { label: 'Klippebredde', value: '21 cm' },
      { label: 'Maksimal stigning', value: '45%' },
      { label: 'Kantledning', value: 'Ingen' },
      { label: 'Appstyrt', value: 'Ja, med Wi-Fi eller 4G' },
      { label: 'VisionFence', value: 'Ja, inkludert' },
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

const KlarnaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg role="img" xmlns="http://www.w3.org/2000/svg" width="71.25" height="30" viewBox="0 0 71.25 30" aria-label="Klarna" {...props}>
    <title>Klarna</title>
    <g clipPath="url(#klarna-clip-product-page)">
      <path fill="#FFA8CD" d="M62.7688 0H8.48123C3.79718 0 0 3.79718 0 8.48123V21.5188C0 26.2028 3.79718 30 8.48123 30H62.7688c4.684 0 8.4812-3.7972 8.4812-8.4812V8.48123C71.25 3.79718 67.4528 0 62.7688 0Z"></path>
      <path fill="#0B051D" d="M57.412 19.1418c-1.2436 0-2.2134-1.0286-2.2134-2.2776 0-1.2491.9698-2.2776 2.2134-2.2776 1.2441 0 2.2135 1.0285 2.2135 2.2776 0 1.249-.9694 2.2776-2.2135 2.2776Zm-.6215 2.4062c1.0608 0 2.4145-.4041 3.1645-1.9837l.0731.0367c-.329.8633-.329 1.3776-.329 1.5062v.202h2.6704v-8.8901h-2.6704v.2021c0 .1286 0 .6428.329 1.5061l-.0731.0368c-.75-1.5797-2.1037-1.9838-3.1645-1.9838-2.543 0-4.3355 2.0205-4.3355 4.6839 0 2.6633 1.7925 4.6838 4.3355 4.6838Zm-8.9822-9.3677c-1.2073 0-2.1586.4225-2.9268 1.9838l-.0732-.0368c.3292-.8633.3292-1.3775.3292-1.5061v-.2021h-2.6708v8.8901h2.744v-4.6838c0-1.2307.7134-2.0021 1.8659-2.0021 1.1526 0 1.7193.6612 1.7193 1.9837v4.7022H51.54v-5.6573c0-2.0205-1.5731-3.4716-3.7317-3.4716Zm-9.3112 1.9838-.0731-.0368c.3293-.8633.3293-1.3775.3293-1.5061v-.2021h-2.6708v8.8901h2.7439l.0183-4.2797c0-1.249.6586-2.0021 1.7379-2.0021.2926 0 .5305.0367.8048.1102v-2.7185c-1.2073-.2571-2.2866.2021-2.8903 1.745Zm-8.7257 4.9777c-1.244 0-2.2135-1.0286-2.2135-2.2776 0-1.2491.9695-2.2776 2.2135-2.2776 1.2439 0 2.2134 1.0285 2.2134 2.2776 0 1.249-.9695 2.2776-2.2134 2.2776Zm-.622 2.4062c1.061 0 2.4147-.4041 3.1647-1.9837l.0732.0367c-.3293.8633-.3293 1.3776-.3293 1.5062v.202h2.6708v-8.8901H32.058v.2021c0 .1286 0 .6428.3293 1.5061l-.0732.0368c-.75-1.5797-2.1037-1.9838-3.1647-1.9838-2.5428 0-4.3355 2.0205-4.3355 4.6839 0 2.6633 1.7927 4.6838 4.3355 4.6838Zm-8.1588-.2388h2.744V8.45166h-2.744V21.3092ZM18.9784 8.45166h-2.7988c0 2.29594-1.4086 4.35314-3.5489 5.82264l-.8415.5878V8.45166H8.88062V21.3092h2.90858v-6.3736l4.8111 6.3736h3.5489L15.521 15.211c2.1037-1.5245 3.4757-3.894 3.4574-6.75934Z"></path>
    </g>
    <defs><clipPath id="klarna-clip-product-page"><path fill="#fff" d="M0 0h71.25v30H0z"></path></clipPath></defs>
  </svg>
);


export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  if (slug !== 'SEGNAVH3000E') {
    return <div>Product not found</div>;
  }
  
  const product = productData;
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [quantity, setQuantity] = React.useState(1);
  const [mainImage, setMainImage] = React.useState<string | StaticImageData>(product.gallery[0]);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: quantity });
    toast({
      title: "Lagt i handlekurven",
      description: `${quantity} x ${product.title}`,
    });
  };

  const handleSetMainImage = (imgSrc: string | StaticImageData) => {
    setMainImage(imgSrc);
  };
  
  return (
     <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow py-8 lg:pb-24">
        <div className="container mx-auto max-w-[1542px] px-4">
          <Breadcrumb items={product.breadcrumbs} className="mb-6" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
               <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-white">
                 <Image 
                    src={mainImage} 
                    alt={`Produktbilde av ${product.title}`} 
                    layout="fill" 
                    objectFit="contain" 
                    className="p-4" 
                    priority
                 />
                 <Badge variant="outline" className="absolute left-3 top-3 border-none bg-accent/20 px-2 py-1 text-sm font-semibold text-primary">{product.badgeText}</Badge>
               </div>
               <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, idx) => (
                  <button key={idx} onClick={() => handleSetMainImage(img)} className={cn('relative aspect-square w-full overflow-hidden rounded-md border-2 bg-white', mainImage === img ? 'border-primary' : 'border-transparent')}>
                    <Image 
                      src={img} 
                      alt={`Miniatyrbilde ${idx + 1} av ${product.title}`} 
                      layout="fill" 
                      objectFit="contain" 
                      className="p-1"
                    />
                  </button>
                ))}
               </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <p className="font-semibold text-primary">{product.brand}</p>
              <h1 className="font-headline text-3xl font-bold text-foreground">{product.title}</h1>
              
              <div className="mt-2">
                 <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <p className="text-4xl font-bold text-destructive">{product.salePrice}</p>
                <p className="text-xl text-muted-foreground line-through">{product.price}</p>
              </div>
              <p className="text-sm text-muted-foreground">Kampanjepris gyldig t.o.m. 28.07.24</p>
              
              <div className="mt-6 rounded-lg border bg-secondary/30 p-4">
                <h3 className="mb-3 font-bold text-foreground">Høydepunkter</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {product.highlights.map(highlight => (
                    <div key={highlight.text} className="flex items-center gap-2 text-sm">
                      <highlight.icon className="h-5 w-5 text-primary" />
                      <span>{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              <div className="hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-full border p-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setQuantity(q => Math.max(1, q-1))} disabled={quantity <= 1}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center text-lg font-medium">{quantity}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setQuantity(q => q+1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                   <Button size="lg" className="h-12 flex-1 text-base" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Legg i handlekurv
                  </Button>
                </div>
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

              <div className="mt-6 flex items-center gap-3 text-sm">
                <KlarnaLogo className="h-8 w-auto flex-shrink-0 rounded-md" />
                <p className="text-foreground">
                  Betal 5 295,02 kr/mnd i 6 måneder, 21,90% rente.{' '}
                  <Link href="#" className="text-primary underline hover:text-primary/80">
                    Les mer
                  </Link>
                </p>
              </div>

            </div>
          </div>
          
          <div className="mt-12">
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
                  <ul className="list-disc space-y-1 pl-5 text-foreground">
                    {product.included.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="specs">
                <AccordionTrigger className="text-lg font-bold">Spesifikasjoner</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableBody>
                      {product.specs.map(spec => (
                        <TableRow key={spec.label}>
                          <TableCell className="font-medium">{spec.label}</TableCell>
                          <TableCell>{spec.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <RelatedProductsSection />
        <FaqSection />

      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background p-4 md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-lg font-bold text-destructive">{product.salePrice}</p>
            <p className="text-sm text-muted-foreground line-through">{product.price}</p>
          </div>
          <Button size="lg" className="h-12 flex-1" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Legg i kurv
          </Button>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

