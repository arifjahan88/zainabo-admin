import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Percent,
  ShoppingCart,
  Store,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import { kpiStats } from '@/features/dashboard/data/kpi-stats';
import type { KpiTone } from '@/features/dashboard/types';
import { cn } from '@/lib/utils';

const toneStyles: Record<KpiTone, { icon: string; stroke: string }> = {
  red: {
    icon: 'bg-rose-50 text-rose-600',
    stroke: '#E11D48',
  },
  blue: {
    icon: 'bg-sky-50 text-sky-600',
    stroke: '#3B82F6',
  },
  green: {
    icon: 'bg-emerald-50 text-emerald-600',
    stroke: '#22C55E',
  },
  purple: {
    icon: 'bg-violet-50 text-violet-600',
    stroke: '#8B5CF6',
  },
  orange: {
    icon: 'bg-orange-50 text-orange-500',
    stroke: '#F97316',
  },
};

const iconMap: Record<string, LucideIcon> = {
  revenue: DollarSign,
  orders: ShoppingCart,
  customers: Users,
  sellers: Store,
  conversion: Percent,
};

export function KpiStatCards() {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5'>
      {kpiStats.map((stat) => {
        const Icon = iconMap[stat.id] ?? DollarSign;
        const tone = toneStyles[stat.tone];
        const isPositive = stat.trend >= 0;
        const chartData = stat.sparkline.map((value, index) => ({
          index,
          value,
        }));

        return (
          <Card key={stat.id} className='shadow-none'>
            <CardContent className='gap-3'>
              <div className='flex items-start justify-between gap-2'>
                <span
                  className={cn(
                    'flex size-9 shrink-0 items-center justify-center rounded-full',
                    tone.icon
                  )}
                >
                  <Icon className='size-4' />
                </span>
                <div className='h-10 w-20 shrink-0'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id={`kpi-${stat.tone}`} x1='0' y1='0' x2='0' y2='1'>
                          <stop offset='0%' stopColor={tone.stroke} stopOpacity={0.35} />
                          <stop offset='100%' stopColor={tone.stroke} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type='monotone'
                        dataKey='value'
                        stroke={tone.stroke}
                        fill={`url(#kpi-${stat.tone})`}
                        strokeWidth={1.75}
                        isAnimationActive={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <p className='text-sm font-medium text-muted-foreground'>{stat.label}</p>
                <p className='mt-1 text-2xl font-bold tracking-tight text-foreground'>
                  {stat.value}
                </p>
              </div>

              <div
                className={cn(
                  'flex items-center gap-1 text-xs font-medium',
                  isPositive ? 'text-emerald-600' : 'text-rose-600'
                )}
              >
                {isPositive ? (
                  <ArrowUpRight className='size-3.5' />
                ) : (
                  <ArrowDownRight className='size-3.5' />
                )}
                <span>
                  {isPositive ? '+' : ''}
                  {stat.trend}% vs last week
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default KpiStatCards;
