import { ProductCard } from '@/components/common/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const campaigns = [
  {
    title: 'Gjødselpakke Vår',
    price: '1299,-',
    originalPrice: '1599,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Gjødselpakke',
    productUrl: '#',
    badgeText: 'Spar 300,-',
    dataAiHint: 'fertilizer package'
  },
  {
    title: 'Hageredskapssett Pro',
    price: '799,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Hageredskapssett',
    productUrl: '#',
    dataAiHint: 'garden tools'
  },
  {
    title: 'Automower X2000',
    price: '14990,-',
    originalPrice: '16990,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Robotgressklipper',
    productUrl: '#',
    badgeText: 'Ukens Deal!',
    dataAiHint: 'robotic lawnmower'
  },
   {
    title: 'Høytrykkspyler Kraftig',
    price: '2499,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Høytrykkspyler',
    productUrl: '#',
    dataAiHint: 'pressure washer'
  },
];

export function CampaignsSection() {
  return (
    <section className="py-12 lg:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-3xl font-bold">Ukens kampanjer</h2>
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
