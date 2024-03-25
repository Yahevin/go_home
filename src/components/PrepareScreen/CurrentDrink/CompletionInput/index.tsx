import React, { useState } from 'react';

import { Drink } from 'src/types';
import { Slider } from './styles';
import { useStore } from 'src/hooks/useStore';
import { writeTheNote } from 'src/utils/writeTheNote';
import { updateConcentration } from 'src/utils/updateConcentration';

export const CompletionInput = ({ percentage, id }: Drink) => {
  const [state, setState] = useState(percentage);

  const currentDrinks = useStore((state) => state.currentDrinks);
  const setCurrentDrinks = useStore((state) => state.setCurrentDrinks);

  const handleCommit = (_: Event, newValue: number) => {
    const currentIndex = currentDrinks.findIndex((item) => item.id === id);
    const drinks: Drink[] = [].slice.call(currentDrinks);
    const currentItem: Drink = drinks.splice(currentIndex, 1)[0];

    if (newValue !== 100) {
      // update current drink
      drinks.splice(currentIndex, 0, { ...currentItem, percentage: newValue });
      setCurrentDrinks(drinks);
      // write new value
      updateConcentration();
    } else {
      // delete from completion list
      setCurrentDrinks(drinks);
      // add drunk volume
      writeTheNote(currentItem);
    }
  };

  return (
    <Slider
      step={10}
      min={0}
      max={100}
      getAriaValueText={(val) => `${val}%`}
      valueLabelDisplay="auto"
      color={'primary'}
      value={state}
      onChange={(_: Event, newValue: number) => {
        if (_.type === 'mousedown') return;
        setState(newValue);
      }}
      onChangeCommitted={handleCommit}
    />
  );
};
