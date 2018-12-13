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
var initFormData = {
    displayName: '',
    email: '',
    password: '',
};
exports.defaultState = {
    form: __assign({}, initFormData),
    state: {
        form: 'signin',
        active: false,
        loading: false,
    },
};
exports.default = (function (state, action) {
    if (state === void 0) { state = exports.defaultState; }
    var _a;
    switch (action.type) {
        case 'INITIALIZE_FORM_DATA':
            return __assign({}, state, { form: __assign({}, initFormData) });
        case 'CHANGE_ACCOUNT_FORM_VALUE':
            return __assign({}, state, { form: __assign({}, state.form, (_a = {}, _a[action.name] = action.value, _a)) });
        default:
            return state;
    }
});
