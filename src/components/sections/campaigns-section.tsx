
import { ProductCard } from '@/components/common/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Import new local images for the campaigns
import kampanjeBilde1 from '../common/aktuelle-kampanjer/1.webp';
import kampanjeBilde2 from '../common/aktuelle-kampanjer/2.webp';
import kampanjeBilde3 from '../common/aktuelle-kampanjer/3.webp';
import kampanjeBilde4 from '../common/aktuelle-kampanjer/4.webp';

const campaigns = [
  {
    id: 'STH001',
    title: 'STIHL Motorsag MS 170',
    price: '2990,-',
    salePrice: '2490,-',
    imageUrl: kampanjeBilde1,
    imageAlt: 'STIHL Motorsag',
    productUrl: '#',
    badgeText: 'Spar 500,-',
    dataAiHint: 'chainsaw stihl',
    brand: 'STIHL',
    onlineStock: true,
    storeStockCount: 45,
  },
  {
    id: 'KAR002',
    title: 'Kärcher Høytrykksvasker K5',
    price: '3499,-',
    imageUrl: kampanjeBilde2,
    imageAlt: 'Kärcher Høytrykksvasker',
    productUrl: '#',
    dataAiHint: 'pressure washer karcher',
    brand: 'Kärcher',
    onlineStock: true,
    storeStockCount: 62,
  },
  {
    id: 'FKP003',
    title: 'Felleskjøpet Plenrens 14kg',
    price: '599,-',
    salePrice: '499,-',
    imageUrl: kampanjeBilde3,
    imageAlt: 'Plenrens',
    productUrl: '#',
    badgeText: 'Godt kjøp!',
    dataAiHint: 'lawn care product',
    brand: 'Felleskjøpet',
    onlineStock: true,
    storeStockCount: 120,
  },
   {
    id: 'VIK004',
    title: 'Viking Gressklipper MB 448',
    price: '5990,-',
    imageUrl: kampanjeBilde4,
    imageAlt: 'Viking Gressklipper',
    productUrl: '#',
    dataAiHint: 'lawnmower viking',
    brand: 'Viking',
    onlineStock: false,
    storeStockCount: 18,
  },
];

export function CampaignsSection() {
  return (
    <section className="py-12 lg:py-16 bg-card">
      <div className="container mx-auto max-w-[1542px] px-4">
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
              {...campaign}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
