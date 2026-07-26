import { RouterProvider } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { TooltipProvider } from '@/components/ui/tooltip';
import { router } from '@/routes/router';

export default function App() {
  return (
    <TooltipProvider>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  );
}
