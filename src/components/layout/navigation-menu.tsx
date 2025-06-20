
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Hage og utemiljø', href: '#' },
  { name: 'Kjæledyr', href: '#' },
  { name: 'Skog og ved', href: '#' },
  { name: 'Landbruk', href: '#' },
  { name: 'Verksted og hus', href: '#' }, // Adjusted from "Verksted, hus og hjem"
  { name: 'Klær og fottøy', href: '#' },
  { name: 'Tilbud', href: '#', special: true }, // Kept special styling for "Tilbud"
  { name: 'Tjenester', href: '#' },
  // Removed 'Merkevarer' as it's not prominent in the screenshot's main nav
];

export function MainNavMenu() {
  return (
    <nav className="bg-card"> {/* Removed md:block to ensure it's part of the main flow controlled by header */}
      <div className="container mx-auto">
        <ul className="flex h-12 items-center justify-center space-x-1 overflow-x-auto px-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  item.special ? "text-destructive hover:text-destructive font-bold" : "text-foreground"
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
