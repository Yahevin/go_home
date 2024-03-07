import React, { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { LevelKeys, levelTableKeys } from 'src/constants/levels';
import { getDescription } from 'src/utils/getDescription';
import { useStore } from 'src/hooks/useStore';
import { stage } from 'src/constants/stages';
import text from 'src/constants/text';
import { Button, Wrap, SX } from './styles';
import { RadioBtn } from './Radio';

export const SelectLevelScreen = () => {
  const setCurrentStage = useStore((state) => state.setCurrentStage);

  const handleClick = () => {
    setCurrentStage(stage.PREPARE_TO_INPUT);
  };

  const [value, setValue] = useState<LevelKeys>(levelTableKeys.b);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as LevelKeys);
  };

  return (
    <>
      <FormControl>
        <RadioGroup name="level-select" value={value} onChange={handleChange} row sx={SX}>
          <FormControlLabel value={levelTableKeys.a} control={<RadioBtn content={'🦊️'} />} label="" />
          <FormControlLabel value={levelTableKeys.b} control={<RadioBtn content={'🐴️'} />} label="" />
          <FormControlLabel value={levelTableKeys.c} control={<RadioBtn content={'👾'} />} label="" />
          <FormControlLabel value={levelTableKeys.d} control={<RadioBtn content={'🤖'} />} label="" />
        </RadioGroup>
      </FormControl>

      <Wrap>{getDescription(value)}</Wrap>

      <Button variant="outlined" color="secondary" onClick={handleClick}>
        {text.NEXT}
      </Button>
    </>
  );
};
