import type { ReactNode } from 'react';
import { ListFilter, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export type ProductFiltersState = {
  search: string;
  category: string;
  brand: string;
  status: string;
  stock: string;
};

type ProductFiltersProps = {
  value: ProductFiltersState;
  onChange: (next: ProductFiltersState) => void;
};

const selectTriggerClass =
  'h-auto w-40 shrink-0 items-center gap-2 rounded-lg border border-border bg-background py-2 pr-2 pl-3 shadow-none data-[size=default]:h-auto';

function FilterSelectTrigger({ label, children }: { label: string; children: ReactNode }) {
  return (
    <SelectTrigger className={selectTriggerClass}>
      <span className='flex min-w-0 flex-1 flex-col items-start gap-0.5 text-left'>
        <span className='text-[11px] leading-none font-medium text-muted-foreground'>{label}</span>
        <span className='w-full text-sm leading-tight font-medium text-foreground *:data-[slot=select-value]:line-clamp-1'>
          {children}
        </span>
      </span>
    </SelectTrigger>
  );
}

export function ProductFilters({ value, onChange }: ProductFiltersProps) {
  const update = (patch: Partial<ProductFiltersState>) => {
    onChange({ ...value, ...patch });
  };

  return (
    <div className='flex flex-col gap-3 rounded-xl bg-card p-3 ring-1 ring-foreground/10 lg:flex-row lg:items-center'>
      <div className='relative min-w-0 flex-1'>
        <Search className='pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground' />
        <Input
          value={value.search}
          onChange={(e) => update({ search: e.target.value })}
          placeholder='Search products by name, SKU, or barcode...'
          className='h-12 w-full rounded-lg border border-border bg-background pl-9 shadow-none'
        />
      </div>

      <div className='flex flex-wrap items-center gap-2'>
        <Select
          value={value.category}
          onValueChange={(category) => update({ category: category ?? 'All Categories' })}
        >
          <FilterSelectTrigger label='Category'>
            <SelectValue placeholder='All Categories' />
          </FilterSelectTrigger>
          <SelectContent>
            <SelectItem value='All Categories'>All Categories</SelectItem>
            <SelectItem value='Apparel'>Apparel</SelectItem>
            <SelectItem value='Accessories'>Accessories</SelectItem>
            <SelectItem value='Footwear'>Footwear</SelectItem>
            <SelectItem value='Jewelry'>Jewelry</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.brand}
          onValueChange={(brand) => update({ brand: brand ?? 'All Brands' })}
        >
          <FilterSelectTrigger label='Brand'>
            <SelectValue placeholder='All Brands' />
          </FilterSelectTrigger>
          <SelectContent>
            <SelectItem value='All Brands'>All Brands</SelectItem>
            <SelectItem value='Zainabo'>Zainabo</SelectItem>
            <SelectItem value='Maison Z'>Maison Z</SelectItem>
            <SelectItem value='Urban Z'>Urban Z</SelectItem>
            <SelectItem value='StepZ'>StepZ</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.status}
          onValueChange={(status) => update({ status: status ?? 'All Status' })}
        >
          <FilterSelectTrigger label='Status'>
            <SelectValue placeholder='All Status' />
          </FilterSelectTrigger>
          <SelectContent>
            <SelectItem value='All Status'>All Status</SelectItem>
            <SelectItem value='published'>Published</SelectItem>
            <SelectItem value='low_stock'>Low Stock</SelectItem>
            <SelectItem value='out_of_stock'>Out of Stock</SelectItem>
            <SelectItem value='pending'>Pending</SelectItem>
            <SelectItem value='draft'>Draft</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.stock}
          onValueChange={(stock) => update({ stock: stock ?? 'All Stock' })}
        >
          <FilterSelectTrigger label='Stock'>
            <SelectValue placeholder='All Stock' />
          </FilterSelectTrigger>
          <SelectContent>
            <SelectItem value='All Stock'>All Stock</SelectItem>
            <SelectItem value='in'>In Stock</SelectItem>
            <SelectItem value='low'>Low</SelectItem>
            <SelectItem value='out'>Out</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant='outline'
          size='sm'
          className={cn(
            'h-12 shrink-0 gap-1.5 rounded-lg border border-border bg-background px-3 shadow-none'
          )}
        >
          <ListFilter className='size-4' />
          Filters
        </Button>
      </div>
    </div>
  );
}
