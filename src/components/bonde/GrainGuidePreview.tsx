
import { Card, CardContent } from '@/components/ui/card';
import type { GrainGuideLink } from '@/data/bonde';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface GrainGuidePreviewProps {
    links: GrainGuideLink[];
}

export function GrainGuidePreview({ links }: GrainGuidePreviewProps) {
    return (
        <section>
            <h2 className="font-headline text-2xl font-bold text-foreground mb-6">Kornguiden</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {links.map((link) => (
                    <Link href={link.href} key={link.id} className="group">
                        <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-md hover:-translate-y-1">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-headline text-xl font-bold text-primary">{link.title}</h3>
                                    <link.icon className="h-8 w-8 text-primary/70" />
                                </div>
                                <p className="text-muted-foreground mb-4">{link.text}</p>
                                <div className="flex items-center text-sm font-semibold text-primary group-hover:underline">
                                    Gå til {link.title.toLowerCase()}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
