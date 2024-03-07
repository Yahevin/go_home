import styled from 'styled-components';
import colors from 'src/constants/colors';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${colors.purple};
  border: 2px solid ${colors.grey};
  min-height: 100dvh;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 40px 40px;
`;

export const Footer = styled.footer`
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Counter = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.yellow};
`;
