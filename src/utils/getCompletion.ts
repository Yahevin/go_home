import { Drink } from 'src/types';
import { safeDivide } from 'src/utils/safeDivide';

export const getCompletion = (drinks: Drink[]) => {
  const value = drinks.reduce((acc, item) => acc + item.percentage, 0);

  return safeDivide(value, drinks.length);
};
