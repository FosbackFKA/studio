
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, UserCircle } from 'lucide-react';
import Link from 'next/link';

interface BondeHeroProps {
    supertitle: string;
    title: string;
    text: string;
    ctaText: string;
    ctaHref: string;
}

export function BondeHero({ supertitle, title, text, ctaText, ctaHref }: BondeHeroProps) {
    return (
        <section className="bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto max-w-[1542px] px-4">
                <div className="max-w-3xl">
                    <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
                        <UserCircle className="h-5 w-5" />
                        <span>{supertitle}</span>
                    </div>
                    <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        {text}
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg">
                            <Link href={ctaHref} target="_blank" rel="noopener noreferrer">
                                {ctaText}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

