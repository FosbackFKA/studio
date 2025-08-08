
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { grainContracts } from '@/data/bonde';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function AgreementOverview() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grainContracts.map((contract) => (
                <Card key={contract.id} className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>{contract.title}</span>
                            {contract.bonus && <Badge variant="secondary">{contract.bonus}</Badge>}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardDescription>
                            En beskrivelse av avtalen kommer her. Den forklarer fordelene, kravene og hva bonden kan forvente.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full" variant="outline-primary">
                            <Link href="https://mingaard.felleskjopet.no" target="_blank" rel="noopener noreferrer">
                                {contract.cta}
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
