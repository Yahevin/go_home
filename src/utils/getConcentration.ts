import store from 'store2';
import { Note } from 'src/types';
import { useStore } from 'src/hooks/useStore';
import { drink_notes } from 'src/constants/storeKeys';
import { getAlcoholVolume } from 'src/utils/getAlcoholVolume';
import { getResurrection } from 'src/utils/getResurrection';
import { getActualNotes } from 'src/utils/getActualNotes';
import { safeDivide } from 'src/utils/safeDivide';

type State = Note[];

const getUncompleted = (): State => {
  const { currentDrinks } = useStore.getState();
  return currentDrinks.map((item) => ({
    volume: safeDivide(item.volume * item.percentage, 100),
    strength: item.strength,
    timestamp: item.timestamp,
  }));
};

export const getConcentration = () => {
  const now = new Date().getTime();
  const { level, weight } = useStore.getState();

  const completed: State = store.get(drink_notes) ?? [];
  const uncompleted: State = getUncompleted();
  const state = [...getActualNotes(completed), ...getActualNotes(uncompleted)]
    .filter((item) => !!item)
    .sort((a, b) => a.timestamp - b.timestamp);

  const writtenVolume = state.reduce((acc, item, index) => {
    const val = getAlcoholVolume({
      volume: item.volume,
      strength: item.strength,
    });

    const currentTimestamp = state[index]?.timestamp ?? now;
    const nextTimestamp = state[index + 1]?.timestamp ?? now;
    const res = getResurrection({
      delay: nextTimestamp - currentTimestamp,
      level,
      weight,
    });

    const result = val - res + acc;

    return result > 0 ? result : 0;
  }, 0);

  const positiveValue = writtenVolume < 0 ? 0 : writtenVolume;

  return {
    alcoholVolume: positiveValue,
    concentration: positiveValue / weight,
  };
};
