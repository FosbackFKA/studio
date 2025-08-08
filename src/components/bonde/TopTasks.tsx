
'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { topTasks } from '@/data/bonde';

export function TopTasks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {topTasks.map((task) => (
        <Link href={task.href} key={task.id} className="group">
          <Card className="h-full transform rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/50">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <task.icon className="h-10 w-10 text-primary mb-3 transition-transform group-hover:scale-110" />
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary">{task.label}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
