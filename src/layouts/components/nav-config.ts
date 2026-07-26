import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
  Truck,
  Megaphone,
  Users,
  BarChart3,
  Wallet,
  FileText,
  Store,
  Headset,
} from 'lucide-react';

export type NavChild = {
  title: string;
  path: string;
  badge?: number;
};

export type NavItem = {
  title: string;
  path: string;
  icon: LucideIcon;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Products',
    path: '/products',
    icon: Package,
    children: [
      { title: 'All Products', path: '/products' },
      { title: 'Add New Product', path: '/products/new' },
      { title: 'Bulk Upload', path: '/products/bulk-upload' },
      { title: 'Drafts', path: '/products/drafts', badge: 12 },
      { title: 'Pending Approval', path: '/products/pending', badge: 8 },
      { title: 'Published', path: '/products/published', badge: 166 },
      { title: 'Rejected', path: '/products/rejected', badge: 3 },
    ],
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: ShoppingCart,
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: Warehouse,
  },
  {
    title: 'Delivery',
    path: '/delivery',
    icon: Truck,
  },
  {
    title: 'Marketing',
    path: '/marketing',
    icon: Megaphone,
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: Users,
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: BarChart3,
  },
  {
    title: 'Finance',
    path: '/finance',
    icon: Wallet,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: FileText,
  },
  {
    title: 'Store Settings',
    path: '/store-settings',
    icon: Store,
  },
  {
    title: 'Support',
    path: '/support',
    icon: Headset,
  },
];

export const breadcrumbLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  products: 'Products',
  new: 'Add New Product',
  'bulk-upload': 'Bulk Upload',
  drafts: 'Drafts',
  pending: 'Pending Approval',
  published: 'Published',
  rejected: 'Rejected',
  orders: 'Orders',
  inventory: 'Inventory',
  delivery: 'Delivery',
  marketing: 'Marketing',
  customers: 'Customers',
  analytics: 'Analytics',
  finance: 'Finance',
  reports: 'Reports',
  'store-settings': 'Store Settings',
  support: 'Support',
};
