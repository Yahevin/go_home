import React from 'react';
import store from 'store2';

import { Note } from 'src/types';
import text from 'src/constants/text';
import { stage } from 'src/constants/stages';
import { useStore } from 'src/hooks/useStore';
import { isAuthorized } from 'src/utils/isAuthorized';
import { getActualNotes } from 'src/utils/getActualNotes';
import { drink_notes } from 'src/constants/storeKeys';
import { Wrap, Button, Item } from './styles';

export const History = () => {
  const setCurrentStage = useStore((state) => state.setCurrentStage);
  const currentDrinks = useStore((state) => state.currentDrinks);
  const doneDrinks: Note[] = getActualNotes(store.get(drink_notes) ?? []);

  const handleClick = () => {
    if (isAuthorized()) {
      setCurrentStage(stage.PREPARE_TO_INPUT);
    } else {
      setCurrentStage(stage.SELECT_LEVEL);
    }
  };

  return (
    <>
      <Wrap>
        {currentDrinks.length > 0 || doneDrinks.length > 0 ? (
          <>
            {currentDrinks.map((item) => (
              <Item key={item.id}>
                {item.volume}L - {item.strength}% выпито на {item.percentage}%
              </Item>
            ))}

            {currentDrinks.length > 0 ? <Item>{text.DIVIDER}</Item> : null}

            {doneDrinks.map((item) => (
              <Item key={item.timestamp}>
                {item.volume}L - {item.strength}% выпито в {new Date(item.timestamp).toLocaleTimeString()}
              </Item>
            ))}
          </>
        ) : (
          text.EMPTY_HISTORY
        )}
      </Wrap>

      <Button variant="outlined" color="secondary" onClick={handleClick}>
        {text.NEXT}
      </Button>
    </>
  );
};
