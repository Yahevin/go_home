import React from 'react';
import CountUp from 'react-countup';
import { useUpdateCounter } from 'src/hooks/useUpdateCounter';
import { Wrap } from './styles';

export const Counter = () => {
  const concentration = useUpdateCounter();

  return (
    <Wrap>
      <CountUp duration={0.4} decimals={5} preserveValue={true} end={concentration} />
    </Wrap>
  );
};
