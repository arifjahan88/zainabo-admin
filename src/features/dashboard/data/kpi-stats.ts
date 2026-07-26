import type { KpiStat } from '@/features/dashboard/types';

export const kpiStats: KpiStat[] = [
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '$15,890,250',
    trend: 18.6,
    tone: 'red',
    sparkline: [42, 48, 45, 52, 58, 55, 62, 70, 68, 75, 80, 78],
  },
  {
    id: 'orders',
    label: 'Total Orders',
    value: '124,580',
    trend: 12.4,
    tone: 'blue',
    sparkline: [30, 35, 32, 40, 38, 45, 50, 48, 55, 60, 58, 65],
  },
  {
    id: 'customers',
    label: 'Total Customers',
    value: '45,280',
    trend: 8.2,
    tone: 'green',
    sparkline: [20, 22, 25, 24, 28, 30, 29, 35, 38, 40, 42, 45],
  },
  {
    id: 'sellers',
    label: 'Total Sellers',
    value: '2,845',
    trend: 5.7,
    tone: 'purple',
    sparkline: [10, 12, 11, 14, 15, 16, 18, 17, 20, 22, 21, 24],
  },
  {
    id: 'conversion',
    label: 'Conversion Rate',
    value: '3.84%',
    trend: -1.2,
    tone: 'orange',
    sparkline: [50, 48, 52, 49, 47, 45, 48, 46, 44, 43, 42, 40],
  },
];
