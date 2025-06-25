
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const leftNavItems = [
  { name: 'Hage og uterom', href: '#' },
  { name: 'Kjæledyr', href: '#' },
  { name: 'Klær og sko', href: '#' },
  { name: 'Hjem og fritid', href: '#' },
  { name: 'Verktøy og redskap', href: '#' },
  { name: 'Skog og ved', href: '#' },
];

export const rightNavItems = [
  { name: 'Kampanjer', href: '#'},
  { name: 'Lagersalg', href: '#'},
  { name: 'Merkevarer', href: '#'},
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
                    "whitespace-nowrap px-3 py-2 text-sm font-semibold hover:border-b-2 hover:border-primary",
                    "text-primary" 
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
