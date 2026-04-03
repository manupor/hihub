import { useState } from 'react';
import type { FormEvent } from 'react';
import SEO from '@/components/elements/SEO';

const API_URL = 'https://hihub-agent.onrender.com/api/portal/login';

export default function PortalLogin() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [sentEmail, setSentEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Error al enviar el correo');
      }

      setSentEmail(email);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error de conexión. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setSuccess(false);
    setError('');
  };

  return (
    <>
      <SEO title="Portal del Cliente — HiHub Trade" />
      
      <div style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: '#f8fafc',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '440px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: '#0f172a',
            padding: '28px 32px',
            textAlign: 'center'
          }}>
            <h1 style={{
              color: '#F7941D',
              fontSize: '24px',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              margin: 0
            }}>HiHub Trade</h1>
            <p style={{
              color: '#94a3b8',
              fontSize: '13px',
              marginTop: '4px',
              marginBottom: 0
            }}>Portal de Clientes</p>
          </div>

          {/* Body */}
          <div style={{ padding: '32px' }}>
            {!success ? (
              <div>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '8px'
                }}>Seguimiento de mis pedidos</h2>
                
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  marginBottom: '24px',
                  lineHeight: 1.5
                }}>
                  Ingresa tu correo electrónico y te enviaremos un enlace directo para ver el estado de tus pedidos y cotizaciones.
                </p>

                <form onSubmit={handleSubmit}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: '6px'
                  }}>Correo electrónico</label>
                  
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@empresa.com"
                    required
                    autoComplete="email"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '15px',
                      color: '#1e293b',
                      outline: 'none',
                      background: '#f8fafc',
                      transition: 'border-color 0.2s, background 0.2s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#F7941D';
                      e.target.style.background = 'white';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.background = '#f8fafc';
                    }}
                  />

                  {error && (
                    <div style={{
                      marginTop: '12px',
                      padding: '10px 14px',
                      background: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '8px',
                      color: '#dc2626',
                      fontSize: '13px'
                    }}>{error}</div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      marginTop: '16px',
                      width: '100%',
                      padding: '14px',
                      background: loading ? '#f0a64c' : '#F7941D',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '15px',
                      fontWeight: 700,
                      cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) e.currentTarget.style.background = '#e08010';
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) e.currentTarget.style.background = '#F7941D';
                    }}
                  >
                    {loading && (
                      <div style={{
                        width: '18px',
                        height: '18px',
                        border: '2px solid rgba(255,255,255,0.4)',
                        borderTopColor: 'white',
                        borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite'
                      }} />
                    )}
                    <span>{loading ? 'Enviando...' : '📨 Enviar enlace de acceso'}</span>
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '12px 0 4px' }}>
                <div style={{
                  fontSize: '48px',
                  lineHeight: 1,
                  marginBottom: '12px'
                }}>✅</div>
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '8px'
                }}>¡Revisa tu correo!</h3>
                
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  lineHeight: 1.6
                }}>
                  Enviamos un enlace de acceso a<br/>
                  <strong>{sentEmail}</strong>.<br/><br/>
                  El enlace expira en <strong>1 hora</strong>.<br/>
                  Si no lo ves, revisa tu carpeta de spam.
                </p>
                
                <button
                  onClick={resetForm}
                  style={{
                    marginTop: '16px',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    fontSize: '12px',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  Intentar con otro correo
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div style={{
            textAlign: 'center',
            padding: '16px 32px 24px',
            fontSize: '12px',
            color: '#94a3b8'
          }}>
            Solo para clientes con pedidos registrados en HiHub Trade
          </div>
        </div>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  );
}
