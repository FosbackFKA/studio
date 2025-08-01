
'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/product-card';
import { ArrowRight, CheckCircle2, Rabbit, Info, Calendar, User } from 'lucide-react';
import type { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { ArticlesSection } from '@/components/sections/articles-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


// Import local images for the article
import heroImage from '@/components/common/stegforstegmal/hero.jpg';
import step1Image from '@/components/common/stegforstegmal/1.jpg';
import step2Image from '@/components/common/stegforstegmal/2.jpg';
import step3Image from '@/components/common/stegforstegmal/3.jpg';
import step4Image from '@/components/common/stegforstegmal/4.jpg';
import step5Image from '@/components/common/stegforstegmal/5.jpg';

// Import local images for products and related articles
import product1 from '@/components/common/artikler/1.webp';
import product3 from '@/components/common/artikler/2.webp';
import artikkel1 from '@/components/common/artikler/1.webp';
import artikkel2 from '@/components/common/artikler/2.webp';
import artikkel3 from '@/components/common/artikler/3.webp';

const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Artikler', href: '#' },
    { name: 'Steg-for-steg', href: '/artikler/stegforsteg' },
];

const steps = [
  {
    step: 1,
    title: 'Velg riktig kaninhus',
    description: 'Et godt kaninhus er nøkkelen. Se etter et hus med en adskilt, trekkfri sovedel og en romslig, nettingkledd løpegård. Huset må være solid og rovdyrsikkert, med materialer som tåler vær og vind. Sørg for at det er enkelt å rengjøre, med tak som kan åpnes eller uttrekkbar bunn.',
    image: step1Image,
    'data-ai-hint': 'rabbit hutch wood'
  },
  {
    step: 2,
    title: 'Finn den perfekte plasseringen',
    description: 'Plasser huset på et sted som er beskyttet mot direkte sollys om sommeren og kald vind om vinteren. En lun krok inntil en husvegg eller under et tak er ideelt. Underlaget bør være jevnt og tørt. Unngå å plassere det rett på fuktig gress, da dette kan føre til råte i treverket.',
    image: step2Image,
    'data-ai-hint': 'sheltered corner garden'
  },
  {
    step: 3,
    title: 'Innred for komfort og trivsel',
    description: 'Fyll sovedelen rikelig med halm eller annet egnet redemateriale. I løpegården legger du et tykt lag med bunnstrø, som f.eks. flis eller spon, for å absorbere fuktighet. Sørg for at kaninen har tilgang til en solid matskål som ikke kan tippes, og en drikkeflaske eller vannskål med friskt vann.',
    image: step3Image,
    'data-ai-hint': 'rabbit bedding hay'
  },
  {
    step: 4,
    title: 'Riktig fôring er avgjørende',
    description: 'Hoveddelen av kaninens kosthold skal bestå av høy av god kvalitet. Dette er avgjørende for fordøyelsen og tannhelsen. Gi i tillegg en liten mengde kaninpellets daglig, og suppler med trygge, grønne bladgrønnsaker. Friskt vann må alltid være tilgjengelig.',
    image: step4Image,
    'data-ai-hint': 'rabbit food pellets'
  },
  {
    step: 5,
    title: 'Aktivisering og tilsyn',
    description: 'Selv med en løpegård, trenger kaninen din daglig aktivisering og sosial kontakt. La den hoppe fritt i en sikker, større luftegård under oppsyn. Sjekk kaninen og huset daglig for å forsikre deg om at alt er som det skal. Se etter tegn på sykdom og påse at huset er rent og trygt.',
    image: step5Image,
    'data-ai-hint': 'rabbit playing tunnel'
  },
];

const shopTheLookProducts: Product[] = [
  {
    id: 'KANINHUS01',
    title: 'Kaninhus med løpegård',
    brand: 'Felleskjøpet',
    price: '2 499,-',
    imageUrl: product1,
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 32,
    'data-ai-hint': 'rabbit hutch wood'
  },
  {
    id: 'KANINFOR01',
    title: 'Kaninpellets Komplett 5kg',
    brand: 'Felleskjøpet',
    price: '189,-',
    imageUrl: product3,
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 112,
    'data-ai-hint': 'rabbit food pellets'
  },
  {
    id: 'HOY01',
    title: 'Høy til smådyr',
    brand: 'Felleskjøpet',
    price: '99,-',
    imageUrl: product3,
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 250,
    'data-ai-hint': 'hay small animals'
  },
  {
    id: 'VANNFLASKE01',
    title: 'Vannflaske til smådyr 500ml',
    brand: 'Felleskjøpet',
    price: '129,-',
    imageUrl: artikkel2,
    productUrl: '#',
    onlineStock: true,
    storeStockCount: 180,
    'data-ai-hint': 'water bottle rodent'
  },
];

const relatedArticles = [
    {
      title: 'Hva kan kaniner spise?',
      excerpt: 'Lær hvilke grønnsaker, urter og grener som er trygge og sunne for kaninen din. En variert diett er viktig for trivselen.',
      imageUrl: artikkel1,
      articleUrl: '#',
      'data-ai-hint': 'rabbit eating greens'
    },
    {
      title: 'Slik unngår du de vanligste kaninsykdommene',
      excerpt: 'Forebygging er den beste medisin. Les om hvordan riktig kosthold, renhold og oppmerksomhet kan holde kaninen din frisk og glad.',
      imageUrl: artikkel2,
      articleUrl: '#',
      'data-ai-hint': 'healthy rabbit checkup'
    },
    {
      title: 'Aktiviseringstips for kanin',
      excerpt: 'En stimulert kanin er en lykkelig kanin. Få tips til leker og aktiviteter som utfordrer kaninens naturlige instinkter.',
      imageUrl: artikkel3,
      articleUrl: '#',
      'data-ai-hint': 'rabbit toys'
    },
];

export default function StegForStegPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />

      <main className="flex-grow">
        <section className="relative h-[50vh] min-h-[350px] w-full lg:h-[60vh]">
          <Image
            src={heroImage}
            alt="En glad kanin i et frodig, grønt utemiljø"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            data-ai-hint="happy rabbit green grass"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-start justify-end px-4 pb-16 text-left">
            <h1 className="font-headline text-4xl font-bold leading-tight text-yellow-300 md:text-5xl lg:text-6xl">
              Guide: Slik trives kaninen i utendørs kaninhus
            </h1>
          </div>
        </section>

        <div className="bg-background py-12 lg:py-16">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className='max-w-5xl mx-auto'>
                <Breadcrumb items={breadcrumbs} className="mb-8" />
                
                <div className="prose prose-lg max-w-none mx-auto text-foreground">
                    <div className="mb-12 border-y py-4">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarFallback>FK</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-foreground">Felleskjøpets ekspert</p>
                                <p className="text-sm text-muted-foreground">Våre agronomer og produkspesialister</p>
                            </div>
                        </div>
                         <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Publisert: 14. august 2024</span>
                        </div>
                    </div>
                    <p>
                        Å la kaninen bo ute kan gi den et rikt og stimulerende liv. Følg våre steg for å skape et trygt og komfortabelt hjem for din langørede venn. Kaniner er sosiale og nysgjerrige dyr som elsker frisk luft og god plass. Et godt tilrettelagt utendørs kaninhus gir dem mulighet til å utfolde seg i et naturlig miljø, samtidig som de er beskyttet mot vær og rovdyr. Denne guiden tar deg gjennom alt du trenger å vite for å skape det perfekte utendørshjemmet for kaninen din.
                    </p>
                </div>
                
                <section className="my-16 md:my-24 mx-auto max-w-4xl space-y-16">
                {steps.map((step, index) => (
                    <div key={step.step} className={cn("grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12", index % 2 !== 0 && "md:grid-flow-col-dense")}>
                    <div className={cn("order-2", index % 2 !== 0 && "md:order-1")}>
                        <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-headline text-2xl font-bold text-primary-foreground">
                            {step.step}
                        </div>
                        <h2 className="font-headline text-3xl font-bold text-foreground">{step.title}</h2>
                        </div>
                        <p className="prose max-w-none text-foreground">{step.description}</p>
                    </div>
                    <div className={cn("relative aspect-video overflow-hidden rounded-lg shadow-xl", index % 2 !== 0 ? "md:order-2" : "md:order-1")}>
                        <Image src={step.image} alt={step.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint={step['data-ai-hint']} />
                    </div>
                    </div>
                ))}
                </section>
                
                <section className="my-16 md:my-24 rounded-lg bg-secondary/30 p-8 md:p-12 lg:p-16">
                    <div className="mb-12 text-center max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold text-foreground">Utstyret du trenger</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Her er produktene som gir kaninen din en trygg og god start på utelivet.</p>
                    </div>
                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {shopTheLookProducts.map((product) => <ProductCard key={product.id} {...product} />)}
                    </div>
                    {/* Mobile Horizontal Scroll */}
                    <div className="md:hidden">
                        <div className="flex space-x-4 overflow-x-auto px-4 pb-4 no-scrollbar -mx-4">
                            {shopTheLookProducts.map((product) => (
                                <div key={product.id} className="w-2/3 flex-shrink-0">
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 text-left lg:text-center">
                        <Button asChild size="lg" variant="outline-primary"><Link href="#">Se alt til smådyr <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                    </div>
                </section>


                <div className="my-16 space-y-12 md:my-24">
                     <div className='max-w-4xl mx-auto prose prose-lg'>
                        <h2 className="font-headline text-2xl font-bold text-foreground mb-4">Fordeler med uteliv for kanin</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Mer plass og bevegelsesfrihet,</strong> som forebygger atferdsproblemer.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Naturlig stimulering</strong> fra lyder, lukter og synsinntrykk.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Bedre pels- og neglhelse</strong> gjennom et mer naturlig miljø.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Mulighet til å utøve naturlig atferd</strong> som graving og hopping.</span></li>
                        </ul>
                    </div>
                    
                    <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline text-2xl"><Info className="h-7 w-7 text-primary" />Visste du at?</CardTitle>
                        </CardHeader>
                        <CardContent className="prose max-w-none text-foreground">
                            <p>Kaniner har et synsfelt på nesten 360 grader, noe som hjelper dem å oppdage rovdyr fra nesten alle vinkler! Den eneste blindsonen er en liten flekk rett foran nesen.</p>
                            <p>Tennene deres slutter aldri å vokse. Derfor er det livsviktig med rikelig tilgang på høy, slik at tennene slipes ned naturlig.</p>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-secondary/30 border-secondary-foreground/10 max-w-4xl mx-auto">
                        <CardContent className="p-6 flex items-start gap-4">
                            <Avatar className="h-12 w-12 flex-shrink-0">
                                <AvatarFallback>FK</AvatarFallback>
                            </Avatar>
                            <blockquote className="prose prose-lg max-w-none">
                                <p className="font-semibold not-italic">Et godt utemiljø gir kaninen muligheten til et fullverdig liv. Husk at daglig tilsyn og sosial kontakt er like viktig som selve huset. En kanin som er vant til å være ute tåler kulde godt, så lenge den har et tørt og trekkfritt sted å sove.</p>
                                <footer className="text-sm not-italic text-muted-foreground">— Felleskjøpets smådyrekspert</footer>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>

                <ArticlesSection 
                    title="Mer om kaninhold"
                    articles={relatedArticles}
                    linkText="Se alle artikler om smådyr"
                    linkHref="#"
                    className="mt-12"
                />
            </div>
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
