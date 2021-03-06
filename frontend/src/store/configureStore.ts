import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas';
import rootReducer from './modules';

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  // Installs hooks that always keep react-router and redux
  // store in sync
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(sagaMiddleware))
      : compose(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for modules
    module.hot.accept('./modules', () => {
      const nextReducer = require('./modules');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
