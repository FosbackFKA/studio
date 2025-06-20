import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  categoryUrl: string;
  dataAiHint?: string;
}

export function CategoryCard({ title, imageUrl, categoryUrl, dataAiHint }: CategoryCardProps) {
  return (
    <Link href={categoryUrl} className="group block">
      <Card className="overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
        <div className="relative h-40 w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={dataAiHint || "category item"}
          />
        </div>
        <CardContent className="p-4 text-center">
          <CardTitle className="text-lg font-semibold group-hover:text-primary">{title}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
