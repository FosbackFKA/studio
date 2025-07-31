
'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/product-card';
import { ArrowRight, ChevronLeft, ChevronRight, X, Quote } from 'lucide-react';
import type { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { ArticlesSection } from '@/components/sections/articles-section';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


// Import local images
import heroImage from '@/components/common/inspirasjonsmal/inspirasjon-hero.jpg';
import challengeImage from '@/components/common/inspirasjonsmal/foer.png';
import baalpanneImage from '@/components/common/inspirasjonsmal/p_baalpanne.jpg';
import popcornImage from '@/components/common/inspirasjonsmal/p_popcorn.jpg';
import lyslenkeImage from '@/components/common/inspirasjonsmal/p_lyslenke.jpg';
import ullpleddImage from '@/components/common/inspirasjonsmal/p_ullpledd.jpg';
import artikkel1 from '@/components/common/artikler/1.webp';
import artikkel2 from '@/components/common/artikler/2.webp';
import artikkel3 from '@/components/common/artikler/3.webp';

// Import new inspiration gallery images
import inspo1 from '@/components/common/inspirasjonsmal/inspo1.jpg';
import inspo2 from '@/components/common/inspirasjonsmal/inspo2.jpg';
import inspo3 from '@/components/common/inspirasjonsmal/inspo3.jpg';
import inspo4 from '@/components/common/inspirasjonsmal/inspo4.jpg';
import inspo5 from '@/components/common/inspirasjonsmal/inspo5.jpg';


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
    src: inspo1,
    alt: 'En koselig uteplass med bålpanne og stoler om kvelden',
    title: 'Samlingspunkt med bålpanne',
    description: 'En bålpanne blir raskt det naturlige midtpunktet for varme og hygge.',
    hint: 'cozy firepit evening',
    className: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    src: inspo2,
    alt: 'To personer som koser seg med ullpledd rundt en bålpanne',
    title: 'Hold varmen',
    description: 'Myke ullpledd er perfekte for å forlenge de kjølige sommerkveldene.',
    hint: 'couple wool blanket',
    className: 'col-span-1',
  },
  {
    src: inspo3,
    alt: 'En lyslenke som henger i et tre og lyser opp uteplassen',
    title: 'Stemningsfull belysning',
    description: 'Lyslenker i trær eller over terrassen skaper en magisk atmosfære.',
    hint: 'string lights tree',
    className: 'col-span-1',
  },
  {
    src: inspo4,
    alt: 'Popcorn som popper i en popcorngryte over åpen ild',
    title: 'Noe godt å bite i',
    description: 'Lag deilig popcorn over bålpannen – en favoritt for både store og små.',
    hint: 'popcorn campfire',
    className: 'col-span-1',
  },
    {
    src: inspo5,
    alt: 'Nærbilde av en moderne solcellelampe i et blomsterbed',
    title: 'Moderne solcellelys',
    description: 'Stilrene solcellelamper gir et elegant og funksjonelt lys langs stier og i bed.',
    hint: 'modern solar light',
    className: 'col-span-1',
  },
];


// --- Main Page Component ---

export default function InspirationTemplatePage() {
    const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);
    const touchStartX = React.useRef(0);
    const touchEndX = React.useRef(0);

    const openDialog = (index: number) => setSelectedImageIndex(index);
    const closeDialog = () => setSelectedImageIndex(null);

    const nextImage = React.useCallback(() => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % galleryImages.length);
    }, [selectedImageIndex]);

    const prevImage = React.useCallback(() => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + galleryImages.length) % galleryImages.length);
    }, [selectedImageIndex]);

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeDialog();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, nextImage, prevImage]);
    
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 75) {
            nextImage();
        }
        if (touchStartX.current - touchEndX.current < -75) {
            prevImage();
        }
    };

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
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-center justify-end px-4 pb-16 text-center md:pb-24">
            <h1 className="font-headline text-4xl font-bold leading-tight text-yellow-300 md:text-6xl lg:text-7xl">
              Kari skapte sin drømmehage med Felleskjøpet
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-yellow-300/90 md:text-xl">
              Se hvordan enkle grep og de riktige produktene forvandlet en vanlig uteplass til en magisk oase for hele familien.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 lg:py-16">
            <div className="container mx-auto max-w-[1542px] px-4">
                 <Breadcrumb items={breadcrumbs} className="mb-12" />
                 
                {/* 2. Sesongens utfordring & løsning + Kundeeksempel */}
                <section className="mb-16 md:mb-24 mx-auto max-w-[1542px]">
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
                     <div className="mt-16 text-center mx-auto max-w-3xl lg:mt-24">
                        <Quote className="mx-auto h-12 w-12 text-primary/30" />
                        <blockquote className="mt-4">
                            <p className="font-headline text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                                "Bålpannen ble hjertet i hagen vår. Den gir ikke bare varme, men skaper en helt unik stemning. Det har totalt forandret hvordan vi bruker uteområdet vårt."
                            </p>
                            <cite className="mt-6 block text-base not-italic text-muted-foreground">
                                — Kari N, Fornøyd kunde
                            </cite>
                        </blockquote>
                    </div>
                </section>

                {/* 3. Visuell Inspirasjon (New Gallery) */}
                <section className="mb-16 lg:mb-24">
                    <div className="mb-12 text-center max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold text-foreground">Løsningen: Skap magi med lys og varme</h2>
                        <p className="mx-auto mt-2 max-w-3xl text-lg text-muted-foreground">
                            Riktig belysning og en sentral varmekilde kan forvandle enhver uteplass. Ved å kombinere funksjonelt og stemningsskapende lys, skapte Kari et eventyrlig landskap.
                        </p>
                    </div>

                    <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && closeDialog()}>
                      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
                          {galleryImages.map((image, index) => (
                              <DialogTrigger key={index} asChild>
                                  <button onClick={() => openDialog(index)} className={cn('group relative overflow-hidden rounded-lg shadow-lg', image.className)}>
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

                      <DialogContent 
                          className="bg-transparent border-none shadow-none p-0 max-w-none w-screen h-screen"
                          onOpenAutoFocus={(e) => e.preventDefault()}
                      >
                          {selectedImageIndex !== null && (
                          <div 
                              className="fixed inset-0 z-50 flex flex-col"
                              onClick={closeDialog}
                              onTouchStart={handleTouchStart}
                              onTouchMove={handleTouchMove}
                              onTouchEnd={handleTouchEnd}
                          >
                              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
                              
                              <div className="relative z-10 flex flex-1 items-center justify-start p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
                                  <div className="relative flex-1 w-full h-full flex items-center justify-center">
                                      <Image
                                          src={galleryImages[selectedImageIndex].src}
                                          alt={galleryImages[selectedImageIndex].alt}
                                          width={1920}
                                          height={1080}
                                          className="h-auto w-auto max-h-full max-w-full object-contain rounded-lg"
                                          sizes="100vw"
                                      />
                                  </div>
                              </div>
                              
                              <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/50 p-4 text-center text-white backdrop-blur-sm">
                                  <DialogTitle className="text-lg font-bold">{galleryImages[selectedImageIndex].title}</DialogTitle>
                                  <DialogDescription className="text-sm text-white/90">{galleryImages[selectedImageIndex].description}</DialogDescription>
                              </div>
                              
                              <Button onClick={(e) => { e.stopPropagation(); closeDialog(); }} variant="ghost" size="icon" className="absolute top-4 right-4 z-20 h-12 w-12 rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 hover:text-white">
                                  <X className="h-8 w-8" />
                              </Button>
                              <Button onClick={(e) => { e.stopPropagation(); prevImage(); }} variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 hover:text-white">
                                  <ChevronLeft className="h-10 w-10" />
                              </Button>
                              <Button onClick={(e) => { e.stopPropagation(); nextImage(); }} variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 hover:text-white">
                                  <ChevronRight className="h-10 w-10" />
                              </Button>
                          </div>
                          )}
                      </DialogContent>
                    </Dialog>
                </section>

                {/* 4. Produktkarusell ("Shop the Look") */}
                <section className="rounded-lg bg-secondary/30 p-8 md:p-12 lg:p-16">
                    <div className="mb-12 text-center max-w-4xl mx-auto">
                        <h2 className="font-headline text-3xl font-bold text-foreground">Produktene Kari brukte</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                            Her er produktene som forvandlet uteplassen. Gjenskap stilen og magien selv.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-5xl mx-auto">
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
