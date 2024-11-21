"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var configureStore = toolkit_1.default.configureStore, createAction = toolkit_1.default.createAction, createReducer = toolkit_1.default.createReducer;
var addToCart = createAction("ADD_TO_CART");
var cartReducer = createReducer([], function (builder) {
    builder.addCase(addToCart, function (state, action) {
        state.push(action, payload);
    });
});
var store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
store.subscribe(function () {
    console.log("onCreate Store: ", store.getState());
});
store.subscribe(function () {
    console.log("Store Change: ", store.getState());
});
store.dispatch(addToCart({ id: 1, qty: 4 }));
