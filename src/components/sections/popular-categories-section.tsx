
import { CategoryCard } from '@/components/common/category-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const categories = [
  { title: 'Robotgressklippere', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'robotic lawnmower' },
  { title: 'Hagemøbler', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'garden furniture' },
  { title: 'Hundeutstyr', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'dog supplies' },
  { title: 'Traktor', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'tractor farming' },
  { title: 'Verneutstyr', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'safety gear' },
  { title: 'Grill og Utekjøkken', imageUrl: 'https://placehold.co/300x200.png', categoryUrl: '#', dataAiHint: 'bbq outdoor kitchen' },
];

export function PopularCategoriesSection() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-[1542px]">
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
