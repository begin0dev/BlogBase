"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultState = {
    visible: window.innerWidth >= 768,
    expanded: true,
    searchValue: '',
    searchLoading: false,
};
exports.default = (function (state, action) {
    if (state === void 0) { state = exports.defaultState; }
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return __assign({}, state, { visible: action.visible });
        case 'EXPANDED_NAVI':
            return __assign({}, state, { expanded: action.expand });
        default:
            return state;
    }
});
