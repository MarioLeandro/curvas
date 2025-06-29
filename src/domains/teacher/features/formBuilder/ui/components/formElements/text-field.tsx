'use client';

import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/domains/teacher/types/form-elements';
import { Input } from '@/global/components/input';
import { Label } from '@/global/components/label';
import { TypeOutline } from 'lucide-react';

const type: ElementsType = 'TextField';

const extraAttributes = {
  label: 'Campo de Texto',
  helperText: 'Texto de ajuda',
  required: false,
  placeholder: 'Valor aqui...',
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  buttonElement: {
    icon: TypeOutline,
    label: 'Campo de Texto',
  },
  component: component,
  formComponent: () => <h1>formComponent</h1>,
  propertiesComponent: () => <h1>propertiesComponent</h1>,
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function component({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { helperText, label, placeholder, required } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input
        readOnly
        disabled
        className="border-black"
        placeholder={placeholder}
      />
      {helperText && (
        <p className="text-gray-400 text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
