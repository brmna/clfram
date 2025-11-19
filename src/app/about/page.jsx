export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Sobre nosotros
      </h1>

      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
        Somos una tienda de ropa moderna ubicada en Villavicencio, Colombia.
        Ofrecemos prendas únicas, cómodas y de calidad para que siempre luzcas a la moda.
        Nuestra pasión es llevar estilo y confianza a cada cliente.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-6">

        <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 sm:p-8 border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">
            Misión
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Ofrecer ropa de tendencia y accesible para todas las edades,
            garantizando calidad y un servicio excepcional que haga que cada compra sea especial.
          </p>
        </div>

        <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 sm:p-8 border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">
            Visión
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Convertirnos en la tienda de ropa preferida de la región y expandirnos a todo Colombia,
            brindando estilo, comodidad y moda sostenible.
          </p>
        </div>

      </div>
    </section>
  );
}
