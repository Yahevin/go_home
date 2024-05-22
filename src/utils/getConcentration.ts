import store from 'store2';
import { Note } from 'src/types';
import { useStore } from 'src/hooks/useStore';
import { drink_notes } from 'src/constants/storeKeys';
import { getAlcoholVolume } from 'src/utils/getAlcoholVolume';
import { getResurrection } from 'src/utils/getResurrection';
import { getActualNotes } from 'src/utils/getActualNotes';
import { safeDivide } from 'src/utils/safeDivide';

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
  const { level, weight } = useStore.getState();

  const now = new Date().getTime();

  const stateRaw: State = store.get(drink_notes) ?? [];
  const state = getActualNotes(stateRaw);

  const newState = [...state, newNote ?? null].filter((item) => !!item).sort((a, b) => a.timestamp - b.timestamp);

  const writtenVolume = newState.reduce((acc, item, index) => {
    const val = getAlcoholVolume({
      volume: item.volume,
      strength: item.strength,
    });

    const currentTimestamp = newState[index]?.timestamp ?? now;
    const nextTimestamp = newState[index + 1]?.timestamp ?? now;
    const res = getResurrection({
      delay: nextTimestamp - currentTimestamp,
      level,
      weight,
    });

    const result = val - res + acc;

    return result > 0 ? result : 0;
  }, 0);

  const currentVolume = writtenVolume + getUncompleted();
  const positiveValue = currentVolume < 0 ? 0 : currentVolume;

  return {
    state: newState,
    alcoholVolume: positiveValue,
    concentration: positiveValue / weight,
  };
};
