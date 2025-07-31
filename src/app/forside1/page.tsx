

import { HeaderComponent } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { FooterComponent } from '@/components/layout/footer';
import { ProductCard } from '@/components/common/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FkaLogo } from '@/components/common/logo';
import { ChevronRight, ArrowRight } from 'lucide-react';
import type { Product } from '@/types/product';
import { Card } from '@/components/ui/card';

// Import new sections
import { PopularCategoriesSection } from '@/components/sections/popular-categories-section';
import { ArticlesSection } from '@/components/sections/articles-section';
import { FeaturedLinksSection } from '@/components/sections/featured-links-section';
import footerHeroImage from '@/components/common/fk_hero_bg_5.webp';
import gressImage from '@/components/common/gress.webp';

// Import dog images
import hund1 from '@/components/common/hund/hund1.webp';
import hund2 from '@/components/common/hund/hund2.webp';
import hund3 from '@/components/common/hund/hund3.webp';
import hund4 from '@/components/common/hund/hund4.webp';
import hund5 from '@/components/common/hund/hund5.webp';

// Import gressklipper images
import gressklipper1 from '@/components/common/gressklipper/gressklipper1.webp';
import gressklipper2 from '@/components/common/gressklipper/gressklipper2.webp';
import gressklipper3 from '@/components/common/gressklipper/gressklipper3.webp';
import gressklipper4 from '@/components/common/gressklipper/gressklipper4.webp';
import gressklipper5 from '@/components/common/gressklipper/gressklipper5.webp';

// Import vanning images
import vanning1 from '@/components/common/vanning/vanning1.webp';
import vanning2 from '@/components/common/vanning/vanning2.webp';
import vanning3 from '@/components/common/vanning/vanning3.webp';
import vanning4 from '@/components/common/vanning/vanning4.webp';
import vanning5 from '@/components/common/vanning/vanning5.webp';

// Import saaing images
import saaing1 from '@/components/common/saaing/saaing1.webp';
import saaing2 from '@/components/common/saaing/saaing2.webp';
import saaing3 from '@/components/common/saaing/saaing3.webp';
import saaing4 from '@/components/common/saaing/saaing4.webp';
import saaing5 from '@/components/common/saaing/saaing5.webp';

// Import images for 'Mest populære'
import popular1 from '@/components/common/aktuelle-kampanjer/1.webp';
import popular2 from '@/components/common/aktuelle-kampanjer/2.webp';
import popular3 from '@/components/common/aktuelle-kampanjer/3.webp';
import popular4 from '@/components/common/aktuelle-kampanjer/4.webp';
import popular5 from '@/components/common/aktuelle-kampanjer/5.webp';
import heroInspoImage from '@/components/common/inspirasjonsmal/inspirasjon-hero.jpg';

// Import article images
import artikkel1 from '@/components/common/artikler/1.webp';
import artikkel2 from '@/components/common/artikler/2.webp';
import artikkel3 from '@/components/common/artikler/3.webp';

// New imports for commercial page
import commercialHero from '@/components/common/gressklipper/gressklipper1.webp';
import forsidebilde1 from '@/components/common/forsidebilde1.jpg';
import forsidebilde2 from '@/components/common/forsidebilde2.jpg';
import forsidebilde3 from '@/components/common/forsidebilde3.jpg';
import forsidebilde4 from '@/components/common/forsidebilde4.jpg';
import type { StaticImageData } from 'next/image';

interface PromoItem {
  superTitle?: string;
  title: string;
  actionText?: string;
  href: string;
  imageUrl: StaticImageData | string;
}

const promoItems: PromoItem[] = [
  {
    superTitle: 'Alle våre tilbud på ett sted',
    title: 'Ukens kampanjer',
    actionText: 'Handle nå',
    href: '#',
    imageUrl: forsidebilde1,
  },
  {
    superTitle: 'Få en frodig og lettstelt hage',
    title: 'Robotgressklipper',
    href: '/robotgressklipper',
    imageUrl: forsidebilde2,
  },
  {
    superTitle: 'Stort utvalg for de fleste formål',
    title: 'Tilhengere',
    href: '#',
    imageUrl: forsidebilde3,
  },
  {
    superTitle: 'Alt du trenger til katten din',
    title: 'Katteutstyr',
    href: '#',
    imageUrl: forsidebilde4,
  },
];

const PromoCard = ({ item }: { item: PromoItem }) => (
    <Link href={item.href} className="group block h-full">
      <Card className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg h-full">
        <div className="relative h-56 w-full">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 text-left">
          {item.superTitle && <p className="font-body text-sm font-medium text-[#fff280] mb-0.5">{item.superTitle}</p>}
          <h3 className="font-headline text-2xl font-bold text-[#fff280] group-hover:underline">{item.title}</h3>
          {item.actionText && (
            <div className="mt-1 flex items-center text-sm font-medium text-[#fff280] group-hover:underline font-body">
              {item.actionText}
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          )}
        </div>
      </Card>
    </Link>
  );


export default async function Forside1Page() {
  const mostPopularProducts: Product[] = [
    {
      id: 'SEGNAVH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      imageUrl: popular1,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 63,
    },
    {
      id: 'CHAMP92001I',
      title: 'Strømaggregat 92001I-EU bensin inverter 2,2 kW',
      brand: 'Champion Europe',
      price: '7 999,-',
      salePrice: '5 999,-',
      imageUrl: popular2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
    {
      id: 'STIHLRM22R',
      title: 'Bensindrevet bio gressklipper RM 2,2 R',
      brand: 'Stihl',
      price: '4 449,-',
      salePrice: '3 999,-',
      imageUrl: popular3,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 68,
    },
    {
      id: 'KARCHERK4P',
      title: 'Høytrykkspyler K4 Premium',
      brand: 'Kärcher',
      price: '3 199,-',
      salePrice: '2 699,-',
      imageUrl: popular4,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 81,
    },
    {
      id: 'GARDENACLAS30',
      title: 'Hageslange Classic (1/2") 30 M',
      brand: 'Gardena',
      price: '499,-',
      salePrice: '379,-',
      imageUrl: popular5,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
  ];

    const recommendedForYou: Product[] = [
    {
      id: 'GARDENACLAS30',
      title: 'Hageslange Classic (1/2") 30 M',
      brand: 'Gardena',
      price: '499,-',
      salePrice: '379,-',
      imageUrl: popular5,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
    {
      id: 'KARCHERK4P',
      title: 'Høytrykkspyler K4 Premium',
      brand: 'Kärcher',
      price: '3 199,-',
      salePrice: '2 699,-',
      imageUrl: popular4,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 81,
    },
     {
      id: 'CHAMP92001I',
      title: 'Strømaggregat 92001I-EU bensin inverter 2,2 kW',
      brand: 'Champion Europe',
      price: '7 999,-',
      salePrice: '5 999,-',
      imageUrl: popular2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
     {
      id: 'STIHLRM22R',
      title: 'Bensindrevet bio gressklipper RM 2,2 R',
      brand: 'Stihl',
      price: '4 449,-',
      salePrice: '3 999,-',
      imageUrl: popular3,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 68,
    },
    {
      id: 'SEGNAVH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      imageUrl: popular1,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 63,
    },
  ];

  const newKjaeledyrProducts = [
    {
      id: 'LABB02',
      title: 'Hundefôr Voksen mellom- og stor rase 15 kg',
      brand: 'Labb',
      price: '649,-',
      imageUrl: hund2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 95,
    },
    {
      id: 'NONSTOP01',
      title: 'Kobbel Move Leash 150 cm grønn',
      brand: 'Non-stop dogwear',
      price: '349,-',
      imageUrl: hund3,
      productUrl: '#',
      onlineStock: false,
      storeStockCount: 63,
    },
    {
      id: 'OZAMI01',
      title: 'Tyggerull Premium Elg 45 g',
      brand: 'Ozami',
      price: '149,-',
      imageUrl: hund4,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 85,
    },
    {
      id: 'FRYD01',
      title: 'Startfôr kylling 4 kg',
      brand: 'Fryd',
      price: '119,-',
      imageUrl: hund5,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
  ];

  const newRobotklipperProducts = [
    {
      id: 'SEGNAVI108E',
      title: 'Robotgressklipper Navimow i108e',
      brand: 'Segway',
      price: '15 999,-',
      imageUrl: gressklipper2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 4,
    },
    {
      id: 'GARDSILENO',
      title: 'Robotklipper Smart Sileno Free 1500',
      brand: 'Gardena',
      price: '25 999,-',
      salePrice: '20 799,-',
      badgeText: '- 20 %',
      imageUrl: gressklipper3,
      productUrl: '#',
      onlineStock: false,
      storeStockCount: 41,
    },
    {
      id: 'SEGNAVIH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      badgeText: '- 14 %',
      imageUrl: gressklipper4,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 63,
    },
    {
      id: 'SEGNAVIX330E',
      title: 'Robotgressklipper Navimow X330e',
      brand: 'Segway',
      price: '39 999,-',
      imageUrl: gressklipper5,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 55,
    },
  ];
  
  const homePageArticles = [
    {
      title: 'Skap en magisk uteplass',
      excerpt: 'Forleng sommerkveldene og skap en uforglemmelig stemning med riktig bruk av lys og varme. Se hvordan du kan forvandle din terrasse.',
      imageUrl: heroInspoImage,
      articleUrl: '/artikler/inspirasjonsmal',
      dataAiHint: 'fire pit cozy'
    },
    {
      title: 'Slik blir du kvitt ugress',
      excerpt: 'Vi elsker når det blir varmere i været og hagen våkner til liv. Knoppene blomstrer og gresset spirer, men det gjør dessverre også ugresset. Vi...',
      imageUrl: artikkel2,
      articleUrl: '#',
      dataAiHint: 'dandelions weeds'
    },
    {
      title: 'Hvordan bekjempe snegler?',
      excerpt: 'De er ikke spesielt trivelige, brune, slimete og spiser det meste de kommer over. Brunsneglen har blitt et stort problem i hagene våre. Men...',
      imageUrl: artikkel3,
      articleUrl: '#',
      dataAiHint: 'slug leaf'
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      
      <main className="flex-grow">
        {/* New Commercial Hero Section */}
        <section className="relative h-[350px] w-full bg-black md:h-[450px] lg:h-[500px]">
          <Image
            src={commercialHero}
            alt="Robotgressklipper i en frodig hage"
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            quality={80}
            priority
          />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 font-headline text-4xl font-bold text-yellow-300 md:text-5xl lg:text-6xl">
              Gjør hagearbeidet enklere
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/90 md:text-xl">
              Oppdag våre smarte robotgressklippere og få mer tid til å nyte hagen.
            </p>
            <Button asChild size="lg" className="h-12 text-base">
              <Link href="/robotgressklipper">Se våre robotgressklippere <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
        
        {/* Promo Items Section */}
        <section className="py-8 lg:py-12 bg-secondary">
             <div className="container mx-auto max-w-[1542px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                  {promoItems.map((item) => (
                    <PromoCard key={item.title} item={item} />
                  ))}
                </div>
            </div>
        </section>

        <FeaturedLinksSection />

        <section className="py-8 lg:py-12 bg-background">
          <div className="container mx-auto max-w-[1542px]">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Mest populære akkurat nå</h2>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden px-4 lg:grid lg:grid-cols-5 lg:gap-4">
              {mostPopularProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
            
            {/* Mobile Horizontal Scroll */}
            <div className="lg:hidden">
              <div className="flex space-x-4 overflow-x-auto px-4 pb-4 no-scrollbar">
                {mostPopularProducts.map((item) => (
                  <div key={item.id} className="w-2/3 flex-shrink-0 sm:w-2/5 md:w-[30%]">
                    <ProductCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PopularCategoriesSection />
        
        {/* Recommended for you */}
        <section className="py-8 lg:py-12 bg-secondary">
          <div className="container mx-auto max-w-[1542px]">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Anbefalt til deg</h2>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden px-4 lg:grid lg:grid-cols-5 lg:gap-4">
              {recommendedForYou.map((item) => (
                <ProductCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
            
            {/* Mobile Horizontal Scroll */}
            <div className="lg:hidden">
              <div className="flex space-x-4 overflow-x-auto px-4 pb-4 no-scrollbar">
                {recommendedForYou.map((item) => (
                  <div key={item.id} className="w-2/3 flex-shrink-0 sm:w-2/5 md:w-[30%]">
                    <ProductCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* New Pet Section */}
        <section className="py-8 lg:py-12 bg-background">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Left Column: Sticky Promo Image */}
              <div className="self-start md:sticky md:top-36">
                <Link href="/hundefor" className="group block aspect-square">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={hund1}
                      alt="Alt til kjæledyr"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20 text-white">
                      <h3 className="font-headline text-3xl font-bold text-yellow-300">Alt til kjæledyr</h3>
                      <div className="mt-1 flex items-center text-sm font-medium text-yellow-300 group-hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        <span>Utstyr og fôr til alt fra hund til hobbyhøns</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Right Column: Product Grid */}
              <div className="grid grid-cols-2 gap-4 self-start">
                {newKjaeledyrProducts.map((item) => (
                  <ProductCard
                    key={item.id}
                    {...item}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <ArticlesSection 
            title="Nyttige artikler og guider"
            articles={homePageArticles}
            linkText="Se alle artikler"
            linkHref="#"
        />

        <section className="relative h-[300px] w-full md:h-[400px]">
           <Image
            src={footerHeroImage}
            alt="Ta vare på jorda, dyra og framtida"
            fill
            sizes="100vw"
            className="object-cover"
            quality={80}
          />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-center justify-center px-4 text-center text-primary">
            <FkaLogo className="mb-4 h-12 w-auto" />
            <h2 className="font-headline text-3xl font-bold md:text-4xl lg:text-5xl">
              Ta vare på jorda, dyra og framtida
            </h2>
          </div>
        </section>

      </main>
      <FooterComponent />
    </div>
  );
}
