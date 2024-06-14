import { useStore } from 'src/hooks/useStore';
import { v4 as uuid } from 'uuid';

export const addDrink = () => {
  const { strength, volume, currentDrinks, setCurrentDrinks } = useStore.getState();

  setCurrentDrinks([
    ...currentDrinks,
    { volume, strength, percentage: 0, id: uuid(), timestamp: new Date().getTime() },
  ]);
};
