
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BondeHeaderComponent } from '@/components/layout/bonde-header';
import { FooterComponent } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Briefcase, Cog, HardHat, Leaf, Lightbulb, Tractor, Wheat, Wrench } from 'lucide-react';
import { ProductCard } from '@/components/common/product-card';
import { ArticleCard } from '@/components/common/article-card';
import type { Product } from '@/types/product';

const featuredProducts: Product[] = [
  {
    id: 'JD6R150',
    title: 'John Deere 6R 150',
    brand: 'John Deere',
    price: 'Ring for pris',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'john deere tractor',
    productUrl: '#',
  },
  {
    id: 'SAAKORN01',
    title: 'Såkorntilbud Vår 2025',
    brand: 'Felleskjøpet',
    price: 'Se priser',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'seed bags farm',
    productUrl: '#',
  },
  {
    id: 'YARA25KG',
    title: 'YaraMila® Fullgjødsel® 25-2-6',
    brand: 'Yara',
    price: 'Fra 549,-',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'fertilizer bags pallet',
    productUrl: '#',
  },
    {
    id: 'DELAVALVMS',
    title: 'DeLaval VMS™ V300 Melkerobot',
    brand: 'DeLaval',
    price: 'Be om tilbud',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'robotic dairy farm',
    productUrl: '#',
  },
];

const featuredArticles = [
  {
    title: 'Nytt regelverk for gjødsling: Dette må du vite',
    excerpt: 'Fra 1. august trer nye regler i kraft. Vi gir deg oversikten over de viktigste endringene og hvordan du kan tilpasse driften.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'agriculture regulations document',
    articleUrl: '#',
  },
  {
    title: 'Optimalisering av grovfôr med presisjonsteknologi',
    excerpt: 'Lær hvordan sensorer og dataanalyse kan hjelpe deg med å øke avlingen og kvaliteten på grovfôret ditt denne sesongen.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'drone agriculture field',
    articleUrl: '#',
  },
  {
    title: 'Slik forbereder du maskinparken for innhøstingen',
    excerpt: 'En grundig sjekkliste for vedlikehold av traktor, tresker og annet utstyr for å sikre en problemfri innhøsting.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'combine harvester maintenance',
    articleUrl: '#',
  },
];

const services = [
    {
        icon: Wrench,
        title: 'Verkstedtjenester',
        description: 'Våre autoriserte verksteder sikrer minimal ståtid og maksimal ytelse for din maskinpark.',
        href: '#'
    },
    {
        icon: Tractor,
        title: 'Finansiering',
        description: 'Vi tilbyr skreddersydde finansieringsløsninger for kjøp av maskiner og utstyr.',
        href: '#'
    },
    {
        icon: HardHat,
        title: 'Bygg- og anleggsløsninger',
        description: 'Fra planlegging til ferdigstillelse av landbruksbygg, fjøs og driftsbygninger.',
        href: '#'
    },
    {
        icon: Leaf,
        title: 'Presisjonsjordbruk',
        description: 'Optimaliser driften med data, sensorer og GPS-teknologi for økt lønnsomhet.',
        href: '#'
    }
]

export default function BondePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BondeHeaderComponent />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full bg-black">
          <Image
            src="https://placehold.co/1920x800.png"
            alt="Traktor på et jorde i soloppgang"
            data-ai-hint="tractor field drone"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-start justify-center px-4 text-left text-white">
            <h1 className="max-w-4xl font-headline text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Din partner for et moderne og effektivt landbruk
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
              Vi leverer kunnskapen, teknologien og utstyret du trenger for å drive lønnsomt og bærekraftig.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="h-12 bg-yellow-300 text-primary hover:bg-yellow-300/90">
                    <Link href="#">Se våre maskiner</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-white text-white hover:bg-white/10">
                    <Link href="#">Kontakt en fagkonsulent</Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-secondary/30 py-16 lg:py-24">
             <div className="container mx-auto max-w-[1542px] px-4">
                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                     <CategoryCard title="Effektivt Landbruk" icon={Wheat} href="#" description="Alt du trenger av såvarer, gjødsel og plantevern." />
                     <CategoryCard title="Maskin & Utstyr" icon={Tractor} href="#" description="Traktorer, redskap og teknologi fra ledende merkevarer." />
                     <CategoryCard title="Drift & Vedlikehold" icon={Cog} href="#" description="Reservedeler, verkstedtjenester og rekvisita for din bedrift." />
                     <CategoryCard title="Kunnskap & Rådgivning" icon={Lightbulb} href="#" description="Få tilgang til våre fagkonsulenter og kurs." />
                 </div>
             </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 lg:py-24">
            <div className="container mx-auto max-w-[1542px] px-4">
                <div className="mb-10 text-center">
                    <h2 className="font-headline text-4xl font-bold text-foreground">Utvalgte produkter og løsninger</h2>
                    <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                        Kvalitetsutstyr som er bygget for å vare og levere resultater.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredProducts.map(p => <ProductCard key={p.id} {...p} />)}
                </div>
                <div className="mt-12 text-center">
                    <Button asChild size="lg">
                        <Link href="#">Se alle produkter for bonde og bedrift <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
        
        {/* Services Section */}
        <section className="bg-secondary/30 py-16 lg:py-24">
            <div className="container mx-auto max-w-[1542px] px-4">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-4xl font-bold text-foreground">En komplett partner for din drift</h2>
                    <p className="mx-auto mt-2 max-w-3xl text-lg text-muted-foreground">
                        Vi tilbyr mer enn bare produkter. Våre tjenester er utviklet for å gjøre din hverdag enklere, mer effektiv og mer lønnsom.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map(service => (
                        <div key={service.title} className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <h3 className="font-headline text-xl font-bold">{service.title}</h3>
                            <p className="mt-1 text-muted-foreground">{service.description}</p>
                            <Button asChild variant="link" className="mt-2">
                                <Link href={service.href}>Les mer <ArrowRight className="ml-1 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* News/Articles Section */}
        <section className="py-16 lg:py-24">
            <div className="container mx-auto max-w-[1542px] px-4">
                 <div className="mb-10 text-center">
                    <h2 className="font-headline text-4xl font-bold text-foreground">Aktuelt fra landbruket</h2>
                    <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                        Få med deg siste nytt, faglige oppdateringer og tips fra våre eksperter.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {featuredArticles.map(article => <ArticleCard key={article.title} {...article} />)}
                </div>
            </div>
        </section>
        
        {/* Sustainability Section */}
        <section className="bg-primary-dark-background text-primary-foreground">
             <div className="container mx-auto max-w-[1542px] px-4 py-16 lg:py-24">
                 <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div>
                         <Image src="https://placehold.co/800x600.png" width={800} height={600} alt="Grønt jorde med sol" data-ai-hint="green field sustainable" className="rounded-lg" />
                    </div>
                    <div className="max-w-xl">
                        <Leaf className="h-12 w-12 text-yellow-300 mb-4" />
                        <h2 className="font-headline text-4xl font-bold text-yellow-300">Sammen for et bærekraftig norsk landbruk</h2>
                        <p className="mt-4 text-lg text-white/80">
                            Bærekraft er kjernen i alt vi gjør. Vi jobber kontinuerlig med å utvikle løsninger som reduserer klimautslipp, ivaretar jordsmonnet og sikrer en trygg og lønnsom matproduksjon for fremtidige generasjoner.
                        </p>
                        <Button asChild size="lg" variant="outline" className="mt-8 border-yellow-300 text-yellow-300 hover:bg-yellow-300/10 hover:text-yellow-300">
                            <Link href="#">Les mer om vårt bærekraftsarbeid</Link>
                        </Button>
                    </div>
                 </div>
             </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}

// Sub-component for category cards to keep the main component cleaner
function CategoryCard({ title, icon: Icon, description, href }: { title: string; icon: React.ElementType; description: string; href: string }) {
    return (
        <Link href={href} className="group block">
            <Card className="flex h-full transform flex-col text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader className="items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Icon className="h-8 w-8" />
                    </div>
                </CardHeader>
                <CardContent>
                    <CardTitle className="font-headline text-2xl group-hover:text-primary">{title}</CardTitle>
                    <p className="mt-2 text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </Link>
    )
}
