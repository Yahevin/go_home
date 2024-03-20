import styled from 'styled-components';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';

export const SX: SxProps = {
  '& .MuiFormControlLabel-root:last-child': {
    marginRight: 0,
  },
};

export const Wrap = styled.div`
  margin-top: 16px;
`;
