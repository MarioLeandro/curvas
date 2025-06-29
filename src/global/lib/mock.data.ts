import { Class } from '../types/class';
import { Quiz } from '../types/quiz';
import { User } from '../types/user';

// Mock data
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@escola.com',
    full_name: 'Administrador',
    role: 'admin',
  },
  {
    id: '2',
    email: 'professor@escola.com',
    full_name: 'Mario Leandro',
    role: 'teacher',
  },
  {
    id: '3',
    email: 'aluno@escola.com',
    full_name: 'Maria Santos',
    role: 'student',
  },
];

export const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Matemática 9º Ano',
    description: 'Álgebra e Geometria',
    teacher_name: 'Mario Leandro',
    student_count: 25,
  },
  {
    id: '2',
    name: 'Português 8º Ano',
    description: 'Literatura e Gramática',
    teacher_name: 'Ana Costa',
    student_count: 22,
  },
  {
    id: '3',
    name: 'História 7º Ano',
    description: 'História do Brasil',
    teacher_name: 'Carlos Lima',
    student_count: 28,
  },
];

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Equações do 1º Grau',
    type: 'quiz',
    class_name: 'Matemática 9º Ano',
    is_active: true,
    response_count: 18,
  },
  {
    id: '2',
    title: 'Avaliação de Literatura',
    type: 'survey',
    class_name: 'Português 8º Ano',
    is_active: true,
    response_count: 15,
  },
  {
    id: '3',
    title: 'Período Colonial',
    type: 'quiz',
    class_name: 'História 7º Ano',
    is_active: false,
    response_count: 25,
  },
];

export const mockStudentQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Equações do 1º Grau',
    type: 'quiz',
    class_name: 'Matemática 9º Ano',
    is_active: true,
    response_count: 0,
    is_completed: false,
  },
  {
    id: '2',
    title: 'Avaliação de Literatura',
    type: 'survey',
    class_name: 'Português 8º Ano',
    is_active: true,
    response_count: 0,
    is_completed: true,
  },
];
