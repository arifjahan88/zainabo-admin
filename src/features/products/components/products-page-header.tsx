import { Download, Plus, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { URLProductsNew } from '@/routes/routes.url';

export function ProductsPageHeader() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
      <div>
        <h1 className='text-2xl font-semibold tracking-tight'>All Products</h1>
        <p className='mt-1 text-sm text-muted-foreground'>
          Manage your catalog, stock levels, and listing status in one place.
        </p>
      </div>
      <div className='flex flex-wrap items-center gap-2'>
        <Button variant='outline' size='sm' className='h-9 gap-1.5'>
          <Download className='size-4' />
          Export
        </Button>
        <Button variant='outline' size='sm' className='h-9 gap-1.5'>
          <Upload className='size-4' />
          Import
        </Button>
        <Button
          size='sm'
          className='h-9 gap-1.5'
          nativeButton={false}
          render={<Link to={URLProductsNew()} />}
        >
          <Plus className='size-4' />
          Add New Product
        </Button>
      </div>
    </div>
  );
}
