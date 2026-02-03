
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/5521990091821";

  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '50px',
        fontWeight: 'bold',
        textDecoration: 'none',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
      className="transition-all hover:scale-110 hover:shadow-lg active:scale-95 animate-bounce-slow"
    >
      <span style={{ fontSize: '1.2rem' }}>💬</span> WhatsApp
    </a>
  );
};

export default WhatsAppButton;
