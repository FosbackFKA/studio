
import Link from 'next/link';
import { FkaLogo } from '@/components/common/logo';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card pt-12 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <FkaLogo className="mb-4 h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Felleskjøpet Agri er et samvirke eid av rundt 39 000 bønder. Vi er Norges ledende leverandør av driftsmidler og teknologi til norsk landbruk.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Kundeservice</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary hover:underline">Kontakt oss</Link></li>
              <li><Link href="#" className="hover:text-primary hover:underline">Spørsmål og svar</Link></li>
              <li><Link href="#" className="hover:text-primary hover:underline">Retur og reklamasjon</Link></li>
              <li><Link href="#" className="hover:text-primary hover:underline">Finn din nærmeste butikk</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Om Felleskjøpet</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary hover:underline">Om oss</Link></li>
              <li><Link href="#" className="hover:text-primary hover:underline">Jobb i Felleskjøpet</Link></li>
              <li><Link href="#" className="hover:text-primary hover:underline">Bærekraft og samfunnsansvar</Link></li>
              <li><Link href="#" className="hover:text-primary hover:underline">Presse og media</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Følg oss</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram size={24} /></Link>
              <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary"><Youtube size={24} /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={24} /></Link>
            </div>
            <h3 className="mt-6 mb-2 text-lg font-semibold">Betalingsmåter</h3>
            <div className="flex items-center space-x-2">
              {/* Replace with actual payment method logos if available/needed */}
              <span className="rounded bg-gray-200 px-2 py-1 text-xs">Vipps</span>
              <span className="rounded bg-gray-200 px-2 py-1 text-xs">Visa</span>
              <span className="rounded bg-gray-200 px-2 py-1 text-xs">Mastercard</span>
              <span className="rounded bg-gray-200 px-2 py-1 text-xs">Faktura</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t py-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Felleskjøpet Agri SA. Alle rettigheter forbeholdt.</p>
          <p className="mt-1">
            <Link href="#" className="hover:text-primary hover:underline">Personvernerklæring</Link> | <Link href="#" className="hover:text-primary hover:underline">Salgsbetingelser</Link> | <Link href="#" className="hover:text-primary hover:underline">Informasjonskapsler</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
