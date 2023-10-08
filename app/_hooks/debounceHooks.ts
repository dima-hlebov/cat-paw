import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    if (debouncedValue) {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
    if (!debouncedValue) {
      setDebouncedValue(value);
    }
  }, [debouncedValue, value, delay]);

  return debouncedValue;
}

export default useDebounce;
