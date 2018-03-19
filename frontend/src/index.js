import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/main.scss';

const store = configureStore(createBrowserHistory);

const renderDOM = Component => render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('react-root'),
);

renderDOM(App);

if (module.hot) {
  module.hot.accept('./App', () => renderDOM(App));
}

registerServiceWorker();
