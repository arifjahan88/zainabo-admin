export function PageLoader() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-3 bg-background p-6'>
      <div className='size-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary' />
      <p className='text-sm font-medium text-muted-foreground'>Loading…</p>
    </div>
  );
}
