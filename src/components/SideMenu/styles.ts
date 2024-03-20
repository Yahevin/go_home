import styled from 'styled-components';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import colors from 'src/constants/colors';

export const ButtonPosition = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
`;

export const BoxSX: SxProps = { width: 220, height: '100%' };

export const DrawerSX: SxProps = {
  [`& .MuiDrawer-paper`]: {
    backgroundColor: `${colors.purple}cc`,
    borderLeft: `2px solid ${colors.purple}`,
  },
};
