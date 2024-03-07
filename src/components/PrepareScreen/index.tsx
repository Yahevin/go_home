import React, { useState } from 'react';
import { ButtonOwnProps, FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import text from 'src/constants/text';
import { Button, Wrap } from './styles';
import { TimeSelect } from 'src/components/PrepareScreen/TimeSelect';
import { ValueInput } from 'src/components/PrepareScreen/ValueInput';
import { useStore } from 'src/hooks/useStore';

export const PrepareScreen = () => {
  const setDefaults = useStore((state) => state.setDefaults);
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [showValueInput, setShowValueInput] = useState(false);

  const getVariant = (isPast: boolean): ButtonOwnProps['variant'] => {
    if (!showValueInput) {
      return 'outlined';
    }
    if ((showTimeInput && isPast) || (!showTimeInput && !isPast)) {
      return 'contained';
    }
    return 'outlined';
  };

  const handleClick = (isNeedToWriteTime: boolean) => () => {
    setShowValueInput(true);

    setShowTimeInput(isNeedToWriteTime);
  };

  const handleSubmit = () => {
    setDefaults();
  };

  return (
    <>
      <Wrap>{text.TIME_SELECT_DESCRIPTION}</Wrap>
      <Button variant={getVariant(false)} color="secondary" onClick={handleClick(false)}>
        {text.INPUT_FUTURE_BTN}
      </Button>
      <Button variant={getVariant(true)} color="secondary" onClick={handleClick(true)}>
        {text.INPUT_PAST_BTN}
      </Button>
      {showValueInput && <ValueInput />}
      {showTimeInput && <TimeSelect />}

      {showValueInput && (
        <Button variant={'outlined'} color="primary" onClick={handleSubmit}>
          {text.INPUT_SUBMIT}
        </Button>
      )}
    </>
  );
};
