import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="gap-0 border-b border-sidebar-border px-3 py-4">
        <Link
          to="/products"
          className="flex items-center gap-2 overflow-hidden px-1 group-data-[collapsible=icon]:justify-center"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            Z
          </span>
          <span className="truncate text-sm font-semibold tracking-tight text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Zainabo{' '}
            <span className="font-normal text-sidebar-foreground/70">
              Seller Center
            </span>
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        <SidebarMenu className="gap-0.5">
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
                      'h-9 rounded-lg text-sidebar-foreground/80',
                      sectionActive &&
                        'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground data-active:bg-primary data-active:text-primary-foreground'
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
                    'h-9 rounded-lg text-sidebar-foreground/80',
                    sectionActive &&
                      'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground data-active:bg-primary data-active:text-primary-foreground'
                  )}
                  onClick={() => toggleMenu(item.title)}
                >
                  <Icon />
                  <span className="flex-1">{item.title}</span>
                  <ChevronDown
                    className={cn(
                      'ml-auto size-4 transition-transform',
                      isOpen && 'rotate-180',
                      sectionActive && 'text-primary-foreground'
                    )}
                  />
                </SidebarMenuButton>

                {isOpen ? (
                  <SidebarMenuSub className="mx-0 ml-3.5 border-l border-sidebar-border px-0 py-1 pl-3 group-data-[collapsible=icon]:hidden">
                    {item.children!.map((child) => {
                      const childActive =
                        child.path === '/products'
                          ? pathname === '/products'
                          : isPathActive(pathname, child.path, true);

                      return (
                        <SidebarMenuSubItem key={child.path}>
                          <SidebarMenuSubButton
                            isActive={childActive}
                            size="sm"
                            className={cn(
                              'h-8 gap-2 text-sidebar-foreground/65 hover:text-sidebar-foreground',
                              childActive &&
                                'font-medium text-primary data-active:text-primary'
                            )}
                            render={<Link to={child.path} />}
                          >
                            <span
                              className={cn(
                                'size-1.5 shrink-0 rounded-full bg-transparent',
                                childActive && 'bg-primary'
                              )}
                            />
                            <span className="flex-1 truncate">
                              {child.title}
                            </span>
                            {child.badge != null ? (
                              <span className="rounded-md bg-sidebar-accent px-1.5 text-[10px] font-medium text-sidebar-foreground/70">
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

      <SidebarFooter className="p-0 group-data-[collapsible=icon]:hidden">
        <SidebarPromo />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
