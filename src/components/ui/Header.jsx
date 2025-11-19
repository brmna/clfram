"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";

const logo = "/logo.png";
const banner = "/banner.png"; // reemplaza con la ruta de tu banner

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, dispatch } = useCart();

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    dispatch({ type: "INIT_CART", payload: newCart });
  };

  const changeQuantity = (index, qty) => {
    const newCart = [...cart];
    if (qty < 1) qty = 1;
    newCart[index] = { ...newCart[index], cantidad: qty };
    dispatch({ type: "INIT_CART", payload: newCart });
  };

  const total = cart.reduce((acc, item) => acc + (item.precio * (item.cantidad || 1)), 0);

  return (
    <header className="relative w-full flex flex-col">

      {/* Banner con capa de opacidad */}
      <div className="w-full h-[400px] sm:h-[400px] lg:h-[400px] relative overflow-hidden">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        {/* Capa de opacidad */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 text-black">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" width={45} height={45} className="rounded-md" />
            <span className="font-bold text-lg">CloseShop</span>
          </a>

          <div className="hidden sm:flex items-center gap-8 font-semibold">
            <a href="/" className="hover:text-amber-950 transition">Home</a>
            <a href="/services" className="hover:text-amber-950 transition">Productos</a>
            <a href="/contact" className="hover:text-amber-950 transition">Contáctenos</a>
            <a href="/about" className="hover:text-amber-950 transition">Nosotros</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="text-xl hover:scale-110 transition relative"
              onClick={() => setCartOpen(!cartOpen)}
            >
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            <div className="hidden sm:flex items-center gap-3">
              <a href="/login" className="border border-black px-3 py-1 rounded-md font-semibold hover:bg-white/50 hover:text-black transition">Inicia sesión</a>
              <a href="/register" className="border border-black bg-amber-950/70 text-white px-3 py-1 rounded-md font-semibold hover:bg-amber-950/80 transition">Registrarse</a>
            </div>

            <button
              className="sm:hidden text-2xl p-2 rounded-md hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden flex flex-col bg-white shadow-md text-center py-4 space-y-2.5 font-semibold">
            <a href="/" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a href="/services" onClick={() => setMenuOpen(false)}>Productos</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contáctenos</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>Nosotros</a>
            <hr className="border-gray-300 w-3/4 mx-auto" />
            <a href="/login" className="border border-black px-3 py-1 rounded-md font-semibold hover:bg-white/50 hover:text-black transition">Iniciar sesión</a>
            <a href="/register" className="border border-black bg-amber-950/70 text-white px-3 py-1 rounded-md font-semibold hover:bg-amber-950/80 transition">Registrarse</a>
          </div>
        )}
      </nav>

      {/* Sidebar carrito */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold">Tu carrito</h2>
          <button onClick={() => setCartOpen(false)} className="text-xl font-bold">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 && <p className="text-gray-500">No hay productos en el carrito</p>}

          {cart.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border rounded-xl shadow hover:shadow-lg transition">
              <img src={item.imagenes[0]} alt={item.nombre} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1 flex flex-col">
                <p className="font-semibold">{item.nombre}</p>
                <p className="text-sm text-green-600">${item.precio.toLocaleString("es-CO")}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => changeQuantity(index, (item.cantidad || 1) - 1)} className="border px-2 py-1 rounded hover:bg-gray-200 transition">-</button>
                  <input type="number" min="1" value={item.cantidad || 1} onChange={(e) => changeQuantity(index, parseInt(e.target.value))} className="w-12 text-center border rounded px-1 py-0.5 " />
                  <button onClick={() => changeQuantity(index, (item.cantidad || 1) + 1)} className="border px-2 py-1 rounded hover:bg-gray-200 transition ">+</button>
                  <button onClick={() => removeFromCart(index)} className="ml-auto text-red-500 hover:text-red-700 font-bold">✕</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t">
            <p className="font-bold text-lg mb-3 text-green-700">Total: ${total.toLocaleString("es-CO")}</p>
            <button className="w-full bg-amber-950 text-white py-3 rounded-lg font-semibold hover:bg-amber-950/90 transition">Pagar</button>
          </div>
        )}
      </div>

      {/* Botón flotante */}
      <button className="text-2xl fixed bottom-7 right-7 p-5 rounded-full hover:bg-amber-950/80 hover:scale-105 transition bg-amber-950/70 backdrop-blur-md shadow-lg z-40" onClick={() => setCartOpen(!cartOpen)}>
        🛒
      </button>
    </header>
  );
}
