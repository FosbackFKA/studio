import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  articleUrl: string;
  category?: string;
  dataAiHint?: string;
}

export function ArticleCard({ title, excerpt, imageUrl, articleUrl, category, dataAiHint }: ArticleCardProps) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="relative p-0">
        <Link href={articleUrl} className="block">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={225}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={dataAiHint || "article nature"}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        {category && <p className="mb-1 text-sm font-medium text-primary">{category}</p>}
        <CardTitle className="mb-2 text-lg font-semibold leading-tight">
          <Link href={articleUrl} className="hover:text-primary">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">{excerpt}</CardDescription>
      </CardContent>
      <CardContent className="p-4 pt-0">
        <Button variant="link" asChild className="p-0 text-primary hover:underline">
          <Link href={articleUrl}>Les mer</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
