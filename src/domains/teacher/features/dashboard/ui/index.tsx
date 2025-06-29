import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/global/components/accordion';
import { Badge } from '@/global/components/badge';
import { Button } from '@/global/components/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/global/components/card';
import { Progress } from '@/global/components/progress';
import { Class } from '@/global/types/class';
import { Quiz } from '@/global/types/quiz';
import { User } from '@/global/types/user';
import {
  BookOpen,
  Users,
  FileText,
  Clock,
  Plus,
  BarChart3,
  School,
} from 'lucide-react';

interface IDashboardUiProps {
  user: User;
  teacherClasses: Class[];
  teacherQuizzes: Quiz[];
  totalStudents: number;
}

export function DashboardUi({
  teacherClasses,
  teacherQuizzes,
  totalStudents,
  user,
}: IDashboardUiProps) {
  return (
    <div className="flex-1 container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Olá, {user.full_name}</h1>
        <p className="text-muted-foreground">Boas-vindas ao Curvas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Minhas Turmas</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacherClasses.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Alunos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atividades</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teacherQuizzes.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Criar Atividade
            </CardTitle>
            <CardDescription>Criar nova prova ou pesquisa</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Nova Atividade
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Relatórios
            </CardTitle>
            <CardDescription>Ver desempenho dos alunos</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <BarChart3 className="h-4 w-4 mr-2" />
              Ver Relatórios
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Alunos
            </CardTitle>
            <CardDescription>Gerenciar alunos das turmas</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Users className="h-4 w-4 mr-2" />
              Ver Alunos
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5" />
              Criar Turma
            </CardTitle>
            <CardDescription>Criar nova turma</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Nova Turma
            </Button>
          </CardContent>
        </Card>
      </div>

      <Accordion type="single" collapsible className="mb-8 bg-card">
        <AccordionItem value="classes">
          <div className="flex justify-between items-center px-4 pt-4">
            <AccordionTrigger className="p-0 hover:no-underline focus:outline-none">
              <div className="text-left">
                <h3 className="text-base font-semibold">Minhas Turmas</h3>
                <p className="text-sm text-muted-foreground">
                  Turmas que você está lecionando
                </p>
              </div>
            </AccordionTrigger>

            <Button size="sm" className="ml-4">
              Ver Todas
            </Button>
          </div>

          <AccordionContent className="px-4 mt-6 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-card">
              {teacherClasses.map(cls => (
                <div
                  key={cls.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{cls.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cls.description}
                    </p>
                    <Badge variant="outline" className="mt-2">
                      {cls.student_count} alunos
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Ver Alunos
                    </Button>
                    <Button size="sm">Gerenciar</Button>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="classes">
          <div className="flex justify-between items-center px-4 pt-4">
            <AccordionTrigger className="p-0 hover:no-underline focus:outline-none">
              <div className="text-left">
                <h3 className="text-base font-semibold">Atividades</h3>
                <p className="text-sm text-muted-foreground">
                  Gerencie suas provas e pesquisas
                </p>
              </div>
            </AccordionTrigger>

            <Button size="sm" className="ml-4">
              Ver Todas
            </Button>
          </div>

          <AccordionContent className="px-4 mt-6 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teacherQuizzes.map(quiz => (
                <div
                  key={quiz.id}
                  className="flex items-center justify-between p-4 gap-10 border rounded-lg bg-card"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{quiz.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Turma: {quiz.class_name}
                    </p>
                    <div className="mt-2">
                      <div className="flex justify-between">
                        <p className="text-xs text-muted-foreground">
                          {quiz.response_count}%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {quiz.response_count}/100 alunos concluíram
                        </p>
                      </div>
                      <Progress value={quiz.response_count} />
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Badge
                        variant={quiz.type === 'quiz' ? 'default' : 'secondary'}
                      >
                        {quiz.type === 'quiz' ? 'Prova' : 'Pesquisa'}
                      </Badge>
                      <Badge variant={quiz.is_active ? 'default' : 'outline'}>
                        {quiz.is_active ? 'Ativa' : 'Inativa'}
                      </Badge>
                      <Badge variant="outline">
                        {quiz.response_count} respostas
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Ver Resultados
                    </Button>
                    <Button size="sm">Editar</Button>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
