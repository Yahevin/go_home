import styled, { keyframes } from 'styled-components';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import colors from 'src/constants/colors';

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.25);
  }
  25% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

export const ButtonPosition = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;

  animation: ${scale} 4s ease-in 3s infinite;
`;

export const BoxSX: SxProps = { width: 220, height: '100%' };

export const DrawerSX: SxProps = {
  [`& .MuiDrawer-paper`]: {
    backgroundColor: `${colors.purple}cc`,
    borderLeft: `2px solid ${colors.purple}`,
  },
};
