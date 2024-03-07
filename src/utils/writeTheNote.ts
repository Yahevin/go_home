import store from 'store2';
import { useStore } from 'src/hooks/useStore';
import { levelTable } from 'src/constants/levels';
import { drink_notes } from 'src/constants/storeKeys';
import { getResurrection } from 'src/utils/getResurrection';

const hour = 3600 * 1000; // в миллисекундах

// время в timestamp: чистый спирт
type State = { timestamp: number; value: number }[];

export const writeTheNote = () => {
  const { time, strength, volume, level } = useStore.getState();

  const now = new Date().getTime();
  const mass = levelTable[level]; // масса пользователя в кг
  const pureVolume = strength * volume * 10; // спирт в граммах

  const stateRaw: State = store.get(drink_notes) ?? [];
  let startTime = stateRaw.length > 0 ? Number.MAX_SAFE_INTEGER : now - time;

  const state = stateRaw.filter((item) => {
    if (startTime > item.timestamp) {
      startTime = item.timestamp;
    }
    return now - item.timestamp < 8 * hour;
  });

  const newState = [...state, { timestamp: now - time, value: pureVolume }];

  // write the note
  store.set(drink_notes, newState);

  const writtenVolume = newState.reduce((acc, item) => acc + item.value, 0);
  const currentVolume = writtenVolume - getResurrection(now - startTime, mass);

  return {
    alcoholVolume: currentVolume,
    concentration: currentVolume / mass,
  };
};
