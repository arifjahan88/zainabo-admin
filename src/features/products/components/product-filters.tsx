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

export function ProductFilters({ value, onChange }: ProductFiltersProps) {
  const update = (patch: Partial<ProductFiltersState>) => {
    onChange({ ...value, ...patch });
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-card p-3 ring-1 ring-foreground/10 lg:flex-row lg:items-center">
      <div className="relative min-w-0 flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={value.search}
          onChange={(e) => update({ search: e.target.value })}
          placeholder="Search products by name, SKU, or barcode..."
          className="h-9 pl-9"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Select
          value={value.category}
          onValueChange={(category) =>
            update({ category: category ?? 'all' })
          }
        >
          <SelectTrigger className="h-9 w-[130px] bg-background">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Category</SelectItem>
            <SelectItem value="Apparel">Apparel</SelectItem>
            <SelectItem value="Accessories">Accessories</SelectItem>
            <SelectItem value="Footwear">Footwear</SelectItem>
            <SelectItem value="Jewelry">Jewelry</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.brand}
          onValueChange={(brand) => update({ brand: brand ?? 'all' })}
        >
          <SelectTrigger className="h-9 w-[120px] bg-background">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Brand</SelectItem>
            <SelectItem value="Zainabo">Zainabo</SelectItem>
            <SelectItem value="Maison Z">Maison Z</SelectItem>
            <SelectItem value="Urban Z">Urban Z</SelectItem>
            <SelectItem value="StepZ">StepZ</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.status}
          onValueChange={(status) => update({ status: status ?? 'all' })}
        >
          <SelectTrigger className="h-9 w-[120px] bg-background">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="low_stock">Low Stock</SelectItem>
            <SelectItem value="out_of_stock">Out of Stock</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.stock}
          onValueChange={(stock) => update({ stock: stock ?? 'all' })}
        >
          <SelectTrigger className="h-9 w-[110px] bg-background">
            <SelectValue placeholder="Stock" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Stock</SelectItem>
            <SelectItem value="in">In Stock</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="out">Out</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm" className="h-9 gap-1.5">
          <ListFilter className="size-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
