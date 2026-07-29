import React from 'react';
import { HashRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <MainContainer />
    </HashRouter>
  );
};

export default App;
