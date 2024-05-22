// уровень резистентности рассчитывается на основании веса в кг
export const levelTable = {
  a: 0.05,
  b: 0.15,
  c: 0.275,
  d: 0.4,
};

export type LevelKeys = keyof typeof levelTable;

type LevelTableKeys = { [key in LevelKeys]: key };

export const levelTableKeys: LevelTableKeys = Object.keys(levelTable).reduce((acc, item) => {
  return { ...(acc ?? ({} as LevelTableKeys)), [item]: item };
}, {} as LevelTableKeys);
