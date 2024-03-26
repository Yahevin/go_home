export const initialStrength = 5;
export const initialVolume = 8;

export const strengthScale = (val: number) => {
  if (val < 13) {
    return val;
  } else if (val === 13) {
    return 18;
  } else {
    return (val - 12) * 5 + 20;
  }
};
export const volumeScale = (val: number) => {
  if (val < 5) {
    return (val + 1) / 100;
  } else {
    return (val - 4) / 10;
  }
};
