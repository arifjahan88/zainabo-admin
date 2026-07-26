import { useState } from 'react';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { revenueOverview } from '@/features/dashboard/data/revenue-overview';

function formatAxis(value: number) {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value}`;
}

export function RevenueOverviewChart() {
  const [period, setPeriod] = useState('daily');

  return (
    <Card className='shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between gap-2 pb-2'>
        <CardTitle className='text-base font-semibold text-foreground'>Revenue Overview</CardTitle>
        <Select value={period} onValueChange={(value) => setPeriod(value ?? 'daily')}>
          <SelectTrigger size='sm' className='h-8 w-25 rounded-lg shadow-none'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='daily'>Daily</SelectItem>
            <SelectItem value='weekly'>Weekly</SelectItem>
            <SelectItem value='monthly'>Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='pt-0'>
        <div className='mb-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground'>
          <span className='inline-flex items-center gap-1.5'>
            <span className='size-2.5 rounded-full bg-primary' />
            This Week
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <span className='size-2.5 rounded-full bg-slate-300' />
            Last Week
          </span>
        </div>
        <div className='h-64 w-full sm:h-72'>
          <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart data={revenueOverview} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id='revenueFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#E11D48' stopOpacity={0.28} />
                  <stop offset='100%' stopColor='#E11D48' stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#E2E8F0' />
              <XAxis
                dataKey='date'
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94A3B8', fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94A3B8', fontSize: 12 }}
                tickFormatter={formatAxis}
                width={48}
              />
              <Tooltip
                formatter={(value) =>
                  typeof value === 'number' ? `$${value.toLocaleString()}` : value
                }
                contentStyle={{
                  borderRadius: 12,
                  border: '1px solid #E2E8F0',
                  boxShadow: 'none',
                }}
              />
              <Area
                type='monotone'
                dataKey='thisWeek'
                name='This Week'
                stroke='#E11D48'
                fill='url(#revenueFill)'
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 4 }}
              />
              <Line
                type='monotone'
                dataKey='lastWeek'
                name='Last Week'
                stroke='#CBD5E1'
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 3 }}
              />
              <Legend content={() => null} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default RevenueOverviewChart;
