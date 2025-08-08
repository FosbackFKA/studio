
import type { Metadata } from 'next';
import { BondeHeader } from '@/components/layout/bonde-header';
import { BondeFooter } from '@/components/layout/bonde-footer';

export const metadata: Metadata = {
  title: 'FK Bonde',
  description: 'Felleskjøpet for den norske bonden',
};

export default function BondeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="theme-bonde">
      <BondeHeader />
      <main>{children}</main>
      <BondeFooter />
    </div>
  );
}
