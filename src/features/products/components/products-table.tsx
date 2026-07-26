import { Eye, MoreHorizontal, Pencil } from 'lucide-react';

import { StatusBadge } from '@/components/shared/status-badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Product } from '@/features/products/types';

type ProductsTableProps = {
  products: Product[];
  selectedIds: string[];
  onToggleAll: (checked: boolean) => void;
  onToggleOne: (id: string, checked: boolean) => void;
};

export function ProductsTable({
  products,
  selectedIds,
  onToggleAll,
  onToggleOne,
}: ProductsTableProps) {
  const allSelected = products.length > 0 && products.every((p) => selectedIds.includes(p.id));

  return (
    <div className='overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10'>
      <Table>
        <TableHeader>
          <TableRow className='hover:bg-transparent'>
            <TableHead className='w-10'>
              <Checkbox
                checked={allSelected}
                onCheckedChange={(checked) => onToggleAll(Boolean(checked))}
                aria-label='Select all'
              />
            </TableHead>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className='w-28 text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const selected = selectedIds.includes(product.id);

            return (
              <TableRow key={product.id} data-state={selected ? 'selected' : undefined}>
                <TableCell>
                  <Checkbox
                    checked={selected}
                    onCheckedChange={(checked) => onToggleOne(product.id, Boolean(checked))}
                    aria-label={`Select ${product.name}`}
                  />
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-3'>
                    <img
                      src={product.image}
                      alt=''
                      className='size-10 rounded-lg object-cover ring-1 ring-border'
                    />
                    <div className='min-w-0'>
                      <p className='truncate font-medium'>{product.name}</p>
                      <p className='truncate text-xs text-muted-foreground'>{product.variant}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className='font-mono text-xs text-muted-foreground'>
                  {product.sku}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className='font-medium'>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <StatusBadge status={product.status} />
                </TableCell>
                <TableCell className='text-muted-foreground'>{product.createdAt}</TableCell>
                <TableCell>
                  <div className='flex items-center justify-end gap-0.5'>
                    <Button
                      variant='outline'
                      size='icon-sm'
                      className='text-muted-foreground'
                      aria-label='View'
                    >
                      <Eye />
                    </Button>
                    <Button
                      variant='outline'
                      size='icon-sm'
                      className='text-muted-foreground'
                      aria-label='Edit'
                    >
                      <Pencil />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant='outline'
                            size='icon-sm'
                            className='text-muted-foreground'
                            aria-label='More actions'
                          />
                        }
                      >
                        <MoreHorizontal />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                        <DropdownMenuItem className='text-destructive'>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
