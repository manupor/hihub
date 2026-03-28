import { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

const API_URL = import.meta.env.VITE_API_URL || 'https://hihub-agent.onrender.com';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
}

interface Slot {
  datetime: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [leadId, setLeadId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({ name: '', email: '', phone: '' });
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  // Detect initial language immediately
  const getInitialLanguage = () => {
    const htmlLang = document.documentElement.lang || 
                     document.querySelector('html')?.getAttribute('lang') ||
                     navigator.language.split('-')[0];
    return htmlLang.toLowerCase().startsWith('en') ? 'en' : 'es';
  };
  
  const [pageLanguage, setPageLanguage] = useState<string>(() => {
    const lang = getInitialLanguage();
    console.log('Initial chat language:', lang);
    return lang;
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Listen for language changes
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    
    window.addEventListener('openChatWidget', handleOpenChat);
    return () => window.removeEventListener('openChatWidget', handleOpenChat);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      const htmlLang = document.documentElement.lang || 
                       document.querySelector('html')?.getAttribute('lang') ||
                       navigator.language.split('-')[0];
      
      const detectedLang = htmlLang.toLowerCase().startsWith('en') ? 'en' : 'es';
      setPageLanguage(detectedLang);
      console.log('Language changed to:', detectedLang);
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    console.log('Messages state updated:', messages);
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = pageLanguage === 'en' 
        ? "Hi! I'm Sofía, sourcing assistant at HiHub Global. What equipment or product are you looking to import from China?"
        : '¡Hola! Soy Sofía, asistente de sourcing en HiHub Global. ¿Qué equipo o producto estás buscando importar desde China?';
      
      setMessages([{
        role: 'assistant',
        content: greeting
      }]);
    }
  }, [isOpen, messages.length, pageLanguage]);

  const handleSend = async (imageBase64: string | null = null) => {
    if (!input.trim() && !imageBase64) return;

    const userMessage = input;
    console.log('Sending message:', userMessage);
    setInput('');
    setIsLoading(true);

    setMessages(prev => {
      const newMessages: Message[] = [...prev, { 
        role: 'user' as const, 
        content: userMessage,
        image: previewImage || undefined
      }];
      console.log('Messages after user message:', newMessages);
      return newMessages;
    });
    setPreviewImage(null);

    try {
      console.log('Fetching from:', `${API_URL}/api/chat`);
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          message: userMessage,
          imageBase64,
          language: pageLanguage
        })
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (data.leadId) setLeadId(data.leadId);

      setMessages(prev => {
        const newMessages: Message[] = [...prev, {
          role: 'assistant' as const,
          content: data.response
        }];
        console.log('Messages after assistant response:', newMessages);
        return newMessages;
      });

      if (data.showCalendar) {
        setShowCalendar(true);
        setAvailableSlots(data.availableSlots);
      }

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = pageLanguage === 'en' 
        ? 'Sorry, there was an error connecting to our service. Please try again or contact us directly at info@hihubglobal.com'
        : 'Lo siento, hubo un error al conectar con nuestro servicio. Por favor intenta de nuevo o contáctanos directamente en info@hihubglobal.com';
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: errorMessage
      }]);
    }

    setIsLoading(false);
  };

  const handleSlotSelect = (slot: Slot) => {
    setSelectedSlot(slot);
    setShowBookingForm(true);
  };

  const handleBookAppointment = async () => {
    if (!selectedSlot) return;
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/calendar/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          slotDatetime: selectedSlot.startTime,
          userName: bookingData.name,
          userEmail: bookingData.email,
          userPhone: bookingData.phone
        })
      });

      const data = await response.json();

      if (data.success) {
        setAppointmentConfirmed(true);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `¡Excelente! Tu llamada está agendada para ${new Date(selectedSlot.startTime).toLocaleString()}. Recibirás un email de confirmación.`
        }]);
      }
    } catch (error) {
      console.error('Booking error:', error);
    }

    setIsLoading(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const sendImage = () => {
    if (previewImage) {
      const base64 = previewImage.split(',')[1];
      handleSend(base64);
    }
  };

  return (
    <div className="hihub-chat-widget-container">
      <button
        className="hihub-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={pageLanguage === 'en' ? 'Chat with us' : 'Chatea con nosotros'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="hihub-chat-panel">
          <div className="hihub-chat-header">
            <div className="hihub-agent-info">
              <img 
                src="https://ui-avatars.com/api/?name=Sofia&background=F7941D&color=fff"
                alt="Sofia" 
                className="hihub-agent-avatar"
              />
              <div>
                <h3 style={{ color: '#ffffff' }}>Sofía</h3>
                <span className="hihub-status">
                  <span className="hihub-status-dot"></span>
                  {pageLanguage === 'en' ? 'Online' : 'En línea'}
                </span>
              </div>
            </div>
            <button className="hihub-close-btn" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="hihub-messages-container">
            {messages.map((msg, idx) => (
              <div key={idx} className={`hihub-message ${msg.role}`}>
                {msg.image && (
                  <img src={msg.image} alt="Uploaded" className="hihub-message-image" />
                )}
                <div className="hihub-message-content">{msg.content}</div>
              </div>
            ))}
            
            {isLoading && (
              <div className="hihub-message assistant">
                <div className="hihub-typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {showCalendar && !appointmentConfirmed && (
              <div className="hihub-calendar-picker">
                <h4>{pageLanguage === 'en' ? 'Select a time for your call:' : 'Selecciona un horario para tu llamada:'}</h4>
                <div className="hihub-slots-grid">
                  {availableSlots.slice(0, 6).map((slot, idx) => (
                    <button
                      key={idx}
                      className={`hihub-slot-btn ${selectedSlot?.startTime === slot.startTime ? 'selected' : ''}`}
                      onClick={() => handleSlotSelect(slot)}
                    >
                      {new Date(slot.startTime).toLocaleDateString('es-ES', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                      <br />
                      {new Date(slot.startTime).toLocaleTimeString('es-ES', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showBookingForm && !appointmentConfirmed && (
              <div className="hihub-booking-form">
                <h4>{pageLanguage === 'en' ? 'Complete your details:' : 'Completa tus datos:'}</h4>
                <input
                  type="text"
                  placeholder={pageLanguage === 'en' ? 'Full name' : 'Nombre completo'}
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder={pageLanguage === 'en' ? 'Phone' : 'Teléfono'}
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                />
                <button 
                  className="hihub-book-btn"
                  onClick={handleBookAppointment}
                  disabled={!bookingData.name || !bookingData.email}
                >
                  {isLoading 
                    ? (pageLanguage === 'en' ? 'Booking...' : 'Agendando...') 
                    : (pageLanguage === 'en' ? 'Confirm call' : 'Confirmar llamada')
                  }
                </button>
              </div>
            )}

            {appointmentConfirmed && (
              <div className="hihub-confirmation">
                <div className="hihub-success-icon">✓</div>
                <h4>{pageLanguage === 'en' ? 'Call scheduled!' : '¡Llamada agendada!'}</h4>
                <p>{pageLanguage === 'en' ? "You'll receive an email with the details." : 'Recibirás un email con los detalles.'}</p>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {!showCalendar && !appointmentConfirmed && (
            <div className="hihub-input-area">
              {previewImage && (
                <div className="hihub-image-preview">
                  <img src={previewImage} alt="Preview" />
                  <button onClick={() => setPreviewImage(null)}>×</button>
                  <button className="hihub-send-image-btn" onClick={sendImage}>Enviar imagen</button>
                </div>
              )}
              
              <div className="hihub-input-row">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
                <button 
                  className="hihub-attach-btn"
                  onClick={() => fileInputRef.current?.click()}
                  title="Adjuntar imagen"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </button>
                
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={pageLanguage === 'en' ? 'Type your message...' : 'Escribe tu mensaje...'}
                  disabled={isLoading}
                />
                
                <button 
                  className="hihub-send-btn"
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
