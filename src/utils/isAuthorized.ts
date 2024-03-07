import store from 'store2';
import { LevelKeys } from 'src/constants/levels';
import { selected_level } from 'src/constants/storeKeys';

export const isAuthorized = () => {
  const level: LevelKeys = store.get(selected_level);

  return !!level;
};
