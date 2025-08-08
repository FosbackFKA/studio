
'use client';

import Link from 'next/link';
import { FkaLogo } from '@/components/common/logo';

export function BondeFooter() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-[1542px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <FkaLogo className="h-10 mb-4" />
            <p className="text-sm">Felleskjøpet Agri SA</p>
            <p className="text-sm">Org. nr. 911608103</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Snarveier</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="hover:underline">Min Gård</Link></li>
              <li><Link href="#" className="hover:underline">Finn avdeling</Link></li>
              <li><Link href="#" className="hover:underline">Kontakt oss</Link></li>
              <li><Link href="#" className="hover:underline">Om Felleskjøpet</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Betingelser</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="hover:underline">Salgsbetingelser</Link></li>
              <li><Link href="#" className="hover:underline">Personvern</Link></li>
              <li><Link href="#" className="hover:underline">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Felleskjøpet Agri SA. Alle rettigheter forbeholdt.</p>
        </div>
      </div>
    </footer>
  );
}
