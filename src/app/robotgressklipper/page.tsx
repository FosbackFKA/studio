
'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { HeaderComponent } from '@/components/layout/header';
import { FooterComponent } from '@/components/layout/footer';
import { Breadcrumb } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/product-card';
import { ArrowRight, SlidersHorizontal, X, Sparkles, ArrowUp, Loader2, ChevronRight, MessageSquare, Bot } from 'lucide-react';
import type { Product } from '@/types/product';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { robotklipperChat, type RecommendedProduct, type RobotklipperChatInput, type RobotklipperChatOutput } from '@/ai/flows/robotklipper-chat-flow';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import allProductsAndGuides from '@/data/robotklipper_products.json';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';


// Import images
import heroImage from '@/components/common/gressklipper/gressklipper1.webp';
import guideImage from '@/components/common/navimow/1.jpg';
import gressklipper1 from '@/components/common/gressklipper/gressklipper1.webp';
import gressklipper2 from '@/components/common/gressklipper/gressklipper2.webp';
import gressklipper3 from '@/components/common/gressklipper/gressklipper3.webp';
import gressklipper4 from '@/components/common/gressklipper/gressklipper4.webp';
import gressklipper5 from '@/components/common/gressklipper/gressklipper5.webp';
import popular1 from '@/components/common/aktuelle-kampanjer/1.webp';
import popular3 from '@/components/common/aktuelle-kampanjer/3.webp';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FkaLogo } from '@/components/common/logo';

const imageMap: Record<string, StaticImageData> = {
  heroImage, guideImage, gressklipper1, gressklipper2, gressklipper3, gressklipper4, gressklipper5, popular1, popular3,
};

// Updated Message type to include optional products
type Message = {
  role: 'user' | 'model';
  content: string;
  products?: RecommendedProduct[];
};

function RobotklipperChatbot() {
    const [messages, setMessages] = React.useState<Message[]>([
        { role: 'model', content: 'Hei! Jeg er din personlige ekspert på robotgressklippere. Hva kan jeg hjelpe deg med i dag? Du kan for eksempel spørre meg "hvilken klipper passer for en hage på 1500m2?".' }
    ]);
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const newUserMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, newUserMessage]);

        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const historyForApi = messages.map(msg => ({ role: msg.role, content: msg.content }));
            
            const response: RobotklipperChatOutput = await robotklipperChat({ history: historyForApi, question: currentInput });
            
            setMessages(prev => [...prev, { role: 'model', content: response.responseText, products: response.recommendedProducts }]);
        } catch (error) {
            console.error("Error calling chatbot flow:", error);
            setMessages(prev => [...prev, { role: 'model', content: 'Beklager, noe gikk galt. Prøv igjen.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-full flex-col bg-card">
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={cn("flex items-start gap-3", msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                            {msg.role === 'model' && (
                                <Avatar className="h-8 w-8 border bg-white p-1">
                                    <FkaLogo className="h-full w-auto" />
                                </Avatar>
                            )}
                            <div className={cn(
                                "max-w-md rounded-lg px-4 py-3",
                                msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                            )}>
                                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                
                                {msg.products && msg.products.length > 0 && (
                                    <div className="mt-4 space-y-2 border-t pt-3">
                                        {msg.products.map((product) => (
                                            <Link href={product.productUrl} key={product.id} target="_blank" rel="noopener noreferrer" className="block group">
                                                <Card className="flex items-center gap-3 p-2 transition-colors hover:bg-background/50">
                                                    <div className="relative h-16 w-16 flex-shrink-0">
                                                        <Image 
                                                            src={imageMap[product.imageUrl as string]} 
                                                            alt={product.title} 
                                                            fill 
                                                            className="rounded-md object-contain border bg-white p-1" 
                                                            sizes="64px" 
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        {product.brand && <p className="text-xs font-semibold text-primary">{product.brand}</p>}
                                                        <p className="text-sm font-medium leading-tight line-clamp-2 group-hover:underline">{product.title}</p>
                                                        <p className="mt-1 text-sm font-bold text-primary">{product.salePrice || product.price}</p>
                                                    </div>
                                                    <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {msg.role === 'user' && (
                                <Avatar className="h-8 w-8 border">
                                    <AvatarFallback>DU</AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex items-start gap-3 justify-start">
                             <Avatar className="h-8 w-8 border bg-white p-1">
                                <FkaLogo className="h-full w-auto" />
                            </Avatar>
                             <div className="max-w-md rounded-lg px-4 py-2 bg-secondary">
                                <Loader2 className="h-5 w-5 animate-spin" />
                            </div>
                         </div>
                    )}
                </div>
            </ScrollArea>
            <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Skriv meldingen din her..."
                        disabled={isLoading}
                        className="flex-1"
                    />
                    <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
    );
}

const breadcrumbs = [
    { name: 'Forsiden', href: '/' },
    { name: 'Hage og uterom', href: '#' },
    { name: 'Gressklippere', href: '#' },
    { name: 'Robotklippere', href: '/robotgressklipper' },
];

function FilterPanel() {
    return (
        <Accordion type="multiple" defaultValue={['brand', 'area', 'price']} className="w-full">
            <AccordionItem value="brand">
                <AccordionTrigger className="text-base font-semibold">Merke</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="segway" /><Label htmlFor="segway">Segway</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="gardena" /><Label htmlFor="gardena">Gardena</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="stihl" /><Label htmlFor="stihl">Stihl</Label>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="area">
                <AccordionTrigger className="text-base font-semibold">Plenareal</AccordionTrigger>
                <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2"><Checkbox id="area-1000" /><Label htmlFor="area-1000">Opptil 1000 m²</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="area-2000" /><Label htmlFor="area-2000">1000 - 2000 m²</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="area-3000" /><Label htmlFor="area-3000">2000 - 3000 m²</Label></div>
                    <div className="flex items-center space-x-2"><Checkbox id="area-5000" /><Label htmlFor="area-5000">3000 m² og mer</Label></div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
                <AccordionTrigger className="text-base font-semibold">Pris</AccordionTrigger>
                <AccordionContent className="pt-4">
                    <Slider defaultValue={[10000, 40000]} max={50000} min={5000} step={1000} />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>5 000,-</span>
                        <span>50 000,-</span>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

function GuideCard({ title, excerpt, imageUrl, link, span }: { title: string; excerpt: string; imageUrl: StaticImageData; link: string; span?: string; }) {
  return (
    <div className={cn("group w-full overflow-hidden rounded-lg shadow-md", span)}>
      <Link href={link} className="block h-full w-full">
        <div className="relative h-full min-h-[250px] w-full lg:aspect-[2/1]">
            <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="font-headline text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-white/90 line-clamp-2">{excerpt}</p>
            <Button asChild size="lg" className="mt-4">
                <span className='z-10 relative'>Les guiden <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Button>
            </div>
        </div>
      </Link>
    </div>
  );
}

function FloatingChatbot() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      
      {/* Speech Bubble */}
      <div className={cn(
        "absolute bottom-full right-0 mb-3 transition-opacity duration-300",
        isOpen ? "opacity-0" : "opacity-100 animate-bounce delay-1000"
      )}>
        <div className="relative rounded-lg bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-lg">
          Spør KI-Eksperten!
          <div className="absolute right-4 -bottom-2 h-4 w-4 rotate-45 transform bg-primary"></div>
        </div>
      </div>

      {/* Main Chat Button */}
      <div className={cn(
        "transition-transform duration-300 ease-in-out",
        isOpen ? "translate-y-8 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      )}>
        <Button 
          size="icon" 
          className="h-16 w-16 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Åpne chat med KI-Ekspert"
        >
          <Sparkles className="h-8 w-8" />
        </Button>
      </div>

      {/* Chat Window */}
      <div className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] h-[70vh] max-w-md max-h-[700px] transition-transform duration-300 ease-in-out",
          !isOpen ? "translate-y-8 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      )}>
        <Card className="flex flex-col h-full w-full overflow-hidden shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6" />
              <CardTitle className="text-lg">KI-Eksperten</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-primary-foreground hover:bg-primary/80" onClick={() => setIsOpen(false)} aria-label="Lukk chat">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <RobotklipperChatbot />
        </Card>
      </div>
    </div>
  );
}


export default function RobotklipperPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);
  
  const products = allProductsAndGuides.filter(item => item.type === 'product') as (Product[] & {imageUrl: string});
  const guide = allProductsAndGuides.find(item => item.type === 'guide');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderComponent />
      <main className="flex-grow">
        <section className="relative h-[300px] w-full md:h-[400px]">
          <Image src={heroImage} alt="Robotgressklipper på en grønn plen" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto flex h-full max-w-[1542px] flex-col items-center justify-center px-4 text-center">
            <h1 className="font-headline text-4xl font-bold text-white md:text-5xl lg:text-6xl">Få en perfekt plen, helt automatisk</h1>
            <p className="mt-2 max-w-2xl text-lg text-gray-200">Utforsk vårt utvalg av smarte robotgressklippere som gir deg mer tid til å nyte hagen.</p>
          </div>
        </section>
        
        <div className="container mx-auto max-w-[1542px] px-4 py-8 lg:py-12">
            <Breadcrumb items={breadcrumbs} />
        </div>

        <div id="products" className="container mx-auto max-w-[1542px] px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                <aside className="hidden lg:block lg:col-span-1">
                    <div className="sticky top-32">
                        <h2 className="text-xl font-bold mb-4">Filtre</h2>
                        <FilterPanel />
                    </div>
                </aside>
                <div className="lg:col-span-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                        <h2 className="text-2xl font-bold whitespace-nowrap">Alle robotgressklippere ({products.length})</h2>
                        <div className="flex w-full sm:w-auto items-center gap-4">
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
                                <SelectTrigger className="w-full sm:w-[180px]"><SelectValue placeholder="Sorter etter" /></SelectTrigger>
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
                        {products.map((p) => (
                            <ProductCard key={p.id} {...p} imageUrl={imageMap[p.imageUrl as string]} />
                        ))}
                        {guide && (
                            <div className="col-span-2 lg:col-span-3">
                                <GuideCard {...guide} imageUrl={imageMap[guide.imageUrl as string]} />
                            </div>
                        )}
                    </div>
                    
                    <div className="mt-12 flex justify-center">
                        <Button variant="outline" size="lg">Last inn flere</Button>
                    </div>
                </div>
            </div>
        </div>

      </main>
      <FooterComponent />
      <FloatingChatbot />
    </div>
  );
}
