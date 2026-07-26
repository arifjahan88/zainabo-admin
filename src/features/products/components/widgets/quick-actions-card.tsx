import { CirclePlus, CloudUpload, Package, Shield, Star, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  URLCustomers,
  URLInventory,
  URLProducts,
  URLProductsBulkUpload,
  URLProductsNew,
  URLStoreSettings,
} from '@/routes/routes.url';

const actions = [
  {
    title: 'Add New Product',
    icon: CirclePlus,
    to: URLProductsNew(),
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Bulk Upload',
    icon: CloudUpload,
    to: URLProductsBulkUpload(),
    color: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Manage Inventory',
    icon: Package,
    to: URLInventory(),
    color: 'bg-sky-50 text-sky-600',
  },
  {
    title: 'Product Categories',
    icon: Tag,
    to: URLProducts(),
    color: 'bg-orange-50 text-orange-500',
  },
  {
    title: 'Brand Management',
    icon: Shield,
    to: URLStoreSettings(),
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Product Reviews',
    icon: Star,
    to: URLCustomers(),
    color: 'bg-amber-50 text-amber-500',
  },
];

export function QuickActionsCard() {
  return (
    <Card className='shadow-none'>
      <CardHeader className='pb-0'>
        <CardTitle className='text-base font-semibold text-slate-900'>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-3 gap-2'>
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.title}
                to={action.to}
                className={cn(
                  'flex flex-col items-center gap-2 rounded-xl p-3 text-center transition-opacity hover:opacity-90',
                  action.color.split(' ')[0]
                )}
              >
                <Icon className={cn('size-5', action.color.split(' ')[1])} />
                <span className='text-[10px] leading-tight font-medium text-slate-800'>
                  {action.title}
                </span>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
