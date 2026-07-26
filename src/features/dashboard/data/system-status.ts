import type { SystemStatusItem } from '@/features/dashboard/types';

export const systemStatusItems: SystemStatusItem[] = [
  { id: 'website', label: 'Website', status: 'operational' },
  { id: 'api', label: 'API Services', status: 'operational' },
  { id: 'payment', label: 'Payment Gateway', status: 'operational' },
  { id: 'database', label: 'Database', status: 'operational' },
  { id: 'cdn', label: 'CDN', status: 'operational' },
];
