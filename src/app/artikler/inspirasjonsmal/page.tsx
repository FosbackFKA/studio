
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/product-card';
import { ArrowRight, Star, Video, Image as ImageIcon, Sparkles, Loader2 } from 'lucide-react';
import type { Product } from '@/types/product';
import { ArticlesSection } from '@/components/sections/articles-section';
import { generateVideo } from '@/ai/flows/video-generation-flow';
import { Card, CardContent } from '@/components/ui/card';

// Import local images
import heroImage from '@/components/common/inspirasjonsmal/inspirasjon-hero.jpg';
import challengeImage from '@/components/common/inspirasjonsmal/foer.png';
import takAvLysImage from '@/components/common/inspirasjonsmal/hengelys.png';
import ledVeienImage from '@/components/common/inspirasjonsmal/solcellelys.jpg';
import levendeLysImage from '@/components/common/inspirasjonsmal/lanterne.jpg';
import utekjokkenImage from '@/components/common/inspirasjonsmal/utekjokken.jpg';
import urterImage from '@/components/common/inspirasjonsmal/urter.jpg';
import sitteplassImage from '@/components/common/inspirasjonsmal/sitteplass.jpg';


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

const galleryImages = [
    { src: takAvLysImage, alt: "En lyslenke spent over en terrasse", title: "Tak av lys", description: "Lyslenker over sittegruppen skaper en følelse av et lunt og definert uterom.", hint: "string lights patio" },
    { src: ledVeienImage, alt: "Solcellelamper langs en hagesti", title: "Led veien", description: "Solcellelamper langs stier og i bed fremhever hagens vakre detaljer.", hint: "solar lights path" },
    { src: levendeLysImage, alt: "En stor lanterne med blokklys på et bord", title: "Levende lys", description: "Store lanterner og lykter gir en ekstra koselig og levende glød.", hint: "lantern candle table" },
    { src: utekjokkenImage, alt: "Et enkelt utekjøkken med grill", title: "Utekjøkken", description: "Et praktisk hjørne for matlaging gjør det enkelt å nyte måltider ute.", hint: "outdoor kitchen grill" },
    { src: urterImage, alt: "Krukker med friske urter", title: "Dyrk dine egne smaker", description: "Urter i krukker er både dekorativt og praktisk for utekokken.", hint: "herbs pots" },
    { src: sitteplassImage, alt: "En koselig sitteplass med puter og pledd", title: "Myke tekstiler", description: "Puter og pledd gjør sitteplassen komfortabel og innbydende.", hint: "cozy outdoor seating" },
];

function VideoGenerator() {
    const [videoUrl, setVideoUrl] = React.useState<string | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleGenerateVideo = async () => {
        setIsLoading(true);
        setError(null);
        setVideoUrl(null);
        try {
            const prompt = "A drone pans slowly across a magical Scandinavian garden at dusk. A cozy fire pit is glowing, and warm string lights are draped above a comfortable seating area. The atmosphere is peaceful and inviting.";
            const result = await generateVideo(prompt);
            if (result.videoUrl) {
                setVideoUrl(result.videoUrl);
            } else {
                throw new Error(result.error || "Videogenerering feilet.");
            }
        } catch (e: any) {
            setError(e.message || "En ukjent feil oppstod under videogenerering.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="overflow-hidden">
            <CardContent className="p-4 text-center">
                <Video className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-2 font-headline text-lg font-bold">Se hagen komme til liv!</h3>
                <p className="mt-1 text-sm text-muted-foreground">Trykk på knappen for å la vår KI-assistent generere en stemningsvideo av drømmehagen.</p>
                <Button onClick={handleGenerateVideo} disabled={isLoading} className="mt-4">
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            <span>Genererer video...</span>
                        </>
                    ) : (
                        <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            <span>Generer stemningsvideo</span>
                        </>
                    )}
                </Button>
                {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
                {videoUrl && (
                    <div className="mt-4 aspect-video w-full overflow-hidden rounded-md border">
                        <video src={videoUrl} controls autoPlay muted loop className="h-full w-full object-cover">
                            Nettleseren din støtter ikke video-elementet.
                        </video>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}


// --- Main Page Component ---

export default function InspirationTemplatePage() {
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
          <div className="container relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-end px-4 pb-16 text-center text-white md:pb-24">
            <h1 className="font-headline text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Kari skapte sin drømmehage med Felleskjøpet
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90 md:text-xl">
              Se hvordan enkle grep og de riktige produktene forvandlet en vanlig uteplass til en magisk oase for hele familien.
            </p>
          </div>
        </section>

        <div className="bg-background py-12 lg:py-16">
            <div className="container mx-auto max-w-7xl px-4">
                 <Breadcrumb items={breadcrumbs} className="mb-10" />
                 
                 <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2">
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

                        {/* 3. Visuell Inspirasjon */}
                        <section className="mb-16 lg:mb-24">
                             <div className="mb-12 text-center">
                                <h2 className="font-headline text-3xl font-bold text-foreground">Løsningen: Skap magi med lys og varme</h2>
                                <p className="mx-auto mt-2 max-w-3xl text-lg text-muted-foreground">
                                    Riktig belysning og en sentral varmekilde kan forvandle enhver uteplass. Ved å kombinere funksjonelt og stemningsskapende lys, skapte Kari et eventyrlig landskap.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {galleryImages.map((image) => (
                                    <div key={image.title} className="flex flex-col items-center text-center">
                                        <div className="group relative mb-4 w-full aspect-square overflow-hidden rounded-lg shadow-lg">
                                            <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={image.hint} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
                                        </div>
                                        <h3 className="font-headline text-xl font-semibold">{image.title}</h3>
                                        <p className="mt-1 text-muted-foreground">{image.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. Produktkarusell ("Shop the Look") */}
                        <section className="rounded-lg bg-secondary/30 py-16">
                            <div className="mb-12 px-4 text-center">
                                <h2 className="font-headline text-3xl font-bold text-foreground">Produktene Kari brukte</h2>
                                <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                                    Her er produktene som forvandlet uteplassen. Gjenskap stilen og magien selv.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 px-4 lg:grid-cols-4">
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
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <VideoGenerator />
                             <ArticlesSection
                                title="Mer inspirasjon"
                                articles={relatedArticles}
                                linkText="Se alle artikler"
                                linkHref="#"
                                className="!py-0" // Reset padding as it's now in a sidebar
                            />
                        </div>
                    </aside>
                 </div>
            </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
