import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';
import { ElementButtonDragOverlay } from './element-button';
import { FormElements } from './formElements';
import { ElementsType } from '@/domains/teacher/types/form-elements';

function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: event => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  let node = <div>No drag overlay</div>;
  const isButtonElement = draggedItem?.data?.current?.isButtonElement;

  if (isButtonElement) {
    const type = draggedItem?.data?.current?.type as ElementsType;
    node = <ElementButtonDragOverlay formElement={FormElements[type]} />;
  }

  const isElement = draggedItem?.data?.current?.isElement;
  if (isElement) {
    const elementId = draggedItem?.data?.current?.elementId;
  }

  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
