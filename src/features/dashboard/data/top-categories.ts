import type { TopCategory } from '@/features/dashboard/types';

export const topCategories: TopCategory[] = [
  {
    id: '1',
    label: "Women's Fashion",
    value: '$2.4M',
    progress: 92,
    tone: 'red',
  },
  {
    id: '2',
    label: 'Electronics',
    value: '$1.8M',
    progress: 78,
    tone: 'blue',
  },
  {
    id: '3',
    label: 'Home & Living',
    value: '$1.2M',
    progress: 65,
    tone: 'green',
  },
  {
    id: '4',
    label: 'Beauty & Care',
    value: '$980K',
    progress: 54,
    tone: 'purple',
  },
  {
    id: '5',
    label: "Men's Fashion",
    value: '$860K',
    progress: 48,
    tone: 'orange',
  },
];
