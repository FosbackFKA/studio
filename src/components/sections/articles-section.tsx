
import { ArticleCard } from '@/components/common/article-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const articles = [
  {
    title: 'Gjødsling av plen: Slik får du en grønn og frodig hage',
    excerpt: 'Alt du trenger å vite om gjødsling for å oppnå en sunn og tett plen gjennom sesongen.',
    imageUrl: 'https://placehold.co/400x225.png',
    articleUrl: '#',
    category: 'Hagetips',
    dataAiHint: 'lawn fertilization'
  },
  {
    title: 'Valg av riktig motorsag til ditt bruk',
    excerpt: 'En guide som hjelper deg å velge motorsagen som passer best til dine behov, enten du er proff eller hobbybruker.',
    imageUrl: 'https://placehold.co/400x225.png',
    articleUrl: '#',
    category: 'Skog og Ved',
    dataAiHint: 'chainsaw guide'
  },
  {
    title: 'Hold hunden aktiv og sunn: Tips til fôr og utstyr',
    excerpt: 'Les våre råd om ernæring og det beste utstyret for en glad og frisk hund.',
    imageUrl: 'https://placehold.co/400x225.png',
    articleUrl: '#',
    category: 'Kjæledyr',
    dataAiHint: 'dog health care'
  },
];

export function ArticlesSection() {
  return (
    <section className="py-12 lg:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-3xl font-bold">Nyttige artikler og guider</h2>
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
