
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import heroImage from '@/components/common/heroimage-blurrybg.png';

const promoItems = [
  {
    title: 'Alt til våronna for Norsk Landbruk',
    imageUrl: 'https://placehold.co/400x300.png',
    href: '#',
    dataAiHint: 'farming spring work',
    bgColorClass: 'bg-primary', 
  },
  {
    title: 'Robotgressklipper',
    imageUrl: 'https://placehold.co/400x300.png',
    href: '#',
    dataAiHint: 'robotic lawnmower',
    bgColorClass: 'bg-primary',
  },
  {
    title: 'Tilhengere',
    imageUrl: 'https://placehold.co/400x300.png',
    href: '#',
    dataAiHint: 'trailer agriculture',
    bgColorClass: 'bg-primary',
  },
  {
    title: 'Alt fôret katten trenger',
    imageUrl: 'https://placehold.co/400x300.png',
    href: '#',
    dataAiHint: 'cat food supplies',
    bgColorClass: 'bg-primary',
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
        <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay for text contrast */}
        
        {/* Text Content - Centered and Constrained */}
        <div className="container mx-auto px-4 h-full">
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-2 font-headline text-4xl font-bold md:text-5xl lg:text-6xl">
              Sommer i hver krukke og bed!
            </h1>
            <p className="max-w-xl text-lg md:text-xl">
              Hos oss får du alt du trenger for en grønn og frodig sommer.
            </p>
          </div>
        </div>
      </div>

      {/* Promo Items Area - Constrained and Overlapping */}
      <div className="container mx-auto px-4">
        {/* Ensure z-index is high enough to overlap, negative margin pulls it up. mb-8 for spacing below this section. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 relative z-20 mt-[-70px] mb-8">
          {promoItems.map((item) => (
            <Link href={item.href} key={item.title} className="group block">
              <Card className={`overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg ${item.bgColorClass}`}>
                <div className="relative h-40 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <CardTitle className="text-lg font-semibold text-primary-foreground group-hover:underline">{item.title}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
