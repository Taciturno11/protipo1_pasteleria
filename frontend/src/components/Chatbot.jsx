import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Sparkles,
  ShoppingCart,
  Clock,
  Phone,
  MapPin
} from 'lucide-react';
import { procesarMensaje, obtenerSugerenciasIniciales, procesarConsultaCompleja } from '../utils/chatbotAI';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: '¡Hola! 👋 Soy el asistente virtual de Pastelería Deliciosa. Estoy aquí para ayudarte con información sobre nuestros postres y servicios. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date(),
      sugerencias: obtenerSugerenciasIniciales()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (message = inputValue) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular delay de respuesta
    setTimeout(() => {
      // Primero intentar procesar consultas complejas
      let response = procesarConsultaCompleja(message);
      
      // Si no es una consulta compleja, usar procesamiento normal
      if (!response) {
        response = procesarMensaje(message);
      }
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response.contenido,
        timestamp: new Date(),
        sugerencias: response.sugerencias || [],
        productos: response.productos || null,
        tipo: response.tipo || 'texto'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 800); // Tiempo de respuesta más rápido
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    if (!isOpen) {
      setHasBeenOpened(true);
    }
    setIsOpen(!isOpen);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getIconForSuggestion = (suggestion) => {
    if (suggestion.includes('productos') || suggestion.includes('Ver')) return <ShoppingCart className="w-4 h-4" />;
    if (suggestion.includes('Horarios') || suggestion.includes('hora')) return <Clock className="w-4 h-4" />;
    if (suggestion.includes('Contacto') || suggestion.includes('teléfono')) return <Phone className="w-4 h-4" />;
    if (suggestion.includes('Recomendaciones') || suggestion.includes('recomend')) return <Sparkles className="w-4 h-4" />;
    return <MessageCircle className="w-4 h-4" />;
  };

  return (
    <>
      {/* Botón flotante del chatbot - solo visible cuando el chat está cerrado */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={toggleChatbot}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 bg-pastel-pink text-white hover:bg-pastel-brown"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              delay: hasBeenOpened ? 0 : 2,
              exit: { duration: 0.1 }
            }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ventana del chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-40 w-80 h-[550px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header del chatbot */}
            <div className="bg-gradient-to-r from-pastel-pink to-pastel-brown text-white p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Asistente Virtual</h3>
                  <p className="text-xs opacity-90">Pastelería Deliciosa</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs">En línea</span>
                <button
                  onClick={toggleChatbot}
                  className="ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 chatbot-scroll">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-pastel-pink text-white' 
                        : 'bg-pastel-cream text-pastel-brown'
                    }`}>
                      {message.type === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>
                    
                    <div className={`rounded-xl px-3 py-2 ${
                      message.type === 'user'
                        ? 'bg-pastel-pink text-white'
                        : 'bg-white text-gray-800 shadow-sm border'
                    }`}>
                      <div className="whitespace-pre-wrap text-xs leading-relaxed">
                        {message.content}
                      </div>
                      
                      {/* Mostrar productos si los hay */}
                      {message.productos && (
                        <div className="mt-3 space-y-2">
                          {message.productos.slice(0, 3).map((producto) => (
                            <div key={producto.id} className="bg-pastel-cream/50 rounded-lg p-3 border border-pastel-pink/20">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-pastel-brown text-sm">{producto.name}</h4>
                                  <p className="text-xs text-gray-600">{producto.description}</p>
                                </div>
                                <span className="text-pastel-pink font-bold text-sm">${producto.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className={`text-xs mt-2 opacity-70 ${
                        message.type === 'user' ? 'text-white' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Indicador de escritura */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-pastel-cream text-pastel-brown flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Sugerencias rápidas */}
            {messages.length > 0 && messages[messages.length - 1].sugerencias && (
              <div className="p-2 bg-white border-t border-gray-200">
                <div className="flex flex-wrap gap-1">
                  {messages[messages.length - 1].sugerencias.slice(0, 3).map((suggestion, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="flex items-center space-x-1 bg-pastel-cream text-pastel-brown px-2 py-1 rounded-full text-xs font-medium hover:bg-pastel-pink hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {getIconForSuggestion(suggestion)}
                      <span className="text-xs">{suggestion}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input de mensaje */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent text-xs"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-8 h-8 bg-pastel-pink text-white rounded-full flex items-center justify-center hover:bg-pastel-brown transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
