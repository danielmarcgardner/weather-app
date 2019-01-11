import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import ZipRefreshWrapper from '../zip-refresh-wrapper';

import '../../styles/core.css';

export const App = () => (
  <BrowserRouter>
    <div className="app">
      <ZipRefreshWrapper interval={ 30000 }>
        <Routes />
      </ZipRefreshWrapper>
    </div>
  </BrowserRouter>
);

export default App;
