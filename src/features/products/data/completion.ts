import type { CompletionItem } from '../types';

export const productCompletionPercent = 78;

export const productCompletionItems: CompletionItem[] = [
  { id: 'basic', label: 'Basic Information', status: 'done' },
  { id: 'images', label: 'Images', status: 'done' },
  { id: 'description', label: 'Description', status: 'done' },
  { id: 'variants', label: 'Variants', status: 'done' },
  { id: 'pricing', label: 'Pricing', status: 'pending' },
  { id: 'shipping', label: 'Shipping', status: 'pending' },
  { id: 'seo', label: 'SEO', status: 'pending' },
  { id: 'attributes', label: 'Attributes', status: 'pending' },
  { id: 'compliance', label: 'Compliance', status: 'partial', count: '9/10' },
  { id: 'publish', label: 'Publish', status: 'ready', count: '10/10' },
];
