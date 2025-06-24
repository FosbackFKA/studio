
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
    id: 'SEGNAV01',
    title: 'Robotgressklipper Navimow H3000E med VisionFence',
    price: '34 999,-',
    salePrice: '29 999,-',
    imageUrl: kampanjeBilde1,
    imageAlt: 'Segway Robotgressklipper',
    productUrl: '#',
    dataAiHint: 'robotic lawnmower segway',
    brand: 'Segway',
    onlineStock: true,
    storeStockCount: 63,
  },
  {
    id: 'CHAMPGEN01',
    title: 'Strømaggregat 92001I-EU bensin inverter 2,2 kW',
    price: '7 999,-',
    salePrice: '5 999,-',
    imageUrl: kampanjeBilde2,
    imageAlt: 'Champion Strømaggregat',
    productUrl: '#',
    dataAiHint: 'petrol generator',
    brand: 'Champion Europe',
    onlineStock: true,
    storeStockCount: 88,
  },
  {
    id: 'STHLRM22R',
    title: 'Bensindrevet bio gressklipper RM 2,2 R',
    price: '4 449,-',
    salePrice: '3 999,-',
    imageUrl: kampanjeBilde3,
    imageAlt: 'Stihl Gressklipper',
    productUrl: '#',
    dataAiHint: 'petrol lawnmower stihl',
    brand: 'Stihl',
    onlineStock: true,
    storeStockCount: 68,
  },
   {
    id: 'KARCHK4P',
    title: 'Høytrykkspyler K4 Premium',
    price: '3 199,-',
    salePrice: '2 699,-',
    imageUrl: kampanjeBilde4,
    imageAlt: 'Kärcher Høytrykkspyler',
    productUrl: '#',
    dataAiHint: 'pressure washer karcher',
    brand: 'Kärcher',
    onlineStock: true,
    storeStockCount: 81,
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
