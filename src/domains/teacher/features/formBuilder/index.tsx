'use client';

import { useState } from 'react';
import { DndProvider } from '../../providers/DndProvider';
import { FormElementInstance } from '../../types/form-elements';
import { FormBuilderUi } from './ui';
import useElements from '../../hooks/useElements';

export function FormBuilderFeature() {
  const { elements, addElement, removeElement } = useElements();
  return (
    <DndProvider>
      <FormBuilderUi
        elements={elements}
        addElement={addElement}
        removeElement={removeElement}
      />
    </DndProvider>
  );
}
