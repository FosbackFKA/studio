import { HeaderComponent } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { CampaignsSection } from '@/components/sections/campaigns-section';
import { PopularCategoriesSection } from '@/components/sections/popular-categories-section';
import { FeaturedLinksSection } from '@/components/sections/featured-links-section';
import { ArticlesSection } from '@/components/sections/articles-section';
import { FooterComponent } from '@/components/layout/footer';
import { ProductCard } from '@/components/common/product-card'; // Re-using ProductCard for seasonal favorites
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const seasonalFavorites = [
  {
    title: 'Hagebenk i tre',
    price: '1990,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Hagebenk',
    productUrl: '#',
    dataAiHint: 'garden bench wood'
  },
  {
    title: 'Utepeis Corten',
    price: '3499,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Utepeis',
    productUrl: '#',
    dataAiHint: 'outdoor fireplace'
  },
  {
    title: 'Grønnsaksjord 40L',
    price: '89,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Grønnsaksjord',
    productUrl: '#',
    dataAiHint: 'vegetable soil'
  },
  {
    title: 'Vårblomster Mix',
    price: '149,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Vårblomster',
    productUrl: '#',
    dataAiHint: 'spring flowers'
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
        
        {/* Seasonal Favorites Section - reusing ProductCard */}
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

        {/* Placeholder for Merkevarer */}
         <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-headline text-3xl font-bold">Populære merkevarer</h2>
               <Button variant="link" asChild className="text-primary hover:underline">
                <Link href="#">Se alle merker</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {['John Deere', 'Husqvarna', 'Stihl', 'Kärcher', 'Fiskars', 'Gardena'].map(brand => (
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
