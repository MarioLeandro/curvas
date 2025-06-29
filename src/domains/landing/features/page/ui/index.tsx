import { Button } from '@/global/components/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/global/components/card';
import { GraduationCap, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ILandingPageUiProps {}

export function LandingPageUi({}: ILandingPageUiProps) {
  return (
    <div className="flex-1 w-full bg-gradient-to-b from-primary/10 to-white">
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Bem-vindo ao Curvas
          </h1>
          <Image
            className="mx-auto mb-6"
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <p className="text-xl text-gray-600 mb-8">
            Sistema completo de gestão escolar desenvolvido para professores,
            alunos e administradores
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/register">Começar Agora</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recursos para Todos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Para Administradores</CardTitle>
              <CardDescription>
                Capacidades completas de gestão escolar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Criar e gerenciar turmas</li>
                <li>• Atribuir professores às turmas</li>
                <li>• Sistema de gestão de usuários</li>
                <li>• Análises de toda a escola</li>
              </ul>
            </CardContent>
          </Card> */}

          <Card>
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Para Professores</CardTitle>
              <CardDescription>
                Ferramentas poderosas de ensino e avaliação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Gerenciar suas turmas</li>
                <li>• Criar provas e pesquisas</li>
                <li>• Acompanhar progresso dos alunos</li>
                <li>• Ver análises detalhadas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Para Alunos</CardTitle>
              <CardDescription>
                Experiência de aprendizado envolvente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Acessar turmas matriculadas</li>
                <li>• Fazer provas e pesquisas</li>
                <li>• Acompanhar seu progresso</li>
                <li>• Ver resultados e feedback</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-xl mb-8">
            Junte-se a milhares de educadores e alunos usando o Curvas
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">Criar Sua Conta</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
