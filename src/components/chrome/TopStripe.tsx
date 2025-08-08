
'use client';
import { useTheme } from '@/lib/theme/provider';

export function TopStripe() {
    const { theme } = useTheme();
    // This component relies on the `data-theme` attribute set by the ThemeProvider
    // to apply the correct accent color via CSS variables.
    return <div className="h-2 w-full bg-accent" />;
}
