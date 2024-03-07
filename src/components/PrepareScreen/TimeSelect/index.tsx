import React from 'react';
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { Wrap, SX } from './styles';
import { RadioBtn } from './Radio';
import { useStore } from 'src/hooks/useStore';

const valueTable = [
  { key: '1min ago', value: '1' },
  { key: '15min ago', value: '15' },
  { key: '30min ago', value: '30' },
  { key: '1h ago', value: '60' },
  { key: '1:30 ago', value: '90' },
  { key: '2h ago', value: '120' },
  { key: '3h ago', value: '180' },
];

export const TimeSelect = () => {
  const { time, setTime } = useStore();

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(parseInt((event.target as HTMLInputElement).value));
  };

  return (
    <Wrap>
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
