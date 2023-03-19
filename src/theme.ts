import { Container } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#CCD5AE',
      light: '#E9EDC9',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100vh',
        },
        '#root': {
          height: '100%',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
  },
});

export default theme;
