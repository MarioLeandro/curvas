import {
  FormElementInstance,
  FormElementsType,
} from '@/domains/teacher/types/form-elements';
import { TextFieldFormElement } from './text-field';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useState } from 'react';
import { Button } from '@/global/components/button';
import { Trash } from 'lucide-react';
import { cn } from '@/global/lib/utils';

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};

export function ElementWrapper({
  element,
  removeElement,
}: {
  element: FormElementInstance;
  removeElement: (id: string) => void;
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const topHalf = useDroppable({
    id: element.id + '-top',
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalf: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + '-bottom',
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalf: true,
    },
  });

  const draggable = useDraggable({
    id: element.id + '-drag-handler',
    data: {
      type: element.type,
      elementId: element.id,
      isElement: true,
    },
  });

  const Element = FormElements[element.type].component;
  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className="relative h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div
        ref={topHalf.setNodeRef}
        className="absolute w-full h-1/2 rounded-t-md"
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute w-full bottom-0 h-1/2 rounded-b-md"
      />
      {isMouseOver && (
        <>
          <div className="absolute right-0 h-full">
            <Button
              className="flex justify-center h-full border rounded-md rounded-l-none bg-red-500 hover:bg-red-500 hover:brightness-95"
              variant={'outline'}
              onClick={() => removeElement(element.id)}
            >
              <Trash className="h-6 w-6 text-white" />
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <p className="text-muted-foreground text-sm">
              Clique para ver as propriedades ou segure para mover
            </p>
          </div>
        </>
      )}
      <div
        className={cn(
          'flex w-full h-[120px] items-center rounded-md ring-2 ring-gray-200 px-4 py-2 pointer-events-none opacity-100',
          isMouseOver && 'opacity-10',
        )}
      >
        <Element elementInstance={element} />
      </div>
    </div>
  );
}
