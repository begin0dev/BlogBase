import React from 'react';
import { Provider } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';

import { MainPage, ProfilePage, TestPage } from 'pages';

const Router = ({ store }) => {
  return (
    <Provider {...store}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/category/:name" component={TestPage} />
        <Route path="/*" component={TestPage} />
      </Switch>
    </Provider>
  );
};

export default Router;
