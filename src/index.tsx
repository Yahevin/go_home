import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyle from 'src/constants/globalStyle';
import theme from 'src/constants/theme';
import { App } from 'src/components/App';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
