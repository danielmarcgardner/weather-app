import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';

import '../styles/core.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
