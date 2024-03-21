import { useStore } from 'src/hooks/useStore';
import { useEffect, useMemo, useRef } from 'react';
import { getConcentration } from 'src/utils/getConcentration';

export const useUpdateCounter = () => {
  const setConcentration = useStore((state) => state.setConcentration);
  const storeValue = useStore((state) => state.concentration);

  // reset interval after update concentration in another place
  const val = useRef(storeValue);
  const isNeedToReset = useMemo(() => val.current !== storeValue, [val, storeValue]);

  useEffect(() => {
    const timer = setInterval(() => {
      const { concentration } = getConcentration();
      setConcentration(concentration);
      val.current = concentration;
    }, 3000);

    return () => clearInterval(timer);
  }, [isNeedToReset]);
};
