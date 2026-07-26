export type KpiTone = 'red' | 'blue' | 'green' | 'purple' | 'orange';

export type KpiStat = {
  id: string;
  label: string;
  value: string;
  trend: number;
  tone: KpiTone;
  sparkline: number[];
};

export type RevenuePoint = {
  date: string;
  thisWeek: number;
  lastWeek: number;
};

export type OrderStatusItem = {
  id: string;
  label: string;
  count: number;
  percent: number;
  color: string;
};

export type ActivityItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  tone: KpiTone | 'cyan';
};

export type SystemStatusItem = {
  id: string;
  label: string;
  status: 'operational' | 'degraded' | 'down';
};

export type TopCategory = {
  id: string;
  label: string;
  value: string;
  progress: number;
  tone: KpiTone;
};

export type OrderStatus =
  | 'new'
  | 'processing'
  | 'packed'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export type RecentOrder = {
  id: string;
  orderId: string;
  customer: string;
  seller: string;
  amount: string;
  status: OrderStatus;
  date: string;
};

export type SalesChannel = {
  id: string;
  label: string;
  value: string;
  percent: number;
  color: string;
};

export type PendingTask = {
  id: string;
  title: string;
  count: number;
  tone: KpiTone;
  to: string;
};
