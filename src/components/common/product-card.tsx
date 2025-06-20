import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle as ShadCardTitle } from '@/components/ui/card'; // Renamed CardTitle to avoid conflict
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  imageAlt: string;
  productUrl: string;
  badgeText?: string;
  dataAiHint?: string;
  subText?: string; // For text like "Champion" or "Stihl" under the title
}

export function ProductCard({
  title,
  price,
  originalPrice,
  imageUrl,
  imageAlt,
  productUrl,
  badgeText,
  dataAiHint,
  subText
}: ProductCardProps) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-lg border-gray-200 bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="relative p-0">
        <Link href={productUrl} className="block">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={300} // Adjusted size for better grid fit
            height={225} // Adjusted size for better grid fit
            className="h-48 w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" // Changed to object-contain
            data-ai-hint={dataAiHint || "product agriculture"}
          />
        </Link>
        {badgeText && (
          <Badge variant="default" className="absolute left-2 top-2 bg-primary text-primary-foreground">
            {badgeText}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-3">
        <h3 className="mb-1 text-base font-semibold leading-tight text-foreground">
          <Link href={productUrl} className="hover:text-primary hover:underline">
            {title}
          </Link>
        </h3>
        {subText && <p className="mb-2 text-xs text-muted-foreground">{subText}</p>}
        <div className="flex items-baseline space-x-2">
          <p className="text-lg font-bold text-primary">{price}</p>
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">{originalPrice}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={productUrl}>Se produkt</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
