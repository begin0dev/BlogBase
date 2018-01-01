import React from 'react'
import ReactDOM from 'react-dom'
import Promise from 'promise'
import { AppContainer } from 'react-hot-loader'

import Router from './Router'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

import './styles/main.scss'

if (!window.Promise) {
  window.Promise = Promise
}

const render = (Component) => ReactDOM.render(
  (
    <AppContainer>
      <Component store={store} />
    </AppContainer>
  ),
  document.getElementById('react-root')
)

render(Router)

if (module.hot) {
  module.hot.accept('./Router', () => render(Router))
}

registerServiceWorker()
