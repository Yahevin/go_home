import { useStore } from 'src/hooks/useStore';
import { useEffect } from 'react';
import { getConcentration } from 'src/utils/getConcentration';

export const useUpdateCounter = () => {
  const setConcentration = useStore((state) => state.setConcentration);

  useEffect(() => {
    const timer = setInterval(() => {
      const { concentration } = getConcentration();
      setConcentration(concentration);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
};
