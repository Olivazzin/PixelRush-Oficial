
import React from 'react';

interface PriceBonusProps {
  onSignupClick: () => void;
}

const PriceBonus: React.FC<PriceBonusProps> = ({ onSignupClick }) => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] text-orange-400 uppercase bg-orange-400/10 rounded-full border border-orange-400/20">
              Oportunidade Limitada
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-none uppercase italic tracking-tighter mb-8">
              Sua estrutura <br />
              de <span className="text-teal-400">elite</span> com <br />
              <span className="text-orange-500 underline decoration-white/20">70% de desconto.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Nossa missão é conhecer seus desafios. Em troca do seu cadastro, entregamos nossa estrutura completa por uma fração do preço original.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transform lg:rotate-2 transition-transform hover:rotate-0 duration-500">
              {/* Badge Desconto */}
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-8 py-2 font-black uppercase text-xs tracking-widest rotate-45 translate-x-[25%] translate-y-[100%]">
                70% OFF
              </div>

              <div className="space-y-6">
                <div className="pb-6 border-b border-slate-100">
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-widest line-through">De R$ 1.597,00</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-slate-900 text-2xl font-black italic uppercase">Por</span>
                    <span className="text-teal-600 text-6xl md:text-7xl font-black tracking-tighter italic">479<span className="text-2xl">,90</span></span>
                  </div>
                  <p className="text-slate-500 text-xs font-bold mt-2 uppercase tracking-tight italic">À vista ou em até 12x no cartão</p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Criação de Bio Estratégica",
                    "Página de Alta Conversão",
                    "Filtro Automático de Curiosos",
                    "Hospedagem inclusa por 1 ano",
                    "Configuração do Botão VIP"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm uppercase italic tracking-tight">
                      <div className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={onSignupClick}
                  className="w-full py-6 bg-orange-500 hover:bg-orange-600 text-white font-black text-xl uppercase italic tracking-tighter rounded-2xl shadow-xl shadow-orange-500/20 transition-all transform hover:-translate-y-1 active:scale-95 mt-4"
                >
                  Garantir meu lugar na lista
                </button>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">Acesso 100% Gratuito à Plataforma de Cadastro</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceBonus;
