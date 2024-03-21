import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { marksStrength, marksValue } from './constants';
import { useStore } from 'src/hooks/useStore';
import { Slider } from './styles';

export const ValueInput = () => {
  const { strength, setStrength, volume, setVolume, resetMarker } = useStore();

  const [volumeState, setVolumeState] = useState(volume);
  const [strengthState, setStrengthState] = useState(strength);

  const volumeScale = (val: number) => {
    if (val < 5) {
      return (val + 1) / 100;
    } else {
      return (val - 4) / 10;
    }
  };
  const onVolumeChange = debounce((_: Event, newValue: number) => {
    setVolumeState(newValue);
    setVolume(volumeScale(newValue));
  }, 50);

  const strengthScale = (val: number) => {
    if (val < 13) {
      return val;
    } else if (val === 13) {
      return 18;
    } else {
      return (val - 12) * 5 + 20;
    }
  };
  const onStrengthChange = debounce((_: Event, newValue: number) => {
    setStrengthState(newValue);
    setStrength(strengthScale(newValue));
  }, 50);

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
        step={strengthState >= 12 ? 1 : 0.5}
        min={3}
        max={17}
        marks={marksStrength}
        scale={() => strengthScale(strengthState)}
        valueLabelDisplay="auto"
        color={'primary'}
        value={strengthState}
        onChange={onStrengthChange}
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
        onChange={onVolumeChange}
      />
    </>
  );
};
