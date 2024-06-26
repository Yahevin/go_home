import React, { useState } from 'react';
import { useStore } from 'src/hooks/useStore';
import { initialStrength, initialVolume, strengthScale, volumeScale } from 'src/utils/inputScale';
import { marksStrength, marksValue } from './constants';
import { Slider, StyledSubtitle } from './styles';

export const ValueInput = () => {
  const isVisibleTips = useStore((state) => state.isVisibleTips);
  const setStrength = useStore((state) => state.setStrength);
  const setVolume = useStore((state) => state.setVolume);

  const [strengthState, setStrengthState] = useState(initialStrength);
  const [volumeState, setVolumeState] = useState(initialVolume);

  return (
    <>
      {isVisibleTips && <StyledSubtitle>Крепость бухлишка</StyledSubtitle>}
      <Slider
        step={strengthState >= 12 ? 1 : 0.5}
        min={3}
        max={18}
        marks={marksStrength}
        scale={() => strengthScale(strengthState)}
        valueLabelDisplay="auto"
        color={'primary'}
        value={strengthState}
        onChange={(_: Event, newValue: number) => {
          if (_.type === 'mousedown') return;
          setStrengthState(newValue);
        }}
        onChangeCommitted={() => {
          setStrength(strengthScale(strengthState));
        }}
      />

      {isVisibleTips && <StyledSubtitle>Объем стакана</StyledSubtitle>}
      <Slider
        step={1}
        min={1}
        max={14}
        marks={marksValue}
        scale={() => volumeScale(volumeState)}
        valueLabelDisplay="auto"
        color={'primary'}
        value={volumeState}
        onChange={(_: Event, newValue: number) => {
          if (_.type === 'mousedown') return;
          setVolumeState(newValue);
        }}
        onChangeCommitted={() => {
          setVolume(volumeScale(volumeState));
        }}
      />
    </>
  );
};
