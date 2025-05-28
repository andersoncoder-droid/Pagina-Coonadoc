import React from 'react';
import { ArrowRight, Users, PiggyBank, Landmark, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Apple as WhatsApp } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Image Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 carousel-container">
          <div className="carousel-slide" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg)' }}></div>
          <div className="carousel-slide" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg)' }}></div>
          <div className="carousel-slide" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg)' }}></div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Cooperativa Nacional Docente
              </h1>
              <p className="mt-3 max-w-3xl mx-auto text-lg text-gray-300">
                Somos una cooperativa nacional dirigida a docentes, comprometida con mejorar el bienestar de nuestros asociados mediante servicios financieros, educativos, recreativos y de apoyo social.
              </p>
              <div className="mt-8">
                <a href="#servicios" className="btn-primary">
                  Conoce nuestros servicios
                  <ArrowRight className="ml-2 inline-block" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios Section */}
      <div className="container-section bg-gray-50">
        <h2 className="text-center mb-12">Beneficios para nuestros asociados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <Landmark className="w-12 h-12 text-[#228b22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Créditos Especiales</h3>
            <p>Accede a créditos con tasas preferenciales diseñados para docentes</p>
          </div>
          <div className="card">
            <Users className="w-12 h-12 text-[#228b22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Auxilios y Convenios</h3>
            <p>Beneficios económicos y descuentos especiales con empresas aliadas</p>
          </div>
          <div className="card">
            <PiggyBank className="w-12 h-12 text-[#228b22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ahorro e Inversión</h3>
            <p>Planes de ahorro con excelentes tasas y beneficios adicionales</p>
          </div>
        </div>
      </div>

      {/* Noticias Section */}
      <div className="container-section">
        <h2 className="text-center mb-12">Últimas Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Torneo de Fútbol COONADOC 2024</h3>
            <p className="text-gray-600 mb-4">Gran éxito en nuestro torneo deportivo anual con la participación de más de 20 equipos.</p>
            <a href="#" className="text-[#228b22] hover:text-[#1a6919]">Leer más →</a>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Nueva App COONADOC</h3>
            <p className="text-gray-600 mb-4">Lanzamos nuestra aplicación móvil para facilitar el acceso a nuestros servicios.</p>
            <a href="#" className="text-[#228b22] hover:text-[#1a6919]">Leer más →</a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-section bg-gray-50">
        <div className="text-center mb-12">
          <h2>Contáctanos</h2>
          <p className="mt-4 text-lg text-gray-600">Estamos aquí para ayudarte</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <Phone className="w-6 h-6 text-[#228b22] mr-3" />
            <span>(+57) 601 555-0123</span>
          </div>
          <div className="flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#228b22] mr-3" />
            <a href="mailto:info@coonadoc.co" className="hover:text-[#228b22]">
              info@coonadoc.co
            </a>
          </div>
          <div className="flex items-center justify-center">
            <MapPin className="w-6 h-6 text-[#228b22] mr-3" />
            <span>Calle 123 #45-67, Bogotá</span>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-[#228b22] hover:text-[#1a6919]">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="#" className="text-[#228b22] hover:text-[#1a6919]">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="#" className="text-[#228b22] hover:text-[#1a6919]">
            <Youtube className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/573015550123"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <WhatsApp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Home;