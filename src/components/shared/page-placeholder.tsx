export function PagePlaceholder({ title, description }: { title: string; description?: string }) {
  return (
    <div className='flex min-h-[60vh] flex-col items-start justify-center px-6 py-10'>
      <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
      <p className='mt-2 max-w-lg text-sm text-muted-foreground'>
        {description ??
          'This section is ready for implementation. Navigate using the sidebar while we build each module.'}
      </p>
    </div>
  );
}
