import styled from 'styled-components';
import text from 'src/constants/text';
import { ButtonShared, ButtonType } from 'src/shared/Button';
import { Description } from 'src/shared/Description';

export const Wrap = styled(Description(text.LEVEL_SELECT_TITLE))`
  margin-top: 20px;
  min-height: 160px;
`;

export const Button: ButtonType = styled(ButtonShared)`
  margin: 24px auto;
`;

export const SX = {
  '& .MuiFormControlLabel-root:last-child': {
    marginRight: 0,
  },
};
