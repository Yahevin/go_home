import store from 'store2';
import { create } from 'zustand';
import { Drink } from 'src/types';
import { stage, Stage } from 'src/constants/stages';
import { valueTable } from 'src/constants/timeValues';
import { LevelKeys, levelTableKeys } from 'src/constants/levels';
import { selected_level, selected_weight, tips_visibility, current_drinks } from 'src/constants/storeKeys';
import { initialStrength, initialVolume, volumeScale, strengthScale } from 'src/utils/inputScale';

interface StoreType {
  currentStage: Stage;
  setCurrentStage: (stage: Stage) => void;
  // resistance level
  level: LevelKeys;
  setLevel: (val: LevelKeys) => void;
  weight: number;
  setWeight: (val: number) => void;
  // drink inputs
  volume: number;
  setVolume: (val: number) => void;
  strength: number;
  setStrength: (val: number) => void;
  time: number;
  setTime: (val: number) => void;
  // alcohol
  concentration: number;
  setConcentration: (val: number) => void;
  // undone drinks status
  currentDrinks: Drink[];
  setCurrentDrinks: (val: Drink[]) => void;
  // tips visibility
  isVisibleTips: boolean;
  setVisibleTips: () => void;
}

export const useStore = create<StoreType>()((set) => ({
  currentStage: stage.INITIAL,
  setCurrentStage: (val) => set({ currentStage: val }),
  //
  level: store.get(selected_level) ?? levelTableKeys.b,
  setLevel: (val) => {
    store.set(selected_level, val);

    return set({ level: val });
  },
  weight: store.get(selected_weight) ?? 80,
  setWeight: (val) => {
    store.set(selected_weight, val);

    return set({ weight: val });
  },
  //
  volume: volumeScale(initialVolume),
  setVolume: (val) => set({ volume: val }),
  strength: strengthScale(initialStrength),
  setStrength: (val) => set({ strength: val }),
  time: valueTable[0].value,
  setTime: (val) => set({ time: val }),
  //
  concentration: 0,
  setConcentration: (val) => set({ concentration: val }),
  //
  currentDrinks: store.get(current_drinks) ?? [],
  setCurrentDrinks: (val) => {
    store.set(current_drinks, val);

    return set({ currentDrinks: val });
  },
  //
  isVisibleTips: store.get(tips_visibility) ?? true,
  setVisibleTips: () =>
    set((state) => {
      const newValue = !state.isVisibleTips;
      store.set(tips_visibility, newValue);

      return { isVisibleTips: newValue };
    }),
}));
