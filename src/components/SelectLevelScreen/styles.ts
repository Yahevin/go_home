import styled from 'styled-components';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';

import text from 'src/constants/text';
import { Description } from 'src/shared/Description';
import { ButtonShared, ButtonType } from 'src/shared/Button';

export const DescriptionWeight = styled(Description(text.WEIGHT_SELECT_TITLE))`
  margin: 20px 0 32px 0;
`;

export const DescriptionLevel = styled(Description(text.LEVEL_SELECT_TITLE))`
  margin-top: 20px;
  min-height: 120px;
`;

export const Button: ButtonType = styled(ButtonShared)`
  margin: 24px auto;
`;

export const SX: SxProps = {
  justifyContent: 'center',

  '& .MuiFormControlLabel-root:last-child': {
    marginRight: 0,
  },
};
