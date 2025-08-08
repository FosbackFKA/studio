
import type { LucideIcon } from 'lucide-react';
import { Shovel, Tractor, BrainCircuit, Wrench, Handshake, Wheat } from 'lucide-react';

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
export type WeeklyPrice = {
  id: string;
  regionId: string;
  week: string;
  grain: string;
  base: number;
  localAdj: number;
  updated: string;
};
export type GrainContract = { id: string; title: string; bonus?: string; cta: string };
export type KnowledgeArticle = { id: string; title: string; teaser: string; tags: string[] };
export type CuratedLink = { id: string; label: string; href: string; icon: LucideIcon };

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
  { id: 'holbekk', name: 'Holbekk', regionId: 'ost', address: 'Holbekkveien 100, 3160 Stokke', lat: 59.21, lng: 10.29 },
  { id: 'birkenes', name: 'Birkenes', regionId: 'sor', address: 'Strøget 50, 4760 Birkeland', lat: 58.33, lng: 8.23, open: 'Man-Fre 07-15' },
];

export const weeklyPrices: WeeklyPrice[] = [
  { id: 'p1', regionId: 'ost', week: '34', grain: 'Matkveite kl. 1', base: 3.50, localAdj: 0.05, updated: '20.08.24' },
  { id: 'p2', regionId: 'ost', week: '34', grain: 'Bygg', base: 2.80, localAdj: 0.02, updated: '20.08.24' },
  { id: 'p3', regionId: 'trondelag', week: '34', grain: 'Havre', base: 2.65, localAdj: -0.01, updated: '20.08.24' },
  { id: 'p4', regionId: 'trondelag', week: '34', grain: 'Matkveite kl. 1', base: 3.50, localAdj: 0.10, updated: '20.08.24' },
  { id: 'p5', regionId: 'sor', week: '34', grain: 'Bygg', base: 2.80, localAdj: 0.00, updated: '20.08.24' },
  { id: 'p6', regionId: 'sor', week: '34', grain: 'Fôrkveite', base: 3.10, localAdj: 0.01, updated: '20.08.24' },
  { id: 'p7', regionId: 'vest', week: '34', grain: 'Bygg', base: 2.80, localAdj: -0.05, updated: '20.08.24' },
];

export const grainContracts: GrainContract[] = [
  { id: 'c1', title: 'Matkveitekontrakt 2024', bonus: '+15 øre/kg', cta: 'Teikn kontrakt' },
  { id: 'c2', title: 'Fôrkornkontrakt Høst 2024', cta: 'Teikn kontrakt' },
  { id: 'c3', title: 'Grynhavrekontrakt', bonus: '+25 øre/kg', cta: 'Teikn kontrakt' },
  { id: 'c4', title: 'Spesialavtale Økologisk', cta: 'Kontakt oss' },
  { id: 'c5', title: 'Avtale om proteinbetaling', cta: 'Les meir' },
];

export const knowledgeArticles: KnowledgeArticle[] = [
  { id: 'k1', title: 'Optimal gjødsling for høstkveite', teaser: 'Slik sikrer du riktig næringstilgang og maksimerer avlingen for neste sesong.', tags: ['Gjødsel', 'Korn'] },
  { id: 'k2', title: 'Valg av såkorn: Tenk på jordtype og klima', teaser: 'Ikke alt såkorn passer overalt. Lær hva du bør vurdere før du bestiller.', tags: ['Såkorn', 'Planlegging'] },
  { id: 'k3', title: 'Bekjempelse av ugras i eng', teaser: 'Effektive strategier for å holde ugraset i sjakk og sikre en god fôrkvalitet.', tags: ['Plantevern', 'Grovfôr'] },
  { id: 'k4', title: 'Drenering: Investeringen som betaler seg', teaser: 'God drenering er grunnlaget for alt. Se hvordan du kan forbedre din.', tags: ['Drenering', 'Jordhelse'] },
  { id: 'k5', title: 'Presisjonsjordbruk med John Deere Operations Center', teaser: 'Utnytt data fra dine maskiner til å ta smartere avgjørelser.', tags: ['Presisjon', 'Teknologi'] },
  { id: 'k6', title: 'Kalibrering av gjødselspreder', teaser: 'Enkel guide for å sikre at du sprer riktig mengde gjødsel på åkeren.', tags: ['Gjødsel', 'Maskin'] },
];

export const topTasks: CuratedLink[] = [
    { id: 'tt1', label: 'Bestill driftsmidler', href: '#', icon: Shovel },
    { id: 'tt2', label: 'Se kornpriser', href: '#', icon: Wheat },
    { id: 'tt3', label: 'Finn maskin', href: '#', icon: Tractor },
    { id: 'tt4', label: 'Fag og kunnskap', href: '#', icon: BrainCircuit },
    { id: 'tt5', label: 'Service og deler', href: '#', icon: Wrench },
    { id: 'tt6', label: 'Teikn kornavtale', href: '#', icon: Handshake },
];
