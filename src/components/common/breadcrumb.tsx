
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm text-muted-foreground', className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-4 w-4" />}
            <Link
              href={item.href}
              className={cn(
                'hover:text-primary',
                index === items.length - 1 ? 'font-medium text-foreground' : ''
              )}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
