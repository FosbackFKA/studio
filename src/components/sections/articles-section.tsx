
import { ArticleCard } from '@/components/common/article-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface Article {
  title: string;
  excerpt: string;
  imageUrl: string | StaticImageData;
  articleUrl: string;
  dataAiHint?: string;
}

interface ArticlesSectionProps {
  title: string;
  linkText: string;
  linkHref: string;
  articles: Article[];
  className?: string;
}

export function ArticlesSection({ title, articles, linkText, linkHref, className }: ArticlesSectionProps) {
  return (
    <section className={cn('py-12 lg:py-16 bg-transparent', className)}>
      <div className="container mx-auto max-w-[1542px] px-0">
        <div className="mb-8 flex items-center justify-between px-4">
          <h2 className="font-headline text-2xl font-bold">{title}</h2>
          <Button variant="link" asChild className="text-primary hover:underline">
            <Link href={linkHref}>{linkText} <ChevronRight className="ml-1 h-4 w-4" /></Link>
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
