import React from 'react';
import CountUp from 'react-countup';
import { useStore } from 'src/hooks/useStore';
import { Wrap } from './styles';

export const Counter = () => {
  const concentration = useStore((state) => state.concentration);

  return (
    <Wrap>
      <CountUp duration={0.4} decimals={5} preserveValue={true} end={concentration} />
    </Wrap>
  );
};
