import styled from 'styled-components';
import colors from 'src/constants/colors';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${colors.purple};
  min-height: 100dvh;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 40px 100px 40px;
`;

export const Footer = styled.footer`
  flex: 0 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
