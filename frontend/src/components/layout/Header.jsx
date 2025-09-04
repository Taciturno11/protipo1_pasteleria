import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/image.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-white to-pastel-cream/30 shadow-md py-4 w-full relative">
      {/* Carrito en esquina superior derecha - visible en todas las pantallas */}
      <div className="absolute top-4 right-6 md:right-12 lg:right-20 z-20">
        <Link to="/carrito" className="text-white bg-pastel-pink px-4 py-2 rounded-full hover:bg-pastel-brown font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="hidden sm:inline">Carrito (0)</span>
        </Link>
      </div>
      
      {/* Botón de menú móvil */}
      <div className="absolute top-4 left-6 z-20 lg:hidden">
        <button 
          onClick={toggleMenu}
          className="text-pastel-brown hover:text-pastel-pink focus:outline-none"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 pt-2">
        {/* Logo para móvil (centrado en la parte superior) */}
        <div className="lg:hidden flex justify-center my-2 pt-8">
          <div className="h-24 sm:h-28 flex items-center justify-center">
            <img src={logo} alt="Pastelería Logo" className="h-full object-contain" />
          </div>
        </div>
        
        {/* Menú móvil desplegable */}
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} pt-4 pb-6`}>
          <ul className="flex flex-col items-center space-y-6">
            <li><Link to="/" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/productos" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl" onClick={toggleMenu}>Productos</Link></li>
            <li><Link to="/tarifas" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl" onClick={toggleMenu}>Tarifas</Link></li>
            <li><Link to="/nosotros" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl" onClick={toggleMenu}>Nosotros</Link></li>
            <li><Link to="/contacto" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </div>
        
        {/* Navegación desktop con logo en el centro - solo visible en pantallas grandes */}
        <nav className="hidden lg:flex items-center justify-center">
          {/* Enlaces izquierdos */}
          <ul className="flex items-center mr-8">
            <li className="mr-10"><Link to="/" className="text-pastel-brown hover:text-pastel-pink font-medium text-2xl transition-colors duration-200">Inicio</Link></li>
            <li className="mr-10"><Link to="/productos" className="text-pastel-brown hover:text-pastel-pink font-medium text-2xl transition-colors duration-200">Productos</Link></li>
            <li><Link to="/tarifas" className="text-pastel-brown hover:text-pastel-pink font-medium text-2xl transition-colors duration-200">Tarifas</Link></li>
          </ul>
          
          {/* Logo en el centro - más grande */}
          <div className="h-32 flex items-center justify-center mx-10">
            <img src={logo} alt="Pastelería Logo" className="h-full object-contain" />
          </div>
          
          {/* Enlaces derechos */}
          <ul className="flex items-center ml-8">
            <li className="mr-10"><Link to="/nosotros" className="text-pastel-brown hover:text-pastel-pink font-medium text-2xl transition-colors duration-200">Nosotros</Link></li>
            <li><Link to="/contacto" className="text-pastel-brown hover:text-pastel-pink font-medium text-2xl transition-colors duration-200">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;