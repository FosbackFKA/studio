
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
      <Link href={getLink('privat')}>Privat</Link>
    </Button>
  );

  const BondeButton = (
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
      <Link href={getLink('bonde')}>Bonde</Link>
    </Button>
  );

  return (
    <div className="flex items-center space-x-1">
      {PrivatButton}
      {BondeButton}
    </div>
  );
}
