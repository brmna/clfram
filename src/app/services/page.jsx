"use client";

import { useState } from "react";
import { productos } from "@/lib/products";

export default function Servicios() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const categorias = ["Todos", "Masculino", "Femenino", "Deportivo"];

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) =>
          Array.isArray(p.categoria)
            ? p.categoria.includes(categoriaSeleccionada)
            : p.categoria === categoriaSeleccionada
        );

  return (
    <main className="flex flex-col">

      {/* FILTRO */}
      <nav className="bg-white/80 backdrop-blur-sm py-4 shadow-sm sticky z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <ul className="flex gap-6 sm:gap-8 text-gray-700 text-sm sm:text-base font-medium overflow-x-auto scrollbar-hide whitespace-nowrap justify-center">
              {categorias.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setCategoriaSeleccionada(cat)}
                  className={`cursor-pointer transition px-2 pb-1 ${
                    categoriaSeleccionada === cat
                      ? "text-black border-b-2 border-black font-semibold"
                      : "hover:text-amber-950 text-gray-500"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* PRODUCTOS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productosFiltrados.map((item) => (
            <a key={item.id} href={`/services/${item.id}`}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                <img
                  src={item.imagenes[0]}
                  alt={item.nombre}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5 text-center flex flex-col">
                  <p className="text-lg font-semibold mb-1 hover:text-amber-950 transition">
                    {item.nombre}
                  </p>

                  <p className="text-green-700 font-semibold mb-3">
                    ${item.precio.toLocaleString("es-CO")}
                  </p>

                  <p className="text-sm text-gray-500">
                    <strong>Tallas:</strong> {item.tallas.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Estilos:</strong> {item.estilos.join(", ")}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
