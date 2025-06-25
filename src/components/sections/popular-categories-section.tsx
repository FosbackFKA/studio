
import { CategoryCard } from '@/components/common/category-card';

// Import new local images for the categories
import kategori1 from '../common/populaere-kategorier/1.webp';
import kategori2 from '../common/populaere-kategorier/2.webp';
import kategori3 from '../common/populaere-kategorier/3.webp';
import kategori4 from '../common/populaere-kategorier/4.webp';
import kategori5 from '../common/populaere-kategorier/5.webp';
import kategori6 from '../common/populaere-kategorier/6.webp';


const categories = [
  { title: 'Robotgressklipper', imageUrl: kategori1, categoryUrl: '#' },
  { title: 'Gressklipper', imageUrl: kategori2, categoryUrl: '#' },
  { title: 'Hageredskap', imageUrl: kategori3, categoryUrl: '#' },
  { title: 'Mose og ugress', imageUrl: kategori4, categoryUrl: '#' },
  { title: 'Insekter', imageUrl: kategori5, categoryUrl: '#' },
  { title: 'Hundebur og transport', imageUrl: kategori6, categoryUrl: '#' },
];

export function PopularCategoriesSection() {
  return (
    <section className="py-12 lg:py-16 bg-card">
      <div className="container mx-auto px-4 max-w-[1542px]">
        <div className="mb-8">
          <h2 className="font-headline text-3xl font-bold">Populære kategorier nå</h2>
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
