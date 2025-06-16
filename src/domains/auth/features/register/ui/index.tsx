import { TRegisterSchema } from '@/domains/auth/types';
import { Button } from '@/global/components/button';
import { DatePicker } from '@/global/components/datepicker';
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
import { formatCpf } from '@/global/utils/functions/formUtils';
import { UseFormReturn } from 'react-hook-form';

interface IRegisterUiProps {
  form: UseFormReturn<TRegisterSchema>;
  onSubmit: (data: TRegisterSchema) => void;
}

export function RegisterUi({ form, onSubmit }: IRegisterUiProps) {
  return (
    <div className="flex flex-col w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    className="border-black h-10 w-full"
                    placeholder="Seu nome completo..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      className="border-black h-10 w-full"
                      placeholder="000.000.000-00"
                      inputMode="numeric"
                      onInput={e => {
                        const formattedValue = formatCpf(
                          (e.target as HTMLInputElement).value,
                        );
                        (e.target as HTMLInputElement).value = formattedValue;
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Data de Nascimento</FormLabel>
                  <DatePicker field={field} />
                  {/* <Input
                      type="date"
                      className="border-black h-10 w-full"
                      {...field}
                    /> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Senha</FormLabel>
                <FormControl>
                  <PasswordInput
                    className="border-black h-10 w-full"
                    placeholder="Repita sua senha..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="mt-10 h-10 bg-violet-500 hover:brightness-90 hover:bg-violet-500"
            type="submit"
          >
            Finalizar
          </Button>
        </form>
      </Form>
      <p className="mt-6 text-sm font-medium">
        Ao se cadastrar em Curvas, você aceita os{' '}
        <span className="font-bold">Termos de Serviço</span> e a{' '}
        <span className="font-bold underline">Política de Privacidade</span> do
        Curvas.
      </p>
    </div>
  );
}
