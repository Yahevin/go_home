import React from 'react';
import store from 'store2';

import text from 'src/constants/text';
import { useStore } from 'src/hooks/useStore';
import { ButtonShared as Button } from 'src/shared/Button';
import { drink_notes } from 'src/constants/storeKeys';
import { stage } from 'src/constants/stages';
import { Wrap, Spacer } from './styles';

export const MenuContent = () => {
  const { setCurrentStage, setConcentration } = useStore((state) => ({
    setCurrentStage: state.setCurrentStage,
    setConcentration: state.setConcentration,
  }));

  const handleChange = () => {
    setCurrentStage(stage.SELECT_LEVEL);
  };

  const handleInfo = () => {
    setCurrentStage(stage.INTOXICATION_INFO);
  };

  const handleReset = () => {
    store.set(drink_notes, []);

    setCurrentStage(stage.PREPARE_TO_INPUT);
    setConcentration(0);
  };

  return (
    <Wrap>
      <Button variant={'text'} color="secondary" onClick={handleChange}>
        {text.CHANGE_LEVEL}
      </Button>

      <Button variant={'text'} color="secondary" onClick={handleInfo}>
        {text.INTOXICATION_INFO}
      </Button>

      <Spacer />

      <Button variant={'text'} color="error" onClick={handleReset}>
        {text.RESET}
      </Button>
    </Wrap>
  );
};
