'use client';

import { RegisterUi } from './ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, TRegisterSchema } from '../../types';
import { useForm } from 'react-hook-form';

export function RegisterFeature() {
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      dateOfBirth: '',
      password: '',
      confirmPassword: '',
    },
  });
  function onSubmit(data: TRegisterSchema) {
    console.log('enviado', data);
  }

  return <RegisterUi form={form} onSubmit={onSubmit} />;
}
