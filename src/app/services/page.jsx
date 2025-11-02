"use client";
import { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Camiseta Oversize",
    precio: 45000,
    tallas: ["S", "M", "L", "XL"],
    estilos: ["Negro", "Blanco", "Azul"],
    categoria: "Masculino",
    imagen: "https://i.pinimg.com/736x/8f/25/72/8f2572b25e71778b84c48972c3f5395d.jpg",
  },
  {
    id: 2,
    nombre: "Wide Leg Jeans",
    precio: 95000,
    tallas: ["28", "30", "32", "34", "36"],
    estilos: ["Azul Oscuro", "Negro"],
    categoria: "Masculino",
    imagen: "https://i.pinimg.com/1200x/67/86/72/6786725926f64f3ce96bf2d0e5b65196.jpg",
  },
  {
    id: 3,
    nombre: "Chaqueta Deportiva",
    precio: 120000,
    tallas: ["M", "L", "XL"],
    estilos: ["Rojo", "Gris", "Negro"],
    categoria: "Deportivo",
    imagen: "https://i.pinimg.com/736x/57/9d/ed/579deddecfdd96e68debcb9ac51e242f.jpg",
  },
  {
    id: 4,
    nombre: "Vestido Casual",
    precio: 135000,
    tallas: ["S", "M", "L"],
    estilos: ["Rosa", "Negro", "Beige"],
    categoria: "Femenino",
    imagen: "https://i.pinimg.com/736x/6c/9a/89/6c9a89d0b870370aa604f8c77b43e868.jpg",
  },
];

export default function Servicios() {
  const categorias = ["Todos", "Masculino", "Femenino", "Deportivo"];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <main className="min-h-screen flex flex-col">

      {/* Barra de categorías responsiva */}
      <nav className="bg-white/70 backdrop-blur-sm py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <ul
            className="
              flex 
              justify-center 
              sm:justify-center 
              gap-6 sm:gap-10 
              text-gray-700 
              text-sm sm:text-base md:text-lg 
              font-medium 
              overflow-x-auto 
              scrollbar-hide 
              whitespace-nowrap
            "
          >
            {categorias.map((cat) => (
              <li
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`cursor-pointer transition pb-1 flex-shrink-0 ${
                  categoriaSeleccionada === cat
                    ? "text-black border-b-2 border-black"
                    : "hover:text-black text-gray-500"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Productos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {productosFiltrados.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="p-5 sm:p-6 text-center flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-1">{item.nombre}</h2>
                  <p className="text-gray-700 font-medium mb-3">
                    ${item.precio.toLocaleString("es-CO")}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    <span className="font-medium">Tallas:</span> {item.tallas.join(", ")}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    <span className="font-medium">Estilos:</span> {item.estilos.join(", ")}
                  </p>
                </div>
                <button className="mt-5 w-full border border-amber-950 text-black py-2 rounded-md hover:bg-amber-950/30 transition">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
