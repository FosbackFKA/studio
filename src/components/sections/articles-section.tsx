import { ArticleCard } from '@/components/common/article-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const articles = [
  {
    title: 'Slik lykkes du med grønnsakshagen',
    excerpt: 'Få de beste tipsene for en frodig og produktiv grønnsakshage denne sesongen.',
    imageUrl: 'https://placehold.co/400x225.png',
    articleUrl: '#',
    category: 'Hagetips',
    dataAiHint: 'vegetable garden'
  },
  {
    title: 'Vedlikehold av motorsag: En komplett guide',
    excerpt: 'Lær hvordan du holder motorsagen i topp stand for sikker og effektiv bruk.',
    imageUrl: 'https://placehold.co/400x225.png',
    articleUrl: '#',
    category: 'Verktøy',
    dataAiHint: 'chainsaw maintenance'
  },
  {
    title: 'Velg riktig fôr til din hund',
    excerpt: 'En guide til å finne det beste hundefôret tilpasset din hunds behov og alder.',
    imageUrl: 'https://placehold.co/400x225.png',
    articleUrl: '#',
    category: 'Husdyr',
    dataAiHint: 'dog food'
  },
];

export function ArticlesSection() {
  return (
    <section className="py-12 lg:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-3xl font-bold">Fagartikler og guider</h2>
          <Button variant="link" asChild className="text-primary hover:underline">
            <Link href="#">Se alle artikler</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
