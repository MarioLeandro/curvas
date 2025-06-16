'use client';

import { usePathname } from 'next/navigation';
import { AuthLayoutUi } from './ui';

export function AuthFeature({ children }: { children: React.ReactNode }) {
  const pathname = usePathname().split('/').at(-1);

  return <AuthLayoutUi selectedTab={pathname ?? ''}>{children}</AuthLayoutUi>;
}
