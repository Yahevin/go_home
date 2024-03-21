import React, { useMemo } from 'react';
import { stage } from 'src/constants/stages';
import { useStore } from 'src/hooks/useStore';
import { useUpdateCounter } from 'src/hooks/useUpdateCounter';
import { SideMenu } from 'src/components/SideMenu';
import { InitialScreen } from 'src/components/InitialScreen';
import { PrepareScreen } from 'src/components/PrepareScreen';
import { SelectLevelScreen } from 'src/components/SelectLevelScreen';
import { IntoxicationInfo } from 'src/components/IntoxicationInfo';
import { Counter } from './Counter';
import { Download } from './Download';
import { Content, Wrap } from './styles';

export const App = () => {
  const currentStage = useStore((state) => state.currentStage);

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

  useUpdateCounter();

  return (
    <Wrap>
      <Counter />
      <Download />
      <Content>{getScreen()}</Content>
      <SideMenu />
    </Wrap>
  );
};
