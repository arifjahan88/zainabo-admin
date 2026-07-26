import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { recentOrders } from '@/features/dashboard/data/recent-orders';
import type { OrderStatus } from '@/features/dashboard/types';
import { cn } from '@/lib/utils';

const statusStyles: Record<OrderStatus, string> = {
  new: 'bg-sky-50 text-sky-700 ring-sky-600/15',
  processing: 'bg-amber-50 text-amber-700 ring-amber-600/15',
  packed: 'bg-violet-50 text-violet-700 ring-violet-600/15',
  shipped: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
  delivered: 'bg-cyan-50 text-cyan-700 ring-cyan-600/15',
  cancelled: 'bg-rose-50 text-rose-700 ring-rose-600/15',
};

const statusLabels: Record<OrderStatus, string> = {
  new: 'New',
  processing: 'Processing',
  packed: 'Packed',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
};

export function RecentOrdersTable() {
  return (
    <Card className='shadow-none'>
      <CardHeader className='pb-2'>
        <CardTitle className='text-base font-semibold text-foreground'>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className='px-0'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead className='pl-4'>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className='hidden md:table-cell'>Seller</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='hidden pr-4 lg:table-cell'>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className='pl-4 font-medium text-foreground'>{order.orderId}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className='hidden md:table-cell'>{order.seller}</TableCell>
                <TableCell className='font-medium'>{order.amount}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      'inline-flex h-5 items-center rounded-full px-2 text-xs font-medium ring-1 ring-inset',
                      statusStyles[order.status]
                    )}
                  >
                    {statusLabels[order.status]}
                  </span>
                </TableCell>
                <TableCell className='hidden pr-4 text-muted-foreground lg:table-cell'>
                  {order.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
