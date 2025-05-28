import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#ff5501] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>(+57) 601 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@coonadoc.co" className="hover:text-orange-300">
                  info@coonadoc.co
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>Calle 123 #45-67, Bogotá</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/nosotros" className="hover:text-orange-300">Nosotros</a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-orange-300">Servicios</a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-orange-300">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Horario de atención */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
            <ul className="space-y-2">
              <li>Lunes a Viernes: 8:00 AM - 5:00 PM</li>
              <li>Sábados: 9:00 AM - 1:00 PM</li>
              <li>Domingos y Festivos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#cc4401] mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Coonadoc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;