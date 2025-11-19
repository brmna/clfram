"use client";
import { useContext } from "react";
import { CartContext } from "@/app/context/cart";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context; // retorna { cart, addToCart, ... }
}
