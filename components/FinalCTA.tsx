
import React from 'react';

interface FinalCTAProps {
  onSignupClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onSignupClick }) => {
  const DIRECT_WHATSAPP_MSG = "https://wa.me/5521990091821?text=Olá!%20Quero%20me%20diferenciar%20da%20concorrência%20e%20atrair%20clientes%20qualificados%20com%20o%20método%20Pixel%20Rush.";

  return (
    <section id="contato" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-tight">
          DEIXE DE SER <span className="text-teal-400">INVISÍVEL</span> <br /> 
          AGORA MESMO.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto">
          Sua única chance de garantir acesso à estrutura de elite e transformar seu faturamento é criando seu login gratuito agora. Não deixe para amanhã os resultados que você merece hoje.
        </p>
        <div className="flex flex-col items-center justify-center">
          <a 
            href={DIRECT_WHATSAPP_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-16 py-7 bg-orange-500 text-white font-black text-2xl rounded-2xl shadow-2xl shadow-orange-500/30 hover:bg-orange-600 transition-all transform hover:-translate-y-2 hover:scale-105 active:scale-95 uppercase italic tracking-tighter text-center"
          >
            Quero me diferenciar da concorrência
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-ping"></div>
          ACESSO AO DIAGNÓSTICO LIBERADO
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
