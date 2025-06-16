'use client';

import {
  QueryClient,
  QueryClientProvider as TanStackProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TanStackProvider client={queryClient}>{children}</TanStackProvider>;
}
