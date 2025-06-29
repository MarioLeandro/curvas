'use client';

import { useContext } from 'react';
import { ElementsContext } from '../providers/ElementsProvider';

export default function useElements() {
  const elements = useContext(ElementsContext);

  return elements;
}
