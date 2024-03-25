import styled from 'styled-components';
import colors from 'src/constants/colors';

export const Wrap = styled.div`
  position: absolute;
  top: 74px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;
  gap: 8px;

  color: ${colors.yellow};
  cursor: pointer;
`;

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
