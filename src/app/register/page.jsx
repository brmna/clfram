export default function Register() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Imagen escritorio */}
        <div className="hidden md:block md:w-1/2 h-auto">
          <img
            src="/login-m.jpg"
            alt="Imagen registro desktop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen móvil */}
        <div className="block md:hidden w-full h-48">
          <img
            src="/register.webp"
            alt="Imagen registro móvil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Título y descripción */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
              Crea tu cuenta
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center md:text-left">
              Regístrate para empezar a disfrutar de todas nuestras funcionalidades.
            </p>

            {/* Formulario de registro */}
            <form className="space-y-4">
              {/* Nombre completo */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Ingresa tu nombre"
                  required
                  className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"
                />
              </div>

              {/* Correo electrónico */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                  required
                  className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"
                />
              </div>

              {/* Contraseña */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="pass"
                  placeholder="Contraseña"
                  required
                  className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"
                />
              </div>

              {/* Confirmar contraseña */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  name="confirmPass"
                  placeholder="Repite tu contraseña"
                  required
                  className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"
                />
              </div>

              {/* Botón principal */}
              <button
                type="submit"
                className="mt-5 w-full border border-amber-950 text-black py-2 rounded-md hover:bg-amber-950/30 transition"
              >
                Registrarse
              </button>

              {/* O registrarse con Google */}
              <button
                type="button"
                className="w-full border border-gray-300 px-4 py-2 bg-gray-200 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition"
              >
                <img
                  src="google.webp"
                  alt="Google"
                  className="h-5 w-5"
                />
                Registrarse con Google
              </button>
            </form>

            {/* Enlace a login */}
            <div className="mt-6 text-sm text-center">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="font-bold hover:underline hover:text-amber-950">
                Inicia sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
