
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BondePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[60vh] w-full bg-gray-800 text-white">
        <Image
          src="https://placehold.co/1920x800.png"
          alt="Traktor på et jorde"
          fill
          className="object-cover opacity-50"
          data-ai-hint="tractor field"
        />
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center relative z-10">
          <h1 className="text-5xl font-bold font-headline">For den norske bonden</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Finn alt du trenger for en effektiv og lønnsom drift.
          </p>
          <div className="mt-8 w-full max-w-2xl relative">
            <Input
              type="search"
              placeholder="Søk i produkt, fagstoff eller tjenester..."
              className="h-14 pl-12 pr-4 rounded-full text-base text-foreground"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Driftsmidler</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Se vårt utvalg av gjødsel, såvarer og plantevern.</p>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="#">Gå til Driftsmidler</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Maskin og redskap</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Traktorer, treskere og redskap fra John Deere.</p>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="#">Se maskiner</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fag og rådgivning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Få eksperthjelp til din produksjon.</p>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="#">Les fagstoff</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Min Gård</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Logg inn for å administrere din drift.</p>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="#">Logg inn</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
