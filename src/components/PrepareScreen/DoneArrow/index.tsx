import React, { MutableRefObject, useEffect, useState } from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Animated, Wrap, duration } from './styles';

export const DoneArrow = React.forwardRef((props, ref: MutableRefObject<() => void>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    ref.current = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsVisible(true);

      setTimeout(() => setIsVisible(false), duration);
    };
  }, []);

  return isVisible ? (
    <Wrap>
      <Animated>
        <DoneOutlineIcon />
      </Animated>
    </Wrap>
  ) : null;
});
