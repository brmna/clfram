export default function ContactPage() {
  return (
    <section className="bg-white/15 rounded-4xl shadow-sm max-w-6xl my-10 px-6 py-12 mx-auto justify-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Contáctenos</h1>
      <p className="text-gray-600 text-center mb-10 ">
        ¿Tiene alguna pregunta o quiere solicitar una cotización? Estamos aquí para ayudar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-8">
        {/* Formulario */}
        <form className="bg-white/25 shadow-md rounded-2xl p-8 space-y-6">
          <h2 className="text-xl font-semibold mb-4">Envíenos un mensaje</h2>
          
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input type="text" placeholder="su nombre" className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"/>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" placeholder="ejemplo@gmail.com" className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"/>

          <div>
            <label className="block text-sm font-medium mb-1">Teléfono</label>
            <input
              type="tel"
              placeholder="+ 57..."
              className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea rows="3" placeholder="Escriba su mensaje..." className="w-full border border-black/30 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-pink-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-5 w-full border border-amber-950 text-black py-2 rounded-md hover:bg-amber-950/30 transition"
          >
            Enviar
          </button>
        </form>

        {/* Información de contacto */}
        <div className="text-gray-800 space-y-6 p-8">
          <h2 className="text-xl font-semibold">Información de contacto</h2>

          <div>
            <p className="font-semibold py-2">Dirección</p>
            <p className="text-gray-600">Calle 42 #81-50, Villavicencio, Meta</p>
          </div>

          <div>
            <p className="font-semibold py-2">Teléfono</p>
            <p className="text-gray-600">+57 312-345-6789</p>
          </div>

          <div>
            <p className="font-semibold py-2">Email</p>
            <p className="text-gray-600">closeshop@gmail.com</p>
          </div>

          <div>
            <p className="font-semibold py-2">Síguenos en Redes</p>
            <div className="flex space-x-4 text-gray-600">
              <a href="https://facebook.com" target="blank" className="hover:underline" >Facebook</a>
              <a href="https://instagram.com" target="blank" className="hover:underline">Instagram</a>
              <a href="https://linkedin.com" target="blank" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
