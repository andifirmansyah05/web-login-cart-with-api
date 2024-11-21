import { createStore } from "redux";

// Reducer
const cardReducer = (
  state = {
    card: [],
  },
  action
) => {
    
  switch (action.type) {
    case "ADD_TO_CARD":
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = createStore(cardReducer);
console.log("onCreate Store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

// Dispatch
const action1 = { type: "ADD_TO_CARD", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CARD", payload: { id: 4, qty: 2 } };
store.dispatch(action2);
