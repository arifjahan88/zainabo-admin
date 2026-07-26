import type { ActivityItem } from '@/features/dashboard/types';

export const liveActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'New order received',
    description: 'Order #ZB-94821 from Sarah Johnson',
    time: '2 min ago',
    tone: 'blue',
  },
  {
    id: '2',
    title: 'New seller registered',
    description: 'Fashion Hub joined the marketplace',
    time: '15 min ago',
    tone: 'green',
  },
  {
    id: '3',
    title: 'Product approved',
    description: 'Classic White Tee is now live',
    time: '32 min ago',
    tone: 'purple',
  },
  {
    id: '4',
    title: 'Withdrawal requested',
    description: 'TechGadgets requested $2,450',
    time: '1 hour ago',
    tone: 'orange',
  },
  {
    id: '5',
    title: 'Support ticket opened',
    description: 'Ticket #ST-8821 needs attention',
    time: '2 hours ago',
    tone: 'red',
  },
];
