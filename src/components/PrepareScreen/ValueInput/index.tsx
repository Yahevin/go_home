import React from 'react';
import { useStore } from 'src/hooks/useStore';
import { marksStrength, marksValue } from './constants';
import { Slider } from './styles';

export const ValueInput = () => {
  const { strength, setStrength, volume, setVolume } = useStore();

  return (
    <>
      <Slider
        step={0.5}
        min={3}
        max={12}
        marks={marksValue}
        valueLabelDisplay="auto"
        color={'primary'}
        value={strength}
        onChange={(_, newValue) => {
          setStrength(newValue as number);
        }}
      />
      <Slider
        defaultValue={0.4}
        step={0.1}
        min={0.1}
        max={1}
        marks={marksStrength}
        valueLabelDisplay="auto"
        color={'primary'}
        value={volume}
        onChange={(_, newValue) => {
          setVolume(newValue as number);
        }}
      />
    </>
  );
};
