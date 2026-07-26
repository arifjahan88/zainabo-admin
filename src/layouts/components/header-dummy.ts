import { URLFinance, URLStoreSettings, URLSupport } from '@/routes/routes.url';

export const headerDummy = {
  storeName: 'Zainabo Fashion',
  sellerId: 'ZB12345',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  locale: 'English',
  countryCode: 'TH',
  countryLabel: 'ไทย',
  messageCount: 3,
  notificationCount: 5,
};

export const countryOptions = [
  { code: 'TH', label: 'ไทย', englishLabel: 'Thailand' },
  { code: 'US', label: 'USA', englishLabel: 'United States' },
  { code: 'SG', label: 'Singapore', englishLabel: 'Singapore' },
  { code: 'MY', label: 'Malaysia', englishLabel: 'Malaysia' },
] as const;

export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'th', label: 'ไทย' },
  { code: 'zh', label: '中文' },
] as const;

export const notificationItems = [
  {
    id: '1',
    title: 'Product approved',
    body: 'Classic White Tee is now live in the marketplace.',
    time: '2m ago',
    unread: true,
  },
  {
    id: '2',
    title: 'Low stock alert',
    body: 'Linen Summer Dress has only 8 units left.',
    time: '1h ago',
    unread: true,
  },
  {
    id: '3',
    title: 'New order received',
    body: 'Order #ZB-94821 is waiting for fulfillment.',
    time: '3h ago',
    unread: true,
  },
  {
    id: '4',
    title: 'Campaign tip',
    body: 'Boost weekend sales with a flash deal.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: '5',
    title: 'Payout processed',
    body: 'Your weekly settlement has been transferred.',
    time: '2d ago',
    unread: false,
  },
];

export const userMenuItems = [
  { id: 'profile', label: 'Store Profile', to: URLStoreSettings() },
  { id: 'settings', label: 'Store Settings', to: URLStoreSettings() },
  { id: 'finance', label: 'Billing & Finance', to: URLFinance() },
  { id: 'support', label: 'Help & Support', to: URLSupport() },
] as const;
