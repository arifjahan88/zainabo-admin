import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { systemStatusItems } from '@/features/dashboard/data/system-status';
import { URLStoreSettings } from '@/routes/routes.url';
import { cn } from '@/lib/utils';

export function SystemStatusCard() {
  return (
    <Card className='shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between gap-2 pb-2'>
        <CardTitle className='text-base font-semibold text-foreground'>System Status</CardTitle>
        <Button
          variant='link'
          size='sm'
          className='h-auto px-0 text-primary'
          nativeButton={false}
          render={<Link to={URLStoreSettings()} />}
        >
          View All
        </Button>
      </CardHeader>
      <CardContent className='space-y-2.5'>
        {systemStatusItems.map((item) => (
          <div key={item.id} className='flex items-center justify-between gap-2 text-sm'>
            <span className='text-muted-foreground'>{item.label}</span>
            <span className='inline-flex items-center gap-1.5 font-medium text-emerald-600'>
              <span
                className={cn(
                  'size-1.5 rounded-full',
                  item.status === 'operational'
                    ? 'bg-emerald-500'
                    : item.status === 'degraded'
                      ? 'bg-amber-500'
                      : 'bg-rose-500'
                )}
              />
              {item.status === 'operational'
                ? 'Operational'
                : item.status === 'degraded'
                  ? 'Degraded'
                  : 'Down'}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
