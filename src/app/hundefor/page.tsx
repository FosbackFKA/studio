
'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { recommendDogFood, type DogFoodInput, type DogFoodRecommendation } from '@/ai/flows/dog-food-flow';
import { Loader2, Dog, ShoppingCart, Weight, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/common/breadcrumb';
import type { Product } from '@/types/product';
import type { DogFoodProduct } from '@/lib/dog-food-data';
import allDogFoodProducts from '@/data/dog_food_products.json';
import { ProductCard } from '@/components/common/product-card';
import { cn } from '@/lib/utils';


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
    <section>
        <div className="overflow-hidden rounded-xl bg-card shadow-lg">
            <div className="bg-gradient-to-br from-primary to-primary-dark-background p-6 text-primary-foreground md:p-8">
                <div className="text-center">
                  <h1 className="mt-2 font-headline text-3xl font-bold text-white">Fôrvelger for Hund</h1>
                  <p className="mx-auto mt-2 max-w-2xl text-lg text-primary-foreground/80">
                    Fortell oss om hunden din, så hjelper vår AI-assistent deg med å finne det perfekte fôret.
                  </p>
                </div>
            </div>

            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="age">Hundens alder</Label>
                      <Select name="age" onValueChange={handleSelectChange('age')} value={formData.age}>
                        <SelectTrigger id="age">
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
                        <SelectTrigger id="size">
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
                    <h2 className="font-headline text-3xl font-bold text-foreground">Våre Anbefalinger</h2>
                    <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">Basert på informasjonen du ga, er dette våre topp anbefalinger for din hund.</p>
                  </div>
                <div className="grid justify-center grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
    </section>
  )
}

function GuideCard({ title, excerpt, imageUrl, link, span, dataAiHint }: { title: string; excerpt: string; imageUrl: string | StaticImageData; link: string; span?: string; dataAiHint?: string; }) {
  return (
    <div className={cn("group relative aspect-video w-full overflow-hidden rounded-lg shadow-md lg:aspect-auto", span)}>
      <Link href={link} className="block h-full w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={dataAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="font-headline text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-white/90 line-clamp-2">{excerpt}</p>
          <Button asChild size="lg" className="mt-4">
            <span className='z-10 relative'>Les guiden <ArrowRight className="ml-2 h-4 w-4" /></span>
          </Button>
        </div>
      </Link>
    </div>
  );
}

interface DisplayItem {
  type: 'product' | 'guide';
  data: any;
}

export default function HundeforPage() {
  const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Kjæledyr', href: '#' },
    { name: 'Hund', href: '#' },
    { name: 'Hundefôr', href: '/hundefor' },
  ];

  const [displayItems, setDisplayItems] = React.useState<DisplayItem[]>([]);

  React.useEffect(() => {
    const allProducts: DogFoodProduct[] = allDogFoodProducts;
    
    const featuredProductIds = [
      'hundefôr_aktiv_15_kg',
      'hundefôr_maxi_adult_15_kg',
      'hundefôr_puppy_medium_breed_12_kg',
      'hundefôr_sensitiv_små_raser_3_kg',
      'hundefôr_voksen_mellom_og_stor_rase_15_kg'
    ];
    
    const products: Product[] = featuredProductIds.map(id => {
        const p = allProducts.find(prod => prod.id === id);
        if (!p) return null;
        return {
          id: p.id,
          title: p.title,
          brand: p.brand,
          price: p.price,
          imageUrl: p.image_link,
          productUrl: p.link,
          onlineStock: true, // Mocked
          storeStockCount: Math.floor(Math.random() * 100), // Mocked
        };
      }).filter((p): p is Product => p !== null);

    const guide = {
      title: 'Slik velger du riktig fôr til hunden din',
      excerpt: 'Det kan være en jungel å velge riktig hundefôr. Lær deg hva du skal se etter for å dekke din hunds unike ernæringsbehov.',
      imageUrl: 'https://placehold.co/800x450.png',
      link: '#',
      span: 'lg:col-span-2',
      dataAiHint: 'dog eating food'
    };

    const items: DisplayItem[] = [
      { type: 'product', data: products[0] },
      { type: 'product', data: products[1] },
      { type: 'product', data: products[2] },
      { type: 'guide', data: guide },
      { type: 'product', data: products[3] },
      { type: 'product', data: products[4] },
    ];
    
    setDisplayItems(items);

  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow bg-secondary/20">
        <div className="container mx-auto max-w-6xl px-4 py-8 lg:py-12">
          <Breadcrumb items={breadcrumbs} className="mb-8" />
          <Forvelger />
        </div>
        
        <section className="py-12 lg:py-16 bg-background">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="text-center font-headline text-3xl font-bold text-foreground">Utforsk Vårt Utvalg</h2>
                <p className="text-center mx-auto mb-8 max-w-2xl text-muted-foreground">Et utvalg av våre mest populære fôrtyper, og nyttige guider som hjelper deg å velge riktig.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayItems.map((item, index) => {
                      if (item.type === 'guide') {
                        return <GuideCard key={`guide-${index}`} {...item.data} />;
                      }
                      return <ProductCard key={item.data.id} {...item.data} />;
                    })}
                </div>
            </div>
        </section>

      </main>
      <FooterComponent />
    </div>
  );
}
