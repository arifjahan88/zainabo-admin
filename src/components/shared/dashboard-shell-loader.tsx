export function DashboardShellLoader() {
  return (
    <div className='flex h-svh w-full overflow-hidden bg-background'>
      <aside className='hidden h-full w-66 shrink-0 flex-col bg-[#00143b] md:flex'>
        <div className='px-4 pt-5 pb-4'>
          <div className='h-5 w-28 animate-pulse rounded bg-white/20' />
          <div className='mt-2 h-3 w-20 animate-pulse rounded bg-white/10' />
        </div>
        <div className='flex-1 space-y-2 px-3 py-2'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className='h-9 animate-pulse rounded-lg bg-white/10'
              style={{ animationDelay: `${index * 60}ms` }}
            />
          ))}
        </div>
        <div className='space-y-2 px-3 pb-4'>
          <div className='h-28 animate-pulse rounded-xl bg-white/10' />
          <div className='mx-auto h-2 w-24 animate-pulse rounded bg-white/10' />
        </div>
      </aside>

      <div className='flex min-w-0 flex-1 flex-col'>
        <header className='flex h-14 shrink-0 items-center gap-3 border-b border-border bg-card px-4'>
          <div className='size-8 animate-pulse rounded-md bg-muted' />
          <div className='h-4 w-40 animate-pulse rounded bg-muted' />
          <div className='ml-auto flex items-center gap-2'>
            <div className='hidden h-8 w-24 animate-pulse rounded-md bg-muted sm:block' />
            <div className='size-8 animate-pulse rounded-full bg-muted' />
            <div className='hidden h-8 w-36 animate-pulse rounded-md bg-muted md:block' />
          </div>
        </header>

        <div className='flex flex-1 flex-col items-center justify-center gap-3 bg-background p-6'>
          <div className='size-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary' />
          <p className='text-sm font-medium text-muted-foreground'>Loading Seller Center…</p>
        </div>
      </div>
    </div>
  );
}
