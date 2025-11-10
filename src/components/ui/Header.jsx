"use client";
import { useState } from "react";

const logo = "/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] flex flex-col overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/banner.png')" }}
      />

      {/* Capa de opacidad */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 text-black">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              width={45}
              height={45}
              className="rounded-md"
            />
            <span className="font-bold text-lg">CloseShop</span>
          </a>

          {/* Menú principal (escritorio) */}
          <div className="hidden sm:flex items-center gap-8 font-semibold">
            <a href="/" className="hover:text-amber-950 transition">Home</a>
            <a href="/services" className="hover:text-amber-950 transition">Productos</a>
            <a href="/contact" className="hover:text-amber-950 transition">Contáctenos</a>
            <a href="/about" className="hover:text-amber-950 transition">Nosotros</a>
          </div>

          {/* Sección derecha */}
          <div className="flex items-center gap-4">
            {/* Carrito */}
            <button
              className="text-xl hover:scale-110 transition"
              aria-label="Carrito"
            >
              🛒
            </button>

            {/* Botones de sesión */}
            <div className="hidden sm:flex items-center gap-3 ">
              <a
                href="/login"
                className="border border-black px-3 py-1 rounded-md font-semibold hover:bg-white/50 hover:text-black transition"
              >
                Inicia sesión
              </a>
              <a
                href="/register"
                className="border border-black bg-amber-950/70 text-white px-3 py-1 rounded-md font-semibold hover:bg-amber-950/80 transition"
              >
                Registrarse
              </a>
            </div>

            {/* Botón menú */}
            <button
              className="sm:hidden text-2xl p-2 rounded-md hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>



        {/* Menú móvil */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col bg-white/5 shadow-sm text-center py-4 space-y-2.5 font-semibold">
            <a href="/" className="hover:text-amber-950 transition" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a href="/services" className="hover:text-amber-950 transition" onClick={() => setMenuOpen(false)}>Productos</a>
            <a href="/contact" className="hover:text-amber-950 transition" onClick={() => setMenuOpen(false)}>Contáctenos</a>
            <a href="/about" className="hover:text-amber-950 transition" onClick={() => setMenuOpen(false)}>Nosotros</a>
            <hr className="border-gray-300 w-3/4 mx-auto" />
            <a href="/login" className="border border-black px-3 py-1 rounded-md font-semibold hover:bg-white/50 hover:text-black transition">Iniciar sesión</a>

            <a href="/register" className="border border-black bg-amber-950/70 text-white px-3 py-1 rounded-md font-semibold hover:bg-amber-950/80 transition">Registrarse</a>
          </div>
        )}
      </nav>

      {/* carrito */}
      <button 
        className="text-2xl fixed bottom-7 right-7 p-5 rounded-full hover:bg-amber-950/80 hover:scale-105 transition bg-amber-950/70 backdrop-blur-md shadow-sm z-50">
        🛒
      </button> 
    </header>
  );
}
