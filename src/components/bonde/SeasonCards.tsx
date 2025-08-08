
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { SeasonCardData } from '@/data/bonde';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SeasonCardsProps {
    cards: SeasonCardData[];
}

export function SeasonCards({ cards }: SeasonCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card) => (
                <Card key={card.id} className="bg-secondary/60 flex flex-col justify-between">
                    <CardContent className="p-6">
                        <h3 className="font-headline text-2xl font-bold text-foreground">{card.title}</h3>
                        <p className="mt-2 text-muted-foreground">{card.text}</p>
                        <Button asChild variant="link" className="p-0 mt-4 text-base">
                            <Link href={card.href}>
                                {card.linkText}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
