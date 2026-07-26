import type { ProductStat } from '../types';

export const productStats: ProductStat[] = [
  {
    id: 'total',
    label: 'Total Products',
    value: 156,
    trend: 12.5,
    icon: 'package',
    tone: 'blue',
  },
  {
    id: 'published',
    label: 'Published',
    value: 120,
    trend: 10.2,
    icon: 'check',
    tone: 'green',
  },
  {
    id: 'pending',
    label: 'Pending Approval',
    value: 8,
    trend: -2.4,
    icon: 'clock',
    tone: 'orange',
  },
  {
    id: 'out_of_stock',
    label: 'Out of Stock',
    value: 5,
    trend: -1.5,
    icon: 'package-x',
    tone: 'red',
  },
  {
    id: 'low_stock',
    label: 'Low Stock',
    value: 18,
    trend: null,
    icon: 'file',
    tone: 'purple',
  },
];
