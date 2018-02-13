import React from 'react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainPage, ProfilePage, TestPage } from 'pages';

useStrict(true);

const Router = ({ store }) => {
  return (
    <Provider store={store}>
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
