
import type { Metadata } from 'next';
import { ThemeProvider } from '@/lib/theme/provider';
// Placeholder components, replace with actual Bedrift components when ready
import { BondeHeader } from '@/components/layout/bonde-header';
import { BondeFooter } from '@/components/layout/bonde-footer';


export const metadata: Metadata = {
  title: 'FK Bedrift',
  description: 'Felleskjøpet for bedriftskunder',
};

export default function BedriftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider value="bedrift">
      {/* Replace with BedriftHeader and BedriftFooter when they exist */}
      <BondeHeader />
      <main>{children}</main>
      <BondeFooter />
    </ThemeProvider>
  );
}
