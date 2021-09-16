import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import defaultTheme from '../styles/themes/default';
import AppProvider from '../hooks';

import { Container } from '../styles/App';
import SideBar from '../components/SideBar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Container>
      <main>
        <SideBar />
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </main>
    </Container>
  </ThemeProvider>
);

export default MyApp;
