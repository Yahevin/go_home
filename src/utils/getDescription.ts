import { LevelKeys } from 'src/constants/levels';

const text: Record<`description_${LevelKeys}`, string> = {
  description_a: 'Начальный уровень, подходит для неофитов и девочек до 50кг',
  description_b: 'Средний уровень, подходит любителям и осторожным игрокам',
  description_c: 'Продвинутый уровень, для крепко сложенных господ',
  description_d: 'Азм есмь альфа и омега, не пытайся меня ограничить',
};

export const getDescription = (key: LevelKeys): string => text[`description_${key}`];
