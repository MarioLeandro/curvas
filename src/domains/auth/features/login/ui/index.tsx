import { TLoginSchema } from '@/domains/auth/types';
import { Button } from '@/global/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/global/components/form';
import { Input } from '@/global/components/input';
import { PasswordInput } from '@/global/components/password-input';
import Link from 'next/link';
import { UseFormReturn } from 'react-hook-form';

interface ILoginUiProps {
  form: UseFormReturn<TLoginSchema>;
  onSubmit: (data: TLoginSchema) => void;
}

export function LoginUi({ form, onSubmit }: ILoginUiProps) {
  return (
    <div className="flex flex-col w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="border-black h-10 w-full"
                    placeholder="Email..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <PasswordInput
                    className="border-black h-10 w-full"
                    placeholder="Senha..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link href={'#'} className="text-xs underline text-primary">
            Esqueceu sua senha?
          </Link>
          <Button className="mt-10 h-10 bg-primary" type="submit">
            Entrar
          </Button>
        </form>
      </Form>
      <p className="mt-6 text-sm font-medium">
        Ao clicar em Entrar, você aceita os{' '}
        <span className="font-bold">Termos de Serviço</span> e a{' '}
        <span className="font-bold underline">Política de Privacidade</span> do
        Curvas.
      </p>
    </div>
  );
}
