import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
}

export function ProductCard({
  title,
  price,
  originalPrice,
  imageUrl,
  imageAlt,
  productUrl,
  badgeText,
  dataAiHint
}: ProductCardProps) {
  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="relative p-0">
        <Link href={productUrl} className="block">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={300}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={dataAiHint || "product agriculture"}
          />
        </Link>
        {badgeText && (
          <Badge variant="destructive" className="absolute left-3 top-3">
            {badgeText}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="mb-2 text-lg font-semibold leading-tight">
          <Link href={productUrl} className="hover:text-primary">
            {title}
          </Link>
        </CardTitle>
        <div className="flex items-baseline space-x-2">
          <p className="text-xl font-bold text-primary">{price}</p>
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">{originalPrice}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={productUrl}>Se produkt</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
