
'use client';

import { ReceptionList } from '@/components/bonde/ReceptionList';
import { SlotBookingStub } from '@/components/bonde/SlotBookingStub';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/nav/Breadcrumbs';
import { receptions } from '@/data/bonde';

const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Selg til oss', href: '/bonde/selg' },
    { name: 'Levering', href: '/bonde/selg/levering' },
];

export default function LeveringPage() {
    return (
        <div className="container mx-auto max-w-[1542px] px-4 py-8">
            <Breadcrumbs items={breadcrumbs} className="mb-6" />
            <div className="mb-8">
                <h1 className="font-headline text-4xl font-bold text-foreground">Levering og kornmottak</h1>
                <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
                    Finn ditt nærmeste kornmottak og bestill tid for levering av kornet ditt.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <h2 className="font-headline text-2xl font-bold text-foreground mb-4">Våre kornmottak</h2>
                    <ReceptionList receptions={receptions} />
                </div>
                <div className="lg:col-span-2">
                    <h2 className="font-headline text-2xl font-bold text-foreground mb-4">Bestill leveringstid</h2>
                    <SlotBookingStub receptions={receptions} />
                </div>
            </div>
        </div>
    );
}
