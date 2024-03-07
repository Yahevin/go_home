import { LevelKeys } from 'src/constants/levels';

const text: Record<`description_${LevelKeys}`, string> = {
  description_a:
    'alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter',
  description_b:
    'alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter',
  description_c:
    'alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter',
  description_d:
    'alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter alcohol counter',
};

export const getDescription = (key: LevelKeys): string => text[`description_${key}`];
