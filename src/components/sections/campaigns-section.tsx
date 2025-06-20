
import { ProductCard } from '@/components/common/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const campaigns = [
  {
    title: 'STIHL Motorsag MS 170',
    price: '2490,-',
    originalPrice: '2990,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'STIHL Motorsag',
    productUrl: '#',
    badgeText: 'Spar 500,-',
    dataAiHint: 'chainsaw stihl'
  },
  {
    title: 'Kärcher Høytrykksvasker K5',
    price: '3499,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Kärcher Høytrykksvasker',
    productUrl: '#',
    dataAiHint: 'pressure washer karcher'
  },
  {
    title: 'Felleskjøpet Plenrens 14kg',
    price: '499,-',
    originalPrice: '599,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Plenrens',
    productUrl: '#',
    badgeText: 'Godt kjøp!',
    dataAiHint: 'lawn care product'
  },
   {
    title: 'Viking Gressklipper MB 448',
    price: '5990,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Viking Gressklipper',
    productUrl: '#',
    dataAiHint: 'lawnmower viking'
  },
];

export function CampaignsSection() {
  return (
    <section className="py-12 lg:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-3xl font-bold">Aktuelle kampanjer</h2>
          <Button variant="link" asChild className="text-primary hover:underline">
            <Link href="#">Se alle kampanjer</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {campaigns.map((campaign) => (
            <ProductCard key={campaign.title} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
}
