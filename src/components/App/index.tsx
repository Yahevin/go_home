import React, { useMemo } from 'react';
import { Content, Wrap, Counter } from './styles';
import { stage } from 'src/constants/stages';
import { useStore } from 'src/hooks/useStore';
import { SideMenu } from 'src/components/SideMenu';
import { InitialScreen } from 'src/components/InitialScreen';
import { PrepareScreen } from 'src/components/PrepareScreen';
import { SelectLevelScreen } from 'src/components/SelectLevelScreen';
import { IntoxicationInfo } from 'src/components/IntoxicationInfo';

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
      case stage.INTOXICATION_INFO: {
        return () => <IntoxicationInfo />;
      }
    }
  }, [currentStage]);

  return (
    <Wrap>
      <Counter>{concentration.toFixed(5)}</Counter>
      <Content>{getScreen()}</Content>
      <SideMenu />
    </Wrap>
  );
};
