
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { StarRating } from '@/components/common/star-rating';
import { Star } from 'lucide-react';
import Image from 'next/image';

// Placeholder data for reviews
const reviewsData = {
  averageRating: 4.5,
  totalReviews: 28,
  ratingDistribution: [
    { stars: 5, count: 18, percentage: 64 },
    { stars: 4, count: 7, percentage: 25 },
    { stars: 3, count: 2, percentage: 7 },
    { stars: 2, count: 1, percentage: 4 },
    { stars: 1, count: 0, percentage: 0 },
  ],
  reviews: [
    {
      id: 1,
      author: 'Ola N.',
      avatarUrl: 'https://placehold.co/40x40.png',
      rating: 5,
      date: '15. juni 2024',
      title: 'Fantastisk klipper!',
      content: 'Har en komplisert hage på 2 mål med mange trær. VisionFence-kameraet er helt genialt, den navigerer uten problemer. Resultatet er en perfekt klippet plen, og jeg har fått fritiden tilbake. Anbefales på det sterkeste!',
      images: [
        'https://placehold.co/200x200.png',
        'https://placehold.co/200x200.png',
      ],
    },
    {
      id: 2,
      author: 'Kari J.',
      avatarUrl: 'https://placehold.co/40x40.png',
      rating: 4,
      date: '10. juni 2024',
      title: 'Veldig fornøyd, men appen kan bli bedre',
      content: 'Selve klipperen er super, stillegående og effektiv. Installasjonen uten kantledning var en drøm. Appen er funksjonell, men kunne hatt et litt mer intuitivt design. Men alt i alt et veldig godt kjøp.',
      images: [],
    },
    {
        id: 3,
        author: 'Jan P.',
        avatarUrl: 'https://placehold.co/40x40.png',
        rating: 5,
        date: '2. juni 2024',
        title: 'Over all forventning',
        content: 'Var skeptisk til robotklippere uten kantledning, men denne leverer. Den takler bratte skråninger og klipper helt ut til kanten. Imponerende teknologi.',
        images: ['https://placehold.co/200x200.png'],
    },
  ],
};

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-6">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column: Summary */}
          <div className="md:col-span-1">
            <h2 className="mb-4 font-headline text-2xl font-bold lg:text-3xl">Anmeldelser</h2>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-4xl font-bold">{reviewsData.averageRating.toFixed(1)}</span>
              <div>
                <StarRating rating={reviewsData.averageRating} reviewCount={reviewsData.totalReviews} />
                <p className="text-sm text-muted-foreground">Basert på {reviewsData.totalReviews} anmeldelser</p>
              </div>
            </div>
            <div className="space-y-2">
              {reviewsData.ratingDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{dist.stars} stjerner</span>
                  <Progress value={dist.percentage} className="h-2 flex-1" />
                  <span className="w-8 text-right text-sm text-muted-foreground">{dist.count}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-6 w-full">Skriv en anmeldelse</Button>
          </div>

          {/* Right Column: Individual Reviews */}
          <div className="space-y-8 md:col-span-2">
            {reviewsData.reviews.map((review) => (
              <div key={review.id} className="border-b pb-8 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={review.avatarUrl} alt={review.author} data-ai-hint="person portrait" />
                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                       <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <h4 className="mt-4 font-semibold">{review.title}</h4>
                    <p className="mt-1 text-sm text-foreground">{review.content}</p>
                    {review.images.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
                        {review.images.map((imgSrc, idx) => (
                          <div key={idx} className="relative aspect-square w-full overflow-hidden rounded-md">
                            <Image src={imgSrc} alt={`Bilde fra anmeldelse ${idx + 1}`} layout="fill" objectFit="cover" data-ai-hint="lawn garden" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
             <div className="text-center">
                <Button variant="outline">Last inn flere anmeldelser</Button>
            </div>
          </div>
        </div>
    </section>
  );
}
