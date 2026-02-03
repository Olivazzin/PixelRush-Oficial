
import React from 'react';

const PainPoints: React.FC = () => {
  const problems = [
    {
      title: "O Link da Bio que 'espanta' clientes",
      description: "Ao enviar o cliente direto para o WhatsApp sem uma estrutura de venda, você parece um amador e atrai quem só quer saber o preço e sumir."
    },
    {
      title: "Invisível no Mar da Concorrência",
      description: "Enquanto você é 'só mais um' com link na bio, seus concorrentes usam landing pages que geram autoridade e cobram 3x mais que você."
    },
    {
      title: "Cansado de Responder Curiosos",
      description: "Você perde horas explicando seu serviço para quem não tem perfil de compra. Sua estrutura digital deveria filtrar isso para você."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase italic">Por que seu Instagram não converte?</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 text-left cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-200"
            >
              <div className="absolute top-4 right-6 text-teal-600 font-black text-5xl opacity-5 group-hover:opacity-20 transition-opacity italic select-none">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight leading-tight group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium group-hover:text-slate-700 transition-colors">
                  {item.description}
                </p>
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
