// Base de datos de productos para recomendaciones con nueva clasificación
const productos = [
  // DE CUCHARA Y TENEDOR
  { 
    id: 1, 
    name: 'Tiramisú', 
    description: 'Postre italiano clásico con café y mascarpone',
    price: 450, 
    category: 'De Cuchara y Tenedor',
    ingredients: ['café', 'mascarpone', 'cacao', 'bizcocho'],
    occasions: ['cena romántica', 'ocasión especial', 'postre elegante'],
    flavor: 'café',
    isPeruvian: false,
    allergens: ['huevos', 'lácteos', 'gluten'],
    preparationTime: '30 min',
    servingSize: '4-6 personas',
    difficulty: 'intermedio',
    popularity: 95,
    seasonal: false,
    tags: ['elegante', 'italiano', 'café', 'cremoso']
  },
  { 
    id: 2, 
    name: 'Torta de Chocolate', 
    description: 'Deliciosa torta de chocolate con crema',
    price: 380, 
    category: 'De Cuchara y Tenedor',
    ingredients: ['chocolate', 'crema', 'harina', 'huevos'],
    occasions: ['cumpleaños', 'celebración', 'postre clásico'],
    flavor: 'chocolate',
    isPeruvian: false,
    allergens: ['huevos', 'lácteos', 'gluten'],
    preparationTime: '45 min',
    servingSize: '8-10 personas',
    difficulty: 'fácil',
    popularity: 90,
    seasonal: false,
    tags: ['chocolate', 'clásico', 'cumpleaños', 'cremoso']
  },
  { 
    id: 4, 
    name: 'Chifón', 
    description: 'Suave y esponjoso pastel de chifón',
    price: 320, 
    category: 'De Cuchara y Tenedor',
    ingredients: ['harina', 'huevos', 'aceite', 'azúcar'],
    occasions: ['merienda', 'postre suave', 'ocasión casual'],
    flavor: 'vainilla',
    isPeruvian: false,
    allergens: ['huevos', 'gluten'],
    preparationTime: '25 min',
    servingSize: '6-8 personas',
    difficulty: 'fácil',
    popularity: 75,
    seasonal: false,
    tags: ['suave', 'esponjoso', 'vainilla', 'ligero']
  },
  { 
    id: 5, 
    name: 'Suspiro a la Limeña', 
    description: 'Tradicional postre peruano con manjar blanco',
    price: 280, 
    category: 'De Cuchara y Tenedor',
    ingredients: ['manjar blanco', 'merengue', 'canela'],
    occasions: ['postre tradicional', 'ocasión especial', 'postre peruano'],
    flavor: 'dulce',
    isPeruvian: true,
    allergens: ['huevos', 'lácteos'],
    preparationTime: '20 min',
    servingSize: '4 personas',
    difficulty: 'intermedio',
    popularity: 85,
    seasonal: false,
    tags: ['peruano', 'tradicional', 'manjar', 'elegante']
  },
  { 
    id: 7, 
    name: 'Pie de Limón', 
    description: 'Delicioso pie de limón con merengue italiano',
    price: 350, 
    category: 'De Cuchara y Tenedor',
    ingredients: ['limón', 'merengue', 'galleta', 'crema'],
    occasions: ['postre cítrico', 'ocasión especial', 'postre elegante'],
    flavor: 'limón',
    isPeruvian: false,
    allergens: ['huevos', 'lácteos', 'gluten'],
    preparationTime: '35 min',
    servingSize: '6-8 personas',
    difficulty: 'intermedio',
    popularity: 80,
    seasonal: false,
    tags: ['cítrico', 'merengue', 'elegante', 'refrescante']
  },
  { 
    id: 8, 
    name: 'Crema Volteada', 
    description: 'Clásico postre peruano de caramelo y crema',
    price: 250, 
    category: 'De Cuchara y Tenedor',
    ingredients: ['caramelo', 'crema', 'huevos', 'leche'],
    occasions: ['postre tradicional', 'ocasión especial', 'postre peruano'],
    flavor: 'caramelo',
    isPeruvian: true,
    allergens: ['huevos', 'lácteos'],
    preparationTime: '40 min',
    servingSize: '6 personas',
    difficulty: 'intermedio',
    popularity: 88,
    seasonal: false,
    tags: ['peruano', 'caramelo', 'tradicional', 'cremoso']
  },

  // ANTOJOS Y BOCADITOS
  { 
    id: 6, 
    name: 'Picarones', 
    description: 'Dulces fritos peruanos con miel de chancaca',
    price: 150, 
    category: 'Antojos y Bocaditos',
    ingredients: ['camote', 'harina', 'miel de chancaca'],
    occasions: ['postre tradicional', 'merienda', 'postre peruano'],
    flavor: 'dulce tradicional',
    isPeruvian: true,
    allergens: ['gluten'],
    preparationTime: '15 min',
    servingSize: '4-6 unidades',
    difficulty: 'fácil',
    popularity: 92,
    seasonal: false,
    tags: ['peruano', 'frito', 'tradicional', 'miel']
  },
  { 
    id: 9, 
    name: 'Alfajores', 
    description: 'Deliciosos alfajores peruanos con manjar blanco',
    price: 80, 
    category: 'Antojos y Bocaditos',
    ingredients: ['galleta', 'manjar blanco', 'coco'],
    occasions: ['merienda', 'antojito', 'postre peruano'],
    flavor: 'dulce',
    isPeruvian: true,
    allergens: ['lácteos', 'gluten'],
    preparationTime: '10 min',
    servingSize: '1 unidad',
    difficulty: 'fácil',
    popularity: 95,
    seasonal: false,
    tags: ['peruano', 'manjar', 'coco', 'tradicional']
  },
  { 
    id: 10, 
    name: 'Brownie', 
    description: 'Brownie de chocolate con nueces',
    price: 120, 
    category: 'Antojos y Bocaditos',
    ingredients: ['chocolate', 'nueces', 'harina', 'huevos'],
    occasions: ['antojito', 'merienda', 'postre chocolate'],
    flavor: 'chocolate',
    isPeruvian: false,
    allergens: ['huevos', 'gluten', 'frutos secos'],
    preparationTime: '20 min',
    servingSize: '1 porción',
    difficulty: 'fácil',
    popularity: 85,
    seasonal: false,
    tags: ['chocolate', 'nueces', 'dense', 'rico']
  },
  { 
    id: 11, 
    name: 'Galletas con Chispas', 
    description: 'Galletas caseras con chispas de chocolate',
    price: 60, 
    category: 'Antojos y Bocaditos',
    ingredients: ['harina', 'chispas chocolate', 'mantequilla'],
    occasions: ['antojito', 'merienda', 'niños'],
    flavor: 'chocolate',
    isPeruvian: false,
    allergens: ['lácteos', 'gluten'],
    preparationTime: '15 min',
    servingSize: '6-8 galletas',
    difficulty: 'fácil',
    popularity: 78,
    seasonal: false,
    tags: ['galletas', 'chocolate', 'casero', 'niños']
  },

  // FRÍOS Y HELADOS
  { 
    id: 3, 
    name: 'Gelatina', 
    description: 'Refrescante gelatina de frutas naturales',
    price: 120, 
    category: 'Fríos y Helados',
    ingredients: ['frutas', 'gelatina', 'azúcar'],
    occasions: ['verano', 'postre ligero', 'niños'],
    flavor: 'frutas',
    isPeruvian: false,
    allergens: [],
    preparationTime: '10 min + refrigeración',
    servingSize: '1 porción',
    difficulty: 'fácil',
    popularity: 70,
    seasonal: true,
    tags: ['frutas', 'ligero', 'refrescante', 'niños']
  },
  { 
    id: 12, 
    name: 'Queso Helado Arequipeño', 
    description: 'Tradicional queso helado peruano',
    price: 180, 
    category: 'Fríos y Helados',
    ingredients: ['leche', 'canela', 'clavo de olor'],
    occasions: ['verano', 'postre tradicional', 'postre peruano'],
    flavor: 'canela',
    isPeruvian: true,
    allergens: ['lácteos'],
    preparationTime: '25 min + congelación',
    servingSize: '1 porción',
    difficulty: 'intermedio',
    popularity: 90,
    seasonal: true,
    tags: ['peruano', 'helado', 'canela', 'tradicional']
  },
  { 
    id: 13, 
    name: 'Helado de Vainilla', 
    description: 'Helado artesanal de vainilla',
    price: 150, 
    category: 'Fríos y Helados',
    ingredients: ['leche', 'vainilla', 'azúcar'],
    occasions: ['verano', 'postre clásico', 'niños'],
    flavor: 'vainilla',
    isPeruvian: false,
    allergens: ['lácteos'],
    preparationTime: '20 min + congelación',
    servingSize: '1 porción',
    difficulty: 'fácil',
    popularity: 88,
    seasonal: true,
    tags: ['vainilla', 'clásico', 'helado', 'cremoso']
  },
  { 
    id: 14, 
    name: 'Cremolada de Fresa', 
    description: 'Refrescante cremolada de fresa',
    price: 100, 
    category: 'Fríos y Helados',
    ingredients: ['fresa', 'hielo', 'azúcar'],
    occasions: ['verano', 'bebida fría', 'refrescante'],
    flavor: 'fresa',
    isPeruvian: false,
    allergens: [],
    preparationTime: '5 min',
    servingSize: '1 vaso',
    difficulty: 'fácil',
    popularity: 82,
    seasonal: true,
    tags: ['fresa', 'bebida', 'refrescante', 'frutas']
  }
];

// Información de la empresa
const empresaInfo = {
  nombre: 'Pastelería Deliciosa',
  descripcion: 'Creando momentos dulces y memorables desde 2010. Nuestros pasteles son elaborados con los mejores ingredientes y mucho amor.',
  horarios: {
    'lunes a viernes': '9:00 AM - 8:00 PM',
    'sábados': '10:00 AM - 6:00 PM',
    'domingos': '10:00 AM - 4:00 PM'
  },
  contacto: {
    telefono: '(123) 456-7890',
    email: 'info@pasteleriadeliciosa.com',
    direccion: 'Calle Dulce 123, Ciudad'
  },
  servicios: ['pasteles personalizados', 'entrega a domicilio', 'catering', 'clases de repostería'],
  especialidades: ['postres peruanos tradicionales', 'tortas personalizadas', 'helados artesanales', 'antojos caseros'],
  valores: ['calidad premium', 'ingredientes frescos', 'tradición familiar', 'atención personalizada']
};

// Función para procesar mensajes y generar respuestas
export const procesarMensaje = (mensaje) => {
  const mensajeLower = mensaje.toLowerCase().trim();
  
  // Función para detectar palabras clave con mayor precisión
  const contienePalabras = (palabras) => {
    return palabras.some(palabra => mensajeLower.includes(palabra));
  };

  // Función para detectar intención del usuario
  const detectarIntencion = () => {
    const intenciones = {
      saludo: ['hola', 'hi', 'hey', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos', 'qué tal', 'buenas'],
      despedida: ['adiós', 'chao', 'hasta luego', 'nos vemos', 'bye', 'hasta pronto', 'gracias', 'chau'],
      empresa: ['empresa', 'quienes somos', 'sobre nosotros', 'historia', 'información', 'acerca de', 'que es', 'que hacen'],
      horarios: ['horario', 'hora', 'abierto', 'cerrado', 'atención', 'funcionamiento', 'cuando abren', 'cuando cierran', 'que horas'],
      contacto: ['contacto', 'teléfono', 'email', 'correo', 'dirección', 'ubicación', 'donde están', 'como contactar', 'llamar'],
      servicios: ['servicio', 'entrega', 'domicilio', 'personalizado', 'catering', 'clases', 'que ofrecen', 'servicios'],
      productos: ['producto', 'postre', 'torta', 'dulce', 'catálogo', 'menu', 'que tienen', 'ver todo', 'carta'],
      precios: ['precio', 'costo', 'cuanto cuesta', 'valor', 'tarifa', 'pago', 'barato', 'caro', 'económico'],
      pedidos: ['pedido', 'comprar', 'ordenar', 'encargar', 'reservar', 'hacer pedido', 'adquirir', 'llevar'],
      recomendaciones: ['recomendar', 'sugerir', 'mejor', 'favorito', 'popular', 'que me recomiendas', 'cual recomiendas'],
      cumpleanos: ['cumpleaños', 'cumple', 'birthday', 'fiesta', 'celebración', 'party', 'festejo'],
      romantico: ['romántico', 'romantico', 'pareja', 'cena', 'amor', 'valentine', 'especial', 'romance'],
      niños: ['niños', 'niño', 'infantil', 'chicos', 'pequeños', 'kids', 'child', 'bebé'],
      verano: ['verano', 'calor', 'refrescante', 'fresco', 'helado', 'frío', 'caliente'],
      chocolate: ['chocolate', 'choco', 'cacao', 'coco'],
      cafe: ['café', 'coffee', 'expresso', 'capuccino', 'americano'],
      frutas: ['frutas', 'fruta', 'natural', 'fresco', 'fresa', 'limón', 'manzana'],
      tradicional: ['tradicional', 'peruano', 'clásico', 'típico', 'auténtico', 'nacional'],
      cuchara_tenedor: ['cuchara', 'tenedor', 'plato', 'vitrina', 'torta', 'pie', 'cheesecake', 'flan', 'mousse'],
      antojos: ['antojos', 'bocaditos', 'pequeño', 'mano', 'llevar', 'café', 'alfajor', 'brownie', 'galleta', 'teja', 'cocada'],
      frios: ['fríos', 'helados', 'congelado', 'queso helado', 'cremolada', 'sorbete', 'marciano', 'helado'],
      alergias: ['alergia', 'alérgico', 'sin gluten', 'sin lactosa', 'vegano', 'vegetariano', 'intolerancia'],
      ingredientes: ['ingrediente', 'que lleva', 'como se hace', 'receta', 'preparación'],
      temporada: ['temporada', 'estacional', 'verano', 'invierno', 'primavera', 'otoño'],
      dificultad: ['fácil', 'difícil', 'complicado', 'simple', 'nivel'],
      tiempo: ['tiempo', 'rápido', 'lento', 'minutos', 'horas', 'preparación']
    };

    for (const [intencion, palabras] of Object.entries(intenciones)) {
      if (contienePalabras(palabras)) {
        return intencion;
      }
    }
    return 'general';
  };

  const intencion = detectarIntencion();

  // Saludos
  if (intencion === 'saludo') {
    return {
      tipo: 'texto',
      contenido: `¡Hola! 👋 Soy el asistente virtual de ${empresaInfo.nombre}. Estoy aquí para ayudarte con información sobre nuestros postres y servicios. ¿En qué puedo ayudarte hoy?`,
      sugerencias: ['Ver productos', 'Recomendaciones', 'Horarios', 'Contacto']
    };
  }

  // Despedidas
  if (intencion === 'despedida') {
    return {
      tipo: 'texto',
      contenido: `¡Hasta luego! 😊 Fue un placer ayudarte. Esperamos verte pronto en ${empresaInfo.nombre}. ¡Que tengas un día dulce! 🍰`,
      sugerencias: ['Ver productos', 'Contacto', 'Horarios']
    };
  }

  // Información de la empresa
  if (intencion === 'empresa') {
    return {
      tipo: 'texto',
      contenido: `${empresaInfo.descripcion}\n\n🏆 **Nuestras Especialidades:**\n${empresaInfo.especialidades.map(esp => `• ${esp}`).join('\n')}\n\n💎 **Nuestros Valores:**\n${empresaInfo.valores.map(val => `• ${val}`).join('\n')}\n\n📞 **Contacto:**\n• Teléfono: ${empresaInfo.contacto.telefono}\n• Email: ${empresaInfo.contacto.email}\n• Dirección: ${empresaInfo.contacto.direccion}`,
      sugerencias: ['Horarios', 'Servicios', 'Ver productos']
    };
  }

  // Horarios
  if (intencion === 'horarios') {
    let horariosTexto = '🕒 **Nuestros horarios de atención:**\n\n';
    Object.entries(empresaInfo.horarios).forEach(([dia, horario]) => {
      horariosTexto += `• ${dia.charAt(0).toUpperCase() + dia.slice(1)}: ${horario}\n`;
    });
    horariosTexto += '\n💡 **Tip:** Los fines de semana cerramos más temprano, ¡así que ven temprano!';
    return {
      tipo: 'texto',
      contenido: horariosTexto,
      sugerencias: ['Contacto', 'Ver productos', 'Servicios']
    };
  }

  // Contacto
  if (intencion === 'contacto') {
    return {
      tipo: 'texto',
      contenido: `📞 **Información de Contacto:**\n\n• Teléfono: ${empresaInfo.contacto.telefono}\n• Email: ${empresaInfo.contacto.email}\n• Dirección: ${empresaInfo.contacto.direccion}\n\n💬 **¿Cómo contactarnos?**\n• Para pedidos: Llama directamente\n• Para consultas: Email o WhatsApp\n• Para visitas: Ven a nuestra dirección\n\n¡Estamos aquí para atenderte! 😊`,
      sugerencias: ['Horarios', 'Ver productos', 'Hacer pedido']
    };
  }

  // Servicios
  if (intencion === 'servicios') {
    return {
      tipo: 'texto',
      contenido: `🎂 **Nuestros Servicios:**\n\n• **Pasteles personalizados** - Para ocasiones especiales\n• **Entrega a domicilio** - En toda la ciudad\n• **Servicio de catering** - Para eventos grandes\n• **Clases de repostería** - Aprende con nosotros\n\n💡 **¿Sabías que?** También hacemos postres sin gluten y opciones veganas.\n\n¿Te interesa alguno en particular?`,
      sugerencias: ['Ver productos', 'Contacto', 'Hacer pedido']
    };
  }

  // Recomendaciones por ocasión
  if (intencion === 'cumpleanos') {
    const recomendados = productos.filter(p => p.occasions.some(o => o.includes('cumpleaños') || o.includes('celebración')));
    return generarRecomendacion(recomendados, 'para cumpleaños');
  }

  if (intencion === 'romantico') {
    const recomendados = productos.filter(p => p.occasions.some(o => o.includes('romántica') || o.includes('elegante')));
    return generarRecomendacion(recomendados, 'para una ocasión romántica');
  }

  if (intencion === 'niños') {
    const recomendados = productos.filter(p => p.occasions.some(o => o.includes('niños')));
    return generarRecomendacion(recomendados, 'para niños');
  }

  if (intencion === 'verano') {
    const recomendados = productos.filter(p => p.occasions.some(o => o.includes('verano') || o.includes('ligero')));
    return generarRecomendacion(recomendados, 'para el verano');
  }

  // Recomendaciones por sabor
  if (intencion === 'chocolate') {
    const recomendados = productos.filter(p => p.flavor.includes('chocolate'));
    return generarRecomendacion(recomendados, 'con chocolate');
  }

  if (intencion === 'cafe') {
    const recomendados = productos.filter(p => p.flavor.includes('café'));
    return generarRecomendacion(recomendados, 'con café');
  }

  if (intencion === 'frutas') {
    const recomendados = productos.filter(p => p.flavor.includes('frutas'));
    return generarRecomendacion(recomendados, 'con frutas');
  }

  if (intencion === 'tradicional') {
    const recomendados = productos.filter(p => p.isPeruvian);
    return generarRecomendacion(recomendados, 'tradicionales peruanos');
  }

  // Nuevas categorías
  if (intencion === 'cuchara_tenedor') {
    const recomendados = productos.filter(p => p.category === 'De Cuchara y Tenedor');
    return generarRecomendacion(recomendados, 'de cuchara y tenedor');
  }

  if (intencion === 'antojos') {
    const recomendados = productos.filter(p => p.category === 'Antojos y Bocaditos');
    return generarRecomendacion(recomendados, 'antojos y bocaditos');
  }

  if (intencion === 'frios') {
    const recomendados = productos.filter(p => p.category === 'Fríos y Helados');
    return generarRecomendacion(recomendados, 'fríos y helados');
  }

  // Ver todos los productos
  if (intencion === 'productos') {
    return {
      tipo: 'productos',
      contenido: '🍰 **Nuestros Productos Destacados:**',
      productos: productos,
      sugerencias: ['Recomendaciones', 'Contacto', 'Horarios']
    };
  }

  // Recomendación general
  if (intencion === 'recomendaciones') {
    const recomendados = productos.slice(0, 3); // Top 3 productos
    return generarRecomendacion(recomendados, 'más populares');
  }

  // Precios
  if (intencion === 'precios') {
    return {
      tipo: 'texto',
      contenido: `💰 **Rangos de Precios:**\n\n• **Antojos y Bocaditos:** $60 - $150\n• **Postres Fríos:** $100 - $180\n• **Tortas Tradicionales:** $250 - $380\n• **Postres Especiales:** $450+\n\n💡 **Tip:** Los postres peruanos tradicionales tienen precios muy accesibles.\n\n¿Te interesa algún producto específico?`,
      sugerencias: ['Ver productos', 'Recomendaciones', 'Contacto']
    };
  }

  // Pedidos
  if (intencion === 'pedidos') {
    return {
      tipo: 'texto',
      contenido: `🛒 **Para hacer un pedido:**\n\n1. **Navega** por nuestros productos\n2. **Agrega** al carrito los que te gusten\n3. **Contacta** para confirmar el pedido\n\n📞 **Llámanos al ${empresaInfo.contacto.telefono}** para pedidos especiales\n\n💡 **Tip:** Los pedidos con 24 horas de anticipación tienen descuento del 10%`,
      sugerencias: ['Ver productos', 'Contacto', 'Servicios']
    };
  }

  // Búsqueda inteligente de productos específicos
  const productoEncontrado = productos.find(producto => 
    producto.name.toLowerCase().includes(mensajeLower) ||
    producto.description.toLowerCase().includes(mensajeLower) ||
    producto.category.toLowerCase().includes(mensajeLower)
  );

  if (productoEncontrado) {
    return {
      tipo: 'productos',
      contenido: `🍰 **Encontré este producto para ti:**`,
      productos: [productoEncontrado],
      sugerencias: ['Ver todos los productos', 'Recomendaciones', 'Hacer pedido']
    };
  }

  // Respuesta inteligente por defecto con sugerencias contextuales
  const palabrasClave = mensajeLower.split(' ').filter(palabra => palabra.length > 3);
  const sugerenciasContextuales = [];

  if (palabrasClave.some(palabra => ['dulce', 'postre', 'torta'].includes(palabra))) {
    sugerenciasContextuales.push('Ver productos', 'Recomendaciones');
  }
  if (palabrasClave.some(palabra => ['tiempo', 'cuando', 'hora'].includes(palabra))) {
    sugerenciasContextuales.push('Horarios');
  }
  if (palabrasClave.some(palabra => ['llamar', 'escribir', 'hablar'].includes(palabra))) {
    sugerenciasContextuales.push('Contacto');
  }

  const sugerenciasFinales = sugerenciasContextuales.length > 0 
    ? [...sugerenciasContextuales, 'Ver productos', 'Horarios', 'Contacto']
    : ['Ver productos', 'Recomendaciones', 'Horarios', 'Contacto'];

  return {
    tipo: 'texto',
    contenido: `🤔 Entiendo que buscas información sobre "${mensaje}". Puedo ayudarte con:\n\n• Información sobre nuestros productos y postres\n• Recomendaciones personalizadas según tus gustos\n• Horarios de atención y contacto\n• Servicios disponibles\n\n¿Podrías ser más específico sobre lo que necesitas?`,
    sugerencias: sugerenciasFinales.slice(0, 4)
  };
};

// Función para generar recomendaciones
const generarRecomendacion = (productosRecomendados, contexto) => {
  if (productosRecomendados.length === 0) {
    return {
      tipo: 'texto',
      contenido: `😊 No tenemos productos específicos ${contexto}, pero te recomiendo nuestros productos más populares:`,
      productos: productos.slice(0, 3),
      sugerencias: ['Ver todos los productos', 'Contacto', 'Horarios']
    };
  }

  let contenido = `🍰 **Recomendaciones ${contexto}:**\n\n`;
  productosRecomendados.forEach((producto, index) => {
    contenido += `${index + 1}. **${producto.name}** - $${producto.price}\n   ${producto.description}\n\n`;
  });

  return {
    tipo: 'productos',
    contenido: contenido,
    productos: productosRecomendados,
    sugerencias: ['Ver todos los productos', 'Contacto', 'Hacer pedido']
  };
};

// Función para obtener sugerencias rápidas
export const obtenerSugerenciasIniciales = () => {
  return ['Ver productos', 'Recomendaciones', 'Horarios', 'Contacto'];
};

// Función para procesar consultas complejas con múltiples intenciones
export const procesarConsultaCompleja = (mensaje) => {
  const mensajeLower = mensaje.toLowerCase().trim();
  
  // Detectar múltiples intenciones en una sola consulta
  const intencionesDetectadas = [];
  
  if (mensajeLower.includes('recomendar') && mensajeLower.includes('cumpleaños')) {
    intencionesDetectadas.push('recomendacion_cumpleanos');
  }
  
  if (mensajeLower.includes('precio') && mensajeLower.includes('tiramisu')) {
    intencionesDetectadas.push('precio_especifico');
  }
  
  if (mensajeLower.includes('horario') && mensajeLower.includes('domingo')) {
    intencionesDetectadas.push('horario_especifico');
  }
  
  // Procesar consultas complejas
  if (intencionesDetectadas.includes('recomendacion_cumpleanos')) {
    const recomendados = productos.filter(p => p.occasions.some(o => o.includes('cumpleaños') || o.includes('celebración')));
    return generarRecomendacion(recomendados, 'para cumpleaños');
  }
  
  if (intencionesDetectadas.includes('precio_especifico')) {
    const tiramisu = productos.find(p => p.name.toLowerCase().includes('tiramisú'));
    if (tiramisu) {
      return {
        tipo: 'texto',
        contenido: `🍰 **${tiramisu.name}**\n\n💰 Precio: $${tiramisu.price}\n📝 Descripción: ${tiramisu.description}\n\n¿Te interesa este postre?`,
        sugerencias: ['Ver productos', 'Hacer pedido', 'Recomendaciones']
      };
    }
  }
  
  if (intencionesDetectadas.includes('horario_especifico')) {
    return {
      tipo: 'texto',
      contenido: `🕒 **Horario de Domingo:**\n\n• Domingo: 10:00 AM - 4:00 PM\n\n¡Estamos abiertos los domingos para endulzar tu fin de semana! 🍰`,
      sugerencias: ['Ver productos', 'Contacto', 'Servicios']
    };
  }
  
  return null; // Si no se detecta consulta compleja, usar procesamiento normal
};

// Función para generar respuestas más naturales
export const generarRespuestaNatural = (intencion, contexto) => {
  const respuestasNaturales = {
    saludo: [
      "¡Hola! 😊 ¿En qué puedo ayudarte hoy?",
      "¡Buenos días! 👋 ¿Qué te gustaría saber sobre nuestros postres?",
      "¡Hola! 🍰 Estoy aquí para ayudarte con cualquier consulta."
    ],
    recomendaciones: [
      "¡Perfecto! Te voy a recomendar nuestros mejores postres:",
      "¡Excelente elección! Aquí tienes mis recomendaciones:",
      "¡Me encanta ayudarte a elegir! Estos son mis favoritos:"
    ],
    productos: [
      "¡Aquí tienes nuestro catálogo completo!",
      "Estos son todos nuestros deliciosos postres:",
      "¡Mira qué variedad de postres tenemos para ti!"
    ]
  };
  
  const respuestas = respuestasNaturales[intencion] || respuestasNaturales.saludo;
  return respuestas[Math.floor(Math.random() * respuestas.length)];
};
