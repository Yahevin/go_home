import { Note } from 'src/types';
import { HOUR } from 'src/constants/common';

export const getActualNotes = (arr: Note[]) => {
  return arr.filter((item: Note) => new Date().getTime() - item.timestamp < 8 * HOUR);
};
