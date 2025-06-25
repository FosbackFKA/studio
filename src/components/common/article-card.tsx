
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string | StaticImageData;
  articleUrl: string;
  dataAiHint?: string;
}

export function ArticleCard({ title, excerpt, imageUrl, articleUrl, dataAiHint }: ArticleCardProps) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
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
        <CardTitle className="mb-2 text-lg font-semibold leading-tight">
          <Link href={articleUrl} className="hover:text-primary">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-5">{excerpt}</CardDescription>
      </CardContent>
    </Card>
  );
}
