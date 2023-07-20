import { useRef, useEffect, useMemo } from 'react';
import debounce from '../../utils/debounce';

const useDebounce = (callback: () => Promise<void> | null | (() => void)) => {
  const ref = useRef<(() => void) | null>(null);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 1000);
  }, []);

  return debouncedCallback;
};

export default useDebounce;
