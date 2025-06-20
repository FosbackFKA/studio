
import { ProductCard } from '@/components/common/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const campaigns = [
  {
    id: 'STH001',
    title: 'STIHL Motorsag MS 170',
    price: '2490,-',
    salePrice: '2490,-', // Assuming this is the actual price, if it's a sale, set original price here
    originalPrice: '2990,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'STIHL Motorsag',
    productUrl: '#',
    badgeText: 'Spar 500,-',
    dataAiHint: 'chainsaw stihl',
    brand: 'STIHL'
  },
  {
    id: 'KAR002',
    title: 'Kärcher Høytrykksvasker K5',
    price: '3499,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Kärcher Høytrykksvasker',
    productUrl: '#',
    dataAiHint: 'pressure washer karcher',
    brand: 'Kärcher'
  },
  {
    id: 'FKP003',
    title: 'Felleskjøpet Plenrens 14kg',
    price: '499,-',
    salePrice: '499,-',
    originalPrice: '599,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Plenrens',
    productUrl: '#',
    badgeText: 'Godt kjøp!',
    dataAiHint: 'lawn care product',
    brand: 'Felleskjøpet'
  },
   {
    id: 'VIK004',
    title: 'Viking Gressklipper MB 448',
    price: '5990,-',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAlt: 'Viking Gressklipper',
    productUrl: '#',
    dataAiHint: 'lawnmower viking',
    brand: 'Viking'
  },
];

export function CampaignsSection() {
  return (
    <section className="py-12 lg:py-16 bg-card">
      <div className="container mx-auto px-4 max-w-[1542px]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-headline text-3xl font-bold">Aktuelle kampanjer</h2>
          <Button variant="link" asChild className="text-primary hover:underline">
            <Link href="#">Se alle kampanjer</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {campaigns.map((campaign) => (
            <ProductCard
              key={campaign.id}
              title={campaign.title}
              price={campaign.originalPrice || campaign.price} // Show originalPrice as strikethrough if salePrice exists
              salePrice={campaign.salePrice !== campaign.price ? campaign.salePrice : undefined}
              imageUrl={campaign.imageUrl}
              imageAlt={campaign.imageAlt}
              productUrl={campaign.productUrl}
              badgeText={campaign.badgeText}
              dataAiHint={campaign.dataAiHint}
              brand={campaign.brand}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
