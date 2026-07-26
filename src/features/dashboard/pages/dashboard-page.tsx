import { DashboardToolbar } from '@/features/dashboard/components/dashboard-toolbar';
import { PendingTasksRow } from '@/features/dashboard/components/pending-tasks-row';
import { RecentOrdersTable } from '@/features/dashboard/components/recent-orders-table';
import { LiveActivitiesCard } from '@/features/dashboard/components/widgets/live-activities-card';
import { SystemStatusCard } from '@/features/dashboard/components/widgets/system-status-card';
import { TopCategoriesCard } from '@/features/dashboard/components/widgets/top-categories-card';
import { loadable } from '@/lib/loadable';

function ChartFallback({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-card ring-1 ring-foreground/10 ${className ?? 'min-h-64'}`}
    >
      <div className='size-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary' />
    </div>
  );
}

const KpiStatCards = loadable(() => import('@/features/dashboard/components/kpi-stat-cards'), {
  fallback: <ChartFallback className='min-h-35' />,
});
const RevenueOverviewChart = loadable(
  () => import('@/features/dashboard/components/revenue-overview-chart'),
  { fallback: <ChartFallback /> }
);
const OrderStatusChart = loadable(
  () => import('@/features/dashboard/components/order-status-chart'),
  { fallback: <ChartFallback /> }
);
const SalesByChannelChart = loadable(
  () => import('@/features/dashboard/components/sales-by-channel-chart'),
  { fallback: <ChartFallback /> }
);

export default function DashboardPage() {
  return (
    <div className='flex gap-4 p-4 lg:p-6'>
      <div className='min-w-0 flex-1 space-y-4'>
        <DashboardToolbar />
        <KpiStatCards />

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <RevenueOverviewChart />
          <OrderStatusChart />
        </div>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <RecentOrdersTable />
          <SalesByChannelChart />
        </div>

        <PendingTasksRow />

        <div className='grid grid-cols-1 gap-4 xl:hidden'>
          <LiveActivitiesCard />
          <SystemStatusCard />
          <TopCategoriesCard />
        </div>
      </div>

      <aside className='hidden w-70 shrink-0 space-y-4 self-start xl:block'>
        <LiveActivitiesCard />
        <SystemStatusCard />
        <TopCategoriesCard />
      </aside>
    </div>
  );
}
