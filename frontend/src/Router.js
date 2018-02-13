import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainPage, ProfilePage, TestPage } from 'pages';

const Router = ({ store }) => {
  return (
    <Provider {...store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/test" component={TestPage} />
          <Route path="/*" component={TestPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
