export type ProductStatus =
  | 'published'
  | 'low_stock'
  | 'out_of_stock'
  | 'pending'
  | 'draft';

export type Product = {
  id: string;
  name: string;
  variant: string;
  image: string;
  sku: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  status: ProductStatus;
  createdAt: string;
};

export type ProductStatTone =
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'
  | 'purple';

export type ProductStatIcon =
  | 'package'
  | 'check'
  | 'clock'
  | 'package-x'
  | 'file';

export type ProductStat = {
  id: string;
  label: string;
  value: number;
  trend: number | null;
  icon: ProductStatIcon;
  tone: ProductStatTone;
};

export type CompletionStatus = 'done' | 'pending' | 'partial' | 'ready';

export type CompletionItem = {
  id: string;
  label: string;
  status: CompletionStatus;
  count?: string;
};
