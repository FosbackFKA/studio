
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Hage og uterom', href: '#' },
  { name: 'Kjæledyr', href: '#' },
  { name: 'Skog og ved', href: '#' },
  { name: 'Verksted og redskap', href: '#' },
  { name: 'Klær og fottøy', href: '#' },
  { name: 'Traktor og maskin', href: '#' },
  { name: 'Landbruk', href: '#' },
  { name: 'Tilbud', href: '#', special: true },
  { name: 'Tjenester', href: '#' },
];

export function MainNavMenu() {
  return (
    <nav className="bg-card">
      <div className="container mx-auto">
        <ul className="flex h-12 items-center justify-center space-x-1 overflow-x-auto px-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "whitespace-nowrap px-3 py-2 text-sm font-medium hover:border-b-2",
                  item.special 
                    ? "text-destructive hover:text-destructive font-bold hover:border-destructive" 
                    : "text-foreground hover:border-primary"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
