import React from 'react';
import { Landmark, PiggyBank, Users, Shield, Gift, Headphones, FileText, Download, Mail } from 'lucide-react';

const Servicios = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Proceso de Afiliación */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900">Proceso de Afiliación</h1>
          <p className="mt-4 text-xl text-gray-600">
            Únete a nuestra familia cooperativa siguiendo estos sencillos pasos
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <FileText className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">1. Formulario</h3>
              <p className="mt-2 text-gray-600">
                Completa el formulario de afiliación con firma y huella
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <Download className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">2. Documentos</h3>
              <p className="mt-2 text-gray-600">
                Adjunta copia de tu cédula por ambas caras
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-900 mb-4">
                <Mail className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">3. Envío</h3>
              <p className="mt-2 text-gray-600">
                Envía todo al correo oficial de afiliaciones
              </p>
            </div>
          </div>
        </div>

        {/* Créditos Disponibles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Créditos Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Landmark className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Crédito Educativo</h3>
              <p className="mt-2 text-gray-600">Financia tus estudios o los de tu familia</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <PiggyBank className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Crédito para Arreglos Locativos</h3>
              <p className="mt-2 text-gray-600">Mejora tu vivienda con nuestro apoyo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Crédito de Consumo</h3>
              <p className="mt-2 text-gray-600">Para tus necesidades personales</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Gift className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Crédito para Turismo</h3>
              <p className="mt-2 text-gray-600">Financia tus vacaciones soñadas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Credi-Impuestos</h3>
              <p className="mt-2 text-gray-600">Paga tus impuestos con facilidad</p>
            </div>
          </div>
        </div>

        {/* Seguros y Beneficios */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Seguros y Beneficios</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              En COONADOC nos preocupamos por tu bienestar y el de tu familia. Ofrecemos una amplia gama de seguros:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-900" />
                <span>Seguros de Vida</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-900" />
                <span>Seguros de Vehículo</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-900" />
                <span>Seguros para Mascotas</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-900" />
                <span>Seguros de Hogar</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700">
              Además, nuestros asociados cuentan con auxilios especiales para:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <li className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-blue-900" />
                <span>Nacimiento</span>
              </li>
              <li className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-blue-900" />
                <span>Fallecimiento</span>
              </li>
              <li className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-blue-900" />
                <span>Calamidad</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Convenios */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Convenios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="https://images.pexels.com/photos/2888489/pexels-photo-2888489.jpeg" 
                   alt="Salitre Mágico" 
                   className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Salitre Mágico</h3>
              <p className="mt-2 text-gray-600">Descuentos especiales en entradas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg" 
                   alt="Cine Colombia" 
                   className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Cine Colombia</h3>
              <p className="mt-2 text-gray-600">Precios preferenciales en boletas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg" 
                   alt="El Cielo Glamping" 
                   className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">El Cielo Glamping</h3>
              <p className="mt-2 text-gray-600">Tarifas especiales para asociados</p>
            </div>
          </div>
        </div>

        {/* Documentos para Descarga */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Documentos para Descarga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Solicitud de Crédito</h3>
              <p className="mt-2 text-gray-600">Descarga el formulario de solicitud de crédito</p>
            </a>
            <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Actualización de Datos</h3>
              <p className="mt-2 text-gray-600">Mantén tu información actualizada</p>
            </a>
            <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Solicitud de Auxilios</h3>
              <p className="mt-2 text-gray-600">Formulario para solicitar auxilios</p>
            </a>
            <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Otros Trámites</h3>
              <p className="mt-2 text-gray-600">Documentos adicionales para trámites</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;