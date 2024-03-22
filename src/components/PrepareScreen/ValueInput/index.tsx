import React, { useEffect, useState } from 'react';
import { marksStrength, marksValue } from './constants';
import { useStore } from 'src/hooks/useStore';
import { Slider } from './styles';

export const ValueInput = () => {
  const strength = useStore((state) => state.strength);
  const setStrength = useStore((state) => state.setStrength);
  const volume = useStore((state) => state.volume);
  const setVolume = useStore((state) => state.setVolume);
  const resetMarker = useStore((state) => state.resetMarker);

  const [strengthState, setStrengthState] = useState(strength);
  const [volumeState, setVolumeState] = useState(volume);

  const strengthScale = (val: number) => {
    if (val < 13) {
      return val;
    } else if (val === 13) {
      return 18;
    } else {
      return (val - 12) * 5 + 20;
    }
  };
  const volumeScale = (val: number) => {
    if (val < 5) {
      return (val + 1) / 100;
    } else {
      return (val - 4) / 10;
    }
  };

  // reset defaults after submit
  useEffect(() => {
    setStrengthState(5);
    setStrength(5);

    setVolumeState(8);
    setVolume(0.4);
  }, [resetMarker]);

  return (
    <>
      <Slider
        defaultValue={8}
        step={strengthState >= 12 ? 1 : 0.5}
        min={3}
        max={17}
        marks={marksStrength}
        scale={() => strengthScale(strengthState)}
        valueLabelDisplay="auto"
        color={'primary'}
        value={strengthState}
        onChange={(_: Event, newValue: number) => {
          setStrengthState(newValue);
        }}
        onChangeCommitted={(_: Event, newValue: number) => {
          setStrength(strengthScale(newValue));
        }}
      />
      <Slider
        defaultValue={5}
        step={1}
        min={1}
        max={14}
        marks={marksValue}
        scale={() => volumeScale(volumeState)}
        valueLabelDisplay="auto"
        color={'primary'}
        value={volumeState}
        onChange={(_: Event, newValue: number) => {
          setVolumeState(newValue);
        }}
        onChangeCommitted={(_: Event, newValue: number) => {
          setVolume(volumeScale(newValue));
        }}
      />
    </>
  );
};
