import React from 'react';
import Main from './pages/Main';

import GlobalStyle from './GlobalStyle';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Main />
      </AppProvider>
    </>
    
  )
}


export default App;
