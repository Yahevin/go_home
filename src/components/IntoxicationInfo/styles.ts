import styled from 'styled-components';
import text from 'src/constants/text';
import { ButtonShared, ButtonType } from 'src/shared/Button';
import { Description } from 'src/shared/Description';

export const Wrap = Description(text.INFO_TITLE);

export const Button: ButtonType = styled(ButtonShared)`
  margin: 24px auto;
`;
