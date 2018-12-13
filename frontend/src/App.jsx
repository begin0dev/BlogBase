"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_hot_loader_1 = require("react-hot-loader");
var components_1 = require("components");
var pages_1 = require("pages");
var App = function () { return (<components_1.PageTemplate>
    <react_router_dom_1.Switch>
      <react_router_dom_1.Route exact path="/" component={pages_1.MainPage}/>
      <react_router_dom_1.Route path="/profile" component={pages_1.ProfilePage}/>
      <react_router_dom_1.Route path="/category/:name(all|node|javascript)" component={pages_1.CategoryPage}/>
      <react_router_dom_1.Route path="/*" component={pages_1.NotFoundPage}/>
    </react_router_dom_1.Switch>
  </components_1.PageTemplate>); };
exports.default = react_hot_loader_1.hot(module)(App);
