
import React from 'react';

const Header: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/5521990091821?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Pixel%20Rush.";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
          {/* Logo compactada */}
          <div className="relative w-6 h-6 flex items-center justify-center">
             <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-orange-500 rounded-sm"></div>
             <div className="absolute bottom-0 right-0 w-4.5 h-4.5 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-sm transform rotate-45 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-white/10 flex items-center justify-center">
                   <svg className="w-3 h-3 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                   </svg>
                </div>
             </div>
          </div>
          <div className="font-bold text-lg tracking-tighter text-slate-900 uppercase italic">
            pixel<span className="text-teal-600">rush</span>
          </div>
        </div>
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] sm:text-xs font-bold text-slate-500 hover:text-teal-600 transition-all uppercase tracking-[0.2em] border-b border-transparent hover:border-teal-600 pb-0.5"
        >
          Falar com Especialista
        </a>
      </div>
    </header>
  );
};

export default Header;
