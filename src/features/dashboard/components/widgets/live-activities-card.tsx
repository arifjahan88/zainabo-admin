import {
  BadgeCheck,
  Headphones,
  Package,
  ShoppingBag,
  Store,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { liveActivities } from '@/features/dashboard/data/live-activities';
import type { ActivityItem } from '@/features/dashboard/types';
import { URLAnalytics } from '@/routes/routes.url';
import { cn } from '@/lib/utils';

const toneStyles: Record<ActivityItem['tone'], string> = {
  red: 'bg-rose-50 text-rose-600',
  blue: 'bg-sky-50 text-sky-600',
  green: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-violet-50 text-violet-600',
  orange: 'bg-orange-50 text-orange-500',
  cyan: 'bg-cyan-50 text-cyan-600',
};

const icons: LucideIcon[] = [
  ShoppingBag,
  Store,
  Package,
  BadgeCheck,
  Headphones,
];

export function LiveActivitiesCard() {
  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
        <CardTitle className="text-base font-semibold text-foreground">
          Live Activities
        </CardTitle>
        <Button
          variant="link"
          size="sm"
          className="h-auto px-0 text-primary"
          nativeButton={false}
          render={<Link to={URLAnalytics()} />}
        >
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {liveActivities.map((activity, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div key={activity.id} className="flex gap-3">
              <span
                className={cn(
                  'mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full',
                  toneStyles[activity.tone]
                )}
              >
                <Icon className="size-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">
                  {activity.title}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {activity.description}
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground/80">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
