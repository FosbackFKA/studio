
'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type { Region } from '@/data/bonde';

interface RegionPickerProps {
    regions: Region[];
    selectedRegion: string;
}

export function RegionPicker({ regions, selectedRegion }: RegionPickerProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleRegionChange = (regionId: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set('region', regionId);
        const search = current.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`);
    };
    
    return (
        <div className="max-w-xs space-y-2">
            <Label htmlFor="region-select">Velg din region</Label>
            <Select value={selectedRegion} onValueChange={handleRegionChange}>
                <SelectTrigger id="region-select">
                    <SelectValue placeholder="Velg region..." />
                </SelectTrigger>
                <SelectContent>
                    {regions.map((region) => (
                        <SelectItem key={region.id} value={region.id}>
                            {region.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
