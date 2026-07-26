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
  const allSelected =
    products.length > 0 && products.every((p) => selectedIds.includes(p.id));

  return (
    <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-10 pl-3 sm:pl-4">
              <Checkbox
                checked={allSelected}
                onCheckedChange={(checked) => onToggleAll(Boolean(checked))}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="hidden md:table-cell">SKU</TableHead>
            <TableHead className="hidden lg:table-cell">Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="hidden sm:table-cell">Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden xl:table-cell">Created At</TableHead>
            <TableHead className="w-12 pr-3 text-right sm:w-28 sm:pr-4">
              <span className="sr-only sm:not-sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const selected = selectedIds.includes(product.id);

            return (
              <TableRow
                key={product.id}
                data-state={selected ? 'selected' : undefined}
              >
                <TableCell className="pl-3 sm:pl-4">
                  <Checkbox
                    checked={selected}
                    onCheckedChange={(checked) =>
                      onToggleOne(product.id, Boolean(checked))
                    }
                    aria-label={`Select ${product.name}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                    <img
                      src={product.image}
                      alt=""
                      className="size-9 shrink-0 rounded-lg object-cover ring-1 ring-border sm:size-10"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-medium">{product.name}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        <span className="sm:hidden">{product.sku} · </span>
                        {product.variant}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden font-mono text-xs text-muted-foreground md:table-cell">
                  {product.sku}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {product.category}
                </TableCell>
                <TableCell className="font-medium whitespace-nowrap">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {product.stock}
                </TableCell>
                <TableCell>
                  <StatusBadge status={product.status} />
                </TableCell>
                <TableCell className="hidden text-muted-foreground xl:table-cell">
                  {product.createdAt}
                </TableCell>
                <TableCell className="pr-3 sm:pr-4">
                  <div className="flex items-center justify-end gap-0.5">
                    <Button
                      variant="outline"
                      size="icon-sm"
                      className="hidden text-muted-foreground sm:inline-flex"
                      aria-label="View"
                    >
                      <Eye />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon-sm"
                      className="hidden text-muted-foreground md:inline-flex"
                      aria-label="Edit"
                    >
                      <Pencil />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon-sm"
                            className="text-muted-foreground"
                            aria-label="More actions"
                          />
                        }
                      >
                        <MoreHorizontal />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="sm:hidden">
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="md:hidden">
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
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
