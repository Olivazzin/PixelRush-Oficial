
import React, { useState, useEffect } from 'react';

interface SpecialOfferOverlayProps {
  onAccept: () => void;
}

const SpecialOfferOverlay: React.FC<SpecialOfferOverlayProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Aparece após 10 segundos como solicitado
    const timer = setTimeout(() => setIsVisible(true), 10000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
      <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-sm w-full pointer-events-auto animate-bounce-slow relative border-4 border-teal-500">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform shadow-lg"
        >
          ✕
        </button>
        
        <div className="text-center">
          <div className="inline-block px-3 py-1 bg-teal-500 text-white text-[10px] font-black uppercase rounded-full mb-3 tracking-widest">
            BÔNUS DE TEMPO LIMITADO ⚡
          </div>
          <h3 className="text-2xl font-black uppercase italic leading-none mb-2 tracking-tighter">
            VOCÊ RECEBEU UM <span className="text-teal-400">PRESENTE!</span>
          </h3>
          <p className="text-xs font-bold opacity-90 mb-6 leading-tight uppercase">
            Crie seu login gratuito e responda o diagnóstico rápido para descobrir o benefício exclusivo que liberamos para você.
          </p>
          
          <button 
            onClick={() => {
              setIsVisible(false);
              onAccept();
            }}
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase italic tracking-tighter rounded-xl transition-all shadow-xl transform hover:scale-105"
          >
            DESCOBRIR MEU PRESENTE 🎁
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferOverlay;
