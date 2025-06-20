import { CategoryCard } from '@/components/common/category-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const categories = [
  { title: 'Gressklippere', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'lawnmower grass' },
  { title: 'Hagegjødsel', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'fertilizer garden' },
  { title: 'Arbeidsklær', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'workwear clothing' },
  { title: 'Høy & Fôr', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'animal feed' },
  { title: 'Motorsager', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'chainsaw wood' },
  { title: 'Griller', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'barbecue grill' },
];

export function PopularCategoriesSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-3xl font-bold">Populære kategorier</h2>
           <Button variant="link" asChild className="text-primary hover:underline">
            <Link href="#">Se alle kategorier</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
