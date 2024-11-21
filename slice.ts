import { configureStore, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  qty: number;
}

type CartState = CartItem[];

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("onCreate Store: ", store.getState());

store.subscribe(() => {
  console.log("onChange Store: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 12 }));
