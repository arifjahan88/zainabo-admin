import { createBrowserRouter, Navigate } from 'react-router-dom';

import { DashboardShellLoader } from '@/components/shared/dashboard-shell-loader';
import { loadable } from '@/lib/loadable';
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
  URLRoot,
  URLStoreSettings,
  URLSupport,
} from '@/routes/routes.url';

const DashboardLayout = loadable(() => import('@/layouts/dashboard-layout'), {
  fallback: <DashboardShellLoader />,
});
const DashboardPage = loadable(
  () => import('@/features/dashboard/pages/dashboard-page')
);
const AllProductsPage = loadable(
  () => import('@/features/products/pages/all-products-page')
);
const ComingSoonPage = loadable(
  () => import('@/features/common/pages/coming-soon-page')
);

export const router = createBrowserRouter([
  {
    path: URLRoot(),
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={URLDashboard()} replace />,
      },
      {
        path: URLProducts(),
        element: <AllProductsPage />,
      },
      {
        path: URLDashboard(),
        element: <DashboardPage />,
      },
      {
        path: URLProductsNew(),
        element: <ComingSoonPage />,
      },
      {
        path: URLProductsBulkUpload(),
        element: <ComingSoonPage />,
      },
      {
        path: URLProductsDrafts(),
        element: <ComingSoonPage />,
      },
      {
        path: URLProductsPending(),
        element: <ComingSoonPage />,
      },
      {
        path: URLProductsPublished(),
        element: <ComingSoonPage />,
      },
      {
        path: URLProductsRejected(),
        element: <ComingSoonPage />,
      },
      {
        path: URLOrders(),
        element: <ComingSoonPage />,
      },
      {
        path: URLInventory(),
        element: <ComingSoonPage />,
      },
      {
        path: URLDelivery(),
        element: <ComingSoonPage />,
      },
      {
        path: URLMarketing(),
        element: <ComingSoonPage />,
      },
      {
        path: URLCustomers(),
        element: <ComingSoonPage />,
      },
      {
        path: URLAnalytics(),
        element: <ComingSoonPage />,
      },
      {
        path: URLFinance(),
        element: <ComingSoonPage />,
      },
      {
        path: URLReports(),
        element: <ComingSoonPage />,
      },
      {
        path: URLStoreSettings(),
        element: <ComingSoonPage />,
      },
      {
        path: URLSupport(),
        element: <ComingSoonPage />,
      },
      {
        path: '*',
        element: <Navigate to={URLDashboard()} replace />,
      },
    ],
  },
]);
