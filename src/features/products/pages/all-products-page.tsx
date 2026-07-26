import { useMemo, useState } from 'react';

import { ProductFilters } from '@/features/products/components/product-filters';
import type { ProductFiltersState } from '@/features/products/components/product-filters';
import { ProductStatCards } from '@/features/products/components/product-stat-cards';
import { ProductsPageHeader } from '@/features/products/components/products-page-header';
import { ProductsPagination } from '@/features/products/components/products-pagination';
import { ProductsTable } from '@/features/products/components/products-table';
import { MarketplaceTipCard } from '@/features/products/components/widgets/marketplace-tip-card';
import { NeedHelpCard } from '@/features/products/components/widgets/need-help-card';
import { ProductCompletionCard } from '@/features/products/components/widgets/product-completion-card';
import { QuickActionsCard } from '@/features/products/components/widgets/quick-actions-card';
import { mockProducts } from '@/features/products/data/mock-products';
import type { Product } from '@/features/products/types';

function filterProducts(
  products: Product[],
  filters: ProductFiltersState
): Product[] {
  return products.filter((product) => {
    const q = filters.search.trim().toLowerCase();
    if (
      q &&
      !product.name.toLowerCase().includes(q) &&
      !product.sku.toLowerCase().includes(q)
    ) {
      return false;
    }
    if (
      filters.category !== 'All Categories' &&
      product.category !== filters.category
    ) {
      return false;
    }
    if (filters.brand !== 'All Brands' && product.brand !== filters.brand) {
      return false;
    }
    if (filters.status !== 'All Status' && product.status !== filters.status) {
      return false;
    }
    if (filters.stock === 'in' && product.stock <= 10) return false;
    if (
      filters.stock === 'low' &&
      (product.stock === 0 || product.stock > 10)
    ) {
      return false;
    }
    if (filters.stock === 'out' && product.stock !== 0) return false;
    return true;
  });
}

function RightRail() {
  return (
    <>
      <ProductCompletionCard />
      <NeedHelpCard />
      <QuickActionsCard />
      <MarketplaceTipCard />
    </>
  );
}

export default function AllProductsPage() {
  const [filters, setFilters] = useState<ProductFiltersState>({
    search: '',
    category: 'All Categories',
    brand: 'All Brands',
    status: 'All Status',
    stock: 'All Stock',
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filtered = useMemo(
    () => filterProducts(mockProducts, filters),
    [filters]
  );

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return (
    <div className="flex gap-4 p-3 sm:p-4 lg:p-6">
      <div className="min-w-0 flex-1 space-y-3 sm:space-y-4">
        <ProductsPageHeader />
        <ProductStatCards />
        <ProductFilters
          value={filters}
          onChange={(next) => {
            setFilters(next);
            setPage(1);
          }}
        />
        <ProductsTable
          products={pageItems}
          selectedIds={selectedIds}
          onToggleAll={(checked) => {
            setSelectedIds(checked ? pageItems.map((p) => p.id) : []);
          }}
          onToggleOne={(id, checked) => {
            setSelectedIds((prev) =>
              checked ? [...prev, id] : prev.filter((x) => x !== id)
            );
          }}
        />
        <ProductsPagination
          page={page}
          pageSize={pageSize}
          total={filtered.length}
          onPageChange={setPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setPage(1);
          }}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:hidden">
          <RightRail />
        </div>
      </div>

      <aside className="hidden w-70 shrink-0 space-y-4 self-start xl:block">
        <RightRail />
      </aside>
    </div>
  );
}
