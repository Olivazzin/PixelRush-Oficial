
import React, { useState, useEffect, useRef } from 'react';

const Solution: React.FC = () => {
  const [isAccelerated, setIsAccelerated] = useState(false);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleAccelerate = () => {
    setIsAccelerated(true);
  };

  // Efeito para contar a porcentagem sincronizada com a barra de 1.5s
  useEffect(() => {
    if (isAccelerated) {
      const duration = 1500;
      const end = 92;
      const startTime = Date.now();

      const updateCounter = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function outQuart para combinar com a transição CSS
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * end);

        setDisplayPercentage(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isAccelerated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Texto e Benefícios */}
          <div className={`lg:w-1/3 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase italic tracking-tighter">
              Saia do amadorismo e <br />
              <span className="text-teal-600 underline decoration-teal-100 decoration-8 underline-offset-4">domine seu nicho.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-medium">
              A diferença entre quem sobrevive e quem escala está na estrutura. Compare os dois cenários abaixo e veja a transformação em tempo real.
            </p>
            
            <div className="grid gap-3">
              {[
                { t: "Profissionalismo", d: "Confiança antes da primeira mensagem." },
                { t: "Qualificação", d: "Leads que já entendem seu valor." },
                { t: "Diferenciação", d: "Identidade visual exclusiva." },
                { t: "Escalabilidade", d: "Pronto para 10x mais volume." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-lg">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded flex items-center justify-center mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest">{item.t}</h4>
                    <p className="text-slate-500 text-xs leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gráficos Comparativos */}
          <div className="lg:w-2/3 w-full grid md:grid-cols-2 gap-6 relative">
            
            {/* GRÁFICO 1: SEM A PIXEL RUSH */}
            <div className={`p-6 bg-slate-100 rounded-3xl border border-slate-200 relative overflow-hidden group transition-all duration-1000 delay-150 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-32 opacity-0 scale-90'}`}>
               <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Cenário 01</span>
                    <h3 className="text-lg font-black text-slate-800 uppercase italic leading-none">Sem a Pixel Rush</h3>
                  </div>
                  <div className="px-2 py-1 bg-red-100 text-red-600 rounded text-[9px] font-black uppercase">Estagnado</div>
               </div>

               <div className="h-40 w-full relative mb-6">
                  <svg className="w-full h-full" viewBox="0 0 400 150">
                    <path 
                      d="M 0 120 Q 50 125, 100 115 T 200 125 T 300 110 T 400 130" 
                      fill="none" 
                      stroke="#94a3b8" 
                      strokeWidth="3" 
                      strokeDasharray="5,5"
                    />
                    <circle cx="100" cy="115" r="3" fill="#ef4444" className="animate-pulse" />
                    <circle cx="300" cy="110" r="3" fill="#ef4444" className="animate-pulse delay-700" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] rotate-[-5deg]">Baixa Conversão</span>
                  </div>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                    <span>Leads Curiosos</span>
                    <span className="text-red-500">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-red-400 transition-all duration-1000 delay-1000 ${isVisible ? 'w-[85%]' : 'w-0'}`}></div>
                  </div>
               </div>
               <p className="mt-4 text-[11px] text-slate-500 font-medium leading-tight">Muitas conversas, poucos fechamentos. Dependência total de indicações e sorte.</p>
            </div>

            {/* GRÁFICO 2: COM A PIXEL RUSH */}
            <div className={`p-6 bg-slate-900 rounded-3xl border-4 transition-all duration-1000 delay-300 transform relative overflow-hidden group ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-32 opacity-0 scale-90'} ${isAccelerated ? 'border-teal-500 shadow-2xl shadow-teal-500/20' : 'border-slate-800 opacity-90'}`}>
               <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[9px] font-black text-teal-500 uppercase tracking-widest">Cenário 02</span>
                    <h3 className="text-lg font-black text-white uppercase italic leading-none">Com a Pixel Rush</h3>
                  </div>
                  {isAccelerated && (
                    <div className="px-2 py-1 bg-teal-500 text-white rounded text-[9px] font-black uppercase animate-bounce">Acelerado</div>
                  )}
               </div>

               <div className="h-40 w-full relative mb-6 bg-slate-800/20 rounded-xl overflow-hidden">
                  {!isAccelerated ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-slate-900/40 backdrop-blur-[2px]">
                      <button 
                        onClick={handleAccelerate}
                        className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-black text-xs uppercase tracking-tighter rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-xl shadow-teal-900"
                      >
                        Simular Crescimento ⚡
                      </button>
                    </div>
                  ) : null}

                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="growthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {isAccelerated && (
                      <>
                        <path 
                          d="M 0 140 Q 50 135, 100 120 T 200 80 T 300 40 T 400 10 L 400 150 L 0 150 Z" 
                          fill="url(#growthGrad)"
                          className="animate-pulse"
                        />
                        <path
                          d="M 0 140 Q 50 135, 100 120 T 200 80 T 300 40 T 400 10"
                          fill="none"
                          stroke="#14b8a6"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeDasharray="1000"
                          strokeDashoffset="1000"
                          className="animate-[draw_1.5s_ease-out_forwards]"
                        />
                        <circle cx="400" cy="10" r="6" fill="#14b8a6" className="animate-ping" />
                      </>
                    )}
                  </svg>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400">
                    <span>Leads Qualificados</span>
                    <span className={`transition-all duration-300 font-black tabular-nums ${isAccelerated ? "text-teal-400 scale-125" : ""}`}>
                      {isAccelerated ? `${displayPercentage}%` : "0%"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-teal-500 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
                      style={{ width: isAccelerated ? '92%' : '0%' }}
                    ></div>
                  </div>
               </div>
               <p className="mt-4 text-[11px] text-slate-400 font-medium leading-tight">
                {isAccelerated 
                  ? "Escalabilidade real. Processo desenhado para filtrar curiosos e atrair quem paga o seu preço." 
                  : "Aperte o botão acima para ver como sua demanda pode se transformar."}
               </p>
            </div>

            {/* Efeito de conectividade ao fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/5 blur-[120px] -z-10"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Solution;
