import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { orderStatusItems, orderStatusTotal } from '@/features/dashboard/data/order-status';

export function OrderStatusChart() {
  return (
    <Card className='shadow-none'>
      <CardHeader className='pb-2'>
        <CardTitle className='text-base font-semibold text-foreground'>
          Order Status Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col items-center gap-6 sm:flex-row sm:items-center'>
          <div className='relative h-48 w-48 shrink-0'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={orderStatusItems}
                  dataKey='count'
                  nameKey='label'
                  innerRadius={58}
                  outerRadius={82}
                  paddingAngle={2}
                  strokeWidth={0}
                >
                  {orderStatusItems.map((item) => (
                    <Cell key={item.id} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center'>
              <p className='text-xl font-bold tracking-tight text-foreground'>
                {orderStatusTotal.toLocaleString()}
              </p>
              <p className='text-xs text-muted-foreground'>Total Orders</p>
            </div>
          </div>

          <ul className='w-full min-w-0 flex-1 space-y-2.5'>
            {orderStatusItems.map((item) => (
              <li key={item.id} className='flex items-center justify-between gap-3 text-sm'>
                <span className='inline-flex min-w-0 items-center gap-2'>
                  <span
                    className='size-2.5 shrink-0 rounded-full'
                    style={{ backgroundColor: item.color }}
                  />
                  <span className='truncate text-muted-foreground'>{item.label}</span>
                </span>
                <span className='shrink-0 tabular-nums text-foreground'>
                  <span className='font-semibold'>{item.count.toLocaleString()}</span>
                  <span className='ml-1.5 text-muted-foreground'>({item.percent}%)</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderStatusChart;
