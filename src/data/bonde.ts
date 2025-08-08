
import type { LucideIcon } from 'lucide-react';
import { Wheat, CalendarCheck, Tractor, MessageSquare, Handshake, Leaf, Droplets } from 'lucide-react';

export type Region = { id: string; name: string };
export type Reception = {
  id: string;
  name: string;
  regionId: string;
  address: string;
  lat: number;
  lng: number;
  open?: string;
};
export type WeeklyPrice = { id: string; regionId: string; week: string; grain: string; base: number; localAdj: number; updated: string; };
export type GrainContract = { id: string; title: string; bonus?: string; cta: string };
export type KnowledgeArticle = { id: string; title: string; teaser: string; tags: string[] };
export type CuratedLink = { id: string; label: string; href: string; icon: LucideIcon };
export type SeasonCardData = { id: string; title: string; text: string; linkText: string; href: string; };
export type GrainGuideLink = { id: string; title: string; text: string; href: string; icon: LucideIcon };

export const regions: Region[] = [
  { id: 'ost', name: 'Østlandet' },
  { id: 'sor', name: 'Sørlandet' },
  { id: 'vest', name: 'Vestlandet' },
  { id: 'trondelag', name: 'Trøndelag' },
  { id: 'nord', name: 'Nord-Norge' },
];

export const receptions: Reception[] = [
  { id: 'kambo', name: 'Kambo', regionId: 'ost', address: 'Kamboveien 50, 1535 Moss', lat: 59.46, lng: 10.66, open: 'Man-Fre 07-15' },
  { id: 'skien', name: 'Skien', regionId: 'sor', address: 'Bedriftsveien 76, 3735 Skien', lat: 59.18, lng: 9.6, open: 'Man-Fre 07-15' },
  { id: 'steinkjer', name: 'Steinkjer', regionId: 'trondelag', address: 'Verftsgata 10, 7714 Steinkjer', lat: 64.01, lng: 11.49, open: 'Man-Fre 07-15' },
  { id: 'verdal', name: 'Verdal', regionId: 'trondelag', address: 'Industrivegen 1, 7652 Verdal', lat: 63.79, lng: 11.48, open: 'Man-Fre 07-15' },
];

export const weeklyPrices: WeeklyPrice[] = [
  { id: 'p1', regionId: 'ost', week: '34', grain: 'Matkveite kl. 1', base: 3.50, localAdj: 0.05, updated: '20.08.24' },
  { id: 'p2', regionId: 'ost', week: '34', grain: 'Bygg', base: 2.80, localAdj: 0.02, updated: '20.08.24' },
  { id: 'p3', regionId: 'trondelag', week: '34', grain: 'Havre', base: 2.65, localAdj: -0.01, updated: '20.08.24' },
  { id: 'p4', regionId: 'trondelag', week: '34', grain: 'Matkveite kl. 1', base: 3.50, localAdj: 0.10, updated: '20.08.24' },
  { id: 'p5', regionId: 'sor', week: '34', grain: 'Bygg', base: 2.80, localAdj: 0.00, updated: '20.08.24' },
];

export const topTasks: CuratedLink[] = [
    { id: 'tt1', label: 'Kornpriser', href: '#', icon: Wheat },
    { id: 'tt2', label: 'Bestill leveringstime', href: '#', icon: CalendarCheck },
    { id: 'tt3', label: 'Bestill gjødsel', href: '#', icon: Droplets },
    { id: 'tt4', label: 'Kontakt rådgiver', href: '#', icon: MessageSquare },
];

export const seasonCards: SeasonCardData[] = [
    { id: 'sc1', title: 'Klar for innhøsting?', text: 'Sikre deg nødvendig utstyr og reservedeler før treskinga starter.', linkText: 'Se produkter for innhøsting', href: '#' },
    { id: 'sc2', title: 'Planlegg våronna nå', text: 'Bestill såkorn, gjødsel og plantevern i god tid og få det levert når du trenger det.', linkText: 'Utforsk våre våronn-løsninger', href: '#' },
];

export const grainGuideLinks: GrainGuideLink[] = [
    { id: 'gg1', title: 'Priser', text: 'Se oppdaterte priser for din region.', href: '#', icon: Wheat },
    { id: 'gg2', title: 'Avtaler', text: 'Teikn kornavtale og sikre forutsigbarhet.', href: '#', icon: Handshake },
    { id: 'gg3', title: 'Levering', text: 'Finn ditt nærmeste kornmottak og bestill time.', href: '#', icon: Tractor },
];

export const ownershipTeaserData = {
    title: 'Sammen om norsk matproduksjon',
    text: 'Felleskjøpet er et samvirke eid av 40 000 norske bønder. Som eier får du tilgang til unike fordeler, bonusordninger og en stemme i selskapets fremtid.',
    linkText: 'Les mer om medlemskap',
    href: '#'
};

export const heroData = {
    supertitle: 'Logget inn som Ola Nordmann',
    title: 'Velkommen til din digitale driftsplass',
    text: 'Her har vi samlet verktøyene og informasjonen du trenger for en enklere og mer effektiv arbeidsdag.',
    ctaText: 'Gå til Min Gård',
    ctaHref: 'https://mingaard.felleskjopet.no'
};


export const grainContracts: GrainContract[] = [
    { id: 'kontrakt1', title: 'Markedspriskontrakt', cta: 'Tegn avtale', bonus: '+ 5 øre/kg' },
    { id: 'kontrakt2', title: 'Fastpriskontrakt', cta: 'Tegn avtale' },
    { id: 'kontrakt3', title: 'Min/Maks-priskontrakt', cta: 'Tegn avtale', bonus: '+ 3 øre/kg' },
];
