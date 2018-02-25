import React from 'react';
import { useStrict } from 'mobx';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import store from './store';

// For easier debugging
window._____APP_STATE_____ = store;
useStrict(true);

const App = () => {
  return (
    <BrowserRouter>
      <Router store={store} />
    </BrowserRouter>
  );
};

export default App;
