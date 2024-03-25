export const getAlcoholVolume = ({ volume, strength }: { volume: number; strength: number }) => {
  return strength * volume * 10; // спирт в граммах;
};
