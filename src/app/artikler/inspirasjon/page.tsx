
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/product-card';
import { ArrowRight } from 'lucide-react';
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
    id: 'FK50097000',
    title: 'Plantekasse i tre med bunn 80x120 cm',
    brand: 'Felleskjøpet',
    price: '999,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'wooden planter box',
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 45,
  },
  {
    id: 'FK50102000',
    title: 'Plantejord 40L FK',
    brand: 'Felleskjøpet',
    price: '79,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'potting soil bag',
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 110,
  },
  {
    id: 'GRWKH01',
    title: 'Hagespade og håndrake sett',
    brand: 'Greenworks',
    price: '249,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'gardening tools',
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 98,
  },
  {
    id: 'FKVKN01',
    title: 'Vannekanne i metall 10L',
    brand: 'Felleskjøpet',
    price: '349,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'metal watering can',
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 77,
  },
];

const relatedArticles = [
    {
      title: 'Slik velger du riktig gjødsel',
      excerpt: 'Gjødsel er nøkkelen til en frodig hage. Lær hvordan du velger riktig type for dine planter, enten du har roser, grønnsaker eller plen.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'fertilizer bags',
      articleUrl: '#',
    },
    {
      title: 'Kom i gang med kompost',
      excerpt: 'Gjør hageavfallet om til næringsrik jord! Vår guide viser deg hvordan du enkelt starter din egen kompostbinge og skaper gull for hagen din.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'compost bin garden',
      articleUrl: '#',
    },
    {
      title: 'Dyrk i pallekarmer: En komplett guide',
      excerpt: 'Pallekarmer er en enkel og effektiv måte å starte en kjøkkenhage på. Lær alt du trenger for å lykkes, fra jordvalg til planteavstand.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'pallet collar garden',
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
        <section className="relative h-[60vh] min-h-[400px] w-full md:h-[80vh]">
          <Image 
            src="https://placehold.co/1920x1080.png" 
            alt="En frodig kjøkkenhage i morgensol"
            fill
            className="object-cover"
            data-ai-hint="kitchen garden sunrise"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
              Fra frø til festmåltid
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
              Oppdag gleden ved å dyrke dine egne grønnsaker, urter og bær.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 lg:py-16">
            <div className="container mx-auto max-w-6xl px-4">
                 <Breadcrumb items={breadcrumbs} className="mb-8" />
            
                {/* 2. Captivating Introduction */}
                <section className="mx-auto max-w-3xl text-center">
                    <p className="font-headline text-xl leading-relaxed text-muted-foreground md:text-2xl">
                        Det er noe magisk med å hente ingredienser rett fra egen hage. Lyden av en crisp salat som rives, duften av ferske urter, og smaken av solmodne tomater. En kjøkkenhage er mer enn bare mat – det er en kilde til glede, læring og bærekraftig luksus.
                    </p>
                </section>
            </div>
            
            {/* 3. Visual Gallery */}
            <section className="container mx-auto max-w-6xl px-4 my-16 lg:my-24">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    
                    <div className="md:col-span-3 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image src="https://placehold.co/800x600.png" alt="Nærbilde av hender som planter et lite frø i jorden" fill className="object-cover" data-ai-hint="hands planting seed" sizes="(max-width: 768px) 100vw, 60vw" />
                    </div>

                    <div className="md:col-span-2 flex items-center justify-center p-6 bg-secondary rounded-lg">
                        <blockquote className="font-headline text-2xl text-center text-secondary-foreground italic">
                            "Å dyrke en hage er å tro på morgendagen."
                            <cite className="block text-base not-italic mt-2 font-sans font-medium">— Audrey Hepburn</cite>
                        </blockquote>
                    </div>

                    <div className="md:col-span-2 relative aspect-square rounded-lg overflow-hidden shadow-lg">
                        <Image src="https://placehold.co/600x600.png" alt="En samling av fargerike grønnsaker i en kurv" fill className="object-cover" data-ai-hint="vegetable basket harvest" sizes="(max-width: 768px) 100vw, 40vw" />
                    </div>

                     <div className="md:col-span-3 flex flex-col justify-center bg-card p-6 md:p-8 rounded-lg">
                        <h3 className="font-headline text-2xl font-bold mb-3">En hage for alle sanser</h3>
                        <p className="text-muted-foreground">
                            Planlegg for variasjon. Tenk på farger, former og dufter. Plant høye solsikker ved siden av lave ringblomster. La agurker klatre opp et espalier for å skape høyde, og la gressløkens lilla blomster bli et summende midtpunkt for pollinerende insekter. En kjøkkenhage kan være like vakker som den er produktiv.
                        </p>
                    </div>

                </div>
            </section>

             {/* 4. "Shop the Look" Section */}
            <section className="container mx-auto max-w-6xl px-4 my-16 lg:my-24">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold text-foreground">Skap stilen</h2>
                    <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                        Her er produktene du trenger for å starte din egen kjøkkenhage.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {shopTheLookProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="#">Se alt til kjøkkenhagen <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

      </main>

      <FooterComponent />
    </div>
  );
}
