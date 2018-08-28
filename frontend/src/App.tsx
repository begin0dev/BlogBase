import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PageTemplate } from 'components';
import { MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';

const App = () => (
  <PageTemplate>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/category/:name" component={CategoryPage} />
      <Route path="/*" component={NotFoundPage} />
    </Switch>
  </PageTemplate>
);

export default App;
