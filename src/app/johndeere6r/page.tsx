
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Cpu, Armchair, ShieldCheck, Mail, Phone, PlayCircle, Settings, Tractor, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';
import './styles.css';

import heroImage from '@/components/common/johndeere6r/hero.jpg';
import consoleImage from '@/components/common/johndeere6r/console.png';
import g5PlusImage from '@/components/common/johndeere6r/G5Plus.png';

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

export default function JohnDeere6RPage() {
    const [activeSection, setActiveSection] = React.useState('oversikt');

    const handleScroll = () => {
        const sections = ['oversikt', 'funksjoner', 'spesifikasjoner', 'kontakt'];
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
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-white text-white bg-black/20 hover:bg-white/10 hover:text-white backdrop-blur-sm">
                                <Link href="#spesifikasjoner">Se tekniske data</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* --- Sticky Sub-nav --- */}
                <div className="sticky top-[64px] z-40 hidden bg-background/80 shadow-md backdrop-blur-sm lg:block">
                    <div className="container mx-auto flex h-16 max-w-[1542px] items-center justify-center gap-8 px-4">
                        {['Oversikt', 'Funksjoner', 'Spesifikasjoner', 'Kontakt'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={cn(
                                    "relative font-headline text-lg font-medium transition-colors hover:text-primary",
                                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item}
                                {activeSection === item.toLowerCase() && (
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

                {/* --- Interaktiv tegning --- */}
                <section className="interactive-blueprint-section h-[300vh] relative">
                    <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                        <div className="container mx-auto max-w-[1542px] px-4 relative flex items-center justify-center">
                            <div className="blueprint-container">
                                <Image src="https://placehold.co/800x450.png" alt="Teknisk tegning av traktor" className="blueprint-outline" fill data-ai-hint="tractor blueprint outline" />
                                <div className="blueprint-fill-wrapper">
                                    <Image src={heroImage} alt="Fargelagt teknisk tegning av traktor" className="blueprint-fill" fill data-ai-hint="tractor field sunrise" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                            <Card className="flex flex-col items-center p-8 text-center shadow-lg">
                                <Settings className="h-12 w-12 text-primary" />
                                <CardTitle className="mt-4 font-headline text-2xl">Verkstedtjenester</CardTitle>
                                <CardContent className="mt-2 flex-grow text-muted-foreground">Våre sertifiserte teknikere over hele landet sikrer profesjonell service og vedlikehold, slik at din maskin alltid yter sitt beste.</CardContent>
                                <Button variant="link">Les mer <ArrowRight className="ml-2" /></Button>
                            </Card>
                             <Card className="flex flex-col items-center p-8 text-center shadow-lg">
                                <Wallet className="h-12 w-12 text-primary" />
                                <CardTitle className="mt-4 font-headline text-2xl">Finansiering og leasing</CardTitle>
                                <CardContent className="mt-2 flex-grow text-muted-foreground">Vi tilbyr skreddersydde og konkurransedyktige finansieringsløsninger som passer din drift og dine investeringsplaner.</CardContent>
                                 <Button variant="link">Se dine muligheter <ArrowRight className="ml-2" /></Button>
                            </Card>
                             <Card className="flex flex-col items-center p-8 text-center shadow-lg">
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
