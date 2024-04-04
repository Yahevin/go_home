import React, { useCallback, useRef, useState } from 'react';
import { ButtonOwnProps } from '@mui/material';
import { throttle } from 'lodash';

import text from 'src/constants/text';
import { addDrink } from 'src/utils/addDrink';
import { scrollTo } from 'src/utils/scrollTo';
import { writeTheNote } from 'src/utils/writeTheNote';
import { DoneArrow } from 'src/components/PrepareScreen/DoneArrow';
import { ValueInput } from 'src/components/PrepareScreen/ValueInput';
import { TimeSelect } from 'src/components/PrepareScreen/TimeSelect';
import { CurrentDrink } from 'src/components/PrepareScreen/CurrentDrink';
import { Button, Wrap } from './styles';

export const PrepareScreen = () => {
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [showValueInput, setShowValueInput] = useState(false);
  const onSubmitEvent = useRef<() => void>();
  const bottomAnchor = useRef<HTMLDivElement>(null);

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

    scrollTo(bottomAnchor.current);
  };

  const handleSubmit = useCallback(
    throttle(() => {
      onSubmitEvent.current?.();

      if (showTimeInput) {
        // count drunk volume
        writeTheNote();
      } else {
        // add to completion counter
        addDrink();
      }
    }, 1000),
    [showTimeInput]
  );

  return (
    <>
      <Wrap>{text.TIME_SELECT_DESCRIPTION}</Wrap>
      <Button variant={getVariant(false)} color="primary" onClick={handleClick(false)}>
        {text.INPUT_FUTURE_BTN}
      </Button>
      <Button variant={getVariant(true)} color="primary" onClick={handleClick(true)}>
        {text.INPUT_PAST_BTN}
      </Button>
      {showValueInput && <ValueInput />}
      {showTimeInput && <TimeSelect />}

      {showValueInput && (
        <Button variant={'outlined'} color="primary" onClick={handleSubmit}>
          {text.INPUT_SUBMIT}
        </Button>
      )}

      <CurrentDrink />
      <DoneArrow ref={onSubmitEvent} />

      <div ref={bottomAnchor} />
    </>
  );
};
