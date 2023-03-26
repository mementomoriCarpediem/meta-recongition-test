import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { RecoilRoot } from 'recoil';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

//Google Anayltics
// const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID || '';
// ReactGA.initialize(TRACKING_ID);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
);
