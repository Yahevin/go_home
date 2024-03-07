export const levelTable = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
};

export type LevelKeys = keyof typeof levelTable;

type LevelTableKeys = { [key in LevelKeys]: key };

export const levelTableKeys: LevelTableKeys = Object.keys(levelTable).reduce((acc, item) => {
  return { ...(acc ?? {}), [item]: item };
}, {} as LevelTableKeys);
