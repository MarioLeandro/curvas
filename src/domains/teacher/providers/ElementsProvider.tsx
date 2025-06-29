'use client';

import { createContext, useState } from 'react';
import { FormElementInstance } from '../types/form-elements';

interface IElementsContext {
  elements: FormElementInstance[];
  addElement: ({
    index,
    element,
  }: {
    index: number;
    element: FormElementInstance;
  }) => void;
  removeElement: (id: string) => void;
}
export const ElementsContext = createContext({} as IElementsContext);

export function ElementsProvider({ children }: { children: React.ReactNode }) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  function addElement({
    index,
    element,
  }: {
    index: number;
    element: FormElementInstance;
  }) {
    setElements(prev => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  }

  function removeElement(id: string) {
    setElements(prev => prev.filter(element => element.id !== id));
  }

  return (
    <ElementsContext.Provider
      value={{
        elements,
        addElement,
        removeElement,
      }}
    >
      {children}
    </ElementsContext.Provider>
  );
}
