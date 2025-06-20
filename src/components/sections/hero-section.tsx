
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import heroImage from '@/components/common/heroimage-blurrybg.png'; // Updated import

const promoItems = [
  {
    title: 'Alt til våronna for Norsk Landbruk',
    imageUrl: 'https://placehold.co/400x300.png',
    href: '#',
    dataAiHint: 'farming spring work',
    bgColor: 'bg-green-700', 
  },
  {
    title: 'Robotgressklipper',
    imageUrl: 'https://placehold.co/400x300.png',
    href: '#',
    dataAiHint: 'robotic lawnmower',
    bgColor: 'bg-green-700',
  },
  {
    title: 'Tilhengere',
    imageUrl: 'https://placehold.co/400x300.png',
    href: '#',
    dataAiHint: 'trailer agriculture',
    bgColor: 'bg-green-700',
  },
  {
    title: 'Alt fôret katten trenger',
    imageUrl: 'https://placehold.co/400x300.png',
    href: '#',
    dataAiHint: 'cat food supplies',
    bgColor: 'bg-green-700',
  },
];

export function HeroSection() {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="relative mb-8 h-[300px] w-full md:h-[400px] lg:h-[350px]">
          <Image
            src={heroImage} // Use the imported image
            alt="Sommer i hver krukke og bed!"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
            // data-ai-hint removed as we are using a specific image
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-2 font-headline text-4xl font-bold md:text-5xl lg:text-6xl">
              Sommer i hver krukke og bed!
            </h1>
            <p className="max-w-xl text-lg md:text-xl">
              Hos oss får du alt du trenger for en grønn og frodig sommer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promoItems.map((item) => (
            <Link href={item.href} key={item.title} className="group block">
              <Card className={`overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg ${item.bgColor}`}>
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
                  <CardTitle className="text-lg font-semibold text-white group-hover:underline">{item.title}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
