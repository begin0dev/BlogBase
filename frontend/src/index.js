import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Promise from 'promise'

import Root from './Root'
import store from './store/store'
import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'
import './styles/main.scss'

if(!window.Promise) {
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

render(Root)

if(module.hot) {
  module.hot.accept('./Root', () => render(Root))
}

registerServiceWorker()
