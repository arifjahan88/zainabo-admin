import { Download, Plus, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { URLProductsNew } from '@/routes/routes.url';

export function ProductsPageHeader() {
  return (
    <div className='flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-start lg:justify-between'>
      <div className='min-w-0'>
        <h1 className='text-xl font-semibold tracking-tight sm:text-2xl'>All Products</h1>
        <p className='mt-1 text-sm text-muted-foreground'>
          <span className='sm:hidden'>Manage catalog, stock, and status.</span>
          <span className='hidden sm:inline'>
            Manage your catalog, stock levels, and listing status in one place.
          </span>
        </p>
      </div>

      <div className='flex flex-wrap items-center gap-2 lg:justify-end'>
        <Button variant='outline' size='sm' className='h-9 gap-1.5'>
          <Download className='size-4' />
          <span className='hidden sm:inline'>Export</span>
        </Button>
        <Button variant='outline' size='sm' className='h-9 gap-1.5'>
          <Upload className='size-4' />
          <span className='hidden sm:inline'>Import</span>
        </Button>
        <Button
          size='sm'
          className='h-9 min-w-0 flex-1 gap-1.5 sm:flex-none'
          nativeButton={false}
          render={<Link to={URLProductsNew()} />}
        >
          <Plus className='size-4' />
          <span className='sm:hidden'>Add Product</span>
          <span className='hidden sm:inline'>Add New Product</span>
        </Button>
      </div>
    </div>
  );
}
