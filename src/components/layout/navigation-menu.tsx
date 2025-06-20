import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Hage', href: '#' },
  { name: 'Husdyr', href: '#' },
  { name: 'Skog og ved', href: '#' },
  { name: 'Landbruk', href: '#' },
  { name: 'Verksted og vedlikehold', href: '#' },
  { name: 'Klær og fottøy', href: '#' },
  { name: 'Hjem og fritid', href: '#' },
  { name: 'Kampanjer', href: '#', special: true },
  { name: 'Merkevarer', href: '#' },
];

export function MainNavMenu() {
  return (
    <nav className="hidden border-t bg-card md:block">
      <div className="container mx-auto">
        <ul className="flex h-12 items-center justify-center space-x-2 overflow-x-auto px-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  item.special ? "text-destructive hover:text-destructive" : "text-foreground"
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
