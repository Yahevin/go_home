import store from 'store2';
import { Note } from 'src/types';
import { useStore } from 'src/hooks/useStore';
import { selected_level, drink_notes } from 'src/constants/storeKeys';
import { LevelKeys, levelTable, levelTableKeys } from 'src/constants/levels';
import { getAlcoholVolume } from 'src/utils/getAlcoholVolume';
import { getResurrection } from 'src/utils/getResurrection';
import { safeDivide } from 'src/utils/safeDivide';
import { HOUR } from 'src/constants/common';

type State = Note[];

const getUncompleted = () => {
  const { currentDrinks } = useStore.getState();
  return (
    currentDrinks.reduce((acc, item) => {
      const value = getAlcoholVolume({ volume: item.volume, strength: item.strength }) * item.percentage;

      return acc + safeDivide(value, 100);
    }, 0) ?? 0
  );
};

export const getConcentration = (newNote?: Note) => {
  const level: LevelKeys = store.get(selected_level) ?? levelTableKeys.b;

  const now = new Date().getTime();
  const mass = levelTable[level]; // масса пользователя в кг

  const stateRaw: State = store.get(drink_notes) ?? [];
  let startTime = stateRaw.length > 0 ? Number.MAX_SAFE_INTEGER : now;

  const state = stateRaw.filter((item) => {
    const isActual = now - item.timestamp < 8 * HOUR;

    if (isActual && startTime > item.timestamp) {
      startTime = item.timestamp;
    }
    return isActual;
  });

  const newState = [...state, newNote ?? null].filter((item) => !!item);

  const writtenVolume = newState.reduce(
    (acc, item) =>
      acc +
      getAlcoholVolume({
        volume: item.volume,
        strength: item.strength,
      }),
    0
  );
  const currentVolume = writtenVolume + getUncompleted() - getResurrection(now - startTime, mass);
  const positiveValue = currentVolume < 0 ? 0 : currentVolume;

  return {
    state: newState,
    alcoholVolume: positiveValue,
    concentration: positiveValue / mass,
  };
};
