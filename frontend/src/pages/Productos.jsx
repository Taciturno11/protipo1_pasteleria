import React, { useState } from 'react';
// Imágenes de productos - De Cuchara y Tenedor
import tiramisu from '../assets/postre1.jpg';
import tortaChocolate from '../assets/postre2.jpg';
import chifon from '../assets/postre 4.webp';
import suspiroLimeña from '../assets/postre5.jpg';
import pieLimon from '../assets/pieLimon.jpg';
import cremaVolteada from '../assets/cremaVolteada.jpg';

// Imágenes de productos - Antojos y Bocaditos
import picarones from '../assets/postre6.jpg';
import alfajores from '../assets/alfajores.jpg';
import brownie from '../assets/brownie.jpg';
import galletasChispas from '../assets/galletasChispas.jpg';

// Imágenes de productos - Fríos y Helados
import gelatina from '../assets/postre3.jpg';
import quesoHelado from '../assets/QuesoHelado.jpg';
import heladoVainilla from '../assets/heladoVainilla.webp';
import cremoladaFresa from '../assets/CremoladaFresa.jpg';

function Productos() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  // Nueva estructura de productos con la clasificación de 3 grupos
  const productos = [
    // DE CUCHARA Y TENEDOR
    { 
      id: 1, 
      name: 'Tiramisú', 
      description: 'Postre italiano clásico con café y mascarpone',
      price: 450, 
      image: tiramisu,
      category: 'De Cuchara y Tenedor',
      isPeruvian: false
    },
    { 
      id: 2, 
      name: 'Torta de Chocolate', 
      description: 'Deliciosa torta de chocolate con crema',
      price: 380, 
      image: tortaChocolate,
      category: 'De Cuchara y Tenedor',
      isPeruvian: false
    },
    { 
      id: 4, 
      name: 'Chifón', 
      description: 'Suave y esponjoso pastel de chifón',
      price: 320, 
      image: chifon,
      category: 'De Cuchara y Tenedor',
      isPeruvian: false
    },
    { 
      id: 5, 
      name: 'Suspiro a la Limeña', 
      description: 'Tradicional postre peruano con manjar blanco',
      price: 280, 
      image: suspiroLimeña,
      category: 'De Cuchara y Tenedor',
      isPeruvian: true
    },
    { 
      id: 7, 
      name: 'Pie de Limón', 
      description: 'Delicioso pie de limón con merengue italiano',
      price: 350, 
      image: pieLimon,
      category: 'De Cuchara y Tenedor',
      isPeruvian: false
    },
    { 
      id: 8, 
      name: 'Crema Volteada', 
      description: 'Clásico postre peruano de caramelo y crema',
      price: 250, 
      image: cremaVolteada,
      category: 'De Cuchara y Tenedor',
      isPeruvian: true
    },

    // ANTOJOS Y BOCADITOS
    { 
      id: 6, 
      name: 'Picarones', 
      description: 'Dulces fritos peruanos con miel de chancaca',
      price: 150, 
      image: picarones,
      category: 'Antojos y Bocaditos',
      isPeruvian: true
    },
    { 
      id: 9, 
      name: 'Alfajores', 
      description: 'Deliciosos alfajores peruanos con manjar blanco',
      price: 80, 
      image: alfajores,
      category: 'Antojos y Bocaditos',
      isPeruvian: true
    },
    { 
      id: 10, 
      name: 'Brownie', 
      description: 'Brownie de chocolate con nueces',
      price: 120, 
      image: brownie,
      category: 'Antojos y Bocaditos',
      isPeruvian: false
    },
    { 
      id: 11, 
      name: 'Galletas con Chispas', 
      description: 'Galletas caseras con chispas de chocolate',
      price: 60, 
      image: galletasChispas,
      category: 'Antojos y Bocaditos',
      isPeruvian: false
    },

    // FRÍOS Y HELADOS
    { 
      id: 3, 
      name: 'Gelatina', 
      description: 'Refrescante gelatina de frutas naturales',
      price: 120, 
      image: gelatina,
      category: 'Fríos y Helados',
      isPeruvian: false
    },
    { 
      id: 12, 
      name: 'Queso Helado Arequipeño', 
      description: 'Tradicional queso helado peruano',
      price: 180, 
      image: quesoHelado,
      category: 'Fríos y Helados',
      isPeruvian: true
    },
    { 
      id: 13, 
      name: 'Helado de Vainilla', 
      description: 'Helado artesanal de vainilla',
      price: 150, 
      image: heladoVainilla,
      category: 'Fríos y Helados',
      isPeruvian: false
    },
    { 
      id: 14, 
      name: 'Cremolada de Fresa', 
      description: 'Refrescante cremolada de fresa',
      price: 100, 
      image: cremoladaFresa,
      category: 'Fríos y Helados',
      isPeruvian: false
    }
  ];

  // Categorías disponibles
  const categorias = [
    { id: 'todos', nombre: 'Todos los Productos', icono: '🍰' },
    { id: 'De Cuchara y Tenedor', nombre: 'De Cuchara y Tenedor', icono: '🍴' },
    { id: 'Antojos y Bocaditos', nombre: 'Antojos y Bocaditos', icono: '🍪' },
    { id: 'Fríos y Helados', nombre: 'Fríos y Helados', icono: '🍦' }
  ];

  // Filtrar productos según la categoría activa
  const productosFiltrados = categoriaActiva === 'todos' 
    ? productos 
    : productos.filter(producto => producto.category === categoriaActiva);

  return (
    <div className="py-14 sm:py-18 md:py-22 lg:py-26 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-brown mb-4">Nuestros Productos</h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-pastel-pink mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Descubre nuestra clasificación sencilla en 3 grupos: De Cuchara y Tenedor, Antojos y Bocaditos, y Fríos y Helados.
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map(categoria => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaActiva(categoria.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                categoriaActiva === categoria.id
                  ? 'bg-pastel-pink text-white shadow-lg'
                  : 'bg-white text-pastel-brown border-2 border-pastel-pink hover:bg-pastel-pink hover:text-white'
              }`}
            >
              <span className="text-lg">{categoria.icono}</span>
              <span>{categoria.nombre}</span>
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {productosFiltrados.map(product => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
              {/* Contenedor de imagen */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 sm:h-72 object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge de categoría */}
                <div className="absolute top-4 left-4 bg-pastel-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {product.category}
                </div>
                
                {/* Bandera peruana para productos peruanos */}
                {product.isPeruvian && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-red-600 text-lg font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                    🇵🇪
                    <span className="text-xs text-gray-700">Perú</span>
                  </div>
                )}
                
                {/* Precio en overlay */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-pastel-brown text-2xl font-bold px-4 py-2 rounded-full shadow-lg">
                  ${product.price}
                </div>
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-pastel-brown group-hover:text-pastel-pink transition-colors duration-300">
                    {product.name}
                  </h3>
                  {product.isPeruvian && (
                    <span className="text-lg" title="Clásico Peruano">🇵🇪</span>
                  )}
                </div>
                
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <button className="w-full bg-pastel-pink text-white py-4 rounded-xl font-semibold text-lg hover:bg-pastel-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-pastel-cream to-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-pastel-brown mb-4">¿Necesitas algo especial?</h2>
            <p className="text-gray-600 mb-6">
              Todos nuestros postres se pueden personalizar según tus preferencias. Contáctanos para pedidos especiales o celebraciones.
            </p>
            <button className="bg-pastel-pink text-white px-8 py-3 rounded-full font-medium hover:bg-pastel-brown transition-all duration-300 shadow-lg hover:shadow-xl">
              Hacer Pedido Especial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
