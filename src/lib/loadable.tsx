import { PageLoader } from '@/components/shared/page-loader';
import { lazy, Suspense, type ComponentType, type ReactNode } from 'react';

type LoadableOptions = {
  fallback?: ReactNode;
};

export function loadable(
  factory: () => Promise<{ default: ComponentType }>,
  options?: LoadableOptions
) {
  const LazyComponent = lazy(factory);
  const fallback = options?.fallback ?? <PageLoader />;

  function LoadableComponent() {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    );
  }

  LoadableComponent.displayName = 'LoadableComponent';

  return LoadableComponent;
}
