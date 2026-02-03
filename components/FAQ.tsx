
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors text-lg md:text-xl leading-tight pr-8">
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isOpen ? 'bg-teal-500 border-teal-500' : 'border-slate-200'}`}>
          <svg 
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed font-medium text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "A Pixel Rush é apenas uma página de 'Link na Bio'?",
      answer: "Absolutamente não. Links comuns apenas jogam o lead no seu colo sem preparo. A Pixel Rush é um ecossistema de conversão: nós criamos uma estrutura que educa o cliente, prova sua autoridade e filtra curiosos antes mesmo de eles darem o primeiro 'oi'."
    },
    {
      question: "Vou realmente parar de receber pessoas pedindo desconto?",
      answer: "O pedido de desconto acontece quando o cliente não vê valor no seu serviço. Nossa página posiciona você como um profissional premium. Quando o lead chega ao seu WhatsApp, ele já passou por um funil de autoridade que justifica seu preço alto."
    },
    {
      question: "Preciso ter conhecimento técnico para gerenciar minha página?",
      answer: "Zero. Nós cuidamos de toda a engenharia, design e estratégia. Você recebe uma solução 'chave na mão', pronta para rodar. Sua única função será atender os leads qualificados que a página irá filtrar para você."
    },
    {
      question: "Como o 'Filtro de Curiosos' funciona na prática?",
      answer: "Através de uma arquitetura de informação estratégica e gatilhos de qualificação. Quem busca apenas o 'baratinho' é desestimulado pelo nível de profissionalismo da página, enquanto o cliente que valoriza qualidade se sente seguro para fechar o contrato."
    },
    {
      question: "Qual o prazo para minha estrutura Pixel Rush estar no ar?",
      answer: "Fazemos jus ao nome 'Rush'. Nosso processo é extremamente ágil e focado em implementação. Geralmente, em poucos dias úteis sua operação de vendas digital já estará pronta para atrair novos clientes."
    },
    {
      question: "Eu já tenho um site, por que preciso da Pixel Rush?",
      answer: "Sites institucionais costumam ser informativos e lentos. A Pixel Rush entrega uma página de alta performance focada exclusivamente em uma ação: converter o visitante em um lead pronto para comprar no seu WhatsApp. É velocidade e foco total em ROI."
    }
  ];

  const FAQ_WHATSAPP_MSG = "https://wa.me/5521990091821?text=Olá!%20Estava%20lendo%20as%20perguntas%20frequentes%20e%20tenho%20uma%20dúvida%20específica%20sobre%20como%20me%20diferenciar%20da%20concorrência%20com%20a%20Pixel%20Rush.";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
            Dúvidas que travam seu <span className="text-teal-600">crescimento</span>
          </h2>
          <p className="mt-4 text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Respostas diretas sem enrolação</p>
        </div>
        <div className="bg-slate-50/50 p-4 md:p-8 rounded-[2.5rem] border border-slate-100">
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-medium">Ainda tem alguma dúvida específica?</p>
          <a 
            href={FAQ_WHATSAPP_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 font-bold hover:text-teal-700 transition-colors border-b-2 border-teal-100 hover:border-teal-500 pb-1 inline-block mt-2"
          >
            Chame nosso consultor agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
