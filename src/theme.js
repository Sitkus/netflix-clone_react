import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#222222',
    },
    secondary: {
      main: '#D22F27',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function GlobalThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default GlobalThemeProvider;
