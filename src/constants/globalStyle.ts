import { createGlobalStyle } from 'styled-components';
import colors from 'src/constants/colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.purple};
    color: ${colors.white};
    font-family: 'Kode Mono', monospace;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
