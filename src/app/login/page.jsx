'use client'
export default function Login(){
    return(
        <>
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
            {/* Contenedor central */}
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg overflow-hidden">
                
                <div className="hidden md:block md:w-1/2 h-auto">
                <img src="/login.jpg" className="w-full h-full object-cover"
                />
                </div>
                {/* Imagen para móvil */}
                <div className="block md:hidden w-full h-48">
                    <img
                    src="/login-m.jpg"
                    alt="Imagen registro móvil"
                    className="w-full h-full object-cover"/>
                </div>
                
                {/* Formulario */}
                <div className="w-full flex items-center justify-center p-6">
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
                            Bienvenido de nuevo
                        </h2>
                        <p className="text-sm text-gray-600 mb-6 md:text-left">
                            Accede a tu cuenta para continuar explorando todas nuestras funcionalidades.
                        </p>


                        {/* Formulario login */}
                        <form className="space-y-4">
                            <label className="block text-sm font-medium mb-1">
                                Correo
                            </label>
                            <input type="text" name="email" placeholder="Ingresa tu nombre de correo" required className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"/>
                            <label className="block text-sm font-medium mb-1">
                                Contraseña
                            </label>
                                <input type="password" name="pass" placeholder="Contraseña" required className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-pink-200 transition outline-none"/>
                            
                            <button type="submit" className="w-full bg-pink-200 py-2 rounded-md hover:bg-pink-100 transition border border-pink-300">
                                Iniciar</button>
                                
                                <button type="button" className="w-full border border-gray-300 px-4 py-2 bg-gray-200 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                                <img src="google.webp" alt="Google" className="h-5 w-5" />
                                Inicia con Google
                            </button>
                        </form>

                        {/* Olvido de contraseña y registro */}
                        <div className="flex justify-between mt-6 text-sm">
                            <a href="/register" className="font-bold hover:underline"> Registrarse si no tiene cuenta</a>
                            <a href="#" className="font-bold hover:underline">Olvido su contraseña</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

