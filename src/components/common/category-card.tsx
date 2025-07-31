
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  title: string;
  imageUrl: string | StaticImageData;
  categoryUrl: string;
  dataAiHint?: string;
}

export function CategoryCard({ title, imageUrl, categoryUrl, dataAiHint }: CategoryCardProps) {
  return (
    <Link href={categoryUrl} className="group block h-full">
      <Card className="relative h-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
        <div className="relative h-56 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={dataAiHint || "category item"}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-left">
           <h3 className="font-headline text-xl font-bold text-white group-hover:underline">{title}</h3>
        </div>
      </Card>
    </Link>
  );
}
