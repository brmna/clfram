import Image from "next/image"
import Link from "next/link"
import AboutPage from "./about/page"
import ContactPage from "./contact/page"

export default function Home() {
  return (
    
    <main className="flex flex-col">

      {/* Categorías Destacadas */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Categorías Destacadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <Image
              src="/camisetas.jpg"
              alt="Camisetas"
              width={500}
              height={300}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Camisetas</h3>
              <p className="text-gray-600 mb-4">
                Estilos modernos y clásicos desde $35.000
              </p>
              <Link
                href="/services"
                className="text-red-300 font-semibold hover:underline"
              >
                Ver más →
              </Link>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <Image
              src="/jeans.jpg"
              alt="Jeans"
              width={500}
              height={300}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Jeans</h3>
              <p className="text-gray-600 mb-4">
                Variedad de tallas y estilos desde $80.000
              </p>
              <Link
                href="/services"
                className="text-red-300 font-semibold hover:underline"
              >
                Ver más →
              </Link>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <Image
              src="/zapatillas.jpg"
              alt="Zapatillas"
              width={500}
              height={300}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Zapatillas</h3>
              <p className="text-gray-600 mb-4">
                Sneakers y deportivos desde $120.000
              </p>
              <Link
                href="/services"
                className="text-red-300 font-semibold hover:underline"
              >
                Ver más →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    <ContactPage></ContactPage>
    <AboutPage></AboutPage>
    </main>
  )
}
