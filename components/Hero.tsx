
import React from 'react';

interface HeroProps {
  onSignupClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignupClick }) => {
  const WHATSAPP_URL = "https://wa.me/5521990091821?text=Quero%20me%20diferenciar%20da%20concorrência%20no%20Instagram";
  const DIRECT_WHATSAPP_MSG = "https://wa.me/5521990091821?text=Olá!%20Quero%20me%20diferenciar%20da%20concorrência%20e%20atrair%20clientes%20qualificados%20com%20o%20método%20Pixel%20Rush.";

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-20 lg:pb-28">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-[10px] font-black tracking-[0.2em] text-teal-700 uppercase bg-teal-50 rounded-full border border-teal-100 animate-fade-in">
          Posicionamento de Autoridade
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
          Sua Bio do Instagram merece mais <br className="hidden md:block" />
          que um simples <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500">link de WhatsApp.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 mb-10 leading-relaxed font-medium">
          Existe um método simples, validado e direto para atrair clientes prontos para comprar e fechar serviços de alto valor, sem depender de sorte ou indicação.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={DIRECT_WHATSAPP_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg rounded-xl shadow-xl shadow-orange-200 transition-all transform hover:-translate-y-2 hover:scale-105 active:scale-95 uppercase tracking-tighter text-center"
          >
            Quero me diferenciar da concorrência
          </a>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-black text-lg rounded-xl transition-all uppercase tracking-tighter text-center"
          >
            Falar com Especialista
          </a>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-10">
          {[
            { text: "Filtro de Curiosos", color: "bg-teal-400" },
            { text: "Autoridade Instantânea", color: "bg-cyan-400" },
            { text: "Leads Qualificados", color: "bg-teal-400" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-default transition-all duration-300 hover:scale-110">
              <div className={`w-2.5 h-2.5 ${item.color} rounded-full shadow-[0_0_12px_rgba(20,184,166,0.8)] animate-pulse`}></div>
              <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.15em] group-hover:text-teal-600 transition-colors duration-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
    </section>
  );
};

export default Hero;
