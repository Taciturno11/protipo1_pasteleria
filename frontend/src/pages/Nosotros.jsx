import React from 'react';

function Nosotros() {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-28 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-brown mb-4">Sobre Nosotros</h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-pastel-pink mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Conoce la historia detrás de nuestra pastelería y la pasión que ponemos en cada postre.
          </p>
        </div>

        {/* Contenido temporal */}
        <div className="text-center py-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-pastel-brown mb-4">Página en Construcción</h2>
            <p className="text-gray-600 mb-6">
              Estamos preparando nuestra historia para compartirla contigo. Pronto conocerás todo sobre nuestra pastelería.
            </p>
            <div className="text-6xl mb-4">👨‍🍳</div>
            <p className="text-sm text-gray-500">
              Mientras tanto, puedes contactarnos para conocer más sobre nosotros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
