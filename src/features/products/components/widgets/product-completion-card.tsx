import { Check, Circle } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  productCompletionItems,
  productCompletionPercent,
} from '@/features/products/data/completion';
import { Separator } from '@/components/ui/separator';

function CircularProgress({ value }: { value: number }) {
  const size = 88;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className='relative size-22 shrink-0'>
      <svg width={size} height={size} className='-rotate-90'>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='currentColor'
          strokeWidth={stroke}
          className='text-slate-100'
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='currentColor'
          strokeWidth={stroke}
          strokeLinecap='round'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className='text-sky-500 transition-all duration-500'
        />
      </svg>
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-xl font-bold tabular-nums text-foreground'>{value}%</span>
      </div>
    </div>
  );
}

export function ProductCompletionCard() {
  return (
    <Card className='shadow-none'>
      <CardHeader className='pb-0'>
        <CardTitle className='text-base font-semibold text-slate-900'>Product Completion</CardTitle>
      </CardHeader>
      <CardContent className='gap-4'>
        <div className='flex items-center gap-3'>
          <CircularProgress value={productCompletionPercent} />
          <p className='text-sm leading-snug text-muted-foreground'>
            <span className='font-semibold text-foreground'>Good job!</span> Complete all steps to
            maximize your product visibility and sales.
          </p>
        </div>
        <Separator className='my-5 opacity-50' />

        <ul className='space-y-2.5'>
          {productCompletionItems.map((item) => (
            <li key={item.id} className='flex items-center gap-2.5 text-sm text-foreground'>
              {item.status === 'ready' ? (
                <span className='flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 text-sky-500'>
                  <Check className='size-3 stroke-3' />
                </span>
              ) : item.status === 'partial' ? (
                <Circle className='size-5 shrink-0 text-slate-300' />
              ) : item.status === 'done' ? (
                <span className='flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white'>
                  <Check className='size-3 stroke-3' />
                </span>
              ) : (
                <Circle className='size-5 shrink-0 text-slate-300' />
              )}

              <span className='min-w-0 flex-1 truncate'>{item.label}</span>

              {item.count ? (
                <span className='text-xs font-medium text-muted-foreground'>{item.count}</span>
              ) : item.status === 'done' ? (
                <Check className='size-4 shrink-0 text-emerald-500' />
              ) : null}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
