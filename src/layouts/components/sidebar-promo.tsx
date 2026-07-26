import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function SidebarPromo() {
  return (
    <div className='mx-2 mb-3 overflow-hidden rounded-xl bg-sidebar-accent'>
      <div className='relative h-28 overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=200&fit=crop'
          alt=''
          className='size-full object-cover opacity-80'
        />
        <div className='absolute inset-0 bg-linear-to-t from-sidebar-accent via-sidebar-accent/40 to-transparent' />
      </div>
      <div className='space-y-2.5 p-3 pt-0'>
        <p className='text-sm font-semibold text-sidebar-foreground'>
          Grow your business with Zainabo
        </p>
        <p className='text-xs text-sidebar-foreground/65'>
          Unlock premium tools, ads, and analytics built for sellers.
        </p>
        <Button
          size='sm'
          className='w-full bg-primary text-primary-foreground hover:bg-primary/90'
          nativeButton={false}
          render={<Link to='/marketing' />}
        >
          Explore Features
        </Button>
        <p className='text-center text-[10px] text-sidebar-foreground/45'>
          © 2026 Zainabo Seller Center
        </p>
      </div>
    </div>
  );
}
