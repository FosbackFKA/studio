
import { TopTasks } from '@/components/bonde/TopTasks';
import { BondeHero } from '@/components/bonde/BondeHero';
import { MarketPricesPreview } from '@/components/bonde/MarketPricesPreview';
import { GrainGuidePreview } from '@/components/bonde/GrainGuidePreview';
import { SeasonCards } from '@/components/bonde/SeasonCards';
import { OwnershipTeaser } from '@/components/bonde/OwnershipTeaser';
import { 
  topTasks, 
  heroData, 
  regions, 
  weeklyPrices, 
  grainGuideLinks,
  seasonCards,
  ownershipTeaserData
} from '@/data/bonde';

export default function BondePage() {
  return (
    <div className="flex flex-col bg-background">
      <BondeHero {...heroData} />
      
      <div className="container mx-auto max-w-[1542px] px-4 space-y-16 py-16">
        <TopTasks tasks={topTasks} />
        
        <MarketPricesPreview regions={regions} prices={weeklyPrices} />

        <GrainGuidePreview links={grainGuideLinks} />
        
        <SeasonCards cards={seasonCards} />
        
        <OwnershipTeaser {...ownershipTeaserData} />
      </div>
    </div>
  );
}
