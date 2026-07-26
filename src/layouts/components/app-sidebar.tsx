import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { navItems } from '@/layouts/components/nav-config';
import { SidebarPromo } from '@/layouts/components/sidebar-promo';
import { URLProducts } from '@/routes/routes.url';

function isPathActive(pathname: string, path: string, exact = false) {
  if (exact) return pathname === path;
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function AppSidebar() {
  const { pathname } = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    Products: true,
  });

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Sidebar collapsible='icon' className='border-r border-sidebar-border'>
      <SidebarHeader className='gap-0 px-4 pt-5 pb-4'>
        <Link
          to={URLProducts()}
          className='flex flex-col overflow-hidden px-1 group-data-[collapsible=icon]:items-center'
        >
          <span className='relative inline-flex w-fit items-start group-data-[collapsible=icon]:hidden'>
            <span className='text-xl font-bold tracking-tight text-white'>Zainabo</span>
            <span
              aria-hidden
              className='absolute -top-0.5 -right-2 size-1.5 rounded-full bg-primary'
            />
          </span>
          <span className='mt-0.5 text-xs font-normal text-white/80 group-data-[collapsible=icon]:hidden'>
            Seller Center
          </span>
          <span className='hidden size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground group-data-[collapsible=icon]:flex'>
            Z
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className='px-2 py-2'>
        <SidebarMenu className='gap-0.5'>
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const sectionActive = isPathActive(pathname, item.path);
            const isOpen = openMenus[item.title] ?? sectionActive;
            const Icon = item.icon;

            if (!hasChildren) {
              return (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    isActive={sectionActive}
                    tooltip={item.title}
                    className={cn(
                      'h-9 rounded-lg text-white/90 hover:bg-white/5 hover:text-white',
                      sectionActive &&
                        'bg-primary text-white hover:bg-primary hover:text-white data-active:bg-primary data-active:text-white'
                    )}
                    render={<Link to={item.path} />}
                  >
                    <Icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }

            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  isActive={sectionActive}
                  tooltip={item.title}
                  className={cn(
                    'h-9 rounded-lg text-white/90 hover:bg-white/5 hover:text-white',
                    sectionActive &&
                      'bg-primary text-white hover:bg-primary hover:text-white data-active:bg-primary data-active:text-white'
                  )}
                  onClick={() => toggleMenu(item.title)}
                >
                  <Icon />
                  <span className='flex-1'>{item.title}</span>
                  <ChevronRight
                    className={cn(
                      'ml-auto size-4 transition-transform',
                      isOpen && 'rotate-90',
                      sectionActive && 'text-white'
                    )}
                  />
                </SidebarMenuButton>

                {isOpen ? (
                  <SidebarMenuSub className='mx-0 border-0 px-0 py-1 pl-4 group-data-[collapsible=icon]:hidden'>
                    {item.children!.map((child) => {
                      const childActive =
                        child.path === URLProducts()
                          ? pathname === URLProducts()
                          : isPathActive(pathname, child.path, true);

                      return (
                        <SidebarMenuSubItem key={child.path}>
                          <SidebarMenuSubButton
                            isActive={childActive}
                            size='sm'
                            className={cn(
                              'h-8 gap-2 text-white/75 hover:bg-white/5 hover:text-white',
                              childActive &&
                                'bg-transparent font-medium text-primary hover:bg-transparent hover:text-primary data-active:bg-transparent data-active:text-primary'
                            )}
                            render={<Link to={child.path} />}
                          >
                            <span
                              className={cn(
                                'size-1.5 shrink-0 rounded-full bg-transparent',
                                childActive && 'bg-primary'
                              )}
                            />
                            <span className='flex-1 truncate'>{child.title}</span>
                            {child.badge != null ? (
                              <span className='rounded-full bg-black/35 px-1.5 py-0.5 text-[10px] font-medium text-white/90'>
                                {child.badge}
                              </span>
                            ) : null}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className='p-0 group-data-[collapsible=icon]:hidden'>
        <SidebarPromo />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
