import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: 'Email must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Nome deve ter pelo menos 2 caracteres.',
    }),
    email: z.string().email({
      message: 'Insira um email válido.',
    }),
    cpf: z
      .string()
      .transform(val => val.replace(/\D/g, ''))
      .refine(
        val => {
          return val.length === 11;
        },
        {
          message: 'CPF deve conter 11 dígitos numéricos.',
        },
      )
      .refine(
        val => {
          if (val.length !== 11 || /^(\d)\1{10}$/.test(val)) {
            return false;
          }

          let sum = 0;
          let remainder;

          for (let i = 1; i <= 9; i++) {
            sum += parseInt(val.substring(i - 1, i)) * (11 - i);
          }
          remainder = (sum * 10) % 11;

          if (remainder === 10 || remainder === 11) {
            remainder = 0;
          }
          if (remainder !== parseInt(val.substring(9, 10))) {
            return false;
          }

          sum = 0;
          for (let i = 1; i <= 10; i++) {
            sum += parseInt(val.substring(i - 1, i)) * (12 - i);
          }
          remainder = (sum * 10) % 11;

          if (remainder === 10 || remainder === 11) {
            remainder = 0;
          }
          if (remainder !== parseInt(val.substring(10, 11))) {
            return false;
          }

          return true;
        },
        {
          message: 'CPF inválido.',
        },
      ),
    dateOfBirth: z.string().refine(val => !isNaN(new Date(val).getTime()), {
      message: 'Insira uma data de nascimento válida.',
    }),
    password: z.string().min(6, {
      message: 'Senha deve ter pelo menos 6 caracteres.',
    }),
    confirmPassword: z.string().min(6, {
      message: 'Confirme a senha.',
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'As senhas não coincidem.',
        path: ['confirmPassword'],
      });
    }
  });

export type TRegisterSchema = z.infer<typeof registerSchema>;
