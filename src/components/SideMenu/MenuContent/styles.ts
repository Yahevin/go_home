import styled from 'styled-components';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  padding: 40px 20px;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const ButtonSX: SxProps = {
  display: 'flex',
  gap: '10px',
  textAlign: 'left',
  justifyContent: 'flex-start',
};
