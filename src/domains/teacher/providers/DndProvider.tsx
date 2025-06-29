import { DndContext } from '@dnd-kit/core';
import DragOverlayWrapper from '../features/formBuilder/ui/components/drag-overlay-wrapper';

interface IDndProvider {
  children: React.ReactNode;
}

export function DndProvider({ children }: IDndProvider) {
  return (
    <DndContext id="form">
      <DragOverlayWrapper />
      {children}
    </DndContext>
  );
}
