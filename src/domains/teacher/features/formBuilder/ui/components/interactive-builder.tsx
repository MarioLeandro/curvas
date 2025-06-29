import { cn } from '@/global/lib/utils';
import { useDndMonitor, useDroppable } from '@dnd-kit/core';
import { ElementWrapper, FormElements } from './formElements';
import {
  ElementsType,
  FormElementInstance,
} from '@/domains/teacher/types/form-elements';
import { v4 as uuidv4 } from 'uuid';

function InteractiveBuilder({
  addElement,
  elements,
  removeElement,
}: {
  elements: FormElementInstance[];
  addElement: ({
    index,
    element,
  }: {
    index: number;
    element: FormElementInstance;
  }) => void;
  removeElement: (id: string) => void;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'drop-area',
    data: {
      isDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: event => {
      const { active, over } = event;
      if (!active || !over) return;
      const isElementButton = active?.data?.current?.isButtonElement;
      if (isElementButton) {
        const type = active?.data?.current?.type;
        const newElement =
          FormElements[type as ElementsType].construct(uuidv4());

        addElement({ index: 0, element: newElement });
      }
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'col-span-2 flex flex-col items-center bg-white rounded-lg shadow-2xl overflow-y-auto',
        isOver && 'ring-2 ring-primary/20',
      )}
    >
      {!isOver && elements.length === 0 && (
        <p className="text-3xl text-gray-400 flex flex-1 items-center font-bold">
          Arraste os Elementos Aqui
        </p>
      )}

      {isOver && (
        <div className="p-4 w-full">
          <div className="h-[100px] rounded-md bg-primary/20"></div>
        </div>
      )}

      {elements.length > 0 && (
        <div className="flex flex-col w-full gap-4 p-4">
          {elements.map(element => (
            <ElementWrapper
              key={element.id}
              element={element}
              removeElement={removeElement}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default InteractiveBuilder;
