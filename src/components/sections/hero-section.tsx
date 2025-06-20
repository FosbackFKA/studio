
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[calc(70vh-80px)] min-h-[400px] w-full bg-gray-200">
      <Image
        src="https://placehold.co/1600x600.png"
        alt="Felleskjøpet kampanje"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
        data-ai-hint="norwegian farm landscape"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-white">
        <h1 className="mb-4 font-headline text-4xl font-bold md:text-5xl lg:text-6xl">
          Kvalitetsprodukter til Norsk Landbruk og Hage
        </h1>
        <p className="mb-8 max-w-xl text-lg md:text-xl">
          Oppdag vårt brede utvalg av redskaper, fôr, og utstyr for en produktiv hverdag. Alt du trenger, samlet på ett sted.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="#">Utforsk vårt sortiment</Link>
        </Button>
      </div>
    </section>
  );
}
