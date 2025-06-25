
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
import { getProductsFromFeed } from '@/lib/product-data';

// Import new sections
import { CampaignsSection } from '@/components/sections/campaigns-section';
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


const filterCategories = ["Alle", "Hage", "Dyr", "Gjødsel", "Maskin", "Redskap", "Tilbud"];

export default async function HomePage() {
  const aktuelltProducts = await getProductsFromFeed('aktuelt');
  const vanningProducts = await getProductsFromFeed('vanning');
  const saaingProducts = await getProductsFromFeed('saaing');
  
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

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      
      <main className="flex-grow">
        <HeroSection />
        <CampaignsSection />

        <section className="py-8 lg:py-12 bg-background">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Mest populære akkurat nå</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {filterCategories.map((category, index) => (
                  <Button
                    key={category}
                    variant={index === 0 ? 'default' : 'outline'}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {aktuelltProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
            <div className="mt-8 text-center">
                <Button variant="link" asChild className="text-primary hover:underline">
                    <Link href="#">Se flere produkter</Link>
                </Button>
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
            <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Nødvendig utstyr til vanning i hagen</h2>
               <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Se alt til vanning <ChevronRight className="ml-1 inline h-4 w-4"/></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {vanningProducts.map((item) => (
                 <ProductCard
                    key={item.id}
                    {...item}
                  />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12 bg-background">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative aspect-square w-full self-start md:sticky md:top-36">
                <Image src={gressImage} alt="Perfekt plen" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <div className="self-start">
                <div className="rounded-lg bg-primary-dark-background p-6 lg:p-12">
                  <p className="font-headline text-xl text-yellow-300">Drømmer du om en</p>
                  <h2 className="font-headline text-5xl font-bold text-yellow-300">Perfekt plen?</h2>
                  <p className="mt-4 mb-8 text-lg text-yellow-300">
                    Vi har gressfrøene du trenger for å få en grønn og fyldig plen i hagen.
                  </p>
                  <Button asChild className="h-11 self-start rounded-full bg-secondary px-4 text-accent-foreground hover:bg-secondary/90">
                    <Link href="#">
                      <ArrowRight className="h-5 w-5" />
                      Se produktene
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12 bg-secondary">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="font-headline text-2xl font-bold lg:text-3xl">Hjelp til såing</h2>
               <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Se alt til såing <ChevronRight className="ml-1 inline h-4 w-4"/></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {saaingProducts.map((item) => (
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
