
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
import { recommendDogFood, type DogFoodInput, type DogFoodOutput } from '@/ai/flows/dog-food-flow';
import { Loader2, Dog, Wand2, ShoppingCart, Weight } from 'lucide-react';
import { Breadcrumb } from '@/components/common/breadcrumb';


export default function DogFoodSelectorPage() {
  const [formData, setFormData] = React.useState<DogFoodInput>({
    age: '',
    size: '',
    specialNeeds: '',
  });
  const [result, setResult] = React.useState<DogFoodOutput | null>(null);
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
    setResult(null);

    try {
      const response = await recommendDogFood(formData);
      setResult(response);
    } catch (e) {
      setError('Beklager, en feil oppstod. Prøv igjen.');
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
        <div className="container mx-auto max-w-4xl px-4 py-8 lg:py-16">
          <Breadcrumb items={breadcrumbs} className="mb-6" />

          <div className="text-center">
            <Wand2 className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-2 font-headline text-4xl font-bold text-foreground">Fôrvelger for Hund</h1>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
              Fortell oss om hunden din, så hjelper vår AI-assistent deg med å finne det perfekte fôret.
            </p>
          </div>

          <Card className="mt-8">
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

          {result && (
            <div className="mt-10">
                <h2 className="text-center font-headline text-3xl font-bold text-foreground mb-2">Vår Anbefaling</h2>
                <p className="text-center text-muted-foreground mb-6">Basert på informasjonen du ga, er dette vår anbefaling for din hund.</p>
              <Card className="overflow-hidden bg-gradient-to-br from-card to-secondary/20">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="p-6 flex items-center justify-center">
                         <Image
                            src={result.imageUrl}
                            alt={result.productName}
                            width={250}
                            height={250}
                            className="rounded-md object-contain"
                            data-ai-hint={`${result.brand} dog food`}
                        />
                    </div>
                    <div className="p-6 md:col-span-2 bg-card flex flex-col">
                      <p className="font-semibold text-primary">{result.brand}</p>
                      <h3 className="font-headline text-2xl font-bold text-foreground">{result.productName}</h3>
                      
                      <div className="mt-3 flex items-baseline gap-4 text-foreground">
                        <p className="text-2xl font-bold text-primary">{result.price}</p>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Weight className="h-5 w-5" />
                          <span>{result.shippingWeight}</span>
                        </div>
                      </div>

                      <p className="mt-4 text-base text-foreground flex-grow">{result.justification}</p>
                      
                      <Button size="lg" className="mt-6 w-full sm:w-auto" asChild>
                        <Link href={result.productUrl} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="mr-2 h-5 w-5" /> Se produkt
                        </Link>
                      </Button>
                    </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}
