# 🤖 Chatbot con IA - Pastelería Deliciosa

## Descripción
Hemos implementado un chatbot inteligente que puede ayudar a los clientes con información sobre la pastelería, recomendaciones de postres y consultas generales.

## Características Principales

### 🎯 Funcionalidades del Chatbot
- **Información de la empresa**: Horarios, contacto, servicios
- **Recomendaciones inteligentes**: Basadas en ocasiones, sabores y preferencias
- **Catálogo de productos**: Muestra productos con precios y descripciones
- **Sugerencias rápidas**: Botones para consultas comunes
- **Interfaz moderna**: Diseño atractivo con animaciones

### 🧠 Inteligencia Artificial
El chatbot utiliza un sistema de procesamiento de lenguaje natural que puede entender:
- **Saludos**: "Hola", "Buenos días", etc.
- **Consultas sobre la empresa**: "¿Quiénes son?", "Horarios", "Contacto"
- **Recomendaciones por ocasión**: "Para cumpleaños", "Romántico", "Niños"
- **Recomendaciones por sabor**: "Chocolate", "Café", "Frutas"
- **Información de productos**: Precios, catálogo, pedidos

### 🎨 Interfaz de Usuario
- **Botón flotante**: Aparece en la esquina inferior derecha
- **Ventana de chat**: Diseño moderno con gradientes
- **Mensajes animados**: Transiciones suaves
- **Indicador de escritura**: Simula respuesta en tiempo real
- **Sugerencias rápidas**: Botones para consultas comunes

## Cómo Usar el Chatbot

### 1. Acceder al Chatbot
- Haz clic en el botón flotante con el ícono de chat
- El chatbot aparecerá con un mensaje de bienvenida

### 2. Tipos de Consultas que Puedes Hacer

#### 📋 Información General
```
"Hola"
"¿Cuáles son sus horarios?"
"¿Cómo puedo contactarlos?"
"¿Qué servicios ofrecen?"
```

#### 🍰 Recomendaciones de Postres
```
"Recomiéndame algo para cumpleaños"
"Quiero algo romántico"
"¿Qué tienen para niños?"
"Algo con chocolate"
"Postres para el verano"
```

#### 🛒 Productos y Pedidos
```
"Ver productos"
"¿Cuánto cuesta el tiramisú?"
"Quiero hacer un pedido"
"¿Tienen postres tradicionales?"
```

### 3. Sugerencias Rápidas
El chatbot ofrece botones de sugerencias que puedes hacer clic para:
- Ver productos
- Obtener recomendaciones
- Consultar horarios
- Información de contacto

## Estructura Técnica

### Archivos Principales
- `src/components/Chatbot.jsx` - Componente principal del chatbot
- `src/utils/chatbotAI.js` - Lógica de IA y procesamiento de mensajes
- `src/App.jsx` - Integración del chatbot en la aplicación

### Dependencias Utilizadas
- `framer-motion` - Animaciones y transiciones
- `lucide-react` - Iconos modernos
- `React Hooks` - Estado y efectos

### Base de Datos de Productos
El chatbot tiene acceso a información completa de:
- 6 productos principales
- Categorías y ingredientes
- Precios y descripciones
- Ocasiones recomendadas
- Sabores disponibles

## Personalización

### Agregar Nuevos Productos
Para agregar productos, edita el array `productos` en `src/utils/chatbotAI.js`:

```javascript
{
  id: 7,
  name: 'Nuevo Postre',
  description: 'Descripción del postre',
  price: 300,
  category: 'Categoría',
  ingredients: ['ingrediente1', 'ingrediente2'],
  occasions: ['ocasión1', 'ocasión2'],
  flavor: 'sabor'
}
```

### Modificar Respuestas
Las respuestas se pueden personalizar editando la función `procesarMensaje` en el mismo archivo.

### Cambiar Colores
Los colores del chatbot usan la paleta de Tailwind definida en `tailwind.config.js`:
- `pastel-pink` - Color principal
- `pastel-brown` - Color secundario
- `pastel-cream` - Color de fondo

## Mejoras Futuras

### Funcionalidades Adicionales
- [ ] Integración con API real
- [ ] Historial de conversaciones
- [ ] Notificaciones push
- [ ] Soporte para múltiples idiomas
- [ ] Integración con sistema de pedidos
- [ ] Análisis de conversaciones

### Optimizaciones
- [ ] Carga perezosa de componentes
- [ ] Optimización de rendimiento
- [ ] Mejoras de accesibilidad
- [ ] Soporte para dispositivos móviles

## Soporte

Si tienes problemas con el chatbot:
1. Verifica que todas las dependencias estén instaladas
2. Revisa la consola del navegador para errores
3. Asegúrate de que el servidor de desarrollo esté ejecutándose

## Conclusión

El chatbot está completamente funcional y listo para usar. Proporciona una experiencia de usuario moderna y atractiva, ayudando a los clientes a encontrar información y productos de manera rápida y eficiente.
