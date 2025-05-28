import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ff5501] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="https://web.coonadoc.co/images/logo.png"
                alt="Coonadoc"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#cc4401]">
                Inicio
              </Link>
              <Link to="/nosotros" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#cc4401]">
                Nosotros
              </Link>
              <Link to="/servicios" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#cc4401]">
                Servicios
              </Link>
              <Link to="/contacto" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#cc4401]">
                Contacto
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#cc4401] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#cc4401]">
              Inicio
            </Link>
            <Link to="/nosotros" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#cc4401]">
              Nosotros
            </Link>
            <Link to="/servicios" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#cc4401]">
              Servicios
            </Link>
            <Link to="/contacto" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#cc4401]">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;