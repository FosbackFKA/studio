
import { HeaderComponent } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { FooterComponent } from '@/components/layout/footer';
import { ProductCard } from '@/components/common/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FkaLogo } from '@/components/common/logo';
import { ChevronRight } from 'lucide-react';
import type { Product } from '@/types/product';
import { getProductsFromFeed } from '@/lib/product-data';

// Import new sections
import { CampaignsSection } from '@/components/sections/campaigns-section';
import { PopularCategoriesSection } from '@/components/sections/popular-categories-section';
import { ArticlesSection } from '@/components/sections/articles-section';
import footerHeroImage from '@/components/common/fk_hero_bg_5.webp';


const filterCategories = ["Alle", "Hage", "Dyr", "Gjødsel", "Maskin", "Redskap", "Tilbud"];

export default async function HomePage() {
  const aktuelltProducts = await getProductsFromFeed('aktuelt');
  const kjaeledyrProducts = await getProductsFromFeed('kjaeledyr');
  const robotgressklipperProducts = await getProductsFromFeed('robotgressklippere');
  const vanningProducts = await getProductsFromFeed('vanning');
  const saaingProducts = await getProductsFromFeed('saaing');

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

        <section className="py-8 lg:py-12 bg-secondary">
          <div className="container mx-auto max-w-[1542px] px-4">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
                <h2 className="font-headline text-2xl font-bold lg:text-3xl">Alt til kjæledyr</h2>
                <Button variant="link" asChild className="text-primary hover:underline">
                    <Link href="#">Se alt til kjæledyr <ChevronRight className="ml-1 inline h-4 w-4"/></Link>
                </Button>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="relative h-64 w-full lg:h-auto lg:w-1/3">
                <Image src="https://placehold.co/600x800.png" alt="Alt til kjæledyr" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="dog happy pet"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/40 p-4 text-center">
                  <h3 className="font-headline text-3xl font-bold text-white">Alt til kjæledyr</h3>
                  <p className="text-md text-white">Det beste for din firbente venn</p>
                </div>
              </div>
              <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                {kjaeledyrProducts.map((item) => (
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
             <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
                <h2 className="font-headline text-2xl font-bold lg:text-3xl">Robotgressklippere</h2>
                <Button variant="link" asChild className="text-primary hover:underline">
                    <Link href="#">Se alle robotgressklippere <ChevronRight className="ml-1 inline h-4 w-4"/></Link>
                </Button>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row-reverse">
              <div className="relative h-64 w-full lg:h-auto lg:w-1/3">
                <Image src="https://placehold.co/600x800.png" alt="Robotgressklippere" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="robotic lawnmower garden"/>
                 <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/40 p-4 text-center">
                  <h3 className="font-headline text-3xl font-bold text-white">Robotgressklippere</h3>
                  <p className="text-md text-white">For en perfekt klippet plen, helt automatisk</p>
                </div>
              </div>
              <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                {robotgressklipperProducts.map((item) => (
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
            <div className="flex flex-col overflow-hidden rounded-lg bg-card shadow-lg lg:flex-row">
              <div className="relative h-64 w-full lg:h-auto lg:w-1/2">
                <Image src="https://placehold.co/800x600.png" alt="Perfekt plen" layout="fill" objectFit="cover" data-ai-hint="green lawn garden"/>
              </div>
              <div className="flex w-full flex-col justify-center bg-[hsl(var(--secondary-foreground))] p-6 text-primary-foreground lg:w-1/2 lg:p-12">
                <h2 className="font-headline text-3xl font-bold">Perfekt plen?</h2>
                <p className="mt-2 mb-6 text-lg">Følg våre råd for gjødsling, kalking og pleie av plen.</p>
                <Button asChild size="lg" className="self-start bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#">Se våre tips og råd</Link>
                </Button>
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
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-center justify-center px-4 text-center text-white">
            <FkaLogo variant="white" className="mb-4 h-12 w-auto" />
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
