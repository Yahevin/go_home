import styled from 'styled-components';
import text from 'src/constants/text';
import colors from 'src/constants/colors';
import { Description } from 'src/shared/Description';
import { ButtonShared, ButtonType } from 'src/shared/Button';

export const Wrap = Description(text.HISTORY_PAGE);

export const Button: ButtonType = styled(ButtonShared)`
  margin: 24px auto;
`;

export const Item = styled.div`
  text-align: center;
  color: ${colors.yellow};

  & + & {
    margin-top: 12px;
  }
`;
