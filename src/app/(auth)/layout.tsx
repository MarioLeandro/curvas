import { AuthFeature } from '@/domains/auth/features/layout';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthFeature>{children}</AuthFeature>;
}
