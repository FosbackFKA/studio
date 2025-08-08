
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FkaLogo } from '@/components/common/logo';
import Link from 'next/link';

interface OwnershipTeaserProps {
    title: string;
    text: string;
    linkText: string;
    href: string;
}

export function OwnershipTeaser({ title, text, linkText, href }: OwnershipTeaserProps) {
    return (
        <Card className="bg-primary-dark-background text-primary-foreground border-none">
            <CardContent className="p-10 text-center flex flex-col items-center">
                <FkaLogo variant="white" className="h-12 mb-4" />
                <h2 className="font-headline text-3xl font-bold text-yellow-300">
                    {title}
                </h2>
                <p className="mt-2 max-w-2xl text-white/80">
                    {text}
                </p>
                <Button asChild size="lg" className="mt-6 bg-yellow-300 text-primary hover:bg-yellow-300/90">
                    <Link href={href}>
                        {linkText}
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
