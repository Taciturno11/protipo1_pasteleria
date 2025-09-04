import React from 'react';
import postre1 from '../assets/postre1.jpg';
import postre2 from '../assets/postre2.jpg';
import postre3 from '../assets/postre3.jpg';
import postre4 from '../assets/postre 4.webp';
import postre5 from '../assets/postre5.jpg';
import postre6 from '../assets/postre6.jpg';

function Productos() {
  // Datos de todos los productos
  const productos = [
    { 
      id: 1, 
      name: 'Tiramisú', 
      description: 'Postre italiano clásico con café y mascarpone',
      price: 450, 
      image: postre1,
      category: 'Postres Internacionales'
    },
    { 
      id: 2, 
      name: 'Torta de Chocolate', 
      description: 'Deliciosa torta de chocolate con crema',
      price: 380, 
      image: postre2,
      category: 'Tortas'
    },
    { 
      id: 3, 
      name: 'Gelatina', 
      description: 'Refrescante gelatina de frutas naturales',
      price: 120, 
      image: postre3,
      category: 'Postres Ligeros'
    },
    { 
      id: 4, 
      name: 'Chifón', 
      description: 'Suave y esponjoso pastel de chifón',
      price: 320, 
      image: postre4,
      category: 'Tortas'
    },
    { 
      id: 5, 
      name: 'Suspiro a la Limeña', 
      description: 'Tradicional postre peruano con manjar blanco',
      price: 280, 
      image: postre5,
      category: 'Postres Tradicionales'
    },
    { 
      id: 6, 
      name: 'Picarones', 
      description: 'Dulces fritos peruanos con miel de chancaca',
      price: 150, 
      image: postre6,
      category: 'Postres Tradicionales'
    }
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-28 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-brown mb-4">Nuestros Productos</h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-pastel-pink mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Descubre nuestra amplia variedad de postres artesanales, cada uno preparado con ingredientes frescos y mucho amor.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {productos.map(product => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
              {/* Contenedor de imagen */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge de categoría */}
                <div className="absolute top-4 left-4 bg-pastel-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {product.category}
                </div>
                
                {/* Precio en overlay */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-pastel-brown text-2xl font-bold px-4 py-2 rounded-full shadow-lg">
                  ${product.price}
                </div>
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pastel-brown mb-3 group-hover:text-pastel-pink transition-colors duration-300">
                  {product.name}
                </h3>
                
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
