"use client";
import { createContext, useReducer, useContext } from "react";

// 1. Definir las acciones que se pueden realizar en el carrito.
// Esto ayuda a evitar errores de tipeo y mantiene la consistencia.
const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART", // Elimina un producto sin importar la cantidad
  DECREASE_QUANTITY: "DECREASE_QUANTITY", // Reduce la cantidad de un producto
  CLEAR_CART: "CLEAR_CART",
};

// 2. El estado inicial de nuestro carrito.
const initialState = [];

// 3. La función Reducer: el cerebro del carrito.
// Recibe el estado actual y una acción, y devuelve el NUEVO estado.
const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const product = action.payload;
      const productInCartIndex = state.findIndex((item) => item.id === product.id);

      // Si el producto ya está en el carrito, incrementamos su cantidad.
      if (productInCartIndex >= 0) {
        const newCart = [...state]; // Copia inmutable del estado
        newCart[productInCartIndex].quantity += 1;
        return newCart;
      }

      // Si el producto no está, lo agregamos con cantidad 1.
      return [
        ...state,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    case actionTypes.REMOVE_FROM_CART: {
      const productId = action.payload;
      // Filtramos el estado, devolviendo un nuevo array sin el producto.
      return state.filter((item) => item.id !== productId);
    }

    case actionTypes.CLEAR_CART: {
      // Simplemente devolvemos el estado inicial (un array vacío).
      return initialState;
    }

    // Aquí podrías agregar más casos como DECREASE_QUANTITY

    default:
      // Si la acción no coincide con ninguna, devolvemos el estado sin cambios.
      return state;
  }
};
// 1. Crear el Contexto
// Este es el objeto que los componentes usarán para acceder a los datos del carrito.
export const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito más fácilmente
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

// 2. Crear el Proveedor del Contexto (Provider)
// Este componente envolverá nuestra aplicación (o las partes que necesiten el carrito)
// y manejará toda la lógica (agregar, eliminar, etc.).
export const CartProvider = ({ children }) => {
  // 4. Usamos useReducer en lugar de useState.
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 5. Creamos funciones más amigables que despachan las acciones.
  // Los componentes llamarán a estas funciones en lugar de a `dispatch` directamente.
  const addToCart = (product) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  // El valor que proveemos a los componentes hijos
  const value = {
    cart: state, // El estado del carrito ahora viene de `useReducer`
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
