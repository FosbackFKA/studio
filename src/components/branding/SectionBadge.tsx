
import { FkaLogo } from '@/components/common/logo';
import { cn } from '@/lib/utils';

interface SectionBadgeProps {
    section: 'Bonde' | 'Bedrift' | 'Forbruker';
    className?: string;
}

export function SectionBadge({ section, className }: SectionBadgeProps) {
    return (
        <div className={cn(
            'inline-flex items-center gap-2 rounded-full border bg-accent/10 py-1 pl-1 pr-3 text-sm font-medium',
            className
        )}>
            <FkaLogo className="h-6 w-auto" />
            <span className="opacity-40" aria-hidden="true">•</span>
            <span className="font-semibold text-accent">{section.toUpperCase()}</span>
        </div>
    )
}
