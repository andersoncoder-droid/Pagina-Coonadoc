import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contacto = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900">Contáctanos</h1>
          <p className="mt-4 text-xl text-gray-600">
            Estamos aquí para ayudarte. ¡Comunícate con nosotros!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario de Contacto */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Información de contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="flex-shrink-0 h-6 w-6 text-blue-900" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Teléfono</p>
                  <p className="mt-1 text-gray-600">(+57) 601 555-0123</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="flex-shrink-0 h-6 w-6 text-blue-900" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Correo electrónico</p>
                  <p className="mt-1 text-gray-600">info@coonadoc.co</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-blue-900" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Dirección</p>
                  <p className="mt-1 text-gray-600">Calle 123 #45-67, Bogotá</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="flex-shrink-0 h-6 w-6 text-blue-900" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Horario de atención</p>
                  <div className="mt-1 text-gray-600">
                    <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                    <p>Sábados: 9:00 AM - 1:00 PM</p>
                    <p>Domingos y Festivos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;