import type { OrderStatusItem } from '@/features/dashboard/types';

export const orderStatusTotal = 12_458;

export const orderStatusItems: OrderStatusItem[] = [
  {
    id: 'new',
    label: 'New Orders',
    count: 2145,
    percent: 17.2,
    color: '#3B82F6',
  },
  {
    id: 'processing',
    label: 'Processing',
    count: 3248,
    percent: 26.1,
    color: '#EAB308',
  },
  {
    id: 'packed',
    label: 'Packed',
    count: 1858,
    percent: 14.9,
    color: '#8B5CF6',
  },
  {
    id: 'shipped',
    label: 'Shipped',
    count: 3024,
    percent: 24.3,
    color: '#22C55E',
  },
  {
    id: 'delivered',
    label: 'Delivered',
    count: 1892,
    percent: 15.2,
    color: '#06B6D4',
  },
  {
    id: 'cancelled',
    label: 'Cancelled',
    count: 293,
    percent: 2.3,
    color: '#EF4444',
  },
];
