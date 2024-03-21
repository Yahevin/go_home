import styled, { keyframes } from 'styled-components';
import colors from 'src/constants/colors';

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  & svg {
    height: 135px;
    width: 135px;
    color: ${colors.yellow};
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px);
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(0);
  }
`;
export const duration = 1000;

export const Animated = styled.div`
  animation: ${fade} ${duration}ms ease-out;
  opacity: 0;
`;
