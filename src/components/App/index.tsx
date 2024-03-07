import React, { useEffect, useMemo } from 'react';
import { Content, Wrap, Footer, Counter } from './styles';
import { stage } from 'src/constants/stages';
import { useStore } from 'src/hooks/useStore';
import { InitialScreen } from 'src/components/InitialScreen';
import { SelectLevelScreen } from 'src/components/SelectLevelScreen';
import { PrepareScreen } from 'src/components/PrepareScreen';
import { InputScreen } from 'src/components/InputScreen';

export const App = () => {
  const currentStage = useStore((state) => state.currentStage);
  const concentration = useStore((state) => state.concentration);

  const getScreen = useMemo(() => {
    switch (currentStage) {
      case stage.INITIAL:
      default: {
        return () => <InitialScreen />;
      }
      case stage.SELECT_LEVEL: {
        return () => <SelectLevelScreen />;
      }
      case stage.PREPARE_TO_INPUT: {
        return () => <PrepareScreen />;
      }
      case stage.VALUE_INPUT: {
        return () => <InputScreen />;
      }
    }
  }, [currentStage]);

  return (
    <Wrap>
      <Counter>{concentration.toFixed(5)}</Counter>
      <Content>{getScreen()}</Content>
      <Footer>Поддержать проект</Footer>
    </Wrap>
  );
};
