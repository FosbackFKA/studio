'use client';

import Link from 'next/link';
import { FkaLogo } from '@/components/common/logo';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// A simple inline SVG for the wheat graphic to avoid creating new files
const WheatGraphic = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M50 200V100M50 100C50 100 60 90 65 80C70 70 70 60 70 60M50 100C50 100 40 90 35 80C30 70 30 60 30 60M50 100C50 100 60 80 65 70C70 60 70 50 70 50M50 100C50 100 40 80 35 70C30 60 30 50 30 50M50 100C50 100 60 70 65 60C70 50 70 40 70 40M50 100C50 100 40 70 35 60C30 50 30 40 30 40M50 100C50 100 60 60 65 50C70 40 70 30 70 30M50 100C50 100 40 60 35 50C30 40 30 30 30 30M50 30V0"
      stroke="#FDBB30" // A yellow-ish color for the wheat
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function FooterComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="w-full">
      {/* Top Green Part */}
      <div className="relative overflow-hidden bg-[hsl(var(--secondary-foreground))] pt-12 pb-8 text-primary-foreground">
        <div className="container relative z-10 mx-auto max-w-[1542px] px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Column 1: Logo and Org Info */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <FkaLogo className="h-10 w-auto invert filter brightness-0" />
              </Link>
              <div>
                <p className="text-sm opacity-90">Org. nr. 911608103</p>
                <Link href="#" className="text-sm opacity-90 underline hover:text-white">
                  Administrer cookies
                </Link>
              </div>
            </div>

            {/* Column 2: Kundeservice */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Kundeservice</h3>
              <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 md:grid-cols-1">
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Kontakt oss</Link></li>
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Frakt og levering</Link></li>
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Betaling</Link></li>
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Retur og angrerett</Link></li>
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Reklamasjon</Link></li>
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Betingelser</Link></li>
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Personopplysninger</Link></li>
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Nettsvindel</Link></li>
                <li><Link href="#" className="opacity-90 hover:text-white hover:underline">Informasjonskapsler</Link></li>
              </ul>
            </div>

            {/* Column 3 is empty for spacing, graphic is absolute positioned */}
            <div></div>
          </div>
          
          <div className="my-8 border-t border-white/30"></div>

          <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
             <div>
                <h4 className="font-semibold text-white">Postadresse</h4>
                <p className="opacity-90">Felleskjøpet Agri SA<br/>Postboks 469, Sentrum, 0105 Oslo</p>
             </div>
             <div>
                <h4 className="font-semibold text-white">Fakturadresse</h4>
                <p className="opacity-90">Felleskjøpet Agri SA<br/>Postboks 469, Sentrum, 0105 Oslo</p>
             </div>
             <div>
                <h4 className="font-semibold text-white">Besøksadresse</h4>
                <p className="opacity-90">Felleskjøpet Agri SA<br/>Depotgata 22, 2000 Lillestrøm</p>
             </div>
          </div>
        </div>
        {/* Wheat Graphic */}
        <div className="absolute bottom-0 right-0 z-0 h-48 w-48 md:right-16 md:h-64 md:w-64">
           <div className="relative h-full w-full">
             <WheatGraphic className="absolute bottom-0 right-1/2 h-2/3 w-auto translate-x-[90%] opacity-80" />
             <WheatGraphic className="absolute bottom-0 right-1/2 h-full w-auto translate-x-[20%]" />
           </div>
        </div>
      </div>
      
      {/* Bottom White Part */}
      <div className="bg-background py-6">
        <div className="container mx-auto flex max-w-[1542px] flex-col items-center justify-between gap-6 px-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <span className="font-bold text-pink-500 text-2xl">Klarna.</span>
              <div className="flex items-center">
                 <div className="h-8 w-8 rounded-full bg-red-600"></div>
                 <div className="-ml-3 h-8 w-8 rounded-full bg-yellow-500 opacity-90"></div>
              </div>
              <span className="font-bold text-blue-900">maestro</span>
              <span className="font-bold text-blue-800 text-2xl italic">VISA</span>
              <span className="rounded border-2 border-muted px-3 py-1 text-xs font-bold text-blue-900">VISA</span>
            </div>
            <div className="flex items-center gap-6 text-xl font-semibold text-muted-foreground">
              <span>bring</span>
              <span className="font-bold">POSTEN</span>
            </div>
        </div>
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-card shadow-lg ring-1 ring-border transition-opacity hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-label="Gå til toppen"
      >
        <ArrowUp className="mx-auto h-6 w-6" />
      </button>
    </footer>
  );
}
