import React from 'react';
import text from 'src/constants/text';
import { Button, Wrap } from './styles';
import { useStore } from 'src/hooks/useStore';
import { stage } from 'src/constants/stages';
import { isAuthorized } from 'src/utils/isAuthorized';

export const InitialScreen = () => {
  const setCurrentStage = useStore((state) => state.setCurrentStage);

  const handleClick = () => {
    if (isAuthorized()) {
      setCurrentStage(stage.PREPARE_TO_INPUT);
    } else {
      setCurrentStage(stage.SELECT_LEVEL);
    }
  };

  return (
    <>
      <Wrap>{text.ABOUT_PROJECT}</Wrap>

      <Button variant="outlined" color="secondary" onClick={handleClick}>
        {text.LET_START}
      </Button>
    </>
  );
};
