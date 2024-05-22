import styled from 'styled-components';
import text from 'src/constants/text';
import { ButtonShared, ButtonType } from 'src/shared/Button';
import { Description } from 'src/shared/Description';

export const Wrap = styled(Description(text.TIME_SELECT_TITLE))`
  margin-top: 20px;
`;

export const ButtonWrap = styled.div`
  margin: 24px 0 0 0;

  display: flex;
  justify-content: center;
`;

export const Button: ButtonType = styled(ButtonShared)`
  & + & {
    margin-left: 12px;
  }
`;

export const Input = '';
