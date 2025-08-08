
import type { Metadata } from 'next';
import { BondeHeader } from '@/components/layout/bonde-header';
import { BondeFooter } from '@/components/layout/bonde-footer';
import { ThemeProvider } from '@/lib/theme/provider';
import { TopStripe } from '@/components/chrome/TopStripe';
import { SectionBadge } from '@/components/branding/SectionBadge';
import { AudienceSwitcher } from '@/components/nav/AudienceSwitcher';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/nav/Breadcrumbs';
import { createTitle } from '@/lib/meta/title';

export const metadata: Metadata = {
  title: createTitle('Din partner for landbruket'),
  description: 'Felleskjøpet for den norske bonden',
};

// Example breadcrumbs for the Bonde section
const bondeBreadcrumbs: BreadcrumbItem[] = [
    { name: 'Driftsmidler', href: '#' },
    { name: 'Gjødsel', href: '#' },
];

export default function BondeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider value="bonde">
        <TopStripe />
        <BondeHeader />
        <main>
            <div className="border-b bg-background">
                <div className="container mx-auto flex max-w-[1542px] flex-col items-start gap-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <SectionBadge section="Bonde" />
                        <div className="hidden sm:block">
                            <Breadcrumbs items={bondeBreadcrumbs} />
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <AudienceSwitcher />
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-[1542px] px-4 py-4 sm:hidden">
                 <Breadcrumbs items={bondeBreadcrumbs} />
            </div>
            {children}
        </main>
        <BondeFooter />
    </ThemeProvider>
  );
}
