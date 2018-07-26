import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainPage, ProfilePage, CategoryPage } from 'pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/category/:name" component={CategoryPage} />
        <Route path="/*" component={CategoryPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
