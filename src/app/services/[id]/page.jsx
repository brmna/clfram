"use client";

import { useState, use } from "react";
import { productos } from "@/lib/products";
import { useCart } from "@/hooks/useCart";

export default function ProductDetailPage({ params }) {
  // ⚡ Unwrapping params
  const { id } = use(params);

  const producto = productos.find((p) => p.id.toString() === id);

  const [mainImage, setMainImage] = useState(producto.imagenes[0]);
  const [selectedTalla, setSelectedTalla] = useState(null);
  const [selectedEstilo, setSelectedEstilo] = useState(null);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  const vistosRecientes = productos.filter((p) => p.id.toString() !== id);

  const handleAddToCart = () => {
    if (!selectedTalla || !selectedEstilo) {
      setError("Selecciona talla y estilo antes de continuar.");
      return;
    }
    setError("");

    addToCart({
      ...producto,
      talla: selectedTalla,
      estilo: selectedEstilo,
      cantidad: 1,
    });
  };

  return (
    <main className="py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto mb-8">
        <a
          href="/services"
          className="font-bold inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-black transition"
        >
          <span className="text-lg sm:text-xl">←</span>
          <span>Volver</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* IZQUIERDA: imagen y vistos recientemente */}
        <div className="flex flex-col gap-10">
          {/* Imagen principal y miniaturas */}
          <div className="flex flex-col lg:flex-row gap-4">
            <img
              src={mainImage}
              className="w-full max-w-[500px] rounded-xl shadow-lg object-cover aspect-[4/5]"
            />

            <div className="flex gap-3 overflow-x-auto lg:hidden pb-2">
              {producto.imagenes.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`h-24 w-24 flex-shrink-0 rounded-lg object-cover border cursor-pointer ${
                    mainImage === img ? "border-black" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>

            <div className="hidden lg:flex flex-col gap-3">
              {producto.imagenes.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`h-24 w-24 rounded-lg object-cover border cursor-pointer ${
                    mainImage === img ? "border-black" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Vistos recientemente */}
          <div>
            <h2 className="text-xl font-bold mb-6">Vistos recientemente</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {vistosRecientes.map((p) => (
                <a key={p.id} href={`/services/${p.id}`}>
                  <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer">
                    <img
                      src={p.imagenes[0]}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-sm sm:text-base">{p.nombre}</h3>
                      <p className="text-green-700 font-medium">
                        ${p.precio.toLocaleString("es-CO")}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* DERECHA: información del producto */}
        <div className="max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-bold">{producto.nombre}</h1>
          <p className="text-gray-500 mt-2 text-base sm:text-lg">{producto.descripcion}</p>
          <p className="text-3xl sm:text-4xl font-semibold text-green-700 mt-4">
            ${producto.precio.toLocaleString("es-CO")}
          </p>

          {/* Estilos */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Estilo</h3>
            <div className="flex flex-wrap gap-3">
              {producto.estilos.map((e) => (
                <button
                  key={e}
                  onClick={() => setSelectedEstilo(e)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedEstilo === e
                      ? "bg-amber-950/30 text-black transition"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Tallas */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Talla</h3>
            <div className="flex flex-wrap gap-3">
              {producto.tallas.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTalla(t)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedTalla === t
                      ? "bg-amber-950/30 text-black transition"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="border border-amber-950 py-3 px-6 rounded-md font-semibold w-full sm:w-auto hover:bg-amber-950/30 transition">
              Comprar ahora
            </button>
            <button
              className="border border-black bg-amber-950/70 text-white py-3 px-6 rounded-md font-semibold hover:bg-amber-950/80 w-full sm:w-auto transition"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
