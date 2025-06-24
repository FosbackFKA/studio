'use client';

import Link from 'next/link';
import { FkaLogo } from '@/components/common/logo';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// New flourish graphic component using the provided HTML, converted to JSX
const FlourishGraphic = () => (
    <div className="absolute bottom-0 right-0 z-0 mr-10 flex items-end gap-8 text-yellow-400 max-md:hidden">
      <span className="text-[28px]">
        <svg width="1em" height="4.25em" viewBox="0 0 16 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.95411 54.981C6.97409 54.9666 6.00007 54.8558 5.05422 54.6513L4.36377 56.7021C5.12048 56.8502 5.88967 56.954 6.66526 57.0133V68H9.335V57.0133C10.1113 56.9487 10.8806 56.8386 11.6365 56.6839L10.9921 54.6331C10.0026 54.853 8.9814 54.97 7.95411 54.981Z" fill="currentColor"></path>
          <path d="M8 53.4177C10.0892 53.4183 12.0958 52.6353 13.5907 51.2354C15.0857 49.8359 15.9504 47.931 16 45.9282V4.81578H13.8147V21.545C13.8147 23.5131 13.2257 24.3878 10.9264 25.8092C10.1935 26.1702 9.54648 26.6728 9.02613 27.2854V-0.000976562L6.93587 -0.00095731V27.2854C6.40803 26.6991 5.76154 26.2217 5.03564 25.8822C4.05763 25.48 3.24486 24.7802 2.72285 23.8909C2.20082 23.0017 1.99856 21.9723 2.14728 20.9618V4.81578H0V45.9282C0.0447934 47.9325 0.907991 49.8403 2.40399 51.2408C3.89998 52.6413 5.90933 53.4231 8 53.4177ZM9.10215 32.789C9.04386 31.7402 9.29453 30.6969 9.82547 29.7785C10.3564 28.86 11.1462 28.1034 12.1045 27.5952C12.7295 27.2068 13.3037 26.7479 13.8147 26.2284V29.2717C13.9621 30.2844 13.757 31.3153 13.2314 32.2049C12.7058 33.0946 11.8889 33.7929 10.9074 34.192C10.1745 34.5531 9.52747 35.0557 9.00712 35.6681L9.10215 32.789ZM9.10215 41.1536C9.04831 40.1054 9.30089 39.0638 9.8314 38.1462C10.3619 37.2285 11.1492 36.4712 12.1045 35.9598C12.7331 35.5834 13.308 35.13 13.8147 34.6111V37.6546C13.9621 38.6673 13.757 39.6982 13.2314 40.5876C12.7058 41.4773 11.8889 42.1757 10.9074 42.5751C10.1701 42.9293 9.52173 43.4328 9.00712 44.0511L9.10215 41.1536ZM9.10215 49.5181C9.11765 48.4822 9.39981 47.466 9.92361 46.5597C10.4474 45.6536 11.1966 44.886 12.1045 44.3244C12.7337 43.9416 13.3086 43.482 13.8147 42.9575V45.7459C13.8127 47.04 13.3415 48.293 12.4817 49.2907C11.6219 50.288 10.4271 50.9675 9.10215 51.2129V49.5181ZM2.20428 26.2284C2.71114 26.7522 3.2859 27.2115 3.91451 27.5952C4.87482 28.1025 5.66723 28.8584 6.20141 29.7767C6.73559 30.695 6.99009 31.7387 6.93587 32.789V35.6681C6.41553 35.0557 5.7685 34.5531 5.03564 34.192C4.05763 33.7898 3.24486 33.0902 2.72285 32.2008C2.20082 31.3116 1.99856 30.2822 2.14728 29.2717L2.20428 26.2284ZM2.20428 34.6111C2.70693 35.1341 3.28245 35.5878 3.91451 35.9598C4.87187 36.4703 5.6618 37.227 6.19555 38.1443C6.72926 39.062 6.98563 40.1038 6.93587 41.1536V44.1057C6.42124 43.4877 5.77293 42.9838 5.03564 42.6296C4.05763 42.2274 3.24486 41.5275 2.72285 40.6384C2.20082 39.749 1.99856 38.7197 2.14728 37.7092L2.20428 34.6111ZM2.20428 42.9575C2.70617 43.4864 3.28166 43.9463 3.91451 44.3244C4.83514 44.8875 5.59401 45.6631 6.12179 46.5798C6.64957 47.4965 6.92944 48.5255 6.93587 49.5727V51.2674C5.60436 51.0384 4.40116 50.3627 3.5413 49.3612C2.68147 48.3598 2.22103 47.0977 2.24228 45.8005L2.20428 42.9575Z" fill="currentColor"></path>
        </svg>
      </span>
      <span className="text-[51px]">
        <svg width="1em" height="4.25em" viewBox="0 0 16 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.95411 54.981C6.97409 54.9666 6.00007 54.8558 5.05422 54.6513L4.36377 56.7021C5.12048 56.8502 5.88967 56.954 6.66526 57.0133V68H9.335V57.0133C10.1113 56.9487 10.8806 56.8386 11.6365 56.6839L10.9921 54.6331C10.0026 54.853 8.9814 54.97 7.95411 54.981Z" fill="currentColor"></path>
          <path d="M8 53.4177C10.0892 53.4183 12.0958 52.6353 13.5907 51.2354C15.0857 49.8359 15.9504 47.931 16 45.9282V4.81578H13.8147V21.545C13.8147 23.5131 13.2257 24.3878 10.9264 25.8092C10.1935 26.1702 9.54648 26.6728 9.02613 27.2854V-0.000976562L6.93587 -0.00095731V27.2854C6.40803 26.6991 5.76154 26.2217 5.03564 25.8822C4.05763 25.48 3.24486 24.7802 2.72285 23.8909C2.20082 23.0017 1.99856 21.9723 2.14728 20.9618V4.81578H0V45.9282C0.0447934 47.9325 0.907991 49.8403 2.40399 51.2408C3.89998 52.6413 5.90933 53.4231 8 53.4177ZM9.10215 32.789C9.04386 31.7402 9.29453 30.6969 9.82547 29.7785C10.3564 28.86 11.1462 28.1034 12.1045 27.5952C12.7295 27.2068 13.3037 26.7479 13.8147 26.2284V29.2717C13.9621 30.2844 13.757 31.3153 13.2314 32.2049C12.7058 33.0946 11.8889 33.7929 10.9074 34.192C10.1745 34.5531 9.52747 35.0557 9.00712 35.6681L9.10215 32.789ZM9.10215 41.1536C9.04831 40.1054 9.30089 39.0638 9.8314 38.1462C10.3619 37.2285 11.1492 36.4712 12.1045 35.9598C12.7331 35.5834 13.308 35.13 13.8147 34.6111V37.6546C13.9621 38.6673 13.757 39.6982 13.2314 40.5876C12.7058 41.4773 11.8889 42.1757 10.9074 42.5751C10.1701 42.9293 9.52173 43.4328 9.00712 44.0511L9.10215 41.1536ZM9.10215 49.5181C9.11765 48.4822 9.39981 47.466 9.92361 46.5597C10.4474 45.6536 11.1966 44.886 12.1045 44.3244C12.7337 43.9416 13.3086 43.482 13.8147 42.9575V45.7459C13.8127 47.04 13.3415 48.293 12.4817 49.2907C11.6219 50.288 10.4271 50.9675 9.10215 51.2129V49.5181ZM2.20428 26.2284C2.71114 26.7522 3.2859 27.2115 3.91451 27.5952C4.87482 28.1025 5.66723 28.8584 6.20141 29.7767C6.73559 30.695 6.99009 31.7387 6.93587 32.789V35.6681C6.41553 35.0557 5.7685 34.5531 5.03564 34.192C4.05763 33.7898 3.24486 33.0902 2.72285 32.2008C2.20082 31.3116 1.99856 30.2822 2.14728 29.2717L2.20428 26.2284ZM2.20428 34.6111C2.70693 35.1341 3.28245 35.5878 3.91451 35.9598C4.87187 36.4703 5.6618 37.227 6.19555 38.1443C6.72926 39.062 6.98563 40.1038 6.93587 41.1536V44.1057C6.42124 43.4877 5.77293 42.9838 5.03564 42.6296C4.05763 42.2274 3.24486 41.5275 2.72285 40.6384C2.20082 39.749 1.99856 38.7197 2.14728 37.7092L2.20428 34.6111ZM2.20428 42.9575C2.70617 43.4864 3.28166 43.9463 3.91451 44.3244C4.83514 44.8875 5.59401 45.6631 6.12179 46.5798C6.64957 47.4965 6.92944 48.5255 6.93587 49.5727V51.2674C5.60436 51.0384 4.40116 50.3627 3.5413 49.3612C2.68147 48.3598 2.22103 47.0977 2.24228 45.8005L2.20428 42.9575Z" fill="currentColor"></path>
        </svg>
      </span>
    </div>
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
        <FlourishGraphic />
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
