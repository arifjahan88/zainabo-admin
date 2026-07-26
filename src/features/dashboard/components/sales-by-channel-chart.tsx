import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  salesChannelTotal,
  salesChannels,
} from '@/features/dashboard/data/sales-by-channel';

export function SalesByChannelChart() {
  return (
    <Card className="shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-foreground">
          Sales by Channel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative mx-auto h-52 w-52">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesChannels}
                dataKey="percent"
                nameKey="label"
                innerRadius={62}
                outerRadius={88}
                paddingAngle={2}
                strokeWidth={0}
              >
                {salesChannels.map((channel) => (
                  <Cell key={channel.id} fill={channel.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-xl font-bold tracking-tight text-foreground">
              {salesChannelTotal}
            </p>
            <p className="text-xs text-muted-foreground">Total Sales</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {salesChannels.map((channel) => (
            <div key={channel.id} className="min-w-0">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: channel.color }}
                />
                <span className="truncate">{channel.label}</span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-foreground">
                {channel.value}{' '}
                <span className="font-normal text-muted-foreground">
                  ({channel.percent}%)
                </span>
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SalesByChannelChart;
