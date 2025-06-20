
import Link from 'next/link';
import { cn } from '@/lib/utils';

const leftNavItems = [
  { name: 'Hage og utemiljø', href: '#' },
  { name: 'Kjæledyr', href: '#' },
  { name: 'Skog og ved', href: '#' },
  { name: 'Landbruk', href: '#' },
  { name: 'Verksted og hus', href: '#' },
  { name: 'Klær og fottøy', href: '#' },
];

const rightNavItems = [
  { name: 'Tilbud', href: '#', special: true },
  { name: 'Tjenester', href: '#', special: false },
  { name: 'Aktuelt', href: '#', special: false },
  { name: 'Merkevarer', href: '#', special: false },
];

export function MainNavMenu() {
  return (
    <nav className="bg-card">
      <div className="container mx-auto max-w-[1542px]">
        <div className="flex h-12 items-center justify-between px-4">
          <ul className="flex items-center space-x-1">
            {leftNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-primary",
                    "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="hidden items-center space-x-1 lg:flex">
            {rightNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap px-3 py-2 text-sm hover:border-b-2 hover:border-primary",
                    item.special ? "font-semibold text-destructive" : "font-medium text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

    