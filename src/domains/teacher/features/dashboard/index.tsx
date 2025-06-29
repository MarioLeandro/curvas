import { mockClasses, mockQuizzes } from '@/global/lib/mock.data';
import { DashboardUi } from './ui';
import { User } from '@/global/types/user';

export function TeacherFeature() {
  const user: User = {
    id: '123',
    email: 'joao@example.com',
    full_name: 'Mario Leandro',
    role: 'teacher',
  };

  const teacherClasses = mockClasses.filter(
    cls => cls.teacher_name === user.full_name,
  );
  const teacherQuizzes = mockQuizzes;
  const totalStudents = teacherClasses.reduce(
    (sum, cls) => sum + cls.student_count,
    0,
  );

  return (
    <DashboardUi
      user={user}
      teacherClasses={teacherClasses}
      teacherQuizzes={teacherQuizzes}
      totalStudents={totalStudents}
    />
  );
}
