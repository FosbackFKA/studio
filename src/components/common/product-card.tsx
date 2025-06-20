
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/types/product';

// Using a subset of Product props relevant for the card itself
interface ProductCardProps extends Pick<Product, 
  'title' | 
  'price' | 
  'imageUrl' | 
  'productUrl'
> {
  salePrice?: Product['salePrice'];
  brand?: Product['brand'];
  imageAlt?: Product['imageAlt'];
  badgeText?: Product['badgeText'];
  dataAiHint?: Product['dataAiHint'];
}

export function ProductCard({
  title,
  price,
  salePrice,
  imageUrl,
  imageAlt,
  productUrl,
  badgeText,
  dataAiHint,
  brand,
}: ProductCardProps) {
  const displayPrice = salePrice || price;
  const originalPrice = salePrice ? price : undefined; // Show main price as strikethrough if salePrice exists

  return (
    <Card className="group flex h-full transform flex-col overflow-hidden rounded-lg border-gray-200 bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="relative p-0">
        <Link href={productUrl} className="block">
          <Image
            src={imageUrl}
            alt={imageAlt || title} // Use title as fallback for alt
            width={300}
            height={225}
            className="h-48 w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
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
        {brand && <p className="mb-2 text-xs text-muted-foreground">{brand}</p>}
        <div className="flex items-baseline space-x-2">
          <p className="text-lg font-bold text-primary">{displayPrice}</p>
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
