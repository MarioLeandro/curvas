'use client';

import { useEffect, useState, useRef } from 'react';

function getFromLocalStorage<T>(key: string, fallbackValue: T) {
  if (typeof window === 'object') {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallbackValue;
  }
}

export function useLocalStorage<T = unknown>(key: string, fallbackValue: T) {
  const [value, setValue] = useState<T>();

  const keyRef = useRef(key);
  keyRef.current = key;
  const fallbackValueRef = useRef(fallbackValue);
  fallbackValueRef.current = fallbackValue;
  useEffect(() => {
    setValue(getFromLocalStorage(keyRef.current, fallbackValueRef.current));
  }, []);

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}
