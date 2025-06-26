
import { ProductCard } from '@/components/common/product-card';
import type { Product } from '@/types/product';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

import popular2 from '@/components/common/aktuelle-kampanjer/2.webp';
import popular3 from '@/components/common/aktuelle-kampanjer/3.webp';
import popular4 from '@/components/common/aktuelle-kampanjer/4.webp';
import popular5 from '@/components/common/aktuelle-kampanjer/5.webp';


const relatedProducts: Product[] = [
    {
      id: 'CHAMP92001I',
      title: 'Strømaggregat 92001I-EU bensin inverter 2,2 kW',
      brand: 'Champion Europe',
      price: '7 999,-',
      salePrice: '5 999,-',
      imageUrl: popular2,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
    {
      id: 'STIHLRM22R',
      title: 'Bensindrevet bio gressklipper RM 2,2 R',
      brand: 'Stihl',
      price: '4 449,-',
      salePrice: '3 999,-',
      imageUrl: popular3,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 68,
    },
    {
      id: 'KARCHERK4P',
      title: 'Høytrykkspyler K4 Premium',
      brand: 'Kärcher',
      price: '3 199,-',
      salePrice: '2 699,-',
      imageUrl: popular4,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 81,
    },
    {
      id: 'GARDENACLAS30',
      title: 'Hageslange Classic (1/2") 30 M',
      brand: 'Gardena',
      price: '499,-',
      salePrice: '379,-',
      imageUrl: popular5,
      productUrl: '#',
      onlineStock: true,
      storeStockCount: 88,
    },
];

export function RelatedProductsSection() {
  return (
    <section className="mt-12 border-t pt-12 lg:mt-16 lg:pt-16">
      <div className="container mx-auto max-w-[1542px]">
        <div className="mb-6 flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row">
            <h2 className="font-headline text-2xl font-bold lg:text-3xl">Andre har også sett på</h2>
        </div>
        
        <div className="hidden px-4 lg:grid lg:grid-cols-4 lg:gap-4">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
        
        <div className="lg:hidden">
          <div className="flex space-x-4 overflow-x-auto px-4 pb-4 no-scrollbar">
            {relatedProducts.map((item) => (
              <div key={item.id} className="w-2/3 flex-shrink-0 sm:w-2/5 md:w-[30%]">
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
