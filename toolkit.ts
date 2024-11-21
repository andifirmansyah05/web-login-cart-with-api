import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  qty: number;
}

type CartState = CartItem[]

const addToCart = createAction<CartItem>("ADD_TO_CART");

const cartReducer = createReducer<CartState>([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("onCreate Store: ", store.getState());

store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 4 }));
store.dispatch(addToCart({ id: 2, qty: 6 }));
