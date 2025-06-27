
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  imageUrl: string | StaticImageData;
  categoryUrl: string;
  dataAiHint?: string;
}

export function CategoryCard({ title, imageUrl, categoryUrl, dataAiHint }: CategoryCardProps) {
  return (
    <Link href={categoryUrl} className="group block">
      <Card className="overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md bg-card">
        <div className="relative h-40 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={dataAiHint || "category item"}
          />
        </div>
        <CardContent className="flex min-h-[72px] items-center justify-center bg-secondary p-3 text-center">
          <h3 className="text-base font-semibold group-hover:text-primary">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
