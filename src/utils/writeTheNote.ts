import store from 'store2';
import { Drink, Note } from 'src/types';
import { useStore } from 'src/hooks/useStore';
import { drink_notes } from 'src/constants/storeKeys';
import { getConcentration } from 'src/utils/getConcentration';

export const writeTheNote = (note?: Drink) => {
  const now = new Date().getTime();
  const state = store.get(drink_notes) ?? [];
  const { setConcentration, time, volume, strength } = useStore.getState();

  // используем переданную запись, либо снимаем значения с инпутов
  const newNote: Note = note ?? { timestamp: now - time, volume, strength };

  // обновляем список
  store.set(drink_notes, [...state, newNote]);

  const { alcoholVolume, concentration } = getConcentration();

  // update value
  setConcentration(concentration);

  return {
    alcoholVolume,
    concentration,
  };
};
