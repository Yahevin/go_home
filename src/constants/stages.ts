export const stage = {
  INITIAL: 'INITIAL' as const,
  SELECT_LEVEL: 'SELECT_LEVEL' as const,
  PREPARE_TO_INPUT: 'PREPARE_TO_INPUT' as const,
  INTOXICATION_INFO: 'INTOXICATION_INFO' as const,
  HISTORY: 'HISTORY' as const,
};

export type Stage = keyof typeof stage;
