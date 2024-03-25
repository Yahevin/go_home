import { create } from 'zustand';
import { Drink } from 'src/types';
import { stage, Stage } from 'src/constants/stages';
import { valueTable } from 'src/constants/timeValues';
import { LevelKeys, levelTableKeys } from 'src/constants/levels';

interface StoreType {
  currentStage: Stage;
  setCurrentStage: (stage: Stage) => void;
  // resistance level
  level: LevelKeys;
  setLevel: (val: LevelKeys) => void;
  // drink inputs
  volume: number;
  setVolume: (val: number) => void;
  strength: number;
  setStrength: (val: number) => void;
  time: number;
  setTime: (val: number) => void;
  // reset after submit
  resetMarker: number;
  setDefaults: () => void;
  // alcohol
  concentration: number;
  setConcentration: (val: number) => void;
  // undone drinks status
  currentDrinks: Drink[];
  setCurrentDrinks: (val: Drink[]) => void;
}

export const useStore = create<StoreType>()((set) => ({
  currentStage: stage.INITIAL,
  setCurrentStage: (val) => set({ currentStage: val }),
  //
  level: levelTableKeys.b,
  setLevel: (val) => set({ level: val }),
  //
  volume: 0.4,
  setVolume: (val) => set({ volume: val }),
  strength: 5,
  setStrength: (val) => set({ strength: val }),
  time: valueTable[0].value,
  setTime: (val) => set({ time: val }),
  //
  resetMarker: 0,
  setDefaults: () => set((state) => ({ resetMarker: state.resetMarker + 1, time: valueTable[0].value })),
  //
  concentration: 0,
  setConcentration: (val) => set({ concentration: val }),
  //
  currentDrinks: [],
  setCurrentDrinks: (val) => set({ currentDrinks: val }),
}));
