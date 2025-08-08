
'use client';

import { GrainPriceTable } from '@/components/bonde/GrainPriceTable';
import { RegionPicker } from '@/components/bonde/RegionPicker';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/nav/Breadcrumbs';
import { regions, weeklyPrices } from '@/data/bonde';

const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Selg til oss', href: '/bonde/selg' },
    { name: 'Kornpriser', href: '/bonde/selg/priser' },
];

export default function PriserPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const selectedRegion = typeof searchParams.region === 'string' ? searchParams.region : regions[0].id;
    const sortKey = typeof searchParams.sort === 'string' ? searchParams.sort as keyof typeof weeklyPrices[0] : 'grain';
    const sortOrder = typeof searchParams.order === 'string' ? searchParams.order as 'asc' | 'desc' : 'asc';
    
    return (
        <div className="container mx-auto max-w-[1542px] px-4 py-8">
            <Breadcrumbs items={breadcrumbs} className="mb-6" />
            <div className="mb-8">
                <h1 className="font-headline text-4xl font-bold text-foreground">Kornpriser</h1>
                <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
                    Se ukens gjeldende priser for din region. Prisene oppdateres hver tirsdag.
                </p>
            </div>
            
            <div className="space-y-6">
                <RegionPicker regions={regions} selectedRegion={selectedRegion} />
                <GrainPriceTable
                    prices={weeklyPrices}
                    regionId={selectedRegion}
                    initialSortKey={sortKey}
                    initialSortOrder={sortOrder}
                />
            </div>
        </div>
    );
}
