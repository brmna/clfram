"use client";
import { useState } from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../data/products"; // Importamos la función para obtener productos
import { useCart } from "../context/CartContext"; // Importamos el hook del carrito

const productos = [
  {
    id: 1,
    nombre: "Camiseta Oversize",
    precio: 45000,
    tallas: ["S", "M", "L", "XL"],
    estilos: ["Negro", "Blanco", "Azul"],
    categoria: ["Masculino", "Femenino"],
    imagen: "/camisaoversize.png",
  },
  {
    id: 2,
    nombre: "Wide Leg Jeans",
    precio: 95000,
    tallas: ["28", "30", "32", "34", "36"],
    estilos: ["Azul Oscuro", "Negro"],
    categoria: ["Masculino", "Femenino"],
    imagen: "/widelegazul.png",
  },
  {
    id: 3,
    nombre: "Chaqueta Deportiva",
    precio: 120000,
    tallas: ["M", "L", "XL"],
    estilos: ["Rojo", "Gris", "Negro"],
    categoria: ["Masculino", "Deportivo"],
    imagen: "/chaquetagris.png",
  },
  {
    id: 4,
    nombre: "Vestido Casual",
    precio: 135000,
    tallas: ["S", "M", "L"],
    estilos: ["Rosa", "Negro", "Beige"],
    categoria: "Femenino",
    imagen: "/vestidoprima.png",
  },
  {
    id: 5,
    nombre: "Zapatillas Deportivas",
    precio: 135000,
    tallas: ["36", "38", "40"],
    estilos: ["Blanco", "Negro", "Beige"],
    categoria: ["Masculino", "Deportivo", "Femenino"],
    imagen: "/zapatillas_frente.png",
  },
];

export default function Servicios() {
  const { addToCart } = useCart(); // Obtenemos la función para agregar al carrito
  const [productos, setProductos] = useState([]);
  const categorias = ["Todos", "Masculino", "Femenino", "Deportivo"];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  // Usamos useEffect para cargar los productos cuando el componente se monta
  useEffect(() => {
    getProducts().then((data) => {
      setProductos(data);
    });
  }, []); // El array vacío asegura que se ejecute solo una vez

  // Filtro que SÍ funciona con strings y arrays
  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) =>
          Array.isArray(p.categoria)
            ? p.categoria.includes(categoriaSeleccionada)
            : p.categoria === categoriaSeleccionada
        );
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  // Mensaje de carga mientras se obtienen los productos
  if (productos.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl">Cargando productos...</p>
      </div>
    );
  }

  return (
    <main className=" flex flex-col">
      {/* ======= FILTROS ======= */}
      <nav className="bg-white/80 backdrop-blur-sm py-4 shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* contenedor centrado */}
          <div className="flex justify-center">
            <ul className="flex gap-6 sm:gap-8 text-gray-700 text-sm sm:text-base font-medium overflow-x-auto scrollbar-hide whitespace-nowrap justify-center">
              {categorias.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setCategoriaSeleccionada(cat)}
                  className={`cursor-pointer transition px-2 pb-1 ${
                    categoriaSeleccionada === cat
                      ? "text-black border-b-2 border-black"
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

      {/* ======= PRODUCTOS ======= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {productosFiltrados.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-64 object-cover"
              />

              <div className="p-5 text-center flex flex-col">
                <a href={`/services/${item.id}`} className="text-lg font-semibold mb-1">
                  {item.nombre}
                </a>

                <p className="text-green-700 font-semibold mb-3">
                  ${item.precio.toLocaleString("es-CO")}
                </p>

                <p className="text-sm text-gray-500">
                  <strong>Tallas:</strong> {item.tallas.join(", ")}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Estilos:</strong> {item.estilos.join(", ")}
                </p>

                <button className="mt-5 w-full border border-amber-950 text-black py-2 rounded-md hover:bg-amber-950/30 transition">
                <button
                  onClick={() => addToCart(item)}
                  className="mt-5 w-full border border-amber-950 text-black py-2 rounded-md hover:bg-amber-950/30 transition"
                >
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
