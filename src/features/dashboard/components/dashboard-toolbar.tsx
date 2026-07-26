import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarDays, Settings } from 'lucide-react';
import type { DateRange } from 'react-day-picker';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const defaultRange: DateRange = {
  from: new Date(2024, 4, 19),
  to: new Date(2024, 4, 25),
};

function formatRange(range: DateRange | undefined) {
  if (!range?.from) return 'Pick a date range';
  if (!range.to) return format(range.from, 'MMM d, yyyy');
  return `${format(range.from, 'MMM d, yyyy')} - ${format(range.to, 'MMM d, yyyy')}`;
}

export function DashboardToolbar() {
  const [date, setDate] = useState<DateRange | undefined>(defaultRange);

  return (
    <div className='flex flex-wrap items-center justify-end gap-2'>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant='outline'
              size='sm'
              className={cn(
                'h-9 gap-2 bg-card text-sm font-normal',
                !date?.from && 'text-muted-foreground'
              )}
            />
          }
        >
          <CalendarDays className='size-4 text-muted-foreground' />
          <span className='max-w-55 truncate sm:max-w-none'>{formatRange(date)}</span>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='end'>
          <Calendar
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      <Button variant='outline' size='icon' className='size-9 bg-card'>
        <Settings className='size-4' />
        <span className='sr-only'>Dashboard settings</span>
      </Button>
    </div>
  );
}
