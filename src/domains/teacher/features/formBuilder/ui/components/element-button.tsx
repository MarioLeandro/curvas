import { Button } from '@/global/components/button';
import { useDraggable } from '@dnd-kit/core';
import { cn } from '@/global/lib/utils';
import { FormElement } from '@/domains/teacher/types/form-elements';

export function ElementButton({ formElement }: { formElement: FormElement }) {
  const { label, icon: Icon } = formElement.buttonElement;

  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `button-${formElement.type}`,
    data: {
      type: formElement.type,
      isButtonElement: true,
    },
  });

  return (
    <Button
      ref={setNodeRef}
      variant={'outline'}
      className={cn(
        'flex flex-col h-[100px] w-[110px] cursor-grab',
        isDragging && 'ring-2 ring-primary',
      )}
      {...listeners}
      {...attributes}
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export function ElementButtonDragOverlay({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { label, icon: Icon } = formElement.buttonElement;

  return (
    <Button
      variant={'outline'}
      className="flex flex-col h-[100px] w-[110px] cursor-grab"
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}

export default ElementButton;
