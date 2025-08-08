
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const subNavItems = [
    { name: 'Selg til oss', href: '/bonde/selg' },
    { name: 'Kjøp til drifta', href: '/bonde/kjop' },
    { name: 'Kunnskap', href: '/bonde/kunnskap' },
    { name: 'Tjenester', href: '/bonde/tjenester' },
    { name: 'Medlemskap', href: '/bonde/medlemskap' },
    { name: 'Min gård', href: 'https://mingaard.felleskjopet.no' },
];

export function SubNav() {
    const pathname = usePathname();
    
    return (
        <div className="border-b bg-card shadow-sm sticky top-[108px] z-40">
            <nav className="container mx-auto flex h-14 max-w-[1542px] items-center justify-start px-4">
                <div className="flex items-center space-x-1">
                    {subNavItems.map((item) => {
                        const isActive = item.href.startsWith('/') && pathname.startsWith(item.href);
                        return (
                            <Button
                                key={item.name}
                                variant={isActive ? 'secondary' : 'ghost'}
                                asChild
                                className={cn(
                                    'font-headline text-sm font-normal',
                                    isActive && 'font-semibold'
                                )}
                            >
                                <Link href={item.href}>{item.name}</Link>
                            </Button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
