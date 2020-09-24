import * as actionType from "./actionTypes";

export const initialState = {
  basket: [],
};

// SELECTOR
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
