import { TooltipProvider } from '@/global/components/tooltip';
import { QueryClientProvider } from './QueryClientProvider';

export const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider>
      <TooltipProvider delayDuration={100}>{children}</TooltipProvider>
    </QueryClientProvider>
  );
};
