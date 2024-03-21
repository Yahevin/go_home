import { useStore } from 'src/hooks/useStore';
import { getConcentration } from 'src/utils/getConcentration';

export const updateConcentration = () => {
  const { setConcentration } = useStore.getState();

  const { concentration } = getConcentration();
  setConcentration(concentration);

  return concentration;
};
