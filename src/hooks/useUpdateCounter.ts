import { useStore } from 'src/hooks/useStore';
import { useEffect, useMemo, useRef } from 'react';
import { updateConcentration } from 'src/utils/updateConcentration';

export const useUpdateCounter = () => {
  const storeValue = useStore((state) => state.concentration);

  // reset interval after update concentration in another place
  const val = useRef(storeValue);
  const isNeedToReset = useMemo(() => val.current !== storeValue, [val, storeValue]);

  useEffect(() => {
    const update = () => {
      val.current = updateConcentration();
    };

    //initial update
    update();

    // set updater by interval
    const timer = setInterval(() => {
      update();
    }, 3000);

    return () => clearInterval(timer);
  }, [isNeedToReset]);

  return storeValue;
};
