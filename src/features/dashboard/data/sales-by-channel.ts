import type { SalesChannel } from '@/features/dashboard/types';

export const salesChannelTotal = '$15.89M';

export const salesChannels: SalesChannel[] = [
  {
    id: 'website',
    label: 'Website',
    value: '$6.82M',
    percent: 42.9,
    color: '#E11D48',
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    value: '$4.76M',
    percent: 30.0,
    color: '#3B82F6',
  },
  {
    id: 'seller',
    label: 'Seller App',
    value: '$2.85M',
    percent: 17.9,
    color: '#22C55E',
  },
  {
    id: 'others',
    label: 'Others',
    value: '$1.46M',
    percent: 9.2,
    color: '#8B5CF6',
  },
];
