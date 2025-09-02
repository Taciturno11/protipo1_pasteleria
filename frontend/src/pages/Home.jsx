function Home() {
    // Datos de ejemplo para los productos destacados
    const featuredProducts = [
      { id: 1, name: 'Pastel de Chocolate', price: 350, image: 'https://via.placeholder.com/300x200?text=Pastel+de+Chocolate' },
      { id: 2, name: 'Cupcakes Variados', price: 180, image: 'https://via.placeholder.com/300x200?text=Cupcakes' },
      { id: 3, name: 'Tarta de Frutas', price: 280, image: 'https://via.placeholder.com/300x200?text=Tarta+de+Frutas' },
      { id: 4, name: 'Galletas Decoradas', price: 150, image: 'https://via.placeholder.com/300x200?text=Galletas' }
    ];
  
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-pastel-cream to-white py-16 md:py-24 lg:py-32 relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover opacity-10"></div>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-pastel-brown mb-4 sm:mb-6 md:mb-8 drop-shadow-sm">Dulces Momentos, Dulces Recuerdos</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">Los pasteles artesanales más deliciosos para tus ocasiones especiales</p>
            <button className="bg-pastel-pink text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-lg sm:text-xl font-semibold hover:bg-pastel-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Ver Catálogo
            </button>
          </div>
        </section>
  
        {/* Productos Destacados */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-pastel-brown mb-3 md:mb-4">Productos Destacados</h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-pastel-pink mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-48 sm:h-52 md:h-56 object-cover" />
                    <div className="absolute top-0 right-0 bg-pastel-pink text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 rounded-bl-lg">
                      Destacado
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-pastel-brown mb-1 sm:mb-2">{product.name}</h3>
                    <p className="text-pastel-gold font-bold text-lg sm:text-xl mb-3 sm:mb-4">${product.price}</p>
                    <button className="mt-1 sm:mt-2 bg-pastel-pink text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full w-full hover:bg-pastel-brown transition-colors duration-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm sm:text-base">Agregar al Carrito</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Sección "Por qué elegirnos" */}
        <section className="bg-gradient-to-b from-white to-pastel-cream py-16 sm:py-20 md:py-24 lg:py-28 w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-pastel-brown mb-3 md:mb-4">¿Por qué elegirnos?</h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-pastel-pink mx-auto mb-4 sm:mb-5 md:mb-6"></div>
              <p className="text-base sm:text-lg max-w-3xl mx-auto px-2">Nos dedicamos a crear experiencias dulces inolvidables con la mejor calidad y atención personalizada.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-pastel-cream w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 shadow-inner">
                  <span className="text-3xl sm:text-4xl md:text-5xl">🍰</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-pastel-brown mb-2 sm:mb-3 md:mb-4">Ingredientes Frescos</h3>
                <p className="text-gray-600 text-sm sm:text-base">Utilizamos solo ingredientes de la más alta calidad y siempre frescos para garantizar el mejor sabor en cada bocado.</p>
              </div>
              
              <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-pastel-cream w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 shadow-inner">
                  <span className="text-3xl sm:text-4xl md:text-5xl">🎂</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-pastel-brown mb-2 sm:mb-3 md:mb-4">Diseños Personalizados</h3>
                <p className="text-gray-600 text-sm sm:text-base">Creamos pasteles únicos adaptados a tus necesidades y ocasiones especiales, con diseños que sorprenderán a todos.</p>
              </div>
              
              <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-pastel-cream w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 shadow-inner">
                  <span className="text-3xl sm:text-4xl md:text-5xl">🚚</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-pastel-brown mb-2 sm:mb-3 md:mb-4">Entrega a Domicilio</h3>
                <p className="text-gray-600 text-sm sm:text-base">Llevamos nuestros productos directamente a tu puerta, siempre frescos y con el mayor cuidado para que lleguen perfectos.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;