"use client";
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
};

export const cartInitialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const existingIndex = state.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.talla === action.payload.talla &&
          item.estilo === action.payload.estilo
      );
      if (existingIndex !== -1) {
        const updatedState = [...state];
        updatedState[existingIndex].cantidad += action.payload.cantidad;
        return updatedState;
      }
      return [...state, action.payload];
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return state.filter((item, idx) => idx !== action.payload);
    case CART_ACTION_TYPES.UPDATE_QUANTITY:
      return state.map((item, idx) =>
        idx === action.payload.index
          ? { ...item, cantidad: action.payload.cantidad }
          : item
      );
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (producto) =>
    dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: producto });
  const removeFromCart = (index) =>
    dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: index });
  const updateQuantity = (index, cantidad) =>
    dispatch({
      type: CART_ACTION_TYPES.UPDATE_QUANTITY,
      payload: { index, cantidad },
    });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
