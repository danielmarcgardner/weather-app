import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import ZipRefreshWrapper from '../zip-refresh-wrapper';

import '../../styles/core.css';

//The react application surrounded by the BrowserRouter from react-router-dom
export const App = () => (
  <BrowserRouter>
    <div className="app">
      {/* Interval is set to 30 seconds. While the prompt called for every 5 min to update.
        If there are multiple zips in state checking every 30 seconds to see if one is more than 5 min old.
        Otherwise there would be a mass update every 5 min and some may not be 5 min old yet. */}
      <ZipRefreshWrapper interval={ 30000 }>
        <Routes />
      </ZipRefreshWrapper>
    </div>
  </BrowserRouter>
);

export default App;
