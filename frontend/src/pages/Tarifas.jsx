import React from 'react';

function Tarifas() {
  // Datos de los planes
  const planes = [
    {
      id: 1,
      nombre: 'Plan Básico',
      descripcion: 'Sitio web sencillo pero funcional',
      precio: 800,
      caracteristicas: [
        'Diseño web responsive',
        'Hasta 5 vistas personalizadas',
        'Formulario de contacto',
        'Catálogo de productos simple',
        'Integración con redes sociales',
        '1 mes de soporte técnico',
        'Tiempo de entrega: 3 semanas'
      ],
      color: 'pastel-cream',
      textColor: 'pastel-brown',
      buttonColor: 'pastel-pink',
      destacado: false
    },
    {
      id: 2,
      nombre: 'Plan Pro',
      descripcion: 'Sitio web completo con carrito de compras',
      precio: 1000,
      caracteristicas: [
        'Diseño web responsive profesional',
        'Hasta 8 vistas personalizadas',
        'Carrito de compras funcional',
        'Panel de administración básico',
        'Formulario de contacto avanzado',
        'Chat bot para atención al cliente',
        'Optimización para buscadores',
        '2 meses de soporte técnico',
        'Tiempo de entrega: 4 semanas'
      ],
      color: 'pastel-pink',
      textColor: 'white',
      buttonColor: 'white',
      destacado: true
    }
  ];

  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-28 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pastel-brown mb-4">Planes de Desarrollo Web</h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-pastel-pink mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Selecciona el plan que mejor se adapte a las necesidades de tu negocio. Todos los planes incluyen un sitio web profesional y responsive.
          </p>
        </div>

        {/* Tarjetas de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {planes.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.destacado ? 'md:scale-105 md:-translate-y-2' : ''
              }`}
            >
              {/* Cabecera del plan */}
              <div className={`bg-${plan.color} p-6 text-center`}>
                {plan.destacado && (
                  <div className="bg-yellow-400 text-xs uppercase font-bold tracking-wider py-1 px-2 rounded-full inline-block mb-2">
                    Más popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold text-${plan.textColor} mb-2`}>{plan.nombre}</h3>
                <p className={`text-${plan.textColor} opacity-90 mb-4`}>{plan.descripcion}</p>
                <div className="flex items-center justify-center">
                  <span className={`text-${plan.textColor} text-3xl font-bold`}>
                    ${plan.precio.toLocaleString()}
                  </span>
                  <span className={`text-${plan.textColor} ml-2 opacity-80`}>
                    USD
                  </span>
                </div>
              </div>

              {/* Características del plan */}
              <div className="bg-white p-6">
                <ul className="space-y-3 mb-6">
                  {plan.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.buttonColor === 'white'
                      ? 'bg-white text-pastel-pink border-2 border-pastel-pink hover:bg-pastel-pink hover:text-white'
                      : `bg-${plan.buttonColor} text-${
                          plan.buttonColor === 'pastel-cream' ? 'pastel-brown' : 'white'
                        } hover:bg-opacity-90`
                  }`}
                >
                  Solicitar Cotización
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de preguntas frecuentes */}
        <div className="mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-pastel-brown mb-8 text-center">Preguntas Frecuentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-pastel-brown mb-2">¿Cuánto tiempo toma desarrollar mi sitio web?</h3>
              <p className="text-gray-600">El tiempo de desarrollo depende del plan elegido: 3 semanas para el plan básico y 4 semanas para el plan pro.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-pastel-brown mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-gray-600">Aceptamos transferencias bancarias y PayPal. Solicitamos un 50% de anticipo para comenzar el proyecto y el 50% restante al finalizar.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-pastel-brown mb-2">¿Necesito conocimientos técnicos para administrar mi sitio?</h3>
              <p className="text-gray-600">No, diseñamos interfaces de administración sencillas y te proporcionamos una guía básica para que puedas gestionar tu sitio fácilmente.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-pastel-brown mb-2">¿Qué incluye el soporte técnico?</h3>
              <p className="text-gray-600">El soporte técnico incluye resolución de errores, pequeñas actualizaciones y asesoramiento sobre el uso del sitio web durante el período especificado en cada plan.</p>
            </div>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-pastel-brown mb-4">¿Tienes alguna duda?</h2>
          <p className="text-lg text-gray-600 mb-6">Contáctanos para resolver tus preguntas y comenzar a crear tu sitio web para pastelería.</p>
          <button className="bg-pastel-pink text-white px-8 py-3 rounded-full font-medium hover:bg-pastel-brown transition-all duration-300 shadow-md hover:shadow-lg">
            Contactar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tarifas;
