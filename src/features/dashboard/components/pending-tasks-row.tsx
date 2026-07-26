import {
  ClipboardList,
  PackageCheck,
  Ticket,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card, CardContent } from '@/components/ui/card';
import { pendingTasks } from '@/features/dashboard/data/pending-tasks';
import type { KpiTone } from '@/features/dashboard/types';
import { cn } from '@/lib/utils';

const toneStyles: Record<KpiTone, string> = {
  red: 'bg-rose-50 text-rose-600',
  blue: 'bg-sky-50 text-sky-600',
  green: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-violet-50 text-violet-600',
  orange: 'bg-orange-50 text-orange-500',
};

const iconMap: Record<string, LucideIcon> = {
  sellers: ClipboardList,
  products: PackageCheck,
  withdrawals: Wallet,
  tickets: Ticket,
};

export function PendingTasksRow() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {pendingTasks.map((task) => {
        const Icon = iconMap[task.id] ?? ClipboardList;

        return (
          <Card key={task.id} className="shadow-none">
            <CardContent className="flex items-center gap-3 py-4">
              <span
                className={cn(
                  'flex size-11 shrink-0 items-center justify-center rounded-xl',
                  toneStyles[task.tone]
                )}
              >
                <Icon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-muted-foreground">
                  {task.title}
                </p>
                <p className="text-2xl font-bold tracking-tight text-foreground">
                  {task.count}
                </p>
              </div>
              <Link
                to={task.to}
                className="shrink-0 text-sm font-medium text-primary hover:underline"
              >
                View All
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
