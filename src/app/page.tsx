
import { HeaderComponent } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { CampaignsSection } from '@/components/sections/campaigns-section';
import { PopularCategoriesSection } from '@/components/sections/popular-categories-section';
import { FeaturedLinksSection } from '@/components/sections/featured-links-section';
import { ArticlesSection } from '@/components/sections/articles-section';
import { FooterComponent } from '@/components/layout/footer';
import { ProductCard } from '@/components/common/product-card'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const seasonalFavorites = [
  {
    title: 'Robotgressklipper RMI 422',
    price: '12990,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Robotgressklipper',
    productUrl: '#',
    dataAiHint: 'robotic lawnmower'
  },
  {
    title: 'Hagemøbelsett Bistro',
    price: '4999,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Hagemøbelsett',
    productUrl: '#',
    dataAiHint: 'garden furniture'
  },
  {
    title: 'Champion Kattefôr Komplett',
    price: '349,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Kattefôr',
    productUrl: '#',
    dataAiHint: 'cat food'
  },
  {
    title: 'Plantejord 50L Felleskjøpet',
    price: '99,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Plantejord',
    productUrl: '#',
    dataAiHint: 'potting soil'
  },
];


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderComponent />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedLinksSection />
        <CampaignsSection />
        <PopularCategoriesSection />
        
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-headline text-3xl font-bold">Sesongens favoritter</h2>
              <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Se alle favoritter</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {seasonalFavorites.map((item) => (
                <ProductCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <ArticlesSection />

         <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-headline text-3xl font-bold">Populære merkevarer</h2>
               <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Se alle merker</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {['John Deere', 'Husqvarna', 'Stihl', 'Kärcher', 'Fiskars', 'Pöttinger'].map(brand => (
                <div key={brand} className="rounded-md border bg-card p-6 shadow-sm">
                  <p className="font-medium">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <FooterComponent />
    </div>
  );
}
