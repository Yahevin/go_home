import store from 'store2';
import { LevelKeys, levelTable, levelTableKeys } from 'src/constants/levels';
import { selected_level, drink_notes } from 'src/constants/storeKeys';
import { getResurrection } from 'src/utils/getResurrection';

const hour = 3600 * 1000; // в миллисекундах

// время в timestamp: чистый спирт
type Note = { timestamp: number; value: number };
type State = Note[];

export const getConcentration = (newNote?: Note) => {
  const level: LevelKeys = store.get(selected_level) ?? levelTableKeys.b;

  const now = new Date().getTime();
  const mass = levelTable[level]; // масса пользователя в кг

  const stateRaw: State = store.get(drink_notes) ?? [];
  let startTime = stateRaw.length > 0 ? Number.MAX_SAFE_INTEGER : now;

  const state = stateRaw.filter((item) => {
    if (startTime > item.timestamp) {
      startTime = item.timestamp;
    }
    return now - item.timestamp < 8 * hour;
  });

  const newState = [...state, newNote ?? null].filter((item) => !!item);

  const writtenVolume = newState.reduce((acc, item) => acc + item.value, 0);
  const currentVolume = writtenVolume - getResurrection(now - startTime, mass);
  const positiveValue = currentVolume < 0 ? 0 : currentVolume;

  return {
    state: newState,
    alcoholVolume: positiveValue,
    concentration: positiveValue / mass,
  };
};
