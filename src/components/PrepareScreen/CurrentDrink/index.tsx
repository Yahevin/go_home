import React, { useState } from 'react';
import Beer from '@mui/icons-material/SportsBar';

import { Modal } from 'src/shared/Modal';
import { useStore } from 'src/hooks/useStore';
import { getCompletion } from 'src/utils/getCompletion';
import { CompletionInput } from 'src/components/PrepareScreen/CurrentDrink/CompletionInput';
import { Completion, Count, Grid, Item, Value, Button } from './styles';

export const CurrentDrink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentDrinks = useStore((state) => state.currentDrinks);

  const count = currentDrinks.length;
  if (count === 0) return null;

  return (
    <>
      <Button
        variant={'outlined'}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Beer />
        <Count>{count}</Count>
        <Completion>{getCompletion(currentDrinks).toFixed(0)}%</Completion>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Grid>
          {currentDrinks.map((item) => (
            <Item key={item.id}>
              <Value>
                {item.strength}% - {item.volume}L
              </Value>
              <CompletionInput {...item} key={item.id} />
            </Item>
          ))}
        </Grid>
      </Modal>
    </>
  );
};
