import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducerFn, []);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ cart, dispatch, cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
