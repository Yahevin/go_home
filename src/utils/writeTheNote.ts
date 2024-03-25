import store from 'store2';
import { Drink } from 'src/types';
import { useStore } from 'src/hooks/useStore';
import { drink_notes } from 'src/constants/storeKeys';
import { getConcentration } from 'src/utils/getConcentration';
import { getAlcoholVolume } from 'src/utils/getAlcoholVolume';

export const writeTheNote = (newNote?: Drink) => {
  const { time, strength, volume } = newNote ? { ...newNote, time: 0 } : useStore.getState();
  const { setConcentration } = useStore.getState();

  const pureVolume = getAlcoholVolume({ volume, strength });
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
