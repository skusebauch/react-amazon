import * as actionType from "./actionTypes";

export const initialState = {
  basket: [],
  user: null,
};

// SELECTOR
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // BASKET - reducer
    case actionType.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actionType.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case actionType.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    // USER - reducer
    case actionType.SET_USER:
      return {
        ...state,
        //action "user" you set this at app.js dispatch object
        user: action.user,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
