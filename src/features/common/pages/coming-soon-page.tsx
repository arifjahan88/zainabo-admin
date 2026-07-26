import { Construction, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { breadcrumbLabels } from '@/layouts/components/nav-config';
import { URLProducts } from '@/routes/routes.url';

function titleFromPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return 'Page';

  const last = segments[segments.length - 1];
  return (
    breadcrumbLabels[last] ??
    last
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
  );
}

export default function ComingSoonPage() {
  const { pathname } = useLocation();
  const title = titleFromPath(pathname);

  return (
    <div className='flex min-h-[70vh] items-center justify-center px-6 py-12'>
      <div className='w-full max-w-lg text-center'>
        <div className='mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
          <Construction className='size-8' strokeWidth={1.75} />
        </div>

        <p className='mt-6 text-xs font-semibold tracking-[0.18em] text-primary uppercase'>
          Coming Soon
        </p>
        <h1 className='mt-2 text-3xl font-semibold tracking-tight text-foreground'>{title}</h1>
        <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
          This page is working later. We&apos;re building a polished experience for{' '}
          {title.toLowerCase()} — check back soon while you manage your catalog from All Products.
        </p>

        <div className='mt-8 flex justify-center'>
          <Button nativeButton={false} render={<Link to={URLProducts()} />} className='gap-1.5'>
            <ArrowLeft className='size-4' />
            Back to All Products
          </Button>
        </div>
      </div>
    </div>
  );
}
