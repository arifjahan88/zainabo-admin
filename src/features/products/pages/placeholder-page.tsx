import { PagePlaceholder } from '@/components/shared/page-placeholder';

export function ProductPlaceholderPage({ title }: { title: string }) {
  return (
    <PagePlaceholder
      title={title}
      description="Product module placeholder — shell and navigation are live. This screen will be built next."
    />
  );
}
