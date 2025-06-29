'use client';

import { TeacherFeature } from '@/domains/teacher/features/dashboard';
import { User } from '@/global/types/user';

export default function DashboardPage() {
  const user: User = {
    id: '123',
    email: 'joao@example.com',
    full_name: 'Mario Leandro',
    role: 'teacher',
  };

  switch (user.role) {
    case 'admin':
      return '<AdminDashboard user={user} />';
    case 'teacher':
      return <TeacherFeature />;
    case 'student':
      return '<TeacherFeature />';
    default:
      return null;
  }
}
