
import { ArticleCard } from '@/components/common/article-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Import new local images for the articles
import artikkel1 from '../common/artikler/1.webp';
import artikkel2 from '../common/artikler/2.webp';
import artikkel3 from '../common/artikler/3.webp';

const articles = [
  {
    title: 'Slik velger du riktig robotgressklipper',
    excerpt: 'Ønsker du en velstelt plen uten for mye arbeid? Da kan en robotgressklipper være løsningen for deg! Med et bredt utvalg av modeller på...',
    imageUrl: artikkel1,
    articleUrl: '#',
    dataAiHint: 'robotic lawnmower'
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

export function ArticlesSection() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto max-w-[1542px]">
        <div className="mb-8 flex items-center justify-between px-4">
          <h2 className="font-headline text-3xl font-bold">Nyttige artikler og guider</h2>
          <Button variant="link" asChild className="text-primary hover:underline">
            <Link href="#">Se alle artikler</Link>
          </Button>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden px-4 lg:grid lg:grid-cols-3 lg:gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex space-x-4 overflow-x-auto px-4 pb-4 no-scrollbar">
            {articles.map((article) => (
              <div key={article.title} className="w-5/6 flex-shrink-0 sm:w-2/3 md:w-1/2">
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
