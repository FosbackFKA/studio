
'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { WeeklyPrice } from '@/data/bonde';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface GrainPriceTableProps {
  prices: WeeklyPrice[];
  regionId: string;
  initialSortKey: keyof WeeklyPrice;
  initialSortOrder: 'asc' | 'desc';
}

export function GrainPriceTable({ prices, regionId, initialSortKey, initialSortOrder }: GrainPriceTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [sortKey, setSortKey] = useState<keyof WeeklyPrice>(initialSortKey);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(initialSortOrder);

  const pricesForRegion = prices.filter((p) => p.regionId === regionId);

  const sortedPrices = [...pricesForRegion].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: keyof WeeklyPrice) => {
    const newSortOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newSortOrder);

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('sort', key);
    current.set('order', newSortOrder);
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  };
  
  const headers: { key: keyof WeeklyPrice; label: string; numeric: boolean }[] = [
    { key: 'grain', label: 'Type', numeric: false },
    { key: 'base', label: 'Notering', numeric: true },
    { key: 'localAdj', label: 'Lokalt tillegg', numeric: true },
  ];

  return (
    <Card>
      <div className="relative overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader className="sticky top-0 z-10 bg-card">
            <TableRow>
              {headers.map((header) => (
                <TableHead
                  key={header.key}
                  className={cn('cursor-pointer hover:bg-muted/50', header.numeric && 'text-right')}
                  onClick={() => handleSort(header.key)}
                  aria-sort={sortKey === header.key ? (sortOrder === 'asc' ? 'ascending' : 'descending') : 'none'}
                >
                  <div className={cn('flex items-center gap-2', header.numeric && 'justify-end')}>
                    {header.label}
                    {sortKey === header.key && (sortOrder === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />)}
                  </div>
                </TableHead>
              ))}
               <TableHead className="text-right">Din pris</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedPrices.map((price) => (
              <TableRow key={price.id} className="[&:nth-child(even)]:bg-[--table-stripe]">
                <TableCell className="font-medium">{price.grain}</TableCell>
                <TableCell className="text-right">{price.base.toFixed(2)} kr</TableCell>
                <TableCell className="text-right">{price.localAdj.toFixed(2)} kr</TableCell>
                <TableCell className="font-bold text-right">{(price.base + price.localAdj).toFixed(2)} kr</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

