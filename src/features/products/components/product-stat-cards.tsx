import {
  CheckCircle2,
  Clock,
  FileText,
  Minus,
  Package,
  PackageX,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { productStats } from '@/features/products/data/product-stats';
import type { ProductStatIcon, ProductStatTone } from '@/features/products/types';
import { cn } from '@/lib/utils';

const iconMap: Record<ProductStatIcon, LucideIcon> = {
  package: Package,
  check: CheckCircle2,
  clock: Clock,
  'package-x': PackageX,
  file: FileText,
};

const toneStyles: Record<ProductStatTone, string> = {
  blue: 'bg-sky-50 text-sky-600',
  green: 'bg-emerald-50 text-emerald-600',
  orange: 'bg-orange-50 text-orange-500',
  red: 'bg-rose-50 text-rose-600',
  purple: 'bg-violet-50 text-violet-600',
};

export function ProductStatCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {productStats.map((stat) => {
        const Icon = iconMap[stat.icon];
        const isPositive = stat.trend != null && stat.trend > 0;
        const isNegative = stat.trend != null && stat.trend < 0;

        return (
          <Card key={stat.id} className="shadow-none">
            <CardContent className="gap-2.5 sm:gap-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
                <span
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full sm:size-10',
                    toneStyles[stat.tone]
                  )}
                >
                  <Icon className="size-4 sm:size-5" />
                </span>
              </div>

              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </p>

              <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-xs">
                {stat.trend == null ? (
                  <>
                    <Minus className="size-3.5 text-teal-600" />
                    <span className="font-medium text-teal-700">--%</span>
                  </>
                ) : (
                  <>
                    {isPositive ? (
                      <TrendingUp className="size-3.5 text-emerald-600" />
                    ) : (
                      <TrendingDown className="size-3.5 text-rose-600" />
                    )}
                    <span
                      className={cn(
                        'font-medium',
                        isPositive && 'text-emerald-600',
                        isNegative && 'text-rose-600'
                      )}
                    >
                      {isPositive ? '+ ' : ''}
                      {stat.trend}%
                    </span>
                  </>
                )}
                <span className="text-muted-foreground">vs last 7 days</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
