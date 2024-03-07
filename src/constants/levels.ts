// уровень резистентности рассчитывается на основании веса в кг
export const levelTable = {
  a: 50,
  b: 70,
  c: 90,
  d: 120,
};

export type LevelKeys = keyof typeof levelTable;

type LevelTableKeys = { [key in LevelKeys]: key };

export const levelTableKeys: LevelTableKeys = Object.keys(levelTable).reduce((acc, item) => {
  return { ...(acc ?? {}), [item]: item };
}, {} as LevelTableKeys);
