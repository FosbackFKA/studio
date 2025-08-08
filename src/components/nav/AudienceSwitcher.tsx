
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Audience = 'forbruker' | 'bonde' | 'bedrift';

const audienceConfig: { id: Audience; name: string; href: string }[] = [
    { id: 'forbruker', name: 'Forbruker', href: '/' },
    { id: 'bonde', name: 'Bonde', href: '/bonde' },
    { id: 'bedrift', name: 'Bedrift', href: '/bedrift' },
];

export function AudienceSwitcher() {
  const pathname = usePathname();

  const getActiveAudience = (): Audience => {
    if (pathname.startsWith('/bonde')) return 'bonde';
    if (pathname.startsWith('/bedrift')) return 'bedrift';
    return 'forbruker';
  };

  const activeAudience = getActiveAudience();

  return (
    <nav aria-label="Målgruppe" className="flex items-center space-x-2 rounded-full border bg-secondary p-1">
      {audienceConfig.map((audience) => {
        const isActive = audience.id === activeAudience;
        return (
            <Link
                key={audience.id}
                href={audience.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                    'rounded-full px-3 py-1 text-sm font-medium transition-colors',
                    isActive
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                )}
            >
            {audience.name}
          </Link>
        );
      })}
    </nav>
  );
}
