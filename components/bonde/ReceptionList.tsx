
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Reception } from '@/data/bonde';
import { MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

interface ReceptionListProps {
    receptions: Reception[];
}

export function ReceptionList({ receptions }: ReceptionListProps) {
    return (
        <div className="space-y-4">
            {receptions.map((reception) => (
                <Card key={reception.id}>
                    <CardHeader>
                        <CardTitle>{reception.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                         <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <Link 
                                href={`https://www.google.com/maps/search/?api=1&query=${reception.lat},${reception.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {reception.address}
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>{reception.open}</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

