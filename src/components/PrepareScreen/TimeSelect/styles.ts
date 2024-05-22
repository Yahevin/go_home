import styled from 'styled-components';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Subtitle } from 'src/shared/Subtitle';

export const SX: SxProps = {
  '& .MuiFormControlLabel-root:last-child': {
    marginRight: 0,
  },
};

export const Wrap = styled.div`
  margin-top: 16px;
`;

export const StyledSubtitle = styled(Subtitle)`
  margin: 24px 0 12px 0;
`;
