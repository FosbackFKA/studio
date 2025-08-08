'use client';

import { AgreementOverview } from '@/components/bonde/AgreementOverview';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/nav/Breadcrumbs';

const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Selg til oss', href: '/bonde/selg' },
    { name: 'Avtaler', href: '/bonde/selg/avtaler' },
];

export default function AvtalerPage() {
    return (
        <div className="container mx-auto max-w-[1542px] px-4 py-8">
             <Breadcrumbs items={breadcrumbs} className="mb-6" />
            <div className="mb-8 max-w-4xl">
                <h1 className="font-headline text-4xl font-bold text-foreground">Kornavtaler</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Vi tilbyr flere typer kornavtaler som gir deg forutsigbarhet og trygghet for avlingen din. Alle avtaler tegnes enkelt i Min Gård.
                </p>
            </div>
            <AgreementOverview />
        </div>
    );
}
