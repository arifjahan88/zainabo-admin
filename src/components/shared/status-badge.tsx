import { cn } from '@/lib/utils';
import type { ProductStatus } from '@/features/products/types';

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  published: {
    label: 'Published',
    className: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
  },
  low_stock: {
    label: 'Low Stock',
    className: 'bg-amber-50 text-amber-700 ring-amber-600/15',
  },
  out_of_stock: {
    label: 'Out of Stock',
    className: 'bg-red-50 text-red-700 ring-red-600/15',
  },
  pending: {
    label: 'Pending',
    className: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
  },
  draft: {
    label: 'Draft',
    className: 'bg-slate-100 text-slate-600 ring-slate-500/15',
  },
};

export function StatusBadge({ status }: { status: ProductStatus }) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex h-5 items-center rounded-full px-2 text-xs font-medium ring-1 ring-inset',
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
