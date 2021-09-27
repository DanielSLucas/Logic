import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import defaultTheme from '../styles/themes/default';
// import darkTheme from '../styles/themes/dark';
import AppProvider from '../hooks';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </ThemeProvider>
);

export default MyApp;
