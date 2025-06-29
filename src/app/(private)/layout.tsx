import Header from '@/global/components/header';
import { User } from '@/global/types/user';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User = {
    id: '123',
    email: 'joao@example.com',
    full_name: 'Mario Leandro',
    role: 'teacher',
  };
  return (
    <>
      <Header user={user} />
      {children}
    </>
  );
}
