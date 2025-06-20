
import { HeaderComponent } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { FooterComponent } from '@/components/layout/footer';
import { ProductCard } from '@/components/common/product-card'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FkaLogo } from '@/components/common/logo';
import { ChevronRight } from 'lucide-react';

const aktuelltProducts = [
  {
    title: 'PLANTEJORD 40L FK',
    subText: 'Felleskjøpet',
    price: '79,-',
    imageUrl: 'https://placehold.co/300x225.png',
    imageAlt: 'Plantejord',
    productUrl: '#',
    dataAiHint: 'potting soil bag'
  },
  {
    title: 'PLANTEGJØDSEL UNIVERSAL 8L FK',
    subText: 'Felleskjøpet',
    price: '199,-',
    imageUrl: 'https://placehold.co/300x225.png',
    imageAlt: 'Plantegjødsel',
    productUrl: '#',
    dataAiHint: 'fertilizer bottle'
  },
  {
    title: 'GRESSKLIPPER BENSIN MCCULLOCH',
    subText: 'McCulloch',
    price: '3999,-',
    imageUrl: 'https://placehold.co/300x225.png',
    imageAlt: 'Gressklipper',
    productUrl: '#',
    dataAiHint: 'lawnmower petrol'
  },
  {
    title: 'GRENSAG BATTERI GREENWORKS',
    subText: 'Greenworks',
    price: '1290,-',
    imageUrl: 'https://placehold.co/300x225.png',
    imageAlt: 'Grensag',
    productUrl: '#',
    dataAiHint: 'chainsaw battery'
  },
  {
    title: 'HØYTRYKKVASKER K5 POWER CONTROL',
    subText: 'Kärcher',
    price: '4490,-',
    badgeText: 'Spar 500,-',
    imageUrl: 'https://placehold.co/300x225.png',
    imageAlt: 'Høytrykksvasker',
    productUrl: '#',
    dataAiHint: 'pressure washer'
  },
];

const kjaeledyrProducts = [
  { title: 'Appetitt Adult Maintenance hundefôr', price: '699,-', imageUrl: 'https://placehold.co/200x200.png', imageAlt: 'Hundefôr', productUrl: '#', dataAiHint: 'dog food bag' },
  { title: 'Kobbel Flexi Classic Snor M 5m', price: '249,-', imageUrl: 'https://placehold.co/200x200.png', imageAlt: 'Hundekobbel', productUrl: '#', dataAiHint: 'dog leash' },
  { title: 'Labb Sensitiv Lam & Ris kattemat', price: '349,-', imageUrl: 'https://placehold.co/200x200.png', imageAlt: 'Kattemat', productUrl: '#', dataAiHint: 'cat food dry' },
  { title: 'Tørrfisk Biter torsk', price: '89,-', imageUrl: 'https://placehold.co/200x200.png', imageAlt: 'Tørrfisk til hund', productUrl: '#', dataAiHint: 'dried fish dog treat' },
];

const robotgressklipperProducts = [
  { title: 'Robotklipper iMOW RMI 422 P', price: '12990,-', imageUrl: 'https://placehold.co/200x200.png', imageAlt: 'Robotgressklipper', productUrl: '#', dataAiHint: 'robotic lawnmower orange' },
  { title: 'Robotklipper iMOW RMI 422 PC', price: '15990,-', imageUrl: 'https://placehold.co/200x200.png', imageAlt: 'Robotgressklipper', productUrl: '#', dataAiHint: 'robotic lawnmower smart' },
  { title: 'Robotklipper iMOW 5 EVO', price: '24990,-', imageUrl: 'https://placehold.co/200x200.png', imageAlt: 'Robotgressklipper', productUrl: '#', dataAiHint: 'robotic lawnmower advanced' },
  { title: 'Robotklipper iMOW 6 EVO', price: '31990,-', imageUrl: 'https://placehold.co/200x200.png', imageAlt: 'Robotgressklipper', productUrl: '#', dataAiHint: 'robotic lawnmower large' },
];

const vanningProducts = [
  { title: 'Vognslange Classic 60 HG', price: '459,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Vognslange', productUrl: '#', dataAiHint: 'hose reel cart' },
  { title: 'Slangetrommel Veggmontert RollUp M', price: '1290,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Slangetrommel', productUrl: '#', dataAiHint: 'wall mounted hose reel' },
  { title: 'Vannekanne Svart 2L', price: '79,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Vannekanne', productUrl: '#', dataAiHint: 'watering can black' },
  { title: 'Vannekanne Turkis 10L', price: '149,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Vannekanne', productUrl: '#', dataAiHint: 'watering can turquoise' },
  { title: 'Vannspreder Comfort Aquazoom S', price: '499,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Vannspreder', productUrl: '#', dataAiHint: 'garden sprinkler' },
];

const saaingProducts = [
  { title: 'Såmaskin batteri WE-B', price: '899,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Såmaskin', productUrl: '#', dataAiHint: 'seed spreader battery' },
  { title: 'Gjødselspreder Handy Green II', price: '299,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Gjødselspreder', productUrl: '#', dataAiHint: 'fertilizer spreader hand' },
  { title: 'Såvogn Classic 300', price: '499,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Såvogn', productUrl: '#', dataAiHint: 'seed cart classic' },
  { title: 'Gjødselspreder Spreader L', price: '1190,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Gjødselspreder', productUrl: '#', dataAiHint: 'fertilizer spreader large' },
  { title: 'Gjødselspreder Spreader XL', price: '1590,-', imageUrl: 'https://placehold.co/300x225.png', imageAlt: 'Gjødselspreder', productUrl: '#', dataAiHint: 'fertilizer spreader extra large' },
];

const filterCategories = ["Alle", "Hage", "Dyr", "Gjødsel", "Maskin", "Redskap", "Tilbud"];


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <HeaderComponent />
      <HeroSection />
      <main className="flex-grow">
        
        {/* Aktuelt akkurat nå */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Aktuelt akkurat nå</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {filterCategories.map(cat => (
                  <Button key={cat} variant="outline" size="sm" className="rounded-full border-primary bg-transparent text-primary hover:bg-primary/10">
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {aktuelltProducts.map((item) => (
                <ProductCard key={item.title} {...item} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Se flere produkter <ChevronRight className="ml-1 h-4 w-4 inline"/></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Alt til kjæledyr */}
        <section className="py-8 lg:py-12 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-6">
                <h2 className="font-headline text-2xl font-bold lg:text-3xl">Alt til kjæledyr</h2>
                <Button variant="link" asChild className="text-primary hover:underline">
                    <Link href="#">Se alt til kjæledyr <ChevronRight className="ml-1 h-4 w-4 inline"/></Link>
                </Button>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="relative h-64 w-full lg:h-auto lg:w-1/3">
                <Image src="https://placehold.co/600x800.png" alt="Alt til kjæledyr" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="dog happy pet"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/40 p-4 text-center">
                  <h3 className="font-headline text-3xl font-bold text-white">Alt til kjæledyr</h3>
                  <p className="text-md text-white">Det beste for din firbente venn</p>
                </div>
              </div>
              <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                {kjaeledyrProducts.map((item) => (
                  <ProductCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Robotgressklippere */}
        <section className="py-8 lg:py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
             <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-6">
                <h2 className="font-headline text-2xl font-bold lg:text-3xl">Robotgressklippere</h2>
                <Button variant="link" asChild className="text-primary hover:underline">
                    <Link href="#">Se alle robotgressklippere <ChevronRight className="ml-1 h-4 w-4 inline"/></Link>
                </Button>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row-reverse"> {/* Note: row-reverse to match image */}
              <div className="relative h-64 w-full lg:h-auto lg:w-1/3">
                <Image src="https://placehold.co/600x800.png" alt="Robotgressklippere" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="robotic lawnmower garden"/>
                 <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/40 p-4 text-center">
                  <h3 className="font-headline text-3xl font-bold text-white">Robotgressklippere</h3>
                  <p className="text-md text-white">For en perfekt klippet plen, helt automatisk</p>
                </div>
              </div>
              <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                {robotgressklipperProducts.map((item) => (
                  <ProductCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nødvendig utstyr til vanning i hagen */}
        <section className="py-8 lg:py-12 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Nødvendig utstyr til vanning i hagen</h2>
               <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Se alt til vanning <ChevronRight className="ml-1 h-4 w-4 inline"/></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {vanningProducts.map((item) => (
                <ProductCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Perfekt plen? */}
        <section className="py-8 lg:py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col overflow-hidden rounded-lg bg-card shadow-lg lg:flex-row">
              <div className="relative h-64 w-full lg:h-auto lg:w-1/2">
                <Image src="https://placehold.co/800x600.png" alt="Perfekt plen" layout="fill" objectFit="cover" data-ai-hint="green lawn garden"/>
              </div>
              <div className="flex w-full flex-col justify-center bg-green-700 p-6 text-white lg:w-1/2 lg:p-12">
                <h2 className="font-headline text-3xl font-bold">Perfekt plen?</h2>
                <p className="mt-2 mb-6 text-lg">Følg våre råd for gjødsling, kalking og pleie av plen.</p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground self-start">
                  <Link href="#">Se våre tips og råd</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Hjelp til såing */}
        <section className="py-8 lg:py-12 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Hjelp til såing</h2>
               <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Se alt til såing <ChevronRight className="ml-1 h-4 w-4 inline"/></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {saaingProducts.map((item) => (
                <ProductCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Ta vare på jorda, dyra og framtida */}
        <section className="relative h-[300px] w-full md:h-[400px]">
           <Image
            src="https://placehold.co/1600x400.png"
            alt="Ta vare på jorda, dyra og framtida"
            layout="fill"
            objectFit="cover"
            quality={80}
            data-ai-hint="norwegian landscape farm field"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <FkaLogo className="mb-4 h-12 w-auto invert brightness-0 filter" />
            <h2 className="font-headline text-3xl font-bold md:text-4xl lg:text-5xl">
              Ta vare på jorda, dyra og framtida
            </h2>
          </div>
        </section>

      </main>
      <FooterComponent />
    </div>
  );
}
