import React from 'react';

function Carrito() {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-28 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-brown mb-4">Carrito de Compras</h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-pastel-pink mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Revisa los productos que has seleccionado y procede con tu pedido.
          </p>
        </div>

        {/* Contenido temporal */}
        <div className="text-center py-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-pastel-brown mb-4">Carrito Vacío</h2>
            <p className="text-gray-600 mb-6">
              Tu carrito está vacío. Agrega algunos de nuestros deliciosos postres para comenzar tu pedido.
            </p>
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-sm text-gray-500">
              Pronto implementaremos la funcionalidad completa del carrito de compras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
