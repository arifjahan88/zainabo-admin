import { createBrowserRouter, Navigate } from 'react-router-dom';

import { loadable } from '@/lib/loadable';
import { DashboardLayout } from '@/layouts/dashboard-layout';

const DashboardPage = loadable(() => import('@/features/dashboard/pages/dashboard-page'));
const AllProductsPage = loadable(() => import('@/features/products/pages/all-products-page'));
const AddProductPage = loadable(() => import('@/features/products/pages/add-product-page'));
const BulkUploadPage = loadable(() => import('@/features/products/pages/bulk-upload-page'));
const DraftsPage = loadable(() => import('@/features/products/pages/drafts-page'));
const PendingPage = loadable(() => import('@/features/products/pages/pending-page'));
const PublishedPage = loadable(() => import('@/features/products/pages/published-page'));
const RejectedPage = loadable(() => import('@/features/products/pages/rejected-page'));
const OrdersPage = loadable(() => import('@/features/orders/pages/orders-page'));
const InventoryPage = loadable(() => import('@/features/inventory/pages/inventory-page'));
const DeliveryPage = loadable(() => import('@/features/delivery/pages/delivery-page'));
const MarketingPage = loadable(() => import('@/features/marketing/pages/marketing-page'));
const CustomersPage = loadable(() => import('@/features/customers/pages/customers-page'));
const AnalyticsPage = loadable(() => import('@/features/analytics/pages/analytics-page'));
const FinancePage = loadable(() => import('@/features/finance/pages/finance-page'));
const ReportsPage = loadable(() => import('@/features/reports/pages/reports-page'));
const StoreSettingsPage = loadable(
  () => import('@/features/store-settings/pages/store-settings-page')
);
const SupportPage = loadable(() => import('@/features/support/pages/support-page'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to='/products' replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'products', element: <AllProductsPage /> },
      { path: 'products/new', element: <AddProductPage /> },
      { path: 'products/bulk-upload', element: <BulkUploadPage /> },
      { path: 'products/drafts', element: <DraftsPage /> },
      { path: 'products/pending', element: <PendingPage /> },
      { path: 'products/published', element: <PublishedPage /> },
      { path: 'products/rejected', element: <RejectedPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'inventory', element: <InventoryPage /> },
      { path: 'delivery', element: <DeliveryPage /> },
      { path: 'marketing', element: <MarketingPage /> },
      { path: 'customers', element: <CustomersPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'finance', element: <FinancePage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'store-settings', element: <StoreSettingsPage /> },
      { path: 'support', element: <SupportPage /> },
      { path: '*', element: <Navigate to='/products' replace /> },
    ],
  },
]);
