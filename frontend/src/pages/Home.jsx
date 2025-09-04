import postre1 from '../assets/postre1.jpg';
import postre2 from '../assets/postre2.jpg';
import postre3 from '../assets/postre3.jpg';
import postre4 from '../assets/postre 4.webp';
import postre5 from '../assets/postre5.jpg';
import postre6 from '../assets/postre6.jpg';
import { useState, useEffect } from 'react';

function Home() {
    // Estado para el carrusel de imágenes del hero
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Imágenes para el carrusel del hero
    const heroImages = [postre1, postre2, postre3, postre4, postre5, postre6];
    
    // Efecto para cambiar automáticamente las imágenes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Cambia cada 4 segundos
        
        return () => clearInterval(interval);
    }, [heroImages.length]);

    // Datos de los productos destacados con las nuevas imágenes
    const featuredProducts = [
      { 
        id: 1, 
        name: 'Tiramisú', 
        description: 'Postre italiano clásico con café y mascarpone',
        price: 450, 
        image: postre1 
      },
      { 
        id: 2, 
        name: 'Torta de Chocolate', 
        description: 'Deliciosa torta de chocolate con crema',
        price: 380, 
        image: postre2 
      },
      { 
        id: 3, 
        name: 'Gelatina', 
        description: 'Refrescante gelatina de frutas naturales',
        price: 120, 
        image: postre3 
      },
      { 
        id: 4, 
        name: 'Chifón', 
        description: 'Suave y esponjoso pastel de chifón',
        price: 320, 
        image: postre4 
      },
      { 
        id: 5, 
        name: 'Suspiro a la Limeña', 
        description: 'Tradicional postre peruano con manjar blanco',
        price: 280, 
        image: postre5 
      },
      { 
        id: 6, 
        name: 'Picarones', 
        description: 'Dulces fritos peruanos con miel de chancaca',
        price: 150, 
        image: postre6 
      }
    ];
  
    return (
      <div className="min-h-screen">
        {/* Hero Section Mejorado con Carrusel */}
        <section className="relative bg-gradient-to-br from-pastel-cream/50 via-pastel-cream/20 to-pastel-cream/50 py-12 md:py-16 lg:py-20 overflow-hidden">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-pastel-pink rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-pastel-gold rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pastel-brown rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Contenido de texto - lado izquierdo */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pastel-brown mb-6 leading-tight">
                  Dulces Momentos,<br />
                  <span className="text-pastel-pink">Dulces Recuerdos</span>
                </h1>
                
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                  Los pasteles artesanales más deliciosos para tus ocasiones especiales
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <button className="bg-pastel-pink text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pastel-brown transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
                    Ver Catálogo Completo
                  </button>
                  <button className="bg-white text-pastel-brown border-2 border-pastel-pink px-8 py-4 rounded-full text-lg font-semibold hover:bg-pastel-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                    Hacer Pedido
                  </button>
                </div>
              </div>
              
              {/* Carrusel de imágenes - lado derecho */}
              <div className="relative">
                <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  {/* Contenedor de todas las imágenes */}
                  <div 
                    className="flex transition-transform duration-1000 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {heroImages.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Postre ${index + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Indicadores de puntos */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Texto descriptivo de la imagen actual */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-pastel-brown mb-2">
                    {featuredProducts[currentImageIndex]?.name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {featuredProducts[currentImageIndex]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Productos Destacados - Diseño Mejorado */}
        <section className="py-20 md:py-28 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            {/* Encabezado mejorado */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-pastel-brown mb-6">
                Nuestros Postres Estrella
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pastel-pink to-pastel-gold mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada postre es una obra de arte culinaria, preparada con amor y los mejores ingredientes
              </p>
            </div>
            
            {/* Grid de productos mejorado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {featuredProducts.map(product => (
                <div key={product.id} className="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
                  {/* Contenedor de imagen mejorado */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    
                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Badge destacado */}
                    <div className="absolute top-4 right-4 bg-pastel-pink text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      ⭐ Destacado
                    </div>
                    
                    {/* Precio en overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-pastel-brown text-2xl font-bold px-4 py-2 rounded-full shadow-lg">
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
                    
                    <button className="w-full bg-gradient-to-r from-pastel-pink to-pastel-brown text-white py-4 rounded-xl font-semibold text-lg hover:from-pastel-brown hover:to-pastel-pink transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Botón para ver más productos */}
            <div className="text-center mt-12">
              <button className="bg-white border-2 border-pastel-pink text-pastel-pink px-8 py-4 rounded-full text-lg font-semibold hover:bg-pastel-pink hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Ver Todos los Productos
              </button>
            </div>
          </div>
        </section>
  
        {/* Sección "Por qué elegirnos" - Mejorada */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-pastel-cream to-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-pastel-brown mb-6">
                ¿Por qué elegirnos?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pastel-pink to-pastel-gold mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos dedicamos a crear experiencias dulces inolvidables con la mejor calidad y atención personalizada
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group bg-white p-8 rounded-3xl shadow-lg text-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
                <div className="bg-gradient-to-br from-pastel-cream to-pastel-pink w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🍰</span>
                </div>
                <h3 className="text-2xl font-bold text-pastel-brown mb-4 group-hover:text-pastel-pink transition-colors duration-300">
                  Ingredientes Frescos
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Utilizamos solo ingredientes de la más alta calidad y siempre frescos para garantizar el mejor sabor en cada bocado.
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-3xl shadow-lg text-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
                <div className="bg-gradient-to-br from-pastel-cream to-pastel-pink w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🎂</span>
                </div>
                <h3 className="text-2xl font-bold text-pastel-brown mb-4 group-hover:text-pastel-pink transition-colors duration-300">
                  Diseños Personalizados
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Creamos pasteles únicos adaptados a tus necesidades y ocasiones especiales, con diseños que sorprenderán a todos.
                </p>
              </div>
              
              <div className="group bg-white p-8 rounded-3xl shadow-lg text-center transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-gray-100">
                <div className="bg-gradient-to-br from-pastel-cream to-pastel-pink w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🚚</span>
                </div>
                <h3 className="text-2xl font-bold text-pastel-brown mb-4 group-hover:text-pastel-pink transition-colors duration-300">
                  Entrega a Domicilio
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Llevamos nuestros productos directamente a tu puerta, siempre frescos y con el mayor cuidado para que lleguen perfectos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nueva sección de estadísticas */}
        <section className="py-16 bg-pastel-brown text-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-pastel-cream">Clientes Felices</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-pastel-cream">Tipos de Postres</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
                <div className="text-pastel-cream">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-pastel-cream">Atención al Cliente</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;