import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  ChevronDown,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  Store,
  TableOfContents,
  Wallet,
  X,
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
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useSidebar } from '@/components/ui/sidebar';
import {
  countryOptions,
  headerDummy,
  languageOptions,
  notificationItems,
  userMenuItems,
} from '@/layouts/components/header-dummy';
import { breadcrumbLabels } from '@/layouts/components/nav-config';
import { cn } from '@/lib/utils';
import { URLProducts, URLSupport } from '@/routes/routes.url';

function ThailandFlag({ className }: { className?: string }) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden xmlns='http://www.w3.org/2000/svg'>
      <clipPath id='th-flag-clip'>
        <circle cx='12' cy='12' r='12' />
      </clipPath>
      <g clipPath='url(#th-flag-clip)'>
        <rect width='24' height='24' fill='#ED1C24' />
        <rect y='4.8' width='24' height='14.4' fill='#FFF' />
        <rect y='8.4' width='24' height='7.2' fill='#241D4F' />
      </g>
    </svg>
  );
}

function buildBreadcrumbs(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);

  if (pathname === URLProducts() || segments.length === 0) {
    return [
      { label: 'Products', href: URLProducts(), current: false },
      { label: 'All Products', href: URLProducts(), current: true },
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
  const compactSearchRef = useRef<HTMLInputElement>(null);
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [country, setCountry] = useState(headerDummy.countryCode);
  const [locale, setLocale] = useState(headerDummy.locale);
  const [notifications, setNotifications] = useState(notificationItems);

  const unreadCount = notifications.filter((n) => n.unread).length;
  const selectedCountry =
    countryOptions.find((option) => option.code === country) ?? countryOptions[0];

  const openSearch = () => {
    const isCompact = window.matchMedia('(max-width: 1023px)').matches;

    if (isCompact) {
      setSearchExpanded(true);
      requestAnimationFrame(() => {
        compactSearchRef.current?.focus();
        compactSearchRef.current?.select();
      });
      return;
    }

    setSearchExpanded(false);
    desktopSearchRef.current?.focus();
    desktopSearchRef.current?.select();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey)) return;
      if (event.key.toLowerCase() !== 'k') return;

      event.preventDefault();
      openSearch();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className='z-20 flex h-14 shrink-0 items-center gap-2 overflow-hidden border-b border-border bg-card px-3 sm:gap-3 sm:px-4'>
      {searchExpanded ? (
        <div className='flex min-w-0 flex-1 items-center gap-2 lg:hidden'>
          <div className='relative min-w-0 flex-1'>
            <Search className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              ref={compactSearchRef}
              type='search'
              placeholder='Search anything...'
              className='h-9 rounded-md border-border bg-muted/40 pr-3 pl-9 shadow-none'
              aria-label='Search'
              onKeyDown={(event) => {
                if (event.key === 'Escape') setSearchExpanded(false);
              }}
            />
          </div>
          <Button
            variant='ghost'
            size='icon'
            className='size-8 shrink-0 text-muted-foreground'
            aria-label='Close search'
            onClick={() => setSearchExpanded(false)}
          >
            <X className='size-4' />
          </Button>
        </div>
      ) : (
        <div className='flex min-w-0 flex-1 items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            className='size-8 shrink-0 text-muted-foreground'
            onClick={toggleSidebar}
            aria-label='Toggle sidebar'
          >
            <TableOfContents className='size-4' />
          </Button>

          <Separator
            orientation='vertical'
            className='hidden h-4 data-vertical:h-4 data-vertical:self-center sm:block'
          />

          <Breadcrumb className='min-w-0'>
            <BreadcrumbList className='flex-nowrap'>
              {breadcrumbItems.map((item, index) => (
                <span key={`${item.href}-${item.label}`} className='contents'>
                  {index > 0 ? <BreadcrumbSeparator className='hidden sm:block' /> : null}
                  <BreadcrumbItem
                    className={cn(
                      'min-w-0',
                      index < breadcrumbItems.length - 1 && 'hidden sm:inline-flex'
                    )}
                  >
                    {item.current ? (
                      <BreadcrumbPage className='truncate'>{item.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink className='truncate' render={<Link to={item.href} />}>
                        {item.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      )}

      <div className='relative mx-auto hidden w-full min-w-0 max-w-sm flex-1 lg:block xl:max-w-md'>
        <Search className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />
        <Input
          ref={desktopSearchRef}
          type='search'
          placeholder='Search anything...'
          className='h-9 w-full rounded-md border-border bg-muted/40 pr-14 pl-9 shadow-none'
          aria-label='Search'
          aria-keyshortcuts='Meta+K Control+K'
        />
        <kbd className='pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 inline-flex items-center gap-0.5 rounded-md border border-border bg-card px-1.5 py-0.5 font-sans text-[10px] font-medium text-muted-foreground'>
          ⌘ K
        </kbd>
      </div>

      <div
        className={cn(
          'flex shrink-0 items-center gap-0.5 sm:gap-1',
          searchExpanded && 'hidden lg:flex'
        )}
      >
        <Button
          variant='ghost'
          size='icon'
          className='size-8 text-muted-foreground lg:hidden'
          aria-label='Search'
          onClick={openSearch}
        >
          <Search className='size-4' />
        </Button>

        <div className='hidden items-center md:flex'>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type='button'
                  className='inline-flex h-8 items-center gap-1.5 rounded-md px-1.5 text-sm text-foreground transition-colors hover:bg-muted'
                />
              }
            >
              <ThailandFlag className='size-5 shrink-0' />
              <span className='hidden xl:inline'>{selectedCountry.label}</span>
              <ChevronDown className='size-3.5 text-muted-foreground' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-44'>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Country</DropdownMenuLabel>
                {countryOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.code}
                    onClick={() => setCountry(option.code)}
                    className={cn(country === option.code && 'bg-muted font-medium')}
                  >
                    <span className='flex-1'>{option.label}</span>
                    <span className='text-xs text-muted-foreground'>{option.englishLabel}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Separator
            orientation='vertical'
            className='mx-1 h-4 data-vertical:h-4 data-vertical:self-center'
          />

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type='button'
                  className='inline-flex h-8 items-center gap-1 rounded-md px-1.5 text-sm text-foreground transition-colors hover:bg-muted'
                />
              }
            >
              <span className='max-w-16 truncate xl:max-w-none'>{locale}</span>
              <ChevronDown className='size-3.5 text-muted-foreground' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-40'>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                {languageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.code}
                    onClick={() => setLocale(option.label)}
                    className={cn(locale === option.label && 'bg-muted font-medium')}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

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
                render={<Link to={URLSupport()} />}
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
                className='flex h-8 max-w-40 items-center gap-2 rounded-lg px-1.5 text-left transition-colors hover:bg-muted xl:max-w-56'
              />
            }
          >
            <Avatar size='sm'>
              <AvatarImage src={headerDummy.avatarUrl} alt={headerDummy.storeName} />
              <AvatarFallback>ZF</AvatarFallback>
            </Avatar>
            <div className='hidden min-w-0 leading-tight xl:block'>
              <p className='truncate text-sm font-medium'>{headerDummy.storeName}</p>
              <p className='truncate text-xs text-muted-foreground'>
                Seller ID: {headerDummy.sellerId}
              </p>
            </div>
            <ChevronDown className='hidden size-3.5 shrink-0 text-muted-foreground xl:block' />
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
