
import React, { useState, useEffect } from 'react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Guilherme Mattos",
      role: "Advogado Tributarista",
      content: "O filtro de curiosos da Pixel Rush é surreal. Antes eu perdia o dia respondendo gente que só queria 'tirar dúvida'. Hoje o lead já chega pronto para a consulta paga."
    },
    {
      name: "Letícia Arantes",
      role: "Arquiteta Premium",
      content: "Minha Bio era amadora. Depois da estrutura Rush, fechei 4 projetos de alto padrão em 15 dias. O site transmite uma autoridade que eu não conseguia passar sozinha."
    },
    {
      name: "Bruno Spíndola",
      role: "Consultor Financeiro",
      content: "O investimento se pagou na primeira semana. O lead chega muito mais educado e ciente do meu valor. Parei de brigar por preço e comecei a selecionar clientes."
    },
    {
      name: "Carla Menezes",
      role: "Clínica de Estética",
      content: "Eu perdia horas no WhatsApp explicando procedimentos simples. Agora a página faz todo o trabalho de venda e eu só agendo os horários. Praticidade total!"
    },
    {
      name: "Felipe Guedes",
      role: "Desenvolvedor Fullstack",
      content: "Como freelancer, eu dependia 100% de indicação. O método da Pixel Rush me deu previsibilidade. Agora tenho fila de espera e cobro o dobro do que cobrava antes."
    },
    {
      name: "Mariana Costa",
      role: "Estrategista Digital",
      content: "Trabalho com lançamentos e a conversão das páginas da Rush é acima da média do mercado. O layout limpo focado em conversão faz toda a diferença no CPA."
    },
    {
      name: "Ricardo Fonseca",
      role: "Engenheiro Civil",
      content: "Direto ao ponto, sem enrolação. O volume de orçamentos qualificados triplicou. É a ferramenta que faltava para quem leva o negócio a sério."
    },
    {
      name: "Sandra Rebouças",
      role: "Executive Coach",
      content: "Finalmente uma solução que entende a dor de quem presta serviço. O ROI foi bizarro e a percepção de autoridade dos meus novos alunos subiu na hora."
    },
    {
      name: "Thiago Rocha",
      role: "Gestor de Tráfego",
      content: "Indico para todos os meus clientes. Não adianta mandar tráfego para um link de WhatsApp seco. Com a Pixel Rush, o fechamento acontece muito mais rápido."
    },
    {
      name: "Patrícia Lemos",
      role: "Psicóloga Clínica",
      content: "Eu recebia muitas pessoas que não podiam pagar meu valor. O funil novo selecionou o público certo. Minha agenda está lotada com os pacientes ideais."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">Resultados que falam por si</h2>
          <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">O que nossos clientes dizem</p>
        </div>

        {/* Container do Carrossel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden min-h-[450px] md:min-h-[380px]">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex items-center justify-center ${
                  i === activeIndex 
                    ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' 
                    : 'opacity-0 translate-x-full scale-95 pointer-events-none'
                }`}
              >
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl relative max-w-2xl w-full mx-4 transition-transform hover:scale-[1.02]">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-teal-600">
                    <div className="bg-teal-500 p-3 rounded-2xl shadow-lg shadow-teal-500/30">
                      <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H11.017C10.4647 12 10.017 11.5523 10.017 11V6C10.017 4.89543 10.9124 4 12.017 4H19.017C21.2261 4 23.017 5.79086 23.017 8V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H2.017C1.46472 8 1.017 8.44772 1.017 9V11C1.017 11.5523 0.569282 12 0.017 12H-1.983C-2.53528 12 -2.983 11.5523 -2.983 11V6C-2.983 4.89543 -2.08757 4 -0.983 4H6.017C8.22614 4 10.017 5.79086 10.017 8V15C10.017 18.3137 7.33072 21 4.017 21H1.017Z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex gap-1 justify-center mb-8 text-orange-400 mt-4">
                    {[...Array(5)].map((_, starIdx) => (
                      <svg key={starIdx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed italic text-center mb-10">"{t.content}"</p>
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-black text-lg uppercase shadow-lg shadow-teal-500/20 transform hover:rotate-6 transition-transform">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-slate-900 text-lg">{t.name}</div>
                      <div className="text-xs text-teal-600 font-black uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de página (Scroll horizontal de dots) */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap max-w-xs mx-auto">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-teal-500' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
