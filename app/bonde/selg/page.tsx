
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wheat, FileText, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/nav/Breadcrumbs';

const selgNavItems = [
  {
    title: 'Kornpriser',
    description: 'Se oppdaterte priser og prognoser for din region.',
    href: '/bonde/selg/priser',
    icon: Wheat,
  },
  {
    title: 'Avtaler',
    description: 'Les om våre kornavtaler og tegn avtale i Min Gård.',
    href: '/bonde/selg/avtaler',
    icon: FileText,
  },
  {
    title: 'Levering',
    description: 'Finn ditt nærmeste kornmottak og bestill leveringstid.',
    href: '/bonde/selg/levering',
    icon: Truck,
  },
];

const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Selg til oss', href: '/bonde/selg' },
];

export default function SelgTilOssPage() {
  return (
    <div className="container mx-auto max-w-[1542px] px-4 py-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />
        <div className="mb-8">
            <h1 className="font-headline text-4xl font-bold text-foreground">Selg korn til oss</h1>
            <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
                Vi er Norges største kornkjøper. Her finner du alt du trenger for å selge kornet ditt til oss – fra priser og avtaler til levering.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {selgNavItems.map((item) => (
                <Link href={item.href} key={item.title} className="group block h-full">
                    <Card className="flex h-full flex-col justify-between transition-all duration-300 hover:border-primary/60 hover:shadow-md hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{item.description}</CardDescription>
                            <div className="mt-4 flex items-center text-sm font-semibold text-primary group-hover:underline">
                                Gå til {item.title.toLowerCase()}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    </div>
  );
}
