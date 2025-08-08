
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
                <div className="container mx-auto flex max-w-[1542px] items-center gap-4 px-4 py-3">
                    <Breadcrumbs items={bondeBreadcrumbs} />
                </div>
            </div>
            {children}
        </main>
        <BondeFooter />
    </ThemeProvider>
  );
}
