import { create } from 'zustand';
import { stage, Stage } from 'src/constants/stages';

interface StoreType {
  currentStage: Stage;
  setCurrentStage: (stage: Stage) => void;
  // inputs
  volume: number;
  setVolume: (val: number) => void;
  strength: number;
  setStrength: (val: number) => void;
  time: number;
  setTime: (val: number) => void;
  // reset after submit
  setDefaults: () => void;
}

export const useStore = create<StoreType>()((set, get) => ({
  currentStage: stage.INITIAL,
  setCurrentStage: (val) => set({ currentStage: val }),
  //
  volume: 0.4,
  setVolume: (val) => set({ volume: val }),
  strength: 5,
  setStrength: (val) => set({ strength: val }),
  time: 1,
  setTime: (val) => set({ time: val }),
  //
  setDefaults: () => set({ time: 1, strength: 5, volume: 0.4 }),
}));
