import { Home, Laptop, Shirt, Sparkles, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { topCategories } from '@/features/dashboard/data/top-categories';
import type { KpiTone } from '@/features/dashboard/types';
import { URLReports } from '@/routes/routes.url';
import { cn } from '@/lib/utils';

const toneStyles: Record<KpiTone, { icon: string; bar: string }> = {
  red: { icon: 'bg-rose-50 text-rose-600', bar: 'bg-rose-500' },
  blue: { icon: 'bg-sky-50 text-sky-600', bar: 'bg-sky-500' },
  green: { icon: 'bg-emerald-50 text-emerald-600', bar: 'bg-emerald-500' },
  purple: { icon: 'bg-violet-50 text-violet-600', bar: 'bg-violet-500' },
  orange: { icon: 'bg-orange-50 text-orange-500', bar: 'bg-orange-500' },
};

const icons: LucideIcon[] = [Shirt, Laptop, Home, Sparkles, Shirt];

export function TopCategoriesCard() {
  return (
    <Card className='shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between gap-2 pb-2'>
        <CardTitle className='text-base font-semibold text-foreground'>
          Top Performing Categories
        </CardTitle>
        <Button
          variant='link'
          size='sm'
          className='h-auto px-0 text-primary'
          nativeButton={false}
          render={<Link to={URLReports()} />}
        >
          View Report
        </Button>
      </CardHeader>
      <CardContent className='space-y-3.5'>
        {topCategories.map((category, index) => {
          const Icon = icons[index % icons.length];
          const tone = toneStyles[category.tone];

          return (
            <div key={category.id} className='space-y-1.5'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-lg',
                    tone.icon
                  )}
                >
                  <Icon className='size-3.5' />
                </span>
                <div className='min-w-0 flex-1'>
                  <div className='flex items-center justify-between gap-2'>
                    <p className='truncate text-sm font-medium text-foreground'>{category.label}</p>
                    <p className='shrink-0 text-sm font-semibold text-foreground'>
                      {category.value}
                    </p>
                  </div>
                  <div className='mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted'>
                    <div
                      className={cn('h-full rounded-full', tone.bar)}
                      style={{ width: `${category.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
