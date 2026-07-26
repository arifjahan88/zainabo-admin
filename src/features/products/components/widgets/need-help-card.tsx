import { Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function SupportIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 120 140' className={className} aria-hidden xmlns='http://www.w3.org/2000/svg'>
      <ellipse cx='60' cy='128' rx='36' ry='8' fill='#FECACA' opacity='0.5' />
      <circle cx='60' cy='42' r='22' fill='#FDE68A' />
      <path
        d='M38 42c0-14 10-24 22-24s22 10 22 24'
        fill='none'
        stroke='#1E293B'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <circle cx='52' cy='42' r='2.5' fill='#1E293B' />
      <circle cx='68' cy='42' r='2.5' fill='#1E293B' />
      <path
        d='M54 52c3 3 9 3 12 0'
        fill='none'
        stroke='#1E293B'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path d='M40 70c4-10 16-16 20-16s16 6 20 16v36H40V70z' fill='#E11D48' />
      <path d='M40 78h40v8H40z' fill='#BE123C' opacity='0.35' />
      <rect x='28' y='38' width='10' height='18' rx='5' fill='#64748B' />
      <rect x='82' y='38' width='10' height='18' rx='5' fill='#64748B' />
      <path d='M33 38c0-16 12-28 27-28s27 12 27 28' fill='none' stroke='#64748B' strokeWidth='4' />
      <path
        d='M88 70c8-4 14-2 16 6'
        fill='none'
        stroke='#FDE68A'
        strokeWidth='8'
        strokeLinecap='round'
      />
      <circle cx='104' cy='78' r='6' fill='#FDE68A' />
    </svg>
  );
}

export function NeedHelpCard() {
  return (
    <Card className='overflow-hidden border-0 bg-[#FFF1EB] shadow-none ring-0'>
      <CardContent className='relative gap-3 pt-5 pb-4'>
        <div className='relative z-10 max-w-[58%] space-y-3'>
          <div>
            <p className='text-base font-semibold text-slate-900'>Need Help?</p>
            <p className='mt-1 text-xs leading-relaxed text-slate-600'>
              Our support team is here to help you.
            </p>
          </div>
          <Button
            size='sm'
            variant='outline'
            className='h-8 gap-1.5 border-primary bg-white text-primary hover:bg-white hover:text-primary'
            nativeButton={false}
            render={<Link to='/support' />}
          >
            <Headset className='size-3.5' />
            Contact Support
          </Button>
        </div>
        <SupportIllustration className='pointer-events-none absolute right-1 bottom-0 h-29.5 w-auto' />
      </CardContent>
    </Card>
  );
}
