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
    <nav aria-label="Målgruppe" className="flex items-center gap-4">
      {audienceConfig.map((audience) => {
        const isActive = audience.id === activeAudience;
        return (
            <Link
                key={audience.id}
                href={audience.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                    'relative py-1 text-sm font-medium transition-colors',
                    isActive
                    ? 'text-primary'
                    : 'text-muted-foreground/80 hover:text-foreground'
                )}
            >
            {audience.name}
            {isActive && (
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary rounded-full"></span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
