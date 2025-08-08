
import type { Metadata } from 'next';
import { BondeHeader } from '@/components/layout/bonde-header';
import { BondeFooter } from '@/components/layout/bonde-footer';
import { ThemeProvider } from '@/lib/theme/provider';
import { TopStripe } from '@/components/chrome/TopStripe';
import { createTitle } from '@/lib/meta/title';
import { SubNav } from '@/components/bonde/SubNav';

export const metadata: Metadata = {
  title: createTitle('Din partner for landbruket'),
  description: 'Felleskjøpet for den norske bonden',
};

export default function BondeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider value="bonde">
        <TopStripe />
        <BondeHeader />
        <SubNav />
        <main>
            {children}
        </main>
        <BondeFooter />
    </ThemeProvider>
  );
}
