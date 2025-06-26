
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface StarRatingProps {
  rating: number;
  reviewCount: number;
  className?: string;
}

export function StarRating({ rating, reviewCount, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
        {halfStar && (
          <div className="relative">
            <Star key="half" className="h-5 w-5 text-yellow-400" />
            <div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-5 w-5 text-yellow-400" />
        ))}
      </div>
      <Link href="#reviews" className="text-sm text-muted-foreground hover:underline">
        ({reviewCount} anmeldelser)
      </Link>
    </div>
  );
}
