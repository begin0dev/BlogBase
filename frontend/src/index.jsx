"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("react-app-polyfill/ie11");
var React = require("react");
var ReactDOM = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var createBrowserHistory_1 = require("history/createBrowserHistory");
var App_1 = require("./App");
var configureStore_1 = require("./store/configureStore");
var serviceWorker = require("./serviceWorker");
require("./styles/main.scss");
var store = configureStore_1.default(createBrowserHistory_1.default);
ReactDOM.render(<react_hot_loader_1.AppContainer>
    <react_redux_1.Provider store={store}>
      <react_router_dom_1.BrowserRouter>
        <App_1.default />
      </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>
  </react_hot_loader_1.AppContainer>, document.getElementById('react-root'));
serviceWorker.unregister();
