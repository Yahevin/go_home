import React, { useState } from 'react';
import store from 'store2';
import { FormControlLabel, RadioGroup } from '@mui/material';

import text from 'src/constants/text';
import { stage } from 'src/constants/stages';
import { getDescription } from 'src/utils/getDescription';
import { LevelKeys, levelTableKeys } from 'src/constants/levels';
import { updateConcentration } from 'src/utils/updateConcentration';
import { useStore } from 'src/hooks/useStore';
import { FormControl } from 'src/shared/FormControl';
import { marksWeight } from 'src/components/SelectLevelScreen/constants';
import { Slider } from 'src/components/PrepareScreen/ValueInput/styles';

import { Button, SX, DescriptionLevel, DescriptionWeight } from './styles';
import { RadioBtn } from './Radio';

export const SelectLevelScreen = () => {
  const isVisibleTips = useStore((state) => state.isVisibleTips);
  const setCurrentStage = useStore((state) => state.setCurrentStage);
  const level = useStore((state) => state.level);
  const setLevel = useStore((state) => state.setLevel);
  const weight = useStore((state) => state.weight);
  const setWeight = useStore((state) => state.setWeight);

  const [weightState, setWeightState] = useState(weight);

  const handleClick = () => {
    setCurrentStage(stage.PREPARE_TO_INPUT);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = (event.target as HTMLInputElement).value as LevelKeys;
    setLevel(selected);

    // пересчет на новую сопротивляемость
    updateConcentration();
  };

  return (
    <>
      <FormControl>
        <Slider
          step={5}
          min={45}
          max={100}
          marks={marksWeight}
          valueLabelDisplay="auto"
          color={'primary'}
          value={weightState}
          onChange={(_: Event, newValue: number) => {
            if (_.type === 'mousedown') return;
            setWeightState(newValue);
          }}
          onChangeCommitted={() => {
            setWeight(weightState);

            // пересчет на новую массу
            updateConcentration();
          }}
        />

        {isVisibleTips && <DescriptionWeight>{text.HOW_CONCENTRATION_COUNTS}</DescriptionWeight>}

        <RadioGroup name="level-select" value={level} onChange={handleChange} row sx={SX}>
          <FormControlLabel value={levelTableKeys.a} control={<RadioBtn content={'🦊️'} />} label="" />
          <FormControlLabel value={levelTableKeys.b} control={<RadioBtn content={'🐴️'} />} label="" />
          <FormControlLabel value={levelTableKeys.c} control={<RadioBtn content={'👾'} />} label="" />
          <FormControlLabel value={levelTableKeys.d} control={<RadioBtn content={'🤖'} />} label="" />
        </RadioGroup>
      </FormControl>

      {isVisibleTips && <DescriptionLevel>{getDescription(level)}</DescriptionLevel>}

      <Button variant="outlined" color="secondary" onClick={handleClick}>
        {text.NEXT}
      </Button>
    </>
  );
};
