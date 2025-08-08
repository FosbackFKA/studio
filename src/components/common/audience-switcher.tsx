
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Audience = 'privat' | 'bonde';

export function AudienceSwitcher() {
  const pathname = usePathname();
  const [activeAudience, setActiveAudience] = React.useState<Audience>('privat');

  React.useEffect(() => {
    if (pathname.startsWith('/bonde')) {
      setActiveAudience('bonde');
    } else {
      setActiveAudience('privat');
    }
  }, [pathname]);

  const getLink = (target: Audience) => {
    if (target === 'bonde') {
      return '/bonde';
    }
    // Simple logic, can be expanded to map bonde routes back to privat routes
    return '/';
  };

  const PrivatButton = (
    <Link href={getLink('privat')} legacyBehavior passHref>
      <Button
        asChild
        size="sm"
        className={cn(
          'rounded-full px-3 py-1 h-auto text-xs font-medium',
          activeAudience === 'privat'
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'border-primary bg-transparent text-primary hover:bg-primary/10'
        )}
        variant={activeAudience === 'privat' ? 'default' : 'outline'}
      >
        <a>Privat</a>
      </Button>
    </Link>
  );

  const BondeButton = (
    <Link href={getLink('bonde')} legacyBehavior passHref>
      <Button
        asChild
        size="sm"
        className={cn(
          'rounded-full px-3 py-1 h-auto text-xs font-medium',
          activeAudience === 'bonde'
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : 'border-primary bg-transparent text-primary hover:bg-primary/10'
        )}
        variant={activeAudience === 'bonde' ? 'default' : 'outline'}
      >
        <a>Bonde</a>
      </Button>
    </Link>
  );

  return (
    <div className="flex items-center space-x-1">
      {PrivatButton}
      {BondeButton}
    </div>
  );
}
