export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  INIT_CART: "INIT_CART",
};

export const cartInitialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTION_TYPES.INIT_CART:
      return action.payload;

    case CART_ACTION_TYPES.ADD_TO_CART:
      return [...state, action.payload];

    default:
      return state;
  }
}
