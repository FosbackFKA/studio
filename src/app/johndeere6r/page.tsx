
'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowRight, Zap, Cpu, Armchair, ShieldCheck, Mail, Phone, Settings, Tractor, Wallet, GitCommit, Check, Sun, Moon, Map, Loader, Info, Star, X, MoveHorizontal, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import heroImage from '@/components/common/johndeere6r/hero.jpg';
import consoleImage from '@/components/common/johndeere6r/console.png';
import g5PlusImage from '@/components/common/johndeere6r/G5Plus.png';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';

// Import 360 images
import img0 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00000.jpg';
import img1 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00001.avif';
import img3 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00003.avif';
import img4 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00004.avif';
import img5 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00005.avif';
import img7 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00007.avif';
import img8 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00008.avif';
import img9 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00009.avif';
import img11 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00011.avif';
import img12 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00012.avif';
import img13 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00013.avif';
import img15 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00015.avif';
import img16 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00016.avif';
import img17 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00017.avif';
import img19 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00019.avif';
import img20 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00020.avif';
import img21 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00021.avif';
import img23 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00023.avif';
import img24 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00024.avif';
import img26 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00026.avif';
import img28 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00028.jpg';
import img30 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00030.jpg';
import img32 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00032.jpg';
import img34 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00034.jpg';
import img36 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00036.avif';
import img38 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00038.avif';
import img40 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00040.jpg';
import img42 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00042.jpg';
import img44 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00044.avif';
import img46 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00046.avif';
import img48 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00048.jpg';
import img50 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00050.jpg';
import img52 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00052.jpg';
import img54 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00054.jpg';
import img56 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00056.jpg';
import img58 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00058.avif';
import img60 from '@/components/common/johndeere6r/JD_6R_TT_Cabin_00060.jpg';



const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Maskin og redskap', href: '#' },
    { name: 'Traktor', href: '#' },
    { name: 'John Deere 6R 110', href: '/johndeere6r' },
];

const keyFeatures = [
    {
        icon: Zap,
        title: 'Overlegen Kraft',
        description: 'Intelligent Power Management gir deg opptil 20 ekstra hestekrefter ved behov for transport og kraftuttaksarbeid.',
    },
    {
        icon: Cpu,
        title: 'Smartere Teknologi',
        description: 'Den nye G5Plus CommandCenter™-skjermen gir deg en større og raskere grensesnitt for presisjonslandbruk.',
    },
    {
        icon: Armchair,
        title: 'Førsteklasses Komfort',
        description: 'Den romslige og stillegående førerhytten med CommandARM™-kontroller gir deg en enestående kjøreopplevelse.',
    },
    {
        icon: ShieldCheck,
        title: 'Pålitelig Effektivitet',
        description: 'Den drivstoffeffektive motoren og den robuste rammekonstruksjonen sikrer maksimal oppetid og lave driftskostnader.',
    }
];

const techSpecs = [
    { label: 'Motortype', value: 'John Deere PowerTech™ PVS' },
    { label: 'Nominell effekt (97/68/EF)', value: '81 kW / 110 hk' },
    { label: 'Maksimal effekt med IPM', value: '96 kW / 130 hk' },
    { label: 'Girkasse', value: 'AutoPowr™/IVT™, 50 km/t' },
    { label: 'Maksimal løftekapasitet', value: '5700 kg' },
    { label: 'Hydraulikkapasitet', value: '114 l/min' },
];

const configOptions = {
  girkasse: {
    title: "Girkasse",
    icon: GitCommit,
    options: [
      { id: 'autopowr', name: 'AutoPowr™ IVT™', description: 'Trinnløs og sømløs giring for maksimal effektivitet.', longDescription: 'AutoPowr™ er en hydro-mekanisk girkasse som leverer trinnløs og kontinuerlig kraft ved alle hastigheter. Den kombinerer mekanisk effektivitet med presisjonen til hydrostatisk drift, ideelt for varierte oppgaver.' },
      { id: 'autoquad', name: 'AutoQuad™ Plus', description: 'Manuell giring med automatiserte funksjoner.', longDescription: 'AutoQuad™ Plus gir deg fire powershift-trinn i hver av de seks gruppene. Den tilbyr manuell kontroll med tilleggsfunksjoner som SoftShift for myke girskift under belastning.' },
    ],
  },
  frontlaster: {
    title: "Frontlaster",
    icon: Loader,
    options: [
      { id: 'uten_laster', name: 'Uten frontlaster', description: 'Standard konfigurasjon uten laster.', longDescription: 'Leveres uten frontlaster for de som ikke har behov, eller ønsker å ettermontere eget utstyr. Traktoren er fortsatt klargjort for laster.' },
      { id: 'med_laster', name: 'Med frontlaster', description: 'Fabrikkmontert John Deere frontlaster.', longDescription: 'Fullt integrert John Deere frontlaster, perfekt tilpasset 6R-serien for optimal balanse, sikt og ytelse. Inkluderer joystick-kontroll i CommandARM™.' },
    ],
  },
  dekk: {
    title: "Dekk",
    icon: Tractor,
    options: [
      { id: 'standard_dekk', name: 'Standard dekk', description: 'Allsidige dekk for varierte oppgaver.', longDescription: 'Et balansert dekkvalg som gir god ytelse for både jordbearbeiding, transport og arbeid på gårdsplassen. Et godt kompromiss mellom trekkraft og veiegenskaper.' },
      { id: 'brede_dekk', name: 'Brede dekk', description: 'For redusert marktrykk og bedre trekkraft.', longDescription: 'Brede dekk fordeler vekten over et større område, noe som reduserer jordpakking og øker trekkraften på mykt underlag. Ideelt for arbeid på sensitive jorder.' },
    ],
  },
  lys: {
    title: "Lyspakke",
    icon: Sun,
    options: [
      { id: 'standard_lys', name: 'Standard lyspakke', description: 'Halogenlys for god sikt.', longDescription: 'Standardpakken gir solid belysning med velprøvde halogenpærer, tilstrekkelig for de fleste arbeidsoppgaver under normale lysforhold.' },
      { id: 'premium_lys', name: 'Premium 360° LED', description: 'Full LED-belysning for overlegen sikt om natten.', longDescription: 'Premium-pakken oppgraderer all arbeidsbelysning til kraftig LED. Gir et hvitt, dagslyslignende lys i 360 grader rundt traktoren for maksimal sikt og sikkerhet ved nattarbeid.' },
    ],
  },
  gps: {
    title: "GPS-system",
    icon: Map,
    options: [
      { id: 'gps_forberedt', name: 'GPS-forberedt', description: 'Klargjort for ettermontering av GPS.', longDescription: 'Traktoren leveres klargjort for AutoTrac™, noe som betyr at kabler og braketter er på plass for enkel ettermontering av en StarFire™-mottaker og aktivering av autostyring.' },
      { id: 'integrert_gps', name: 'Integrert StarFire™', description: 'Fullt integrert GPS for presisjonslandbruk.', longDescription: 'Fabrikkmontert StarFire™-mottaker og full aktivering av AutoTrac™ på G5Plus-skjermen. Klar for presisjonslandbruk rett fra levering, noe som sikrer nøyaktige pass og redusert overlapping.' },
    ],
  },
};

const comparisonData = {
  headers: ['6R 110', '6R 120', '6R 130'],
  specs: [
    { label: 'Passer best for', values: ['Allsidig gårdsarbeid, fôring og lettere jordbearbeiding.', 'Mer krevende oppgaver som f.eks. pløying og transport.', 'Intensive oppgaver, større redskaper og maksimale ytelser.'] },
    { label: 'Maks. effekt (IPM)', values: ['130 hk', '140 hk', '150 hk'] },
    { label: 'Nominell effekt', values: ['110 hk', '120 hk', '130 hk'] },
    { label: 'Motortype', values: ['PowerTech™ PVS', 'PowerTech™ PVS', 'PowerTech™ PSS'] },
    { label: 'Hydraulikkapasitet', values: ['114 l/min', '114 l/min', '155 l/min'] },
    { label: 'Maks. løftekapasitet', values: ['5700 kg', '5700 kg', '6000 kg'] },
    { label: 'Girkasse', values: ['AutoPowr™', 'AutoPowr™', 'AutoPowr™'] },
  ],
};


type ConfigSelection = {
  girkasse: string;
  frontlaster: string;
  dekk: string;
  lys: string;
  gps: string;
};


function QuoteRequestDialog({ trigger }: { trigger: React.ReactNode }) {
    const [configSelection, setConfigSelection] = React.useState<ConfigSelection>({
        girkasse: 'autopowr',
        frontlaster: 'uten_laster',
        dekk: 'standard_dekk',
        lys: 'standard_lys',
        gps: 'gps_forberedt',
    });

    const handleConfigChange = (category: keyof ConfigSelection, value: string) => {
        setConfigSelection(prev => ({ ...prev, [category]: value }));
    };

    const selectedOptions = React.useMemo(() => {
        return Object.entries(configSelection).map(([key, value]) => {
          const category = configOptions[key as keyof typeof configOptions];
          const option = category.options.find(opt => opt.id === value);
          // Only include non-default selections
          if (option && !option.id.includes('standard') && !option.id.includes('uten_laster') && !option.id.includes('gps_forberedt')) {
            return {
              name: option.name,
            };
          }
          return null;
        }).filter(Boolean);
    }, [configSelection]);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Be om et uforpliktende tilbud</DialogTitle>
          <DialogDescription>
            En av våre maskinselgere vil kontakte deg for å skreddersy et tilbud. Du kan justere valgene under, eller sende inn som den er.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          {/* Left Column: Contact Form & Summary */}
          <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Fullt navn</Label>
                  <Input id="name" placeholder="Ola Nordmann" />
                </div>
                 <div className="space-y-1">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" type="tel" placeholder="Ditt telefonnummer" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="email">E-post</Label>
                  <Input id="email" type="email" placeholder="din@epost.no" />
                </div>
                 <div className="space-y-1">
                  <Label htmlFor="zip">Postnummer</Label>
                  <Input id="zip" placeholder="Ditt postnummer" />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="comments">Kommentarer eller spørsmål (valgfritt)</Label>
                <Textarea id="comments" placeholder="Har du spesifikke behov eller spørsmål til selgeren?" />
              </div>

               <Card className="bg-secondary/30">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Oppsummering: John Deere 6R 110</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedOptions.length > 0 ? (
                    <>
                      <p className='text-sm font-medium mb-2'>Valgt utstyr:</p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        {selectedOptions.map(option => option && (
                          <li key={option.name} className="text-muted-foreground">{option.name}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">Standard konfigurasjon valgt.</p>
                  )}
                </CardContent>
              </Card>
          </div>

          {/* Right Column: Configurator */}
           <TooltipProvider>
            <div className="space-y-4">
              {Object.entries(configOptions).map(([key, category]) => (
                  <div key={key}>
                      <CardTitle className="flex items-center gap-2 font-headline text-lg mb-2">
                          <category.icon className="h-5 w-5 text-primary" />
                          {category.title}
                      </CardTitle>
                      <RadioGroup
                          value={configSelection[key as keyof ConfigSelection]}
                          onValueChange={(value) => handleConfigChange(key as keyof ConfigSelection, value)}
                          className="grid grid-cols-2 gap-2"
                      >
                      {category.options.map(option => (
                          <Label key={option.id} className={cn(
                              "flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors hover:bg-accent/10",
                              configSelection[key as keyof ConfigSelection] === option.id && "bg-primary/5 border-primary"
                          )}>
                              <RadioGroupItem value={option.id} id={`${key}-${option.id}`} className="mt-1"/>
                              <div className="flex-1">
                                  <div className="flex justify-between items-center">
                                      <div className="flex items-center gap-2">
                                          <span className="font-semibold text-foreground text-sm">{option.name}</span>
                                      </div>
                                  </div>
                                  <p className="text-xs text-muted-foreground">{option.description}</p>
                              </div>
                               <Tooltip>
                                  <TooltipTrigger asChild>
                                      <button type="button" aria-label="Mer informasjon" className="mt-0.5">
                                          <Info className="h-4 w-4 text-muted-foreground" />
                                      </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                      <p className="max-w-xs">{option.longDescription}</p>
                                  </TooltipContent>
                              </Tooltip>
                          </Label>
                      ))}
                      </RadioGroup>
                  </div>
              ))}
            </div>
           </TooltipProvider>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Avbryt</Button>
          </DialogClose>
          <Button type="submit" disabled>Send forespørsel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


function Tractor360Viewer() {
    const totalFrames = 37;
    const [currentFrame, setCurrentFrame] = React.useState(0);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const isDragging = React.useRef(false);
    const startX = React.useRef(0);
    const startFrame = React.useRef(0);
    const sensitivity = 2; // How many pixels to drag for one frame change

    const imageUrls = React.useMemo(() => 
        [img0, img1, img3, img4, img5, img7, img8, img9, img11, img12, img13, img15, img16, img17, img19, img20, img21, img23, img24, img26, img28, img30, img32, img34, img36, img38, img40, img42, img44, img46, img48, img50, img52, img54, img56, img58, img60]
    , []);

    React.useEffect(() => {
        let loadedCount = 0;
        imageUrls.forEach((src) => {
            const img = new window.Image();
            img.src = src.src; 
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imageUrls.length) {
                    setIsLoaded(true);
                }
            };
        });
    }, [imageUrls]);

    const handleInteractionStart = (clientX: number) => {
        isDragging.current = true;
        startX.current = clientX;
        startFrame.current = currentFrame;
    };

    const handleInteractionMove = (clientX: number) => {
        if (!isDragging.current) return;
        
        const dx = clientX - startX.current;
        const frameOffset = Math.round(dx / sensitivity);
        const newFrame = (startFrame.current - frameOffset + totalFrames * 100) % totalFrames; // Negativ modulo
        setCurrentFrame(newFrame);
    };

    const handleInteractionEnd = () => {
        isDragging.current = false;
    };

    return (
        <Card className="p-4 shadow-lg overflow-hidden select-none">
            <div 
                className="relative aspect-[3/2] w-full cursor-grab active:cursor-grabbing"
                onMouseDown={(e) => handleInteractionStart(e.clientX)}
                onMouseMove={(e) => handleInteractionMove(e.clientX)}
                onMouseUp={handleInteractionEnd}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
                onTouchMove={(e) => handleInteractionMove(e.touches[0].clientX)}
                onTouchEnd={handleInteractionEnd}
            >
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                        <Loader className="h-12 w-12 animate-spin text-primary" />
                    </div>
                )}
                {imageUrls.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`John Deere 6R 110 - Angle ${index + 1}`}
                        fill
                        className={cn(
                            "object-contain transition-opacity duration-100 pointer-events-none",
                            currentFrame === index && isLoaded ? "opacity-100" : "opacity-0"
                        )}
                        sizes="(max-width: 768px) 100vw, 80vw"
                        priority={index === 0}
                    />
                ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
                <MoveHorizontal className="h-5 w-5" />
                <span className="text-sm">Dra for å rotere</span>
            </div>
        </Card>
    );
}



export default function JohnDeere6RPage() {
    const [activeSection, setActiveSection] = React.useState('oversikt');

    const handleScroll = () => {
        const sections = ['oversikt', 'funksjoner', 'spesifikasjoner', 'konfigurator', 'sammenlign', 'tjenester', 'kontakt'];
        const scrollPosition = window.scrollY + 200;
        
        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                if(activeSection !== sectionId) setActiveSection(sectionId);
                break;
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);


    return (
        <div className="flex min-h-screen flex-col bg-background">
            <HeaderComponent />
            <main className="flex-grow">
                {/* --- Hero Seksjon --- */}
                <section id="oversikt" className="relative h-screen min-h-[700px] w-full text-white">
                    <Image
                        src={heroImage}
                        alt="John Deere 6R 110 traktor på et jorde ved soloppgang"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-center justify-center px-4 text-center">
                        <p className="font-headline text-2xl font-medium text-yellow-300">John Deere 6R Serie</p>
                        <h1 className="font-headline text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl">
                            6R 110
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
                            Kraft, intelligens og komfort – redefinert for moderne landbruk.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                             <QuoteRequestDialog
                                trigger={
                                    <Button size="lg" className="h-14 px-8 text-lg bg-yellow-300 text-primary hover:bg-yellow-300/90">
                                        Be om et tilbud
                                    </Button>
                                }
                            />
                            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-white text-white bg-black/20 hover:bg-white/10 hover:text-white backdrop-blur-sm">
                                <Link href="#spesifikasjoner">Se tekniske data</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* --- Sticky Sub-nav --- */}
                <div className="sticky top-[64px] z-40 hidden bg-background/80 shadow-md backdrop-blur-sm lg:block">
                    <div className="container mx-auto flex h-16 max-w-[1542px] items-center justify-center gap-8 px-4">
                        {['Oversikt', 'Funksjoner', 'Spesifikasjoner', 'Sammenlign', 'Tjenester', 'Kontakt'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className={cn(
                                    "relative font-headline text-lg font-medium transition-colors hover:text-primary",
                                    activeSection === item.toLowerCase().replace(' ', '-') ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item}
                                {activeSection === item.toLowerCase().replace(' ', '-') && (
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary" />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="bg-white py-16 lg:py-24">
                    <div className="container mx-auto max-w-[1542px] px-4">
                        {/* --- Kjernefordeler --- */}
                        <section className="text-center">
                            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Bygget for å prestere</h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                                Hver eneste komponent i en 6R-traktor er utviklet for å levere maksimal ytelse og oppetid, uansett oppgave.
                            </p>
                            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {keyFeatures.map((feature) => (
                                    <div key={feature.title} className="flex flex-col items-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                            <feature.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="font-headline text-xl font-semibold text-foreground">{feature.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <div className="bg-secondary/30 py-16 lg:py-24">
                    <div className="container mx-auto max-w-4xl px-4 text-left">
                        <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Allsidig, kraftig og smart</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            John Deere 6R 110 er mer enn bare en traktor; det er en partner i din daglige drift. Den er designet for å være den ultimate allrounderen, perfekt for gårdsarbeid, fôrhåndtering, transport og lettere jordbearbeiding. Med sin kompakte størrelse kombinert med en kraftig motor og avansert teknologi, gir den deg fleksibiliteten til å takle varierte oppgaver med presisjon og effektivitet. Enten du navigerer trange fjøs eller jobber på åpne jorder, er 6R 110 bygget for å gjøre arbeidsdagen enklere og mer produktiv.
                        </p>
                    </div>
                </div>


                <div id="funksjoner" className="bg-white py-16 lg:py-24">
                    <div className="container mx-auto max-w-[1542px] px-4">
                        <section className="mb-16 lg:mb-24 text-center">
                             <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Utforsk 6R 110 i 360 grader</h2>
                             <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Dra i bildet under for å rotere traktoren og se den fra alle vinkler.
                             </p>
                             <div className="mt-8 max-w-5xl mx-auto">
                                <Tractor360Viewer />
                             </div>
                        </section>

                        <Separator className="my-16 lg:my-24" />

                        {/* --- CommandARM og Display --- */}
                        <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
                            <div>
                                <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Full kontroll, fingertuppene unna</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Den ergonomiske CommandARM™-konsollen samler alle viktige funksjoner, fra gass og gir til hydraulikk og trepunkt, på ett sted. Dette reduserer stress og øker presisjonen i arbeidet.
                                </p>
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                                <Image src={consoleImage} alt="John Deere CommandARM" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" />
                            </div>
                        </section>

                        <Separator className="my-16 lg:my-24" />

                        <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
                            <div className="lg:order-2">
                                <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Større. Raskere. Skarpere.</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Den nye G5Plus CommandCenter™ er mer enn bare en skjerm. Med 35 % større visningsareal, raskere prosessor og full HD-oppløsning, gir den deg en krystallklar oversikt og lynrask tilgang til alt du trenger for presisjonslandbruk.
                                </p>
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg lg:order-1">
                                <Image src={g5PlusImage} alt="John Deere G5Plus CommandCenter display" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" />
                            </div>
                        </section>

                        <Separator className="my-16 lg:my-24" />

                        {/* --- Se den i aksjon --- */}
                        <section>
                            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
                                <iframe
                                    className="h-full w-full"
                                    src="https://www.youtube.com/embed/pCJK1xopEds?start=18"
                                    title="John Deere 6R Series Tractors"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>
                    </div>
                </div>

                {/* --- Spesifikasjoner --- */}
                <section id="spesifikasjoner" className="bg-secondary/30 py-16 lg:py-24">
                    <div className="container mx-auto max-w-4xl px-4">
                        <div className="text-center">
                            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Tekniske Spesifikasjoner</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                John Deere 6R 110 er designet for å levere kraft og ytelse. Her er nøkkeldataene.
                            </p>
                        </div>
                        <Card className="mt-12 overflow-hidden shadow-lg">
                            <Table>
                                <TableBody>
                                    {techSpecs.map((spec, index) => (
                                        <TableRow key={spec.label} className={cn(index % 2 === 0 ? "bg-white" : "")}>
                                            <TableCell className="font-semibold text-foreground">{spec.label}</TableCell>
                                            <TableCell>{spec.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <div className="mt-8 text-center">
                             <Button asChild variant="outline">
                                <Link href="#">Last ned fullstendig produktark <ArrowRight className="ml-2"/></Link>
                            </Button>
                        </div>
                    </div>
                </section>
                
                {/* --- Sammenlign modeller --- */}
                <section id="sammenlign" className="bg-white py-16 lg:py-24">
                  <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                      <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Finn riktig 6R for deg</h2>
                      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                        Sammenlign nøkkelspesifikasjoner på tvers av de mest populære modellene i 6R-serien for å finne den som passer dine behov perfekt.
                      </p>
                    </div>
                    <Card className="overflow-hidden shadow-lg">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-secondary/50 hover:bg-secondary/50 border-b-2 border-border">
                              <TableHead className="text-left font-semibold text-foreground w-[25%] py-4">Modell</TableHead>
                              {comparisonData.headers.map((header) => (
                                <TableHead
                                  key={header}
                                  className={cn(
                                    "text-center font-semibold text-foreground w-1/4 p-4",
                                    header === '6R 110' && "bg-primary/10 text-primary"
                                  )}
                                >
                                  <div className="flex items-center justify-center gap-2">
                                      {header === '6R 110' && <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />}
                                      {header}
                                  </div>
                                </TableHead>
                              ))}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {comparisonData.specs.map((spec) => (
                              <TableRow key={spec.label} className="bg-white even:bg-secondary/20">
                                <TableCell className="font-semibold">{spec.label}</TableCell>
                                {spec.values.map((value, index) => (
                                  <TableCell
                                    key={index}
                                    className={cn(
                                      "text-center",
                                      comparisonData.headers[index] === '6R 110' && "font-bold text-foreground"
                                    )}
                                  >
                                    {value}
                                  </TableCell>
                                ))}
                              </TableRow>
                            ))}
                            <TableRow className="bg-transparent hover:bg-transparent">
                                <TableCell></TableCell>
                                {comparisonData.headers.map((header) => (
                                    <TableCell key={header} className="text-center p-4">
                                        <Button asChild variant={header === '6R 110' ? 'default' : 'outline'}>
                                            <Link href="#">
                                                {header === '6R 110' ? 'Valgt modell' : 'Gå til modell'}
                                            </Link>
                                        </Button>
                                    </TableCell>
                                ))}
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </Card>
                  </div>
                </section>


                {/* --- Tjenester --- */}
                 <section id="tjenester" className="py-16 lg:py-24 bg-secondary/30">
                    <div className="container mx-auto max-w-[1542px] px-4">
                       <div className="text-center">
                            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Vi er med deg hele veien</h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                                Et traktorkjøp er bare starten på partnerskapet. Felleskjøpet tilbyr et komplett økosystem av tjenester for å sikre deg maksimal oppetid og lønnsomhet.
                            </p>
                        </div>
                         <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                            <Card className="flex flex-col items-center p-8 text-center shadow-lg bg-card">
                                <Settings className="h-12 w-12 text-primary" />
                                <CardTitle className="mt-4 font-headline text-2xl">Verkstedtjenester</CardTitle>
                                <CardContent className="mt-2 flex-grow text-muted-foreground">Våre sertifiserte teknikere over hele landet sikrer profesjonell service og vedlikehold, slik at din maskin alltid yter sitt beste.</CardContent>
                                <Button variant="link">Les mer <ArrowRight className="ml-2" /></Button>
                            </Card>
                             <Card className="flex flex-col items-center p-8 text-center shadow-lg bg-card">
                                <Wallet className="h-12 w-12 text-primary" />
                                <CardTitle className="mt-4 font-headline text-2xl">Finansiering og leasing</CardTitle>
                                <CardContent className="mt-2 flex-grow text-muted-foreground">Vi tilbyr skreddersydde og konkurransedyktige finansieringsløsninger som passer din drift og dine investeringsplaner.</CardContent>
                                 <Button variant="link">Se dine muligheter <ArrowRight className="ml-2" /></Button>
                            </Card>
                             <Card className="flex flex-col items-center p-8 text-center shadow-lg bg-card">
                                <Tractor className="h-12 w-12 text-primary" />
                                <CardTitle className="mt-4 font-headline text-2xl">Presisjonsjordbruk</CardTitle>
                                <CardContent className="mt-2 flex-grow text-muted-foreground">Få mest mulig ut av hver kvadratmeter med våre løsninger for presisjonslandbruk. Vi hjelper deg med alt fra autostyring til avansert dataanalyse.</CardContent>
                                <Button variant="link">Utforsk teknologien <ArrowRight className="ml-2" /></Button>
                            </Card>
                        </div>
                    </div>
                </section>


                {/* --- Kontakt --- */}
                <section id="kontakt" className="bg-primary-dark-background py-20 lg:py-32">
                    <div className="container mx-auto max-w-4xl px-4 text-center">
                        <h2 className="font-headline text-4xl font-bold text-yellow-300">Klar for en ny arbeidshverdag?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                           Våre maskinselgere står klare til å hjelpe deg med å konfigurere en John Deere 6R som er perfekt tilpasset din gård og dine behov. Ta kontakt for en uforpliktende prat eller et skreddersydd tilbud.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                             <QuoteRequestDialog
                                trigger={
                                    <Button size="lg" className="h-14 px-8 text-lg bg-yellow-300 text-primary hover:bg-yellow-300/90">
                                        <Mail className="mr-2"/> Be om et tilbud
                                    </Button>
                                }
                            />
                            <Button asChild size="lg" className="h-14 px-8 text-lg border-2 border-yellow-300 bg-transparent text-yellow-300 hover:bg-yellow-300/10">
                                <Link href="#"><Phone className="mr-2"/> Ring oss: 72 50 50 50</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <FooterComponent />
        </div>
    );
}
