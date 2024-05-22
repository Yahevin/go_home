import React from 'react';
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { Wrap, SX, StyledSubtitle } from './styles';
import { RadioBtn } from './Radio';
import { useStore } from 'src/hooks/useStore';
import { valueTable } from 'src/constants/timeValues';

export const TimeSelect = () => {
  const { time, setTime } = useStore();

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(parseInt((event.target as HTMLInputElement).value));
  };

  return (
    <Wrap>
      <StyledSubtitle>Как давно было выпито?</StyledSubtitle>
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
