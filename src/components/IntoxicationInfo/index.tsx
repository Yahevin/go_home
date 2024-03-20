import React from 'react';
import text from 'src/constants/text';
import { stage } from 'src/constants/stages';
import { useStore } from 'src/hooks/useStore';
import { isAuthorized } from 'src/utils/isAuthorized';
import { Button, Wrap } from './styles';

export const IntoxicationInfo = () => {
  const setCurrentStage = useStore((state) => state.setCurrentStage);

  const handleClick = () => {
    if (isAuthorized()) {
      setCurrentStage(stage.PREPARE_TO_INPUT);
    } else {
      setCurrentStage(stage.SELECT_LEVEL);
    }
  };

  const description = text.INFO_DESCRIPTION.split(';').filter((item) => !!item);

  return (
    <>
      <Wrap>
        {description.map((item) => (
          <div key={item}>{item};</div>
        ))}
      </Wrap>

      <Button variant="outlined" color="secondary" onClick={handleClick}>
        {text.NEXT}
      </Button>
    </>
  );
};
