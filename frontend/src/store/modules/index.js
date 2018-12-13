"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var react_router_redux_1 = require("react-router-redux");
var sidebar_1 = require("./sidebar");
var account_1 = require("./account");
var rootReducer = redux_1.combineReducers({
    routing: react_router_redux_1.routerReducer,
    account: account_1.default,
    sidebar: sidebar_1.default
});
exports.default = rootReducer;
