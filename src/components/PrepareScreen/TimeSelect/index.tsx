import React from 'react';
import { FormControlLabel, RadioGroup } from '@mui/material';

import { useStore } from 'src/hooks/useStore';
import { FormControl } from 'src/shared/FormControl';
import { valueTable } from 'src/constants/timeValues';
import { Wrap, SX, StyledSubtitle } from './styles';
import { RadioBtn } from './Radio';

export const TimeSelect = () => {
  const isVisibleTips = useStore((state) => state.isVisibleTips);
  const { time, setTime } = useStore();

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(parseInt((event.target as HTMLInputElement).value));
  };

  return (
    <Wrap>
      {isVisibleTips && <StyledSubtitle>Как давно было выпито?</StyledSubtitle>}
      <FormControl>
        <RadioGroup name="time-select" value={time} onChange={handleTimeChange} row sx={SX}>
          {valueTable.map(({ key, value }) => (
            <FormControlLabel key={key} value={value} control={<RadioBtn content={key} />} label="" />
          ))}
        </RadioGroup>
      </FormControl>
    </Wrap>
  );
};
