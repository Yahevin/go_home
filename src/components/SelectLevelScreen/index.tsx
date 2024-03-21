import React from 'react';
import store from 'store2';
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { LevelKeys, levelTableKeys } from 'src/constants/levels';
import { getDescription } from 'src/utils/getDescription';
import { selected_level } from 'src/constants/storeKeys';
import { useStore } from 'src/hooks/useStore';
import { stage } from 'src/constants/stages';
import text from 'src/constants/text';
import { Button, Wrap, SX } from './styles';
import { RadioBtn } from './Radio';
import { updateConcentration } from 'src/utils/updateConcentration';

export const SelectLevelScreen = () => {
  const { setCurrentStage, level, setLevel } = useStore((state) => ({
    setCurrentStage: state.setCurrentStage,
    level: state.level,
    setLevel: state.setLevel,
  }));

  const handleClick = () => {
    setCurrentStage(stage.PREPARE_TO_INPUT);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = (event.target as HTMLInputElement).value as LevelKeys;
    setLevel(selected);

    store.set(selected_level, selected);

    // пересчет на новую массу
    updateConcentration();
  };

  return (
    <>
      <FormControl>
        <RadioGroup name="level-select" value={level} onChange={handleChange} row sx={SX}>
          <FormControlLabel value={levelTableKeys.a} control={<RadioBtn content={'🦊️'} />} label="" />
          <FormControlLabel value={levelTableKeys.b} control={<RadioBtn content={'🐴️'} />} label="" />
          <FormControlLabel value={levelTableKeys.c} control={<RadioBtn content={'👾'} />} label="" />
          <FormControlLabel value={levelTableKeys.d} control={<RadioBtn content={'🤖'} />} label="" />
        </RadioGroup>
      </FormControl>

      <Wrap>{getDescription(level)}</Wrap>

      <Button variant="outlined" color="secondary" onClick={handleClick}>
        {text.NEXT}
      </Button>
    </>
  );
};
