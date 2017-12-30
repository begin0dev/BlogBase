import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MainPage, TestPage } from 'pages'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/test" component={TestPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default Root
