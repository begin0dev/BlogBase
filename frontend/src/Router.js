import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainPage, ProfilePage, TestPage } from 'pages';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/category/:name" component={TestPage} />
      <Route path="/*" component={TestPage} />
    </Switch>
  );
};

export default Router;
