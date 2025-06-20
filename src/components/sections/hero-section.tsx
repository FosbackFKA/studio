
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import heroImage from '@/components/common/heroimage-blurrybg.png';
import { ArrowRight } from 'lucide-react';

// Import the new local images
import forsidebilde1 from '../common/forsidebilde1.jpg';
import forsidebilde2 from '../common/forsidebilde2.jpg';
import forsidebilde3 from '../common/forsidebilde3.jpg';
import forsidebilde4 from '../common/forsidebilde4.jpg';

interface PromoItem {
  superTitle?: string;
  title: string;
  actionText?: string;
  href: string;
  imageUrl: StaticImageData | string; 
}

const promoItems: PromoItem[] = [
  {
    superTitle: 'Alle våre tilbud på ett sted',
    title: 'Ukens kampanjer',
    actionText: 'Handle nå',
    href: '#',
    imageUrl: forsidebilde1,
  },
  {
    superTitle: 'Få en frodig og lettstelt hage',
    title: 'Robotgressklipper',
    href: '#',
    imageUrl: forsidebilde2,
  },
  {
    superTitle: 'Stort utvalg for de fleste formål',
    title: 'Tilhengere',
    href: '#',
    imageUrl: forsidebilde3,
  },
  {
    superTitle: 'Alt du trenger til katten din',
    title: 'Katteutstyr',
    href: '#',
    imageUrl: forsidebilde4,
  },
];

export function HeroSection() {
  return (
    <section className="w-full bg-background">
      {/* Hero Image Area - Full Width */}
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]">
        <Image
          src={heroImage}
          alt="Sommer i hver krukke og bed!"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
        {/* Text Content - Centered and Constrained */}
        <div className="container mx-auto px-4 h-full">
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="mb-2 font-headline text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
              Sommer i hver krukke og bed!
            </h1>
            <p className="max-w-xl text-lg text-secondary-foreground md:text-xl">
              Utstyret som gir deg grønne fingre og uteglede fra morgen til kveld.
            </p>
          </div>
        </div>
      </div>

      {/* Promo Items Area - Constrained and Overlapping */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 relative z-20 mt-[-70px] mb-8">
          {promoItems.map((item) => (
            <Link href={item.href} key={item.title} className="group block">
              <Card className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="relative h-56 w-full"> {/* Adjusted height */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Text Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 text-left">
                  {item.superTitle && <p className="font-body text-sm font-medium text-yellow-300 mb-0.5">{item.superTitle}</p>}
                  <h3 className="font-headline text-2xl font-bold text-yellow-300 group-hover:underline">{item.title}</h3>
                  {item.actionText && (
                    <div className="mt-1 flex items-center text-sm font-medium text-yellow-300 group-hover:underline font-body">
                      {item.actionText}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
