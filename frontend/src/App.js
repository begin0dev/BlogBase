import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PageTemplate } from 'components/index';
import { MainPage, ProfilePage, CategoryPage } from 'pages';

const App = () => {
  return (
    <BrowserRouter>
      <PageTemplate>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/category/:name" component={CategoryPage} />
          <Route path="/*" component={CategoryPage} />
        </Switch>
      </PageTemplate>
    </BrowserRouter>
  );
};

export default App;
