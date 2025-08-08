
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import type { CuratedLink } from '@/data/bonde';
import { Wheat, CalendarCheck, Droplets, MessageSquare, type LucideIcon } from 'lucide-react';

interface TopTasksProps {
    tasks: CuratedLink[];
}

const iconMap: { [key: string]: LucideIcon } = {
    'Wheat': Wheat,
    'CalendarCheck': CalendarCheck,
    'Droplets': Droplets,
    'MessageSquare': MessageSquare,
};

export function TopTasks({ tasks }: TopTasksProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {tasks.map((task) => {
        const Icon = iconMap[task.iconName];
        return (
          <Link href={task.href} key={task.id} className="group">
            <Card className="h-full transform rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/50">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                {Icon && <Icon className="h-10 w-10 text-primary mb-3 transition-transform group-hover:scale-110" />}
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary">{task.label}</h3>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
