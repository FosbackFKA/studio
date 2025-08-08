
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { TopTasks } from '@/components/bonde/TopTasks';

export default function BondePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="py-12 bg-background">
        <div className="container mx-auto max-w-[1542px] px-4">
            <TopTasks />
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto max-w-[1542px] px-4">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center">Aktuelt for deg</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Kornpriser - Uke 34</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Se de siste oppdaterte kornprisene for din region. Prisene er justert for lokale forhold.</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="#">Gå til kornpriser</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Teikn kornavtale for 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sikre deg forutsigbarhet og gode betingelser. Se våre ulike avtaletyper og tegn digitalt i dag.</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="#">Se avtaler</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nytt fra Felleskjøpet</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Les siste nytt om produkter, tjenester og faglige råd som hjelper deg i din drift.</p>
                <Button variant="link" asChild className="p-0 mt-4">
                  <Link href="#">Les nyheter</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
