export const stage = {
  INITIAL: 'INITIAL' as const,
  SELECT_LEVEL: 'SELECT_LEVEL' as const,
  PREPARE_TO_INPUT: 'PREPARE_TO_INPUT' as const,
  VALUE_INPUT: 'VALUE_INPUT' as const,
};

export type Stage = keyof typeof stage;
