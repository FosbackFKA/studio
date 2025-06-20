
import Link from 'next/link';
import { FkaLogo } from '@/components/common/logo';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-[hsl(var(--secondary-foreground))] pt-12 text-primary-foreground">
      <div className="container mx-auto px-4 max-w-[1542px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <FkaLogo className="mb-4 h-10 w-auto invert brightness-0 filter" />
            <p className="text-sm opacity-90">
              Felleskjøpet Agri er et samvirke eid av norske bønder, og er den viktigste leverandøren av teknologi og driftsmidler til norsk landbruk.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Kundeservice</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Kontakt oss</Link></li>
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Finn butikk</Link></li>
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Spørsmål og svar</Link></li>
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Salgsbetingelser</Link></li>
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Retur og reklamasjon</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Om Felleskjøpet</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Om oss</Link></li>
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Bærekraft</Link></li>
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Ledige stillinger</Link></li>
              <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Presse</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Følg oss</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="opacity-90 hover:text-white"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Instagram" className="opacity-90 hover:text-white"><Instagram size={24} /></Link>
              <Link href="#" aria-label="YouTube" className="opacity-90 hover:text-white"><Youtube size={24} /></Link>
            </div>
            <h3 className="mt-6 mb-2 text-lg font-semibold text-white">Betalingsmåter</h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded border border-white/40 px-2 py-1 text-xs opacity-90">Vipps</span>
              <span className="rounded border border-white/40 px-2 py-1 text-xs opacity-90">Visa</span>
              <span className="rounded border border-white/40 px-2 py-1 text-xs opacity-90">Mastercard</span>
              <span className="rounded border border-white/40 px-2 py-1 text-xs opacity-90">Walley Faktura</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/30 py-8 text-center text-sm opacity-90">
          <p>&copy; {currentYear} Felleskjøpet Agri SA - Alle rettigheter reservert</p>
          <p className="mt-1">
            <Link href="#" className="hover:text-white hover:underline">Personvern</Link> | <Link href="#" className="hover:text-white hover:underline">Informasjonskapsler</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
