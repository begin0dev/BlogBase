"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_saga_1 = require("redux-saga");
var react_router_redux_1 = require("react-router-redux");
var redux_1 = require("redux");
var sagas_1 = require("./sagas");
var modules_1 = require("./modules");
/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
var sagaMiddleware = redux_saga_1.default();
function configureStore(history) {
    var middleware = [sagaMiddleware, react_router_redux_1.routerMiddleware(history)];
    // Installs hooks that always keep react-router and redux
    // store in sync
    var enhancer = process.env.NODE_ENV === 'development' ?
        redux_1.compose(redux_1.applyMiddleware.apply(void 0, middleware), typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) { return f; })
        :
            redux_1.compose(redux_1.applyMiddleware.apply(void 0, middleware));
    var store = redux_1.createStore(modules_1.default, enhancer);
    sagaMiddleware.run(sagas_1.default);
    if (module.hot) {
        // Enable Webpack hot module replacement for modules
        module.hot.accept('./modules', function () {
            var nextReducer = require('./modules');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
exports.default = configureStore;
