import { Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card, CardContent } from '@/components/ui/card';

function TipIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 90 70' className={className} aria-hidden xmlns='http://www.w3.org/2000/svg'>
      <path d='M18 58h42l-6-34H24L18 58z' fill='#B45309' opacity='0.9' />
      <path d='M24 24h30l4 10H20l4-10z' fill='#92400E' />
      <rect x='30' y='34' width='18' height='14' rx='2' fill='#FDE68A' />
      <rect x='58' y='40' width='22' height='18' rx='3' fill='#38BDF8' />
      <rect x='62' y='44' width='14' height='4' rx='1' fill='#fff' opacity='0.7' />
      <rect x='62' y='50' width='10' height='3' rx='1' fill='#fff' opacity='0.5' />
    </svg>
  );
}

export function MarketplaceTipCard() {
  return (
    <Card className='relative overflow-hidden border-0 bg-[#FFF8EE] shadow-none ring-0'>
      <CardContent className='relative gap-2 pr-16 pb-10'>
        <div className='flex items-center gap-2'>
          <span className='flex size-7 items-center justify-center rounded-full bg-orange-100 text-orange-500'>
            <Lightbulb className='size-3.5' />
          </span>
          <p className='text-sm font-semibold text-slate-900'>Marketplace Tip</p>
        </div>
        <p className='text-xs leading-relaxed text-slate-600'>
          High-quality images and detailed descriptions can increase your sales by up to 30%.
        </p>
        <Link
          to='/marketing'
          className='inline-flex text-xs font-semibold text-orange-600 hover:underline'
        >
          Learn More →
        </Link>
        <TipIllustration className='pointer-events-none absolute right-2 bottom-1 h-14 w-auto' />
      </CardContent>
    </Card>
  );
}
