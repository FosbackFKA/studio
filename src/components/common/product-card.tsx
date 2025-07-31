
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/types/product';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

interface ProductCardProps extends Pick<Product, 
  'title' | 
  'price' | 
  'imageUrl' | 
  'productUrl' |
  'brand' |
  'imageAlt' |
  'badgeText' |
  'dataAiHint' |
  'salePrice' |
  'onlineStock' |
  'storeStockCount'
> {}

// A helper function to parse price strings like "29 999,-" or "499,-" into numbers
const parsePrice = (priceString: string): number => {
    if (!priceString) return 0;
    // Remove currency, thousand separators (spaces), and use . for decimal
    return parseFloat(priceString.replace(/,-/g, '').replace(/\s/g, ''));
}

export function ProductCard({
  title,
  price, // Original price
  salePrice, // Discounted price
  imageUrl,
  imageAlt,
  productUrl,
  badgeText,
  dataAiHint,
  brand,
  onlineStock,
  storeStockCount,
}: ProductCardProps) {
  const displayPrice = salePrice || price;
  const originalPrice = salePrice ? price : undefined;

  let discountText = badgeText;
  // If badgeText is not provided, calculate it from prices
  if (!discountText && originalPrice && displayPrice) {
    const originalNum = parsePrice(originalPrice);
    const displayNum = parsePrice(displayPrice);

    if (originalNum > 0 && displayNum > 0 && displayNum < originalNum) {
      const percentage = Math.round(((originalNum - displayNum) / originalNum) * 100);
      discountText = `- ${percentage} %`;
    }
  }

  return (
    <Link href={productUrl} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden rounded-lg border border-primary/20 bg-card shadow-sm transition-all duration-300 hover:border-primary/60 hover:shadow-md">
        <div className="relative">
          {discountText && (
            <Badge variant="outline" className="absolute left-3 top-3 z-10 border-none bg-accent px-2 py-1 text-sm font-semibold text-accent-foreground">
              {discountText}
            </Badge>
          )}
          <div className="relative aspect-square w-full bg-white p-2">
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 30vw"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={dataAiHint || "product agriculture"}
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-grow flex-col justify-between bg-card p-4 pt-0">
          <div className="flex-grow">
             <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
              {onlineStock !== undefined && (
                <div className={cn(
                  "flex items-center gap-1.5",
                  onlineStock ? "text-primary" : "text-destructive"
                )}>
                  {onlineStock ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                  <span>Nettlager</span>
                </div>
              )}
              {storeStockCount !== undefined && storeStockCount > 0 && (
                 <div className="flex items-center gap-1.5 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{storeStockCount} butikker</span>
                </div>
              )}
            </div>
            
            {brand && <p className="mb-1 text-sm text-primary">{brand}</p>}
            <h3 className="text-base font-semibold leading-tight text-foreground">
              {title}
            </h3>
          </div>
          
          <div className="mt-3 flex items-baseline gap-2">
            <p className="text-2xl font-bold text-primary">{displayPrice}</p>
            {originalPrice && (
              <p className="text-base text-muted-foreground line-through">{originalPrice}</p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
