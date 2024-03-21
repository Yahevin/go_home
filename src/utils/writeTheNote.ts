import store from 'store2';
import { useStore } from 'src/hooks/useStore';
import { drink_notes } from 'src/constants/storeKeys';
import { getConcentration } from 'src/utils/getConcentration';

export const writeTheNote = () => {
  const { time, strength, volume, setConcentration } = useStore.getState();

  const pureVolume = strength * volume * 10; // спирт в граммах
  const now = new Date().getTime();

  const { state, alcoholVolume, concentration } = getConcentration({ timestamp: now - time, value: pureVolume });

  // write the note
  store.set(drink_notes, state);
  // update value
  setConcentration(concentration);

  return {
    alcoholVolume,
    concentration,
  };
};
