
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/product-card';
import { ArrowRight, Star } from 'lucide-react';
import type { Product } from '@/types/product';
import { ArticlesSection } from '@/components/sections/articles-section';

// --- Page Specific Data ---

const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Artikler', href: '#' },
    { name: 'Inspirasjon', href: '/artikler/inspirasjon' },
];

const shopTheLookProducts: Product[] = [
  {
    id: 'ESPFAT60',
    title: 'Bålpanne 60',
    brand: 'Espegard',
    price: '2 490,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'fire pit steel',
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 78,
  },
  {
    id: 'FKPOPCORN',
    title: 'Popcorngryte for bålpanne',
    brand: 'Felleskjøpet',
    price: '499,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'popcorn kettle fire',
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 120,
  },
  {
    id: 'GPLEDLYS',
    title: 'Lyslenke LED utendørs 10m',
    brand: 'GP',
    price: '799,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'outdoor string lights',
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 92,
  },
  {
    id: 'FKULLSEKK',
    title: 'Ullpledd Grå',
    brand: 'Felleskjøpet',
    price: '699,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'gray wool blanket',
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 65,
  },
];

const relatedArticles = [
    {
      title: 'Guide: Slik velger du riktig høytrykkspyler',
      excerpt: 'En høytrykkspyler er et fantastisk verktøy for rengjøring. Lær deg hva du bør se etter for å finne modellen som passer dine behov perfekt.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'pressure washer cleaning',
      articleUrl: '#',
    },
    {
      title: 'Vedlikehold av utemøbler i tre',
      excerpt: 'Med riktig vedlikehold kan utemøblene dine i tre vare i mange år. Følg våre enkle steg for å beskytte og bevare treverket.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'wooden outdoor furniture',
      articleUrl: '#',
    },
    {
      title: 'Skap en summende oase for biene',
      excerpt: 'Hjelp de viktige pollinatorene! Lær hvilke blomster du kan plante for å skape en frodig og bievennlig hage eller balkong.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'bees flowers garden',
      articleUrl: '#',
    },
  ];

// --- Main Page Component ---

export default function InspirationArticlePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />

      <main className="flex-grow">

        {/* 1. Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] w-full bg-slate-800">
          <Image 
            src="https://placehold.co/1920x1080.png" 
            alt="En stemningsfull uteplass i skumringen med en tent bålpanne og lyslenker"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            data-ai-hint="cozy patio dusk firepit"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="container relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="font-headline text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Forleng kveldene utendørs
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90 md:text-xl">
              Gjør uteplassen om til en magisk oase der de gode samtalene og den lune stemningen varer langt utover solnedgang.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 lg:py-20">
            <div className="container mx-auto max-w-6xl px-4">
                 <Breadcrumb items={breadcrumbs} className="mb-10" />
            
                {/* 2. Main Content Sections */}

                {/* Section: Bålpanne */}
                <section className="my-16 lg:my-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="font-headline text-3xl font-bold text-foreground">Et levende samlingspunkt</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Ingenting samler folk som varmen og de dansende flammene fra en bålpanne. Den blir raskt det naturlige hjertet på uteplassen – et sted for grilling av pølser, gode historier og stillhet under stjernehimmelen. Lyden av knitrende ved og den lune varmen skaper en uforglemmelig ramme for kveldene dine.
                        </p>
                        <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
                            "Bålpannen har forandret måten vi bruker hagen på. Nå er vi ute nesten hver kveld, uansett årstid."
                            <cite className="mt-2 block not-italic font-semibold text-foreground">— Fornøyd kunde</cite>
                        </blockquote>
                    </div>
                    <div className="order-1 md:order-2 relative aspect-square rounded-lg overflow-hidden shadow-xl">
                        <Image src="https://placehold.co/800x800.png" alt="Vennegjeng samlet rundt en bålpanne med marshmallows" fill className="object-cover" data-ai-hint="friends fire pit" sizes="(max-width: 768px) 100vw, 50vw"/>
                    </div>
                </section>

                {/* Section: Belysning */}
                <section className="my-16 lg:my-24">
                     <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold text-foreground">Sett stemningen med lys</h2>
                        <p className="mx-auto mt-2 max-w-3xl text-lg text-muted-foreground">
                            Riktig belysning kan forvandle en vanlig uteplass til et eventyrlig landskap. Kombiner ulike lyskilder for å skape dybde, funksjonalitet og en innbydende atmosfære.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
                                <Image src="https://placehold.co/600x600.png" alt="En lyslenke spent over en terrasse" fill className="object-cover" data-ai-hint="string lights patio" sizes="(max-width: 768px) 100vw, 33vw"/>
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Tak av lys</h3>
                            <p className="text-muted-foreground mt-1">Strekk lyslenker over sittegruppen for å skape en følelse av et tak. Dette gir et lunt og definert uterom.</p>
                        </div>
                         <div className="flex flex-col items-center text-center">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
                                <Image src="https://placehold.co/600x600.png" alt="Solcellelamper langs en hagesti" fill className="object-cover" data-ai-hint="solar lights path" sizes="(max-width: 768px) 100vw, 33vw"/>
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Led veien</h3>
                            <p className="text-muted-foreground mt-1">Bruk solcellelamper eller diskrete spotlights langs stier og i blomsterbed for å guide gjester og fremheve hagens vakre detaljer.</p>
                        </div>
                         <div className="flex flex-col items-center text-center">
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
                                <Image src="https://placehold.co/600x600.png" alt="En stor lanterne med blokklys på et bord" fill className="object-cover" data-ai-hint="lantern candle table" sizes="(max-width: 768px) 100vw, 33vw"/>
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Levende lys</h3>
                            <p className="text-muted-foreground mt-1">Ikke undervurder kraften i levende lys. Plasser store lanterner på gulvet og mindre lykter på bordet for en ekstra koselig glød.</p>
                        </div>
                    </div>
                </section>

                {/* 4. "Shop the Look" Section */}
                <section className="my-16 lg:my-24">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold text-foreground">Skap magien selv</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                            Med disse produktene er du godt på vei til å skape din egen drømmeuteplass.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {shopTheLookProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild size="lg">
                            <Link href="#">Se alt til uteplassen <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </section>
            </div>
        
            {/* 5. Related Articles */}
            <ArticlesSection 
                title="Mer inspirasjon"
                articles={relatedArticles}
                linkText="Se alle artikler"
                linkHref="#"
                className="bg-secondary"
            />
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
