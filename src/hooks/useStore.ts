import { create } from 'zustand';
import { stage, Stage } from 'src/constants/stages';
import { LevelKeys, levelTableKeys } from 'src/constants/levels';
import { valueTable } from 'src/constants/timeValues';
import { getConcentration } from 'src/utils/getConcentration';

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
  setDefaults: () => void;
  // alcohol
  concentration: number;
  setConcentration: (val: number) => void;
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
  setDefaults: () => set({ time: valueTable[0].value, strength: 5, volume: 0.4 }),
  //
  concentration: getConcentration().concentration,
  setConcentration: (val) => set({ concentration: val }),
}));
