'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { Calendar } from './calendar';
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl } from './form';
import { ptBR } from 'react-day-picker/locale';

interface IDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  field?: ControllerRenderProps<TFieldValues, TName>;
}

export function DatePicker<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({ field }: IDatePickerProps<TFieldValues, TName>) {
  const [date, setDate] = React.useState<Date>();

  return field ? (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className="border-black h-10 w-full data-[empty=true]:text-muted-foreground justify-between text-left font-normal"
          >
            {field.value ? (
              format(field.value, 'P')
            ) : (
              <span className="text-gray-500">Escolha uma data...</span>
            )}
            <CalendarIcon />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={field.onChange}
          disabled={date => date > new Date() || date < new Date('1900-01-01')}
          captionLayout="dropdown"
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  ) : (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="border-black h-10 w-full data-[empty=true]:text-muted-foreground justify-between text-left font-normal"
        >
          {date ? (
            format(date, 'P')
          ) : (
            <span className="text-gray-500">Escolha uma data...</span>
          )}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={date => date > new Date() || date < new Date('1900-01-01')}
          captionLayout="dropdown"
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
}
