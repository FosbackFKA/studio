import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[calc(70vh-80px)] min-h-[400px] w-full bg-gray-200">
      <Image
        src="https://placehold.co/1600x600.png"
        alt="Våronna kampanje"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        data-ai-hint="farm spring"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-white">
        <h1 className="mb-4 font-headline text-4xl font-bold md:text-5xl lg:text-6xl">
          Alt du trenger til våronna
        </h1>
        <p className="mb-8 max-w-xl text-lg md:text-xl">
          Utforsk vårt brede utvalg av kvalitetsprodukter for en vellykket sesong.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="#">Se alle produkter</Link>
        </Button>
      </div>
    </section>
  );
}
