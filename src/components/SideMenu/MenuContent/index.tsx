import React from 'react';
import store from 'store2';

import Undo from '@mui/icons-material/Undo';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import text from 'src/constants/text';
import { useStore } from 'src/hooks/useStore';
import { ButtonShared as Button } from 'src/shared/Button';
import { drink_notes } from 'src/constants/storeKeys';
import { stage } from 'src/constants/stages';
import { Wrap, Spacer, ButtonSX } from './styles';
import { updateConcentration } from 'src/utils/updateConcentration';

export const MenuContent = () => {
  const setCurrentStage = useStore((state) => state.setCurrentStage);
  const setConcentration = useStore((state) => state.setConcentration);

  const handleChange = () => {
    setCurrentStage(stage.SELECT_LEVEL);
  };

  const handleInfo = () => {
    setCurrentStage(stage.INTOXICATION_INFO);
  };

  const handleBackward = () => {
    const drinks = store.get(drink_notes);
    store.set(drink_notes, drinks.slice(0, -1));
    updateConcentration();
  };

  const handleReset = () => {
    store.set(drink_notes, []);

    setCurrentStage(stage.PREPARE_TO_INPUT);
    setConcentration(0);
  };

  return (
    <Wrap>
      <Button variant={'text'} color="secondary" onClick={handleChange} sx={ButtonSX}>
        <AltRouteIcon /> {text.CHANGE_LEVEL}
      </Button>

      <Button variant={'text'} color="secondary" onClick={handleInfo} sx={ButtonSX}>
        <LocalLibraryIcon /> {text.INTOXICATION_INFO}
      </Button>

      <Button variant={'text'} color="error" onClick={handleBackward} sx={ButtonSX}>
        <Undo /> {text.BACKWARD}
      </Button>

      <Spacer />

      <Button variant={'text'} color="error" onClick={handleReset} sx={ButtonSX}>
        <AutorenewIcon /> {text.RESET}
      </Button>
    </Wrap>
  );
};
