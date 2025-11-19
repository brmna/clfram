"use client";
import { use, useState } from "react";
const productos = [
  {
    id: 1,
    nombre: "Camiseta Oversize",
    precio: 45000,
    tallas: ["S", "M", "L", "XL"],
    estilos: ["Negro", "Blanco", "Azul"],
    categoria: "Masculino",
    descripcion:
      "Nuestra camiseta oversize combina comodidad y estilo urbano. Fabricada con algodón de alta calidad, caída relajada y tacto suave.",
    disponibilidad: "En stock",
    imagenes: [
      "/camisaoversize.png",
      "/camisaoversize_atras.png",
      "/camisaoversize_lado.png",
      "/camisa.png"
    ],
  },
  {
    id: 2,
    nombre: "Wide Leg Jeans",
    precio: 95000,
    tallas: ["28", "30", "32", "34", "36"],
    estilos: ["Azul Oscuro", "Negro"],
    categoria: "Masculino",
    descripcion:
      "Wide Leg Jeans con ajuste contemporáneo y cómodo. Perfecto para outfits casuales.",
    disponibilidad: "En stock",
    imagenes: [
      "/widelegazul.png",
      "widelegazul_atras.png",
      "widelegazul_lado.png",
      "/wideleg.png"
    ],
  },
  {
    id: 3,
    nombre: "Chaqueta Deportiva",
    precio: 120000,
    tallas: ["M", "L", "XL"],
    estilos: ["Rojo", "Gris", "Negro"],
    categoria: "Deportivo",
    descripcion:
      "Chaqueta ligera y transpirable ideal para entrenar o actividades al aire libre.",
    disponibilidad: "Pocas unidades",
    imagenes: [
      "/chaquetagris.png",
      "/chaquetagris_atras.png",
      "/chaquetagris_lado.png",
      "/chaquetagris.png"
    ],
  },
  {
    id: 4,
    nombre: "Vestido Casual",
    precio: 135000,
    tallas: ["S", "M", "L"],
    estilos: ["Rosa", "Negro", "Beige"],
    categoria: "Femenino",
    descripcion:
      "Vestido casual con tela fluida y corte favorecedor. Ideal para eventos de día.",
    disponibilidad: "En stock",
    imagenes: [
      "/vestidoprima.png",
      "/vestidoprima_atras.png",
      "/vestidoprima_lado.png",
      "/vestidoprima.png"
    ],
  },
  {
    id: 5,
    nombre: "Zapatillas Deportivas",
    precio: 180000,
    tallas: ["36", "38", "40"],
    estilos: ["Blanco", "Negro", "Beige"],
    categoria: ["Masculino", "Deportivo", "Femenino"],
    descripcion: "Zapatillas deportivas",
    disponibilidad: "En stock",
    imagenes: [
      "/zapatillas_frente.png",
      "/zapatillas_atras.png",
      "/zapatillas_lado.png",
      "/zapatillas.png"
    ],
  },
];

export default function ProductDetailPage({ params }) {
  const { id } = use(params);
  const producto = productos.find((p) => p.id.toString() === id);

  const [mainImage, setMainImage] = useState(producto.imagenes[0]);
  const [selectedTalla, setSelectedTalla] = useState(null);
  const [selectedEstilo, setSelectedEstilo] = useState(null);
  const [error, setError] = useState("");

  const vistosRecientes = productos.filter((p) => p.id !== producto.id);

  const handleAddToCart = () => {
    if (!selectedTalla || !selectedEstilo) {
      setError("Selecciona talla y estilo antes de continuar.");
      return;
    }
    setError("");

    alert(
      `Agregado al carrito:\nProducto: ${producto.nombre}\nTalla: ${selectedTalla}\nEstilo: ${selectedEstilo}`
    );
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

      <div className="max-w-7xl mx-auto">

        {/* CONTENEDOR PRINCIPAL */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* IZQUIERDA */}
          <div className="flex flex-col gap-10">

            {/* Imagen y miniaturas */}
            <div className="flex flex-col lg:flex-row gap-4">

              <img
                src={mainImage}
                className="w-full max-w-[500px] rounded-xl shadow-lg object-cover aspect-[4/5]"
              />

              {/* Miniaturas mobile scroll */}
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

              {/* Miniaturas desktop */}
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
                        <h3 className="font-semibold text-sm sm:text-base">
                          {p.nombre}
                        </h3>
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

          {/* DERECHA INFORMACIÓN */}
          <div className="max-w-lg">

            <h1 className="text-3xl sm:text-4xl font-bold">{producto.nombre}</h1>

            <p className="text-gray-500 mt-2 text-base sm:text-lg">
              {producto.descripcion}
            </p>

            <p className="text-3xl sm:text-4xl font-semibold text-green-700 mt-4">
              ${producto.precio.toLocaleString("es-CO")}
            </p>

            <p className="text-yellow-600 mt-2 font-medium flex items-center">
              ★★★★★{" "}
              <span className="text-gray-600 underline cursor-pointer ml-2">
                441 reseñas
              </span>
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
                        ? "bg-amber-950/30 transition text-black" : "hover:bg-gray-100"
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
                        ? "bg-amber-950/30 transition text-black" : "hover:bg-gray-100"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <p className="mt-4 text-red-600 font-medium">{error}</p>
            )}

            {/* botones */}
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

      </div>
    </main>
  );
}