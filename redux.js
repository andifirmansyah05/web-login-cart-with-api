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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
// Reducer
var cardReducer = function (state, action) {
    if (state === void 0) { state = {
        card: [],
    }; }
    switch (action.type) {
        case "ADD_TO_CARD":
            return __assign(__assign({}, state), { card: __spreadArray(__spreadArray([], state.card, true), [action.payload], false) });
        default:
            return state;
    }
};
// Store
var store = (0, redux_1.createStore)(cardReducer);
console.log("onCreate Store: ", store.getState());
// Subscribe
store.subscribe(function () {
    console.log("Store Change: ", store.getState());
});
// Dispatch
var action1 = { type: "ADD_TO_CARD", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
