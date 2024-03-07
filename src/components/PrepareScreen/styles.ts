import styled from 'styled-components';
import text from 'src/constants/text';
import { ButtonShared, ButtonType } from 'src/shared/Button';
import { Description } from 'src/shared/Description';

export const Wrap = styled(Description(text.TIME_SELECT_TITLE))`
  margin-top: 20px;
`;

export const Button: ButtonType = styled(ButtonShared)`
  margin: 24px auto 0 auto;
`;

export const Input = '';
