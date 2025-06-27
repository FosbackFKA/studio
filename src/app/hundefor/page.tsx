
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { recommendDogFood, type DogFoodInput, type DogFoodRecommendation } from '@/ai/flows/dog-food-flow';
import { Loader2, Dog, ShoppingCart, Weight, SlidersHorizontal, X, Sparkles, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/common/breadcrumb';
import type { Product } from '@/types/product';
import allDogFoodProducts from '@/data/dog_food_products.json';
import { ProductCard } from '@/components/common/product-card';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import guideImage from '@/components/common/hund/hund1.webp';

// Fôrvelger component - refaktorert for å passe i accordion
function Forvelger() {
  const [formData, setFormData] = React.useState<DogFoodInput>({
    age: '',
    size: '',
    specialNeeds: '',
  });
  const [results, setResults] = React.useState<DogFoodRecommendation[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.age || !formData.size) {
      setError('Vennligst velg alder og vekt for hunden din.');
      return;
    }
    setError(null);
    setLoading(true);
    setResults(null);

    try {
      const response = await recommendDogFood(formData);
      setResults(response);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'En ukjent feil oppstod.';
      setError(`Beklager, en feil oppstod. ${errorMessage}`);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectChange = (field: keyof DogFoodInput) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, specialNeeds: e.target.value }));
  };

  return (
    <>
      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="age">Hundens alder</Label>
                <Select name="age" onValueChange={handleSelectChange('age')} value={formData.age}>
                  <SelectTrigger id="age" className="bg-input hover:bg-accent/20">
                    <SelectValue placeholder="Velg alder" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="valp">Valp (under 1 år)</SelectItem>
                    <SelectItem value="voksen">Voksen (1-7 år)</SelectItem>
                    <SelectItem value="senior">Senior (over 7 år)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="size">Vekt</Label>
                <Select name="size" onValueChange={handleSelectChange('size')} value={formData.size}>
                  <SelectTrigger id="size" className="bg-input hover:bg-accent/20">
                    <SelectValue placeholder="Velg vekt" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="x-small">Opptil 4 kg</SelectItem>
                    <SelectItem value="mini">Opptil 10 kg</SelectItem>
                    <SelectItem value="medium">11-25 kg</SelectItem>
                    <SelectItem value="maxi">26-44 kg</SelectItem>
                    <SelectItem value="giant">Over 45 kg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
                <Label htmlFor="specialNeeds">Spesielle behov, helse eller merkevare (valgfritt)</Label>
                <Textarea 
                  id="specialNeeds"
                  placeholder="F.eks. sensitiv hud, kresen, vektkontroll, høyt aktivitetsnivå, allergi, Royal Canin..."
                  value={formData.specialNeeds}
                  onChange={handleTextareaChange}
                  rows={3}
                  className="bg-input"
                />
            </div>
            
            {error && <p className="text-sm text-destructive">{error}</p>}

            <div className="pt-2 text-center">
                <Button type="submit" size="lg" className="h-12 px-10 text-base" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Finner fôr...
                    </>
                  ) : (
                    <>
                      <Dog className="mr-2 h-5 w-5" /> Finn riktig fôr
                    </>
                  )}
                </Button>
            </div>
          </form>
      </div>

      {loading && (
        <div className="border-t p-6 text-center md:p-8">
            <div className="flex flex-col items-center">
                <Dog className="h-10 w-10 animate-bounce text-primary" />
                <p className="mt-4 text-lg text-muted-foreground">Vår ekspert analyserer behovene til hunden din...</p>
            </div>
        </div>
      )}

      {results && results.length > 0 && (
        <div className="border-t bg-secondary/20 p-6 md:p-8">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground">Våre anbefalinger</h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">Basert på informasjonen du ga, er dette våre topp anbefalinger for din hund.</p>
            </div>
          <div className="grid justify-center grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((result, index) => (
                <Card key={index} className="flex h-full w-full flex-col overflow-hidden bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center justify-center border-b bg-white p-4">
                        <div className="relative h-48 w-48">
                          <Image
                              src={result.imageUrl}
                              alt={result.productName}
                              layout="fill"
                              objectFit="contain"
                              className="rounded-md"
                              data-ai-hint={`${result.brand} dog food`}
                          />
                        </div>
                    </div>
                    <div className="flex flex-grow flex-col p-5">
                        <p className="font-semibold text-primary">{result.brand}</p>
                        <h3 className="font-headline text-xl font-bold text-foreground">{result.productName}</h3>
                        
                        <div className="mt-3 flex items-baseline gap-4 text-foreground">
                            <p className="text-2xl font-bold text-primary">{result.price}</p>
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                                <Weight className="h-4 w-4" />
                                <span>{result.shippingWeight}</span>
                            </div>
                        </div>

                        <p className="mt-4 flex-grow text-sm text-muted-foreground line-clamp-6">{result.justification}</p>
                        
                        <Button size="lg" className="mt-6 w-full" asChild>
                            <Link href={result.productUrl} target="_blank" rel="noopener noreferrer">
                                <ShoppingCart className="mr-2 h-5 w-5" /> Se produkt
                            </Link>
                        </Button>
                    </div>
                </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// FilterPanel component
function FilterPanel() {
    return (
        <Accordion type="multiple" defaultValue={['brand', 'age', 'size']} className="w-full">
            <AccordionItem value="brand">
                <AccordionTrigger className="text-base font-semibold">Merke</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2"><Checkbox id="brand-labb" /><Label htmlFor="brand-labb">Labb</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="brand-appetitt" /><Label htmlFor="brand-appetitt">Appetitt</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="brand-eukanuba" /><Label htmlFor="brand-eukanuba">Eukanuba</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="brand-royalcanin" /><Label htmlFor="brand-royalcanin">Royal Canin</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="brand-acana" /><Label htmlFor="brand-acana">Acana</Label></div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="age">
                <AccordionTrigger className="text-base font-semibold">Alder</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2"><Checkbox id="age-valp" /><Label htmlFor="age-valp">Valp</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="age-voksen" /><Label htmlFor="age-voksen">Voksen</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="age-senior" /><Label htmlFor="age-senior">Senior</Label></div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
                <AccordionTrigger className="text-base font-semibold">Størrelse</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2"><Checkbox id="size-small" /><Label htmlFor="size-small">Små raser (&lt;10kg)</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="size-medium" /><Label htmlFor="size-medium">Mellomstore raser (10-25kg)</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="size-large" /><Label htmlFor="size-large">Store raser (&gt;25kg)</Label></div>
                </AccordionContent>
            </AccordionItem>
             <AccordionItem value="special">
                <AccordionTrigger className="text-base font-semibold">Behov</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                     <div className="flex items-center space-x-2"><Checkbox id="need-sensitiv" /><Label htmlFor="need-sensitiv">Sensitiv</Label></div>
                     <div className="flex items-center space-x-2"><Checkbox id="need-vektkontroll" /><Label htmlFor="need-vektkontroll">Vektkontroll</Label></div>
                     <div className="flex items-center space-x-2"><Checkbox id="need-aktiv" /><Label htmlFor="need-aktiv">Høyt aktivitetsnivå</Label></div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

function GuideCard() {
  return (
    <div className="group relative col-span-2 w-full overflow-hidden rounded-lg shadow-md lg:col-span-3 lg:aspect-[2/1]">
      <Link href="#" className="block h-full w-full">
        <Image
          src={guideImage}
          alt="Slik velger du riktig fôr til hunden din"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="font-headline text-2xl font-bold">Slik velger du riktig fôr til hunden din</h3>
          <p className="mt-2 text-white/90 line-clamp-2">Det kan være vanskelig å vite hvilket fôr som er best. Les vår guide for å finne det perfekte fôret tilpasset din hunds alder, størrelse og aktivitetsnivå.</p>
          <Button asChild size="lg" className="mt-4">
            <span className='z-10 relative'>Les guiden <ArrowRight className="ml-2 h-4 w-4" /></span>
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default function HundeforPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  const [itemsToDisplay, setItemsToDisplay] = React.useState<(Product | { type: 'guide' })[]>([]);

  React.useEffect(() => {
    const products: Product[] = allDogFoodProducts.map(p => ({
        id: p.id,
        title: p.title,
        brand: p.brand,
        price: p.price,
        imageUrl: p.image_link,
        productUrl: p.link,
        onlineStock: true,
        storeStockCount: 0,
    }));

    const guide = { type: 'guide' as const };
    const allItems: (Product | { type: 'guide' })[] = [...products];

    if (allItems.length > 3) {
      allItems.splice(3, 0, guide);
    } else {
      allItems.push(guide);
    }
    
    // Set random stock counts on client to avoid hydration errors
    const clientSideItems = allItems.map(item => {
        if ('id' in item) { // it's a product
            return { ...item, storeStockCount: Math.floor(Math.random() * 100) };
        }
        return item;
    });

    setItemsToDisplay(clientSideItems);
  }, []);
  
  const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Kjæledyr', href: '#' },
    { name: 'Hund', href: '#' },
    { name: 'Hundefôr', href: '/hundefor' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow">
        <div className="container mx-auto max-w-6xl px-4 pt-8 pb-12 lg:pt-12">
          <Breadcrumb items={breadcrumbs} className="mb-8" />
          
          <Accordion type="single" collapsible className="w-full group mb-8 lg:mb-12">
              <AccordionItem value="forvelger" className="overflow-hidden rounded-xl border bg-card shadow-lg">
                  <AccordionTrigger className="w-full p-6 text-left hover:no-underline [&[data-state=open]]:bg-secondary/20">
                      <div className="flex w-full items-center justify-between gap-4">
                          <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <Sparkles className="h-6 w-6 text-primary" />
                              </div>
                          </div>
                          <div className="flex-1 text-left">
                              <h2 className="font-headline text-xl font-bold">Prøv vår KI-drevne fôrvelger</h2>
                              <p className="mt-1 text-muted-foreground">Få hjelp av vår KI-assistent til å finne det perfekte fôret til din hund.</p>
                          </div>
                      </div>
                  </AccordionTrigger>
                  <AccordionContent>
                      <Forvelger />
                  </AccordionContent>
              </AccordionItem>
          </Accordion>
        
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* Filters - Sidebar for Desktop */}
                <aside className="hidden lg:block lg:col-span-1">
                    <div className="sticky top-32">
                        <h2 className="text-xl font-bold mb-4">Filtre</h2>
                        <FilterPanel />
                    </div>
                </aside>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                        <h2 className="text-2xl font-bold whitespace-nowrap">Utforsk alt hundefôr ({allDogFoodProducts.length})</h2>
                        
                        <div className="flex w-full sm:w-auto items-center gap-4">
                              {/* Mobile Filter Trigger */}
                            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="outline" className="lg:hidden flex-1">
                                        <SlidersHorizontal className="mr-2 h-4 w-4" /> Filter
                                    </Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <div className="flex h-full flex-col bg-card">
                                        <SheetHeader className="flex-row items-center justify-between border-b p-4">
                                            <SheetTitle>Filtre</SheetTitle>
                                            <SheetClose asChild>
                                                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
                                                    <X className="h-8 w-8 text-primary" />
                                                </Button>
                                            </SheetClose>
                                        </SheetHeader>
                                        <div className="p-4">
                                            <FilterPanel />
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            <Select defaultValue="popularitet">
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="Sorter etter" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="popularitet">Popularitet</SelectItem>
                                    <SelectItem value="pris-lav-hoy">Pris: Lav-høy</SelectItem>
                                    <SelectItem value="pris-hoy-lav">Pris: Høy-lav</SelectItem>
                                    <SelectItem value="nyeste">Nyeste</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                       {itemsToDisplay.map((item, index) => {
                          if (item && 'type' in item && item.type === 'guide') {
                              return <GuideCard key={`guide-${index}`} />;
                          }
                          const product = item as Product;
                          if (product && product.id) {
                            return <ProductCard key={product.id || index} {...product} />;
                          }
                          return null;
                      })}
                    </div>
                </div>
            </div>
        </div>

      </main>
      <FooterComponent />
    </div>
  );
}
