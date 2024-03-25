import styled from 'styled-components';
import colors from 'src/constants/colors';

export const Overlay = styled.div`
  background-color: ${colors.purple}cc;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100dvh;
`;

export const Wrap = styled.div`
  width: calc(100% - 120px);
  min-height: 300px;

  background-color: ${colors.purple};
  border: 1px solid ${colors.grey};
  box-shadow: 0 0 4px ${colors.yellow};
  border-radius: 4px;
  padding: 24px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
