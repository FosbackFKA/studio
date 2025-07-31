
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
import { ArrowRight, Zap, Cpu, Armchair, ShieldCheck, Mail, Phone, Settings, Tractor, Wallet, GitCommit, Check, Sun, Moon, Map, Loader, Info, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import heroImage from '@/components/common/johndeere6r/hero.jpg';
import consoleImage from '@/components/common/johndeere6r/console.png';
import g5PlusImage from '@/components/common/johndeere6r/G5Plus.png';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


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
      { id: 'autopowr', name: 'AutoPowr™ IVT™', description: 'Trinnløs og sømløs giring for maksimal effektivitet.', longDescription: 'AutoPowr™ er en hydro-mekanisk girkasse som leverer trinnløs og kontinuerlig kraft ved alle hastigheter. Den kombinerer mekanisk effektivitet med presisjonen til hydrostatisk drift, ideelt for varierte oppgaver.', price: 0 },
      { id: 'autoquad', name: 'AutoQuad™ Plus', description: 'Manuell giring med automatiserte funksjoner.', longDescription: 'AutoQuad™ Plus gir deg fire powershift-trinn i hver av de seks gruppene. Den tilbyr manuell kontroll med tilleggsfunksjoner som SoftShift for myke girskift under belastning.', price: -25000 },
    ],
  },
  frontlaster: {
    title: "Frontlaster",
    icon: Loader,
    options: [
      { id: 'med_laster', name: 'Med frontlaster', description: 'Fabrikkmontert John Deere frontlaster.', longDescription: 'Fullt integrert John Deere frontlaster, perfekt tilpasset 6R-serien for optimal balanse, sikt og ytelse. Inkluderer joystick-kontroll i CommandARM™.', price: 95000 },
      { id: 'uten_laster', name: 'Uten frontlaster', description: 'Standard konfigurasjon uten laster.', longDescription: 'Leveres uten frontlaster for de som ikke har behov, eller ønsker å ettermontere eget utstyr. Traktoren er fortsatt klargjort for laster.', price: 0 },
    ],
  },
  dekk: {
    title: "Dekk",
    icon: Tractor,
    options: [
      { id: 'standard_dekk', name: 'Standard dekk', description: 'Allsidige dekk for varierte oppgaver.', longDescription: 'Et balansert dekkvalg som gir god ytelse for både jordbearbeiding, transport og arbeid på gårdsplassen. Et godt kompromiss mellom trekkraft og veiegenskaper.', price: 0 },
      { id: 'brede_dekk', name: 'Brede dekk', description: 'For redusert marktrykk og bedre trekkraft.', longDescription: 'Brede dekk fordeler vekten over et større område, noe som reduserer jordpakking og øker trekkraften på mykt underlag. Ideelt for arbeid på sensitive jorder.', price: 42000 },
    ],
  },
  lys: {
    title: "Lyspakke",
    icon: Sun,
    options: [
      { id: 'standard_lys', name: 'Standard lyspakke', description: 'Halogenlys for god sikt.', longDescription: 'Standardpakken gir solid belysning med velprøvde halogenpærer, tilstrekkelig for de fleste arbeidsoppgaver under normale lysforhold.', price: 0 },
      { id: 'premium_lys', name: 'Premium 360° LED', description: 'Full LED-belysning for overlegen sikt om natten.', longDescription: 'Premium-pakken oppgraderer all arbeidsbelysning til kraftig LED. Gir et hvitt, dagslyslignende lys i 360 grader rundt traktoren for maksimal sikt og sikkerhet ved nattarbeid.', price: 35000 },
    ],
  },
  gps: {
    title: "GPS-system",
    icon: Map,
    options: [
      { id: 'gps_forberedt', name: 'GPS-forberedt', description: 'Klargjort for ettermontering av GPS.', longDescription: 'Traktoren leveres klargjort for AutoTrac™, noe som betyr at kabler og braketter er på plass for enkel ettermontering av en StarFire™-mottaker og aktivering av autostyring.', price: 0 },
      { id: 'integrert_gps', name: 'Integrert StarFire™', description: 'Fullt integrert GPS for presisjonslandbruk.', longDescription: 'Fabrikkmontert StarFire™-mottaker og full aktivering av AutoTrac™ på G5Plus-skjermen. Klar for presisjonslandbruk rett fra levering, noe som sikrer nøyaktige pass og redusert overlapping.', price: 120000 },
    ],
  },
};

const comparisonData = {
  headers: ['6R 110', '6R 120', '6R 130'],
  specs: [
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


export default function JohnDeere6RPage() {
    const [activeSection, setActiveSection] = React.useState('oversikt');

    const [configSelection, setConfigSelection] = React.useState<ConfigSelection>({
        girkasse: 'autopowr',
        frontlaster: 'uten_laster',
        dekk: 'standard_dekk',
        lys: 'standard_lys',
        gps: 'gps_forberedt',
    });

    const basePrice = 1450000;

    const totalPrice = React.useMemo(() => {
        return Object.keys(configSelection).reduce((acc, key) => {
            const category = configOptions[key as keyof typeof configOptions];
            const selectedOption = category.options.find(opt => opt.id === configSelection[key as keyof typeof configSelection]);
            return acc + (selectedOption?.price || 0);
        }, basePrice);
    }, [configSelection]);

    const handleConfigChange = (category: keyof ConfigSelection, value: string) => {
        setConfigSelection(prev => ({ ...prev, [category]: value }));
    };

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
                        data-ai-hint="tractor field sunrise"
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
                            <Button asChild size="lg" className="h-14 px-8 text-lg bg-yellow-300 text-primary hover:bg-yellow-300/90">
                                <Link href="#kontakt">Be om et tilbud</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-white text-white bg-black/20 hover:bg-yellow-300/10 hover:text-yellow-300 backdrop-blur-sm">
                                <Link href="#spesifikasjoner">Se tekniske data</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* --- Sticky Sub-nav --- */}
                <div className="sticky top-[64px] z-40 hidden bg-background/80 shadow-md backdrop-blur-sm lg:block">
                    <div className="container mx-auto flex h-16 max-w-[1542px] items-center justify-center gap-8 px-4">
                        {['Oversikt', 'Funksjoner', 'Spesifikasjoner', 'Konfigurator', 'Sammenlign', 'Tjenester', 'Kontakt'].map((item) => (
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

                <div id="funksjoner" className="bg-white py-16 lg:py-24">
                    <div className="container mx-auto max-w-[1542px] px-4">
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
                
                 {/* --- Bygg din 6R --- */}
                <section id="konfigurator" className="bg-white py-16 lg:py-24">
                    <TooltipProvider>
                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Bygg din 6R</h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                                Skreddersy traktoren etter dine behov. Velg utstyr og se prisen oppdateres i sanntid.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                           {/* Tractor Image */}
                            <div className="lg:col-span-2 sticky top-24">
                                <Card className="overflow-hidden">
                                <div className="relative aspect-video w-full bg-secondary/30">
                                    <Image
                                        src={heroImage}
                                        alt={`John Deere 6R 110 med ${configSelection.frontlaster === 'med_laster' ? 'frontlaster' : 'uten frontlaster'}`}
                                        fill
                                        className="object-contain p-8 transition-all duration-300"
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                    />
                                    {configSelection.frontlaster === 'med_laster' && (
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 flex items-center justify-center" data-ai-hint="tractor front loader">
                                            <p className="bg-black/20 text-white p-4 rounded-lg backdrop-blur-sm">Visuell representasjon av frontlaster</p>
                                        </div>
                                    )}
                                </div>
                                </Card>
                            </div>
                            
                            {/* Configuration Options */}
                            <div className="lg:col-span-1 space-y-6">
                                {Object.entries(configOptions).map(([key, category]) => (
                                    <Card key={key} className="overflow-hidden">
                                    <CardHeader className="bg-secondary/30">
                                        <CardTitle className="flex items-center gap-2 font-headline text-xl">
                                            <category.icon className="h-6 w-6 text-primary" />
                                            {category.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <RadioGroup
                                            value={configSelection[key as keyof ConfigSelection]}
                                            onValueChange={(value) => handleConfigChange(key as keyof ConfigSelection, value)}
                                        >
                                        {category.options.map(option => (
                                            <Label key={option.id} className={cn(
                                                "flex items-start gap-4 rounded-lg border p-4 cursor-pointer transition-colors hover:bg-accent/10",
                                                configSelection[key as keyof ConfigSelection] === option.id && "bg-primary/5 border-primary"
                                            )}>
                                                <RadioGroupItem value={option.id} id={`${key}-${option.id}`} className="mt-1"/>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-semibold text-foreground">{option.name}</span>
                                                            <Tooltip>
                                                                <TooltipTrigger asChild>
                                                                    <button type="button" aria-label="Mer informasjon">
                                                                        <Info className="h-4 w-4 text-muted-foreground" />
                                                                    </button>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="max-w-xs">{option.longDescription}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </div>
                                                        <span className="text-sm font-medium text-primary">
                                                            {option.price > 0 ? `+ ${option.price.toLocaleString('nb-NO')} kr` : (option.price < 0 ? `- ${(option.price * -1).toLocaleString('nb-NO')} kr` : 'Standard')}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{option.description}</p>
                                                </div>
                                            </Label>
                                        ))}
                                        </RadioGroup>
                                    </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Sticky Price Summary */}
                        <div className="lg:col-start-3 mt-8 lg:sticky lg:bottom-8">
                           <Card className="shadow-lg">
                               <CardHeader>
                                   <CardTitle className="font-headline text-2xl">Prisoverslag</CardTitle>
                               </CardHeader>
                               <CardContent className="space-y-2">
                                   <div className="flex justify-between">
                                       <span className="text-muted-foreground">Grunnpris</span>
                                       <span>{basePrice.toLocaleString('nb-NO')} kr</span>
                                   </div>
                                    <div className="flex justify-between">
                                       <span className="text-muted-foreground">Valgt utstyr</span>
                                       <span>{(totalPrice - basePrice).toLocaleString('nb-NO')} kr</span>
                                   </div>
                                   <Separator className="my-2" />
                                   <div className="flex justify-between items-baseline font-bold text-2xl">
                                       <span>Totalpris (eks. mva)</span>
                                       <span>{totalPrice.toLocaleString('nb-NO')} kr</span>
                                   </div>
                               </CardContent>
                               <div className="p-6 pt-0">
                                   <Button size="lg" className="w-full h-12 text-base">
                                       <Mail className="mr-2 h-5 w-5"/> Be om et tilbud
                                   </Button>
                               </div>
                           </Card>
                        </div>
                    </div>
                    </TooltipProvider>
                </section>

                {/* --- Sammenlign modeller --- */}
                <section id="sammenlign" className="bg-secondary/30 py-16 lg:py-24">
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
                            <TableRow className="bg-transparent hover:bg-transparent">
                              <TableHead className="text-left font-semibold text-foreground w-[25%]">Modell</TableHead>
                              {comparisonData.headers.map((header, index) => (
                                <TableHead
                                  key={header}
                                  className={cn(
                                    "text-center font-semibold text-foreground w-1/4",
                                    header === '6R 110' && "text-primary"
                                  )}
                                >
                                  {header === '6R 110' ? (
                                    <div className="flex items-center justify-center gap-2">
                                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                      {header}
                                    </div>
                                  ) : header}
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
                                {comparisonData.headers.map((header, index) => (
                                    <TableCell key={header} className="text-center p-4">
                                        <Button asChild variant={header === '6R 110' ? 'default' : 'outline'}>
                                            <Link href={header === '6R 110' ? '#' : '#'}>
                                                {header === '6R 110' ? 'Valgt modell' : 'Be om tilbud'}
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
                 <section id="tjenester" className="py-16 lg:py-24 bg-white">
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
                            <Button asChild size="lg" className="h-14 px-8 text-lg bg-yellow-300 text-primary hover:bg-yellow-300/90">
                                <Link href="#"><Mail className="mr-2"/> Finn din lokale selger</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300/10 hover:text-yellow-300">
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
