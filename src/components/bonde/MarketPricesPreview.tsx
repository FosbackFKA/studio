
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import type { Region, WeeklyPrice } from '@/data/bonde';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Wheat } from 'lucide-react';

interface MarketPricesPreviewProps {
    regions: Region[];
    prices: WeeklyPrice[];
}

export function MarketPricesPreview({ regions, prices: allPrices }: MarketPricesPreviewProps) {
    const [selectedRegion, setSelectedRegion] = useState<string>(regions[0]?.id || 'ost');
    
    const pricesForRegion = allPrices.filter(p => p.regionId === selectedRegion);

    return (
        <Card className="shadow-none">
            <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2">
                           <Wheat className="h-7 w-7 text-primary" />
                           Ukens kornpriser
                        </CardTitle>
                        <CardDescription className="mt-1">
                            Velg din region for å se lokale priser.
                        </CardDescription>
                    </div>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Velg region" />
                        </SelectTrigger>
                        <SelectContent>
                            {regions.map(region => (
                                <SelectItem key={region.id} value={region.id}>
                                    {region.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Notering</TableHead>
                                <TableHead className="text-right">Lokalt tillegg</TableHead>
                                <TableHead className="text-right">Din pris</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pricesForRegion.map((price) => (
                                <TableRow key={price.id}>
                                    <TableCell className="font-medium">{price.grain}</TableCell>
                                    <TableCell className="text-right">{price.base.toFixed(2)} kr</TableCell>
                                    <TableCell className="text-right">{price.localAdj.toFixed(2)} kr</TableCell>
                                    <TableCell className="font-bold text-right">{(price.base + price.localAdj).toFixed(2)} kr</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="mt-6">
                    <Button variant="outline-primary" asChild>
                        <Link href="#">
                            Se alle kornpriser og prognoser
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

