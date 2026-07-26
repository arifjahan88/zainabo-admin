import type { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppHeader } from '@/layouts/components/app-header';
import { AppSidebar } from '@/layouts/components/app-sidebar';

export function DashboardLayout() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '16.5rem',
        } as CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className='h-svh min-h-0 overflow-hidden'>
        <AppHeader />
        <div className='min-h-0 flex-1 overflow-y-auto bg-background'>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
