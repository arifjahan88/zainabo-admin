import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  ChevronDown,
  Languages,
  LogOut,
  MessageSquare,
  PanelLeft,
  Settings,
  Store,
  Wallet,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { useSidebar } from '@/components/ui/sidebar';
import {
  headerDummy,
  languageOptions,
  notificationItems,
  userMenuItems,
} from '@/layouts/components/header-dummy';
import { breadcrumbLabels } from '@/layouts/components/nav-config';
import { cn } from '@/lib/utils';

function ThailandFlag({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 24 16' className={className} aria-hidden xmlns='http://www.w3.org/2000/svg'>
      <rect width='24' height='16' fill='#ED1C24' />
      <rect y='2.67' width='24' height='10.66' fill='#FFF' />
      <rect y='5.33' width='24' height='5.34' fill='#241D4F' />
    </svg>
  );
}

function buildBreadcrumbs(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);

  if (pathname === '/products' || segments.length === 0) {
    return [
      { label: 'Products', href: '/products', current: false },
      { label: 'All Products', href: '/products', current: true },
    ];
  }

  return segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    const label = breadcrumbLabels[segment] ?? segment;
    return {
      label,
      href,
      current: index === segments.length - 1,
    };
  });
}

const userMenuIcons = {
  profile: Store,
  settings: Settings,
  finance: Wallet,
  support: MessageSquare,
} as const;

export function AppHeader() {
  const { toggleSidebar } = useSidebar();
  const { pathname } = useLocation();
  const breadcrumbItems = buildBreadcrumbs(pathname);
  const [locale, setLocale] = useState(headerDummy.locale);
  const [notifications, setNotifications] = useState(notificationItems);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className='z-20 flex h-14 shrink-0 items-center gap-3 border-b border-border bg-card px-4'>
      <div className='flex min-w-0 flex-1 items-center gap-2'>
        <Button
          variant='ghost'
          size='icon'
          className='size-8 text-muted-foreground'
          onClick={toggleSidebar}
          aria-label='Toggle sidebar'
        >
          <PanelLeft className='size-4' />
        </Button>

        <Separator
          orientation='vertical'
          className='mr-1 h-4 data-vertical:h-4 data-vertical:self-center'
        />

        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <span key={`${item.href}-${item.label}`} className='contents'>
                {index > 0 ? <BreadcrumbSeparator /> : null}
                <BreadcrumbItem>
                  {item.current ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink render={<Link to={item.href} />}>{item.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </span>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='flex items-center gap-1 sm:gap-2'>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant='outline'
                size='sm'
                className='hidden h-8 gap-2 px-2.5 sm:inline-flex'
              />
            }
          >
            <ThailandFlag className='h-3.5 w-5 rounded-[2px]' />
            <span className='text-muted-foreground'>ไทย</span>
            <Languages className='size-3.5 text-muted-foreground' />
            <span>{locale}</span>
            <ChevronDown className='size-3.5 text-muted-foreground' />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-48'>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              {languageOptions.map((option) => (
                <DropdownMenuItem
                  key={option.code}
                  onClick={() => setLocale(option.englishLabel)}
                  className={cn(locale === option.englishLabel && 'bg-muted font-medium')}
                >
                  <span className='flex-1'>{option.label}</span>
                  <span className='text-xs text-muted-foreground'>{option.englishLabel}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant='ghost'
          size='icon'
          className='relative size-8 shrink-0 text-muted-foreground'
          aria-label='Messages'
        >
          <MessageSquare className='size-4' />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant='ghost'
                size='icon'
                className='relative size-8 shrink-0 text-muted-foreground'
                aria-label='Notifications'
              />
            }
          >
            <Bell className='size-4' />
            {unreadCount > 0 ? (
              <Badge className='absolute -top-0.5 -right-0.5 h-4 min-w-4 justify-center rounded-full px-1 text-[10px]'>
                {unreadCount}
              </Badge>
            ) : null}
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-80 p-0'>
            <div className='flex items-center justify-between px-3 py-2'>
              <p className='text-xs font-medium text-muted-foreground'>Notifications</p>
              <button
                type='button'
                className='text-xs font-medium text-primary hover:underline'
                onClick={() =>
                  setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })))
                }
              >
                Mark all read
              </button>
            </div>
            <DropdownMenuSeparator className='my-0' />
            <DropdownMenuGroup className='max-h-72 overflow-y-auto'>
              {notifications.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  className='items-start gap-2 rounded-none px-3 py-2.5'
                >
                  <span
                    className={cn(
                      'mt-1.5 size-2 shrink-0 rounded-full',
                      item.unread ? 'bg-primary' : 'bg-transparent'
                    )}
                  />
                  <div className='min-w-0 flex-1'>
                    <p className='truncate text-sm font-medium'>{item.title}</p>
                    <p className='truncate text-xs text-muted-foreground'>{item.body}</p>
                    <p className='mt-0.5 text-[10px] text-muted-foreground'>{item.time}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator className='my-0' />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className='justify-center rounded-none py-2.5 text-primary'
                render={<Link to='/support' />}
              >
                View all
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator
          orientation='vertical'
          className='mx-0.5 hidden h-5 data-vertical:h-5 data-vertical:self-center sm:block'
        />

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                type='button'
                className='flex h-8 items-center gap-2 rounded-lg px-1.5 text-left transition-colors hover:bg-muted'
              />
            }
          >
            <Avatar size='sm'>
              <AvatarImage src={headerDummy.avatarUrl} alt={headerDummy.storeName} />
              <AvatarFallback>ZF</AvatarFallback>
            </Avatar>
            <div className='hidden min-w-0 leading-tight md:block'>
              <p className='truncate text-sm font-medium'>{headerDummy.storeName}</p>
              <p className='truncate text-xs text-muted-foreground'>
                Seller ID: {headerDummy.sellerId}
              </p>
            </div>
            <ChevronDown className='hidden size-3.5 shrink-0 text-muted-foreground md:block' />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-56'>
            <DropdownMenuGroup>
              <DropdownMenuLabel className='font-normal'>
                <p className='text-sm font-medium'>{headerDummy.storeName}</p>
                <p className='text-xs text-muted-foreground'>{headerDummy.sellerId}</p>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {userMenuItems.map((item) => {
                const Icon = userMenuIcons[item.id];
                return (
                  <DropdownMenuItem key={item.id} render={<Link to={item.to} />}>
                    <Icon className='size-4' />
                    {item.label}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className='text-destructive'>
                <LogOut className='size-4' />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
