import { createTheme } from '@mui/material/styles';
import colors from 'src/constants/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.yellow,
    },
    secondary: {
      main: colors.green,
    },
  },
});

export default theme;
