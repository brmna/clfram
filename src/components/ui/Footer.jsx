export default function Footer() {
  return (
    <footer className=" mt-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Columna 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">CloseShop</h3>
            <p className="text-sm text-gray-600">
              Su espacio ideal para disfrutar de nuestros servicios.
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 hover:underline">
                  Productos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:underline">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:underline">
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contáctenos</h3>
            <p className="text-sm text-gray-600">📍 Dirección: Calle 42 #81-50, Villavicencio, Meta.</p>
            <p className="text-sm text-gray-600">📞 Teléfono: +57 312-345-6789</p>
            <p className="text-sm text-gray-600">📧 Email: closeshop@gmail.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
          © 2025 CloseShop. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
