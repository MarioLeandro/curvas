'use client';

import { LoginUi } from './ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, TLoginSchema } from '../../types';
import { useForm } from 'react-hook-form';

export function LoginFeature() {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  function onSubmit(data: TLoginSchema) {
    console.log('enviado');
  }

  return <LoginUi form={form} onSubmit={onSubmit} />;
}
