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

import {
  URLAnalytics,
  URLCustomers,
  URLDashboard,
  URLDelivery,
  URLFinance,
  URLInventory,
  URLMarketing,
  URLOrders,
  URLProducts,
  URLProductsBulkUpload,
  URLProductsDrafts,
  URLProductsNew,
  URLProductsPending,
  URLProductsPublished,
  URLProductsRejected,
  URLReports,
  URLStoreSettings,
  URLSupport,
} from '@/routes/routes.url';

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
    path: URLDashboard(),
    icon: LayoutDashboard,
  },
  {
    title: 'Products',
    path: URLProducts(),
    icon: Package,
    children: [
      { title: 'All Products', path: URLProducts() },
      { title: 'Add New Product', path: URLProductsNew() },
      { title: 'Bulk Upload', path: URLProductsBulkUpload() },
      { title: 'Drafts', path: URLProductsDrafts(), badge: 12 },
      {
        title: 'Pending Approval',
        path: URLProductsPending(),
        badge: 8,
      },
      {
        title: 'Published',
        path: URLProductsPublished(),
        badge: 156,
      },
      { title: 'Rejected', path: URLProductsRejected(), badge: 3 },
    ],
  },
  {
    title: 'Orders',
    path: URLOrders(),
    icon: ShoppingCart,
  },
  {
    title: 'Inventory',
    path: URLInventory(),
    icon: Warehouse,
  },
  {
    title: 'Delivery',
    path: URLDelivery(),
    icon: Truck,
  },
  {
    title: 'Marketing',
    path: URLMarketing(),
    icon: Megaphone,
  },
  {
    title: 'Customers',
    path: URLCustomers(),
    icon: Users,
  },
  {
    title: 'Analytics',
    path: URLAnalytics(),
    icon: BarChart3,
  },
  {
    title: 'Finance',
    path: URLFinance(),
    icon: Wallet,
  },
  {
    title: 'Reports',
    path: URLReports(),
    icon: FileText,
  },
  {
    title: 'Store Settings',
    path: URLStoreSettings(),
    icon: Store,
  },
  {
    title: 'Support',
    path: URLSupport(),
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
