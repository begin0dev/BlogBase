import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import './styles/main.scss';

const store = configureStore(createBrowserHistory);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('react-root'),
);

serviceWorker.unregister();
