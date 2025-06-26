
import Image from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/common/product-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import type { Product } from '@/types/product';

// Import images
import heroImage from '@/components/common/gressklipper/gressklipper1.webp';
import stihlImage from '@/components/common/gressklipper/gressklipper3.webp';
import segwayImage from '@/components/common/gressklipper/gressklipper4.webp';
import gardenaImage from '@/components/common/gressklipper/gressklipper2.webp';
import alleImage from '@/components/common/gressklipper/gressklipper5.webp';
import guideImage from '@/components/common/navimow/1.jpg';

// Import product images from homepage
import gressklipper2 from '@/components/common/gressklipper/gressklipper2.webp';
import gressklipper3 from '@/components/common/gressklipper/gressklipper3.webp';
import gressklipper4 from '@/components/common/gressklipper/gressklipper4.webp';
import gressklipper5 from '@/components/common/gressklipper/gressklipper5.webp';

const robotklipperProducts: Product[] = [
    {
      id: 'GARDSILENO',
      title: 'Robotklipper Smart Sileno Free 1500',
      brand: 'Gardena',
      price: '25 999,-',
      salePrice: '20 799,-',
      badgeText: '- 20 %',
      imageUrl: gressklipper3,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: false,
      storeStockCount: 41,
    },
    {
      id: 'SEGNAVIH3000E',
      title: 'Robotgressklipper Navimow H3000E med VisionFence',
      brand: 'Segway',
      price: '34 999,-',
      salePrice: '29 999,-',
      badgeText: '- 14 %',
      imageUrl: gressklipper4,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 63,
    },
    {
      id: 'SEGNAVIX330E',
      title: 'Robotgressklipper Navimow X330e',
      brand: 'Segway',
      price: '39 999,-',
      imageUrl: gressklipper5,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 55,
    },
     {
      id: 'SEGNAVI108E',
      title: 'Robotgressklipper Navimow i108e',
      brand: 'Segway',
      price: '15 999,-',
      imageUrl: gressklipper2,
      productUrl: '/products/SEGNAVH3000E',
      onlineStock: true,
      storeStockCount: 4,
    },
];

const subCategories = [
    { name: 'Stihl', image: stihlImage, href: '#' },
    { name: 'Segway', image: segwayImage, href: '#' },
    { name: 'Gardena', image: gardenaImage, href: '#' },
    { name: 'Alle robotklippere', image: alleImage, href: '#' },
];

const comparisonData = [
  { feature: 'Maks plenstørrelse', navimowH: '3000 m²', navimowI: '1000 m²', imow: '5000 m²' },
  { feature: 'Maks stigning', navimowH: '45%', navimowI: '30%', imow: '60%' },
  { feature: 'Klippebredde', navimowH: '21 cm', navimowI: '18 cm', imow: '28 cm' },
  { feature: 'Kantledning', navimowH: 'Nei', navimowI: 'Nei', imow: 'Ja' },
  { feature: 'VisionFence', navimowH: <Check className="h-5 w-5 text-primary" />, navimowI: 'Valgfritt', imow: 'Nei' },
  { feature: 'Appstyrt', navimowH: <Check className="h-5 w-5 text-primary" />, navimowI: <Check className="h-5 w-5 text-primary" />, imow: <Check className="h-5 w-5 text-primary" /> },
];

const guideLinks = [
  { title: 'Hvilken robotklipper passer for deg?', href: '#' },
  { title: 'Slik installerer du robotklipperen', href: '#' },
  { title: 'Vedlikehold av robotklipper', href: '#' },
];

const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Hage og uterom', href: '#' },
    { name: 'Gressklippere', href: '#' },
    { name: 'Robotklippere', href: '/robotgressklipper' },
];

export default function RobotklipperPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow">
        <div className="container mx-auto max-w-[1542px] px-4 py-8">
            <Breadcrumb items={breadcrumbs} />
        </div>
        
        <section className="relative h-[300px] w-full md:h-[400px]">
          <Image
            src={heroImage}
            alt="Robotgressklipper på en grønn plen"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] items-center px-4">
            <h1 className="font-headline text-4xl font-bold text-white md:text-5xl">
              Robotgressklipper - for en frodig og lettstelt hage
            </h1>
          </div>
        </section>

        <section className="py-8 lg:py-12">
            <div className="container mx-auto max-w-[1542px] px-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {subCategories.map(cat => (
                        <Link href={cat.href} key={cat.name} className="group">
                            <Card className="overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md">
                                <div className="relative aspect-video w-full">
                                    <Image src={cat.image} alt={cat.name} layout="fill" objectFit="cover" className="transition-transform group-hover:scale-105" />
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-foreground group-hover:text-primary">{cat.name}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-8 lg:py-12 bg-secondary/30">
            <div className="container mx-auto max-w-[1542px] px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-lg bg-card p-8 shadow-sm">
                    <div className="relative aspect-square max-w-sm mx-auto">
                        <Image src={guideImage} alt="Robotgressklipper" layout="fill" objectFit="contain" />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="font-headline text-3xl font-bold text-primary">Slik velger du riktig robotgressklipper</h2>
                        <p className="mt-2 mb-4 text-lg text-muted-foreground">Få en perfekt plen uten å løfte en finger. Les vår guide for å finne modellen som passer din hage.</p>
                        <Button size="lg" asChild>
                            <Link href="#">
                                Se vår guide <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-8 lg:py-12">
          <div className="container mx-auto max-w-[1542px] px-4">
            <h2 className="font-headline text-3xl font-bold mb-6">Se vårt utvalg av relevante klippere</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {robotklipperProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12 bg-secondary/30">
          <div className="container mx-auto max-w-[1542px] px-4">
             <h2 className="font-headline text-3xl font-bold mb-6 text-center">Finn din type robotklipper</h2>
             <Tabs defaultValue="brands" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mx-auto max-w-lg">
                <TabsTrigger value="brands">Alle merker</TabsTrigger>
                <TabsTrigger value="models">Alle modeller</TabsTrigger>
                <TabsTrigger value="campaigns">Kampanjer</TabsTrigger>
              </TabsList>
              <TabsContent value="brands" className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {['Stihl', 'Segway', 'Gardena', 'Husqvarna', 'Honda', 'Worx', 'Kärcher'].map(brand => (
                        <Button key={brand} variant="outline" asChild><Link href="#">{brand}</Link></Button>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="models" className="pt-6">
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {['iMOW 5', 'Navimow H3000E', 'Sileno City', 'Navimow i108e', 'Automower 310', 'iMOW 6 EVO'].map(model => (
                        <Button key={model} variant="outline" asChild><Link href="#">{model}</Link></Button>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="campaigns" className="pt-6">
                <div className="text-center text-muted-foreground">Ingen kampanjer for øyeblikket.</div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-8 lg:py-12">
            <div className="container mx-auto max-w-[1542px] px-4">
                <h2 className="font-headline text-3xl font-bold mb-6">Les om våre bestselgere</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {guideLinks.map(link => (
                        <Link href={link.href} key={link.title} className="group">
                           <Card className="flex h-full items-center justify-between p-6 shadow-sm transition-shadow hover:shadow-lg">
                                <h3 className="text-lg font-semibold group-hover:text-primary">{link.title}</h3>
                                <ChevronRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1" />
                           </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-8 lg:py-12 bg-secondary/30">
            <div className="container mx-auto max-w-[1542px] px-4">
                <h2 className="font-headline text-3xl font-bold mb-6">Sammenlign våre robotklippere</h2>
                <Card>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[25%]">Egenskap</TableHead>
                                <TableHead>Navimow H-serie</TableHead>
                                <TableHead>Navimow i-serie</TableHead>
                                <TableHead>iMOW</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonData.map((row) => (
                                <TableRow key={row.feature}>
                                    <TableCell className="font-medium">{row.feature}</TableCell>
                                    <TableCell>{row.navimowH}</TableCell>
                                    <TableCell>{row.navimowI}</TableCell>
                                    <TableCell>{row.imow}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </section>

      </main>
      <FooterComponent />
    </div>
  );
}
