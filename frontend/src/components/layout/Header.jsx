import { Link } from 'react-router-dom';
import logo from '../../assets/image.png'; // Puedes reemplazar esto con tu nuevo logo transparente cuando lo tengas

function Header() {
  return (
    <header className="bg-white shadow-md py-4 w-full">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Navegación con logo en el centro */}
        <nav className="flex items-center justify-center">
          {/* Enlaces izquierdos */}
          <ul className="flex items-center mr-8">
            <li className="mr-10"><Link to="/" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl transition-colors duration-200">Inicio</Link></li>
            <li><Link to="/productos" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl transition-colors duration-200">Productos</Link></li>
          </ul>
          
          {/* Logo en el centro */}
          <div className="h-24 flex items-center justify-center mx-10">
            <img src={logo} alt="Pastelería Logo" className="h-full object-contain" />
          </div>
          
          {/* Enlaces derechos */}
          <ul className="flex items-center ml-8">
            <li className="mr-10"><Link to="/nosotros" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl transition-colors duration-200">Nosotros</Link></li>
            <li className="mr-10"><Link to="/contacto" className="text-pastel-brown hover:text-pastel-pink font-medium text-xl transition-colors duration-200">Contacto</Link></li>
            <li><Link to="/carrito" className="text-white bg-pastel-pink px-6 py-3 rounded-full hover:bg-pastel-brown font-medium text-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Carrito (0)
            </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;