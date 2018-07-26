import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import './styles/main.scss';

const store = configureStore(createBrowserHistory);

const renderDOM = Component => render(
  <AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>
  </AppContainer>,
  document.getElementById('react-root'),
);

renderDOM(App);

if (module.hot) {
  module.hot.accept('./App', () => renderDOM(App));
}

registerServiceWorker();
