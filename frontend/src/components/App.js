import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainPage, TestPage } from 'pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    );
  }
}

export default App;