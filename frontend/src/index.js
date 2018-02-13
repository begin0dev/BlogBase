import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise';
import { AppContainer } from 'react-hot-loader';
import { useStrict } from 'mobx';

import Router from './Router';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './styles/main.scss';

// For easier debugging
window._____APP_STATE_____ = store;
useStrict(true);

if (!window.Promise) {
  window.Promise = Promise;
}

const render = (Component) => {
  ReactDOM.render(
    (
      <AppContainer>
        <Component store={store} />
      </AppContainer>
    ),
    document.getElementById('react-root'),
  );
};

render(Router);

if (module.hot) {
  module.hot.accept('./Router', () => render(Router));
}

registerServiceWorker();
