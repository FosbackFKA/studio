
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

// Import new sections
import { PopularCategoriesSection } from '@/components/sections/popular-categories-section';
import { ArticlesSection } from '@/components/sections/articles-section';
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


export default async function HomePage() {
  const mostPopularProducts: Product[] = [
    {
      id: 'SEGNAVH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      imageUrl: popular1,
      productUrl: '#',
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

  const newVanningProducts = [
    {
      id: 'GARDCLEVER01',
      title: 'Slangetrommel CleveRoll Easy sett M',
      brand: 'Gardena',
      price: '1 499,-',
      imageUrl: vanning1,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 55,
    },
    {
      id: 'GARDDUAL01',
      title: 'Slangetrommel dual 25 m',
      brand: 'Gardena',
      price: '1 599,-',
      imageUrl: vanning2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 81,
    },
    {
      id: 'FKVANNK01',
      title: 'Vannkanne sort 5 L',
      price: '89,-',
      imageUrl: vanning3,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 91,
    },
    {
      id: 'FKVANNK02',
      title: 'Vannkanne turkis 10 L',
      price: '99,-',
      imageUrl: vanning4,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 90,
    },
    {
      id: 'GARDPULS01',
      title: 'Pulsspreder hel/halvsirkel',
      brand: 'Gardena',
      price: '419,-',
      imageUrl: vanning5,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 95,
    },
  ];

  const newSaaingProducts: Product[] = [
    {
      id: 'RYOBI01',
      title: 'Batteridrevet spreder 18V',
      brand: 'Ryobi',
      price: '999,-',
      imageUrl: saaing1,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 57,
    },
    {
      id: 'NORHAND01',
      title: 'Håndsåer',
      brand: 'Norgarden',
      price: '219,-',
      imageUrl: saaing2,
      productUrl: '#',
      onlineStock: false,
      storeStockCount: 40,
    },
    {
      id: 'NORSAVOGN01',
      title: 'Strø- og såvogn',
      brand: 'Norgarden',
      price: '429,-',
      imageUrl: saaing3,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 49,
    },
    {
      id: 'GOPARTSTRO01',
      title: 'Strøvogn håndmodell 56 kg',
      brand: 'Gopart',
      price: '3 999,-',
      imageUrl: saaing4,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 91,
    },
    {
      id: 'NORPLEN01',
      title: 'Plenvalse 50 cm',
      brand: 'Norgarden',
      price: '999,-',
      imageUrl: saaing5,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 58,
    },
  ];


  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      
      <main className="flex-grow">
        <HeroSection />

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
        
        {/* New Pet Section */}
        <section className="py-8 lg:py-12 bg-secondary">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Left Column: Sticky Promo Image */}
              <div className="self-start md:sticky md:top-36">
                <Link href="#" className="group block aspect-square">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={hund1}
                      alt="Alt til kjæledyr"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
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

        <section className="py-8 lg:py-12 bg-background">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
              <div className="self-start">
                <Image
                  src={gressImage}
                  alt="Perfekt plen"
                  className="aspect-square rounded-lg object-cover"
                  layout="responsive"
                  width={750}
                  height={750}
                />
              </div>
              <div className="self-start md:sticky md:top-36">
                <div className="w-full rounded-lg bg-primary-dark-background p-6 lg:p-12">
                  <p className="font-headline text-xl text-[#fff280]">Drømmer du om en</p>
                  <h2 className="font-headline text-5xl font-bold text-[#fff280]">Perfekt plen?</h2>
                  <p className="mb-8 mt-4 text-lg text-[#fff280]">
                    Vi har gressfrøene du trenger for å få en grønn og fyldig plen i hagen.
                  </p>
                  <Button
                    asChild
                    className="h-11 rounded-full bg-[#fffacc] px-4 text-secondary-foreground hover:bg-[#fffacc]/90"
                  >
                    <Link href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className="mr-2 h-[0.875rem] w-[0.875rem]"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"
                        ></path>
                      </svg>
                      Se produktene
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12 bg-background">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Left Column: Sticky Promo Image */}
              <div className="self-start md:sticky md:top-36">
                <Link href="#" className="group block aspect-square">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={gressklipper1}
                      alt="Robotgressklippere"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20 text-white">
                      <p className="font-body text-sm font-medium text-yellow-300 mb-0.5">Se vårt utvalg av</p>
                      <h3 className="font-headline text-3xl font-bold text-yellow-300">Robotgressklippere</h3>
                      <div className="mt-1 flex items-center text-sm font-medium text-yellow-300 group-hover:underline">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        <span>For både store og små hager</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Right Column: Product Grid */}
              <div className="grid grid-cols-2 gap-4 self-start">
                {newRobotklipperProducts.map((item) => (
                  <ProductCard
                    key={item.id}
                    {...item}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12 bg-secondary">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Favorittene våre til vanning i hagen</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {newVanningProducts.map((item) => (
                 <ProductCard
                    key={item.id}
                    {...item}
                  />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12 bg-secondary">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Utstyr til å så jevnt</h2>
               <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Så og strøredskap <ChevronRight className="ml-1 inline h-4 w-4"/></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {newSaaingProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </div>
        </section>

        <ArticlesSection />

        <section className="relative h-[300px] w-full md:h-[400px]">
           <Image
            src={footerHeroImage}
            alt="Ta vare på jorda, dyra og framtida"
            layout="fill"
            objectFit="cover"
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
