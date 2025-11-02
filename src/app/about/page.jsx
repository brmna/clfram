export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Sobre nosotros</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
        Somos una tienda de ropa moderna ubicada en Villavicencio, Colombia.
        Ofrecemos prendas únicas, cómodas y de calidad para que siempre luzcas a la moda.
        Nuestra pasión es llevar estilo y confianza a cada cliente.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">Misión</h2>
          <p className="text-gray-600">
            Ofrecer ropa de tendencia y accesible para todas las edades,
            garantizando calidad y un servicio excepcional que haga que cada compra sea especial.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-3">Visión</h2>
          <p className="text-gray-600">
            Convertirnos en la tienda de ropa preferida de la región y expandirnos a todo Colombia,
            brindando estilo, comodidad y moda sostenible.
          </p>
        </div>
      </div>
    </section>
  );
}
