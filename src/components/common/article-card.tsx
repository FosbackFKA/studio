
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string | StaticImageData;
  articleUrl: string;
  dataAiHint?: string;
  compact?: boolean;
}

export function ArticleCard({ title, excerpt, imageUrl, articleUrl, dataAiHint, compact = false }: ArticleCardProps) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
      <CardHeader className="relative p-0">
        <Link href={articleUrl} className={cn("relative block w-full", compact ? "h-32" : "h-48")}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 84vw, (max-width: 1200px) 66vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
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
