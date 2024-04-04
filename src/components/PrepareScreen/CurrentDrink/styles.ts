import styled from 'styled-components';
import colors from 'src/constants/colors';
import { ButtonShared, ButtonType } from 'src/shared/Button';

export const Completion = styled.div``;

export const Count = styled.div`
  font-size: 12px;
  line-height: 26px;
  margin-left: -6px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Value = styled.div`
  text-align: center;
`;

export const Button: ButtonType = styled(ButtonShared)`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 6px 26px;

  color: ${colors.yellow};
  cursor: pointer;
`;
