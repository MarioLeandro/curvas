export interface Quiz {
  id: string;
  title: string;
  type: 'quiz' | 'survey';
  class_name: string;
  is_active: boolean;
  response_count: number;
  is_completed?: boolean;
}
