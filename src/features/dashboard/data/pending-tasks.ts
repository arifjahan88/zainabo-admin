import type { PendingTask } from '@/features/dashboard/types';
import {
  URLFinance,
  URLProductsPending,
  URLStoreSettings,
  URLSupport,
} from '@/routes/routes.url';

export const pendingTasks: PendingTask[] = [
  {
    id: 'sellers',
    title: 'Pending Seller Approvals',
    count: 18,
    tone: 'red',
    to: URLStoreSettings(),
  },
  {
    id: 'products',
    title: 'Pending Product Approvals',
    count: 126,
    tone: 'blue',
    to: URLProductsPending(),
  },
  {
    id: 'withdrawals',
    title: 'Pending Withdrawals',
    count: 25,
    tone: 'orange',
    to: URLFinance(),
  },
  {
    id: 'tickets',
    title: 'Support Tickets',
    count: 32,
    tone: 'purple',
    to: URLSupport(),
  },
];
