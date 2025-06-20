import Link from 'next/link';
import { Package, Home, ShieldCheck, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  { icon: Package, title: 'Hent i butikk', description: 'Bestill på nett, hent i din nærmeste butikk.', href: '#' },
  { icon: Home, title: 'Levert hjem', description: 'Få varene levert rett på døren.', href: '#' },
  { icon: ShieldCheck, title: 'Trygg handel', description: 'Sikker betaling og gode garantier.', href: '#' },
  { icon: Award, title: 'Medlemsfordeler', description: 'Unike tilbud og bonus for medlemmer.', href: '#' },
];

export function FeaturedLinksSection() {
  return (
    <section className="bg-secondary py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="group">
              <Card className="h-full transform rounded-lg p-1 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="flex flex-col items-center p-6 text-center md:flex-row md:text-left">
                  <feature.icon className="mb-3 h-10 w-10 text-primary md:mb-0 md:mr-4" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold group-hover:text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
