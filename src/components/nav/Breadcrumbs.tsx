
'use client';

import Link from 'next/link';
import { useTheme } from '@/lib/theme/provider';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const themeRootMap: Record<string, BreadcrumbItem> = {
    bonde: { name: 'Bonde', href: '/bonde' },
    bedrift: { name: 'Bedrift', href: '/bedrift' },
    consumer: { name: 'Forbruker', href: '/' },
};

export function Breadcrumbs({ items, className }: BreadcrumbProps) {
  const { theme } = useTheme();
  const rootItem = themeRootMap[theme] || themeRootMap.consumer;

  const allItems = [rootItem, ...items];

  return (
    <nav aria-label="Brødsmulesti" className={cn('text-sm text-muted-foreground', className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {allItems.map((item, index) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-4 w-4" />}
            <Link
              href={item.href}
              className={cn(
                'hover:text-primary hover:underline',
                index === allItems.length - 1 ? 'font-medium text-foreground' : ''
              )}
              aria-current={index === allItems.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
