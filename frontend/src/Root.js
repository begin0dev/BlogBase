import React from 'react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import store from './store';

// For easier debugging
window._____APP_STATE_____ = store;
useStrict(true);

const App = () => {
  return (
    <Provider {...store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
