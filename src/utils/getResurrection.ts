import { LevelKeys, levelTable } from 'src/constants/levels';

const hour = 3600 * 1000; // в миллисекундах

type Props = {
  level: LevelKeys;
  delay: number;
  weight: number;
};

// delay - время, прошедшее с начала; level - масса в кг;
export const getResurrection = ({ delay, level, weight }: Props) => {
  const speed = levelTable[level]; // средняя скорость нейтрализации в час

  // console.log('speed', speed);
  // console.log('delay / hour', delay / hour);
  // console.log('weight', weight);

  return speed * (delay / hour) * weight; // нейтрализуемая масса чистого спирта
};
