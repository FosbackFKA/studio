
'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/product-card';
import { ArrowRight, X } from 'lucide-react';
import type { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { ArticlesSection } from '@/components/sections/articles-section';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';


// Import local images
import heroImage from '@/components/common/inspirasjonsmal/inspirasjon-hero.jpg';
import challengeImage from '@/components/common/inspirasjonsmal/foer.png';
import takAvLysImage from '@/components/common/inspirasjonsmal/hengelys.png';
import ledVeienImage from '@/components/common/inspirasjonsmal/solcellelys.jpg';
import levendeLysImage from '@/components/common/inspirasjonsmal/lanterne.jpg';
import baalpanneImage from '@/components/common/inspirasjonsmal/p_baalpanne.jpg';
import popcornImage from '@/components/common/inspirasjonsmal/p_popcorn.jpg';
import lyslenkeImage from '@/components/common/inspirasjonsmal/p_lyslenke.jpg';
import ullpleddImage from '@/components/common/inspirasjonsmal/p_ullpledd.jpg';
import artikkel1 from '@/components/common/artikler/1.webp';
import artikkel2 from '@/components/common/artikler/2.webp';
import artikkel3 from '@/components/common/artikler/3.webp';


// --- Page Specific Data ---

const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Artikler', href: '#' },
    { name: 'Inspirasjonsmal', href: '/artikler/inspirasjonsmal' },
];

const shopTheLookProducts: Product[] = [
  {
    id: 'ESPFAT60',
    title: 'Bålpanne 60',
    brand: 'Espegard',
    price: '2 490,-',
    imageUrl: baalpanneImage,
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
    imageUrl: popcornImage,
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
    imageUrl: lyslenkeImage,
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
    imageUrl: ullpleddImage,
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
      imageUrl: artikkel1,
      dataAiHint: 'pressure washer cleaning',
      articleUrl: '#',
    },
    {
      title: 'Vedlikehold av utemøbler i tre',
      excerpt: 'Med riktig vedlikehold kan utemøblene dine i tre vare i mange år. Følg våre enkle steg for å beskytte og bevare treverket.',
      imageUrl: artikkel2,
      dataAiHint: 'wooden outdoor furniture',
      articleUrl: '#',
    },
    {
      title: 'Skap en summende oase for biene',
      excerpt: 'Hjelp de viktige pollinatorene! Lær hvilke blomster du kan plante for å skape en frodig og bievennlig hage eller balkong.',
      imageUrl: artikkel3,
      dataAiHint: 'bees flowers garden',
      articleUrl: '#',
    },
];

const galleryImages: {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  hint: string;
  className: string;
}[] = [
  {
    src: takAvLysImage,
    alt: 'En lyslenke spent over en terrasse',
    title: 'Tak av lys',
    description: 'Lyslenker over sittegruppen skaper en følelse av et lunt og definert uterom.',
    hint: 'string lights patio',
    className: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    src: ledVeienImage,
    alt: 'Solcellelamper langs en hagesti',
    title: 'Led veien',
    description: 'Solcellelamper langs stier og i bed fremhever hagens vakre detaljer.',
    hint: 'solar lights path',
    className: 'col-span-1',
  },
  {
    src: levendeLysImage,
    alt: 'En stor lanterne med blokklys på et bord',
    title: 'Levende lys',
    description: 'Store lanterner og lykter gir en ekstra koselig og levende glød.',
    hint: 'lantern candle table',
    className: 'col-span-1',
  },
  {
    src: artikkel1,
    alt: 'Høytrykkspyler i bruk på terrasse',
    title: 'Rengjør uteområdet',
    description: 'En skinnende ren terrasse er den perfekte basen for en koselig uteplass.',
    hint: 'pressure washer patio',
    className: 'col-span-1',
  },
    {
    src: artikkel2,
    alt: 'Nærbilde av treverk på utemøbler',
    title: 'Vedlikehold møblene',
    description: 'Sørg for at tremøblene dine tåler vær og vind sesong etter sesong.',
    hint: 'wood furniture oil',
    className: 'col-span-1',
  },
];


// --- Main Page Component ---

export default function InspirationTemplatePage() {
    const [selectedImage, setSelectedImage] = React.useState<StaticImageData | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />

      <main className="flex-grow">

        {/* 1. Tittel, ingress og bilde (Hero) */}
        <section className="relative h-[60vh] min-h-[400px] w-full lg:h-[70vh]">
          <Image
            src={heroImage}
            alt="Kari sin drømmehage i skumringen med en tent bålpanne og lyslenker"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="container relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-end px-4 pb-16 text-center text-white md:pb-24">
            <h1 className="font-headline text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Kari skapte sin drømmehage med Felleskjøpet
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90 md:text-xl">
              Se hvordan enkle grep og de riktige produktene forvandlet en vanlig uteplass til en magisk oase for hele familien.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 lg:py-16">
            <div className="container mx-auto max-w-4xl px-4">
                 <Breadcrumb items={breadcrumbs} className="mb-12" />
                 
                {/* 2. Sesongens utfordring & løsning + Kundeeksempel */}
                <section className="mb-16 md:mb-24">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="order-2 md:order-1">
                            <h2 className="font-headline text-3xl font-bold text-foreground">Utfordringen: En kjedelig og lite brukt uteplass</h2>
                            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                "Vi hadde en fin terrasse, men brukte den altfor sjeldent," forteller Kari. "Så fort solen gikk ned, ble det kjølig og mørkt. Vi manglet et naturlig samlingspunkt som kunne forlenge sommerkveldene." Karis utfordring er vanlig – hvordan gjøre uteplassen like innbydende etter mørkets frembrudd? Løsningen ble å fokusere på varme og lys.
                            </p>
                        </div>
                        <div className="relative order-1 aspect-square overflow-hidden rounded-lg shadow-xl md:order-2">
                            <Image src={challengeImage} alt="En kjedelig uteplass før forvandlingen" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint="boring patio before"/>
                        </div>
                    </div>
                    <blockquote className="mt-10 border-l-4 border-primary pl-6 text-lg italic text-muted-foreground">
                        "Bålpannen ble hjertet i hagen vår. Den gir ikke bare varme, men skaper en helt unik stemning. Det har totalt forandret hvordan vi bruker uteområdet vårt."
                        <cite className="mt-3 block not-italic font-semibold text-foreground">— Kari N, Fornøyd kunde</cite>
                    </blockquote>
                </section>

                {/* 3. Visuell Inspirasjon (New Gallery) */}
                <section className="mb-16 lg:mb-24">
                    <div className="mb-12 text-center">
                        <h2 className="font-headline text-3xl font-bold text-foreground">Løsningen: Skap magi med lys og varme</h2>
                        <p className="mx-auto mt-2 max-w-3xl text-lg text-muted-foreground">
                            Riktig belysning og en sentral varmekilde kan forvandle enhver uteplass. Ved å kombinere funksjonelt og stemningsskapende lys, skapte Kari et eventyrlig landskap.
                        </p>
                    </div>
                    <Dialog>
                        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
                            {galleryImages.map((image, index) => (
                                <DialogTrigger key={index} asChild>
                                    <button onClick={() => setSelectedImage(image.src)} className={cn('group relative overflow-hidden rounded-lg shadow-lg', image.className)}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                                            data-ai-hint={image.hint}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                                            <h3 className="font-bold">{image.title}</h3>
                                            <p className="text-sm text-white/80">{image.description}</p>
                                        </div>
                                    </button>
                                </DialogTrigger>
                            ))}
                        </div>
                        <DialogContent className="max-w-4xl h-[80vh] bg-transparent border-none shadow-none">
                             {selectedImage && (
                                <div className="relative w-full h-full">
                                    <Image src={selectedImage} alt="Fullskjermsvisning" fill className="object-contain" sizes="100vw"/>
                                </div>
                             )}
                        </DialogContent>
                    </Dialog>
                </section>

                {/* 4. Produktkarusell ("Shop the Look") */}
                <section className="rounded-lg bg-secondary/30 p-8 md:p-12 lg:p-16">
                    <div className="mb-12 text-center">
                        <h2 className="font-headline text-3xl font-bold text-foreground">Produktene Kari brukte</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                            Her er produktene som forvandlet uteplassen. Gjenskap stilen og magien selv.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {shopTheLookProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                    {/* Call-to-Action */}
                    <div className="mt-12 text-center">
                        <Button asChild size="lg">
                            <Link href="#">Se alt til uteplassen <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </section>

                <ArticlesSection 
                    title="Mer inspirasjon"
                    articles={relatedArticles}
                    linkText="Se alle artikler"
                    linkHref="#"
                />

            </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
