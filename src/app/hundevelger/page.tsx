
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
import { Loader2, Dog, Wand2, ShoppingCart, Weight } from 'lucide-react';
import { Breadcrumb } from '@/components/common/breadcrumb';


export default function DogFoodSelectorPage() {
  const [formData, setFormData] = React.useState<DogFoodInput>({
    age: '',
    size: '',
    specialNeeds: '',
  });
  const [results, setResults] = React.useState<DogFoodRecommendation[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Kjæledyr', href: '#' },
    { name: 'Hund', href: '#' },
    { name: 'Fôrvelger', href: '/hundevelger' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.age || !formData.size) {
      setError('Vennligst velg alder og størrelse for hunden din.');
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
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-4 py-8 lg:py-16">
          <Breadcrumb items={breadcrumbs} className="mb-6" />

          <div className="text-center">
            <Wand2 className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-2 font-headline text-4xl font-bold text-foreground">Fôrvelger for Hund</h1>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
              Fortell oss om hunden din, så hjelper vår AI-assistent deg med å finne det perfekte fôret.
            </p>
          </div>

          <Card className="mt-8 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                     <Label htmlFor="size">Størrelse / Vekt</Label>
                    <Select name="size" onValueChange={handleSelectChange('size')} value={formData.size}>
                      <SelectTrigger id="size">
                        <SelectValue placeholder="Velg størrelse" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="x-small">X-Small (opptil 4 kg)</SelectItem>
                        <SelectItem value="mini">Mini (opptil 10 kg)</SelectItem>
                        <SelectItem value="medium">Medium (11-25 kg)</SelectItem>
                        <SelectItem value="maxi">Maxi (26-44 kg)</SelectItem>
                        <SelectItem value="giant">Giant (over 45 kg)</SelectItem>
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

                <div className="text-center">
                    <Button type="submit" size="lg" disabled={loading}>
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
            </CardContent>
          </Card>
          
          {loading && (
             <div className="text-center mt-8 flex flex-col items-center">
                <Dog className="h-10 w-10 text-primary animate-bounce" />
                <p className="mt-2 text-muted-foreground">Vår ekspert analyserer behovene til hunden din...</p>
             </div>
          )}

          {results && results.length > 0 && (
            <div className="mt-10">
                <h2 className="text-center font-headline text-3xl font-bold text-foreground mb-2">Våre Anbefalinger</h2>
                <p className="text-center text-muted-foreground mb-6">Basert på informasjonen du ga, er dette våre topp anbefalinger for din hund.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {results.map((result, index) => (
                    <Card key={index} className="overflow-hidden bg-gradient-to-br from-card to-secondary/20 flex flex-col">
                        <div className="p-4 flex items-center justify-center bg-white">
                            <Image
                                src={result.imageUrl}
                                alt={result.productName}
                                width={200}
                                height={200}
                                className="rounded-md object-contain h-48 w-48"
                                data-ai-hint={`${result.brand} dog food`}
                            />
                        </div>
                        <div className="p-4 md:p-6 bg-card flex flex-col flex-grow">
                            <p className="font-semibold text-primary">{result.brand}</p>
                            <h3 className="font-headline text-xl font-bold text-foreground">{result.productName}</h3>
                            
                            <div className="mt-2 flex items-baseline gap-4 text-foreground">
                                <p className="text-xl font-bold text-primary">{result.price}</p>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <Weight className="h-4 w-4" />
                                    <span>{result.shippingWeight}</span>
                                </div>
                            </div>

                            <p className="mt-3 text-sm text-foreground flex-grow line-clamp-6">{result.justification}</p>
                            
                            <Button size="lg" className="mt-4 w-full" asChild>
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
      </main>
      <FooterComponent />
    </div>
  );
}

