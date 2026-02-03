
import React, { useState } from 'react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    niche: '',
    pain: ''
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setLoading(false);
    }, 800);
  };

  const redirectToWhatsApp = () => {
    const baseMsg = "Olá! Acabei de completar o diagnóstico da Pixel Rush.";
    const details = `Meu nome é ${formData.name}, trabalho como ${formData.niche} e meu maior desafio hoje é: "${formData.pain}". Quero resgatar meu presente de 70% de desconto (R$ 479,90) agora!`;
    const fullMsg = encodeURIComponent(`${baseMsg} ${details}`);
    window.open(`https://wa.me/5521990091821?text=${fullMsg}`, '_blank');
    onClose();
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md">
      <div className="bg-white w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl relative animate-fade-in border-4 border-teal-500/20">
        
        {/* Barra de Progresso Gamificada */}
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
          <div 
            className="h-full bg-teal-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="p-8 md:p-12">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-teal-600 font-black uppercase text-[10px] tracking-widest animate-pulse">Sincronizando Perfil...</p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="animate-fade-in">
                  <div className="inline-block px-3 py-1 mb-4 text-[9px] font-black tracking-widest text-teal-700 uppercase bg-teal-50 rounded-full">PASSO 01: ACESSO VIP</div>
                  <h3 className="text-2xl font-black text-slate-900 leading-none mb-4 uppercase italic tracking-tighter">
                    Inicie seu login <span className="text-teal-600">Gratuito</span>
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 font-medium">Complete o diagnóstico rápido para liberar seu presente surpresa.</p>
                  
                  <form className="space-y-4" onSubmit={nextStep}>
                    <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Seu Nome Completo" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-teal-500/20 outline-none font-medium" />
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Seu Melhor E-mail" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-teal-500/20 outline-none font-medium" />
                    <button type="submit" className="w-full py-5 bg-slate-900 text-white font-black uppercase italic tracking-tighter rounded-2xl hover:bg-black transition-all shadow-lg">
                      Próxima Etapa →
                    </button>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fade-in">
                  <div className="inline-block px-3 py-1 mb-4 text-[9px] font-black tracking-widest text-orange-600 bg-orange-50 rounded-full">PASSO 02: SEU MERCADO</div>
                  <h3 className="text-2xl font-black text-slate-900 leading-none mb-6 uppercase italic tracking-tighter">
                    Qual o seu <span className="text-orange-500">nicho ou profissão?</span>
                  </h3>
                  <form className="space-y-4" onSubmit={nextStep}>
                    <input 
                      required 
                      name="niche"
                      value={formData.niche}
                      onChange={handleInputChange}
                      autoFocus
                      type="text" 
                      placeholder="Ex: Arquiteta, Consultor, Nutricionista..." 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 outline-none font-bold text-slate-800" 
                    />
                    <button type="submit" className="w-full py-5 bg-orange-500 text-white font-black uppercase italic tracking-tighter rounded-2xl hover:bg-orange-600 transition-all shadow-lg">
                      Continuar →
                    </button>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fade-in">
                  <div className="inline-block px-3 py-1 mb-4 text-[9px] font-black tracking-widest text-red-600 bg-red-50 rounded-full">PASSO 03: DIAGNÓSTICO</div>
                  <h3 className="text-2xl font-black text-slate-900 leading-none mb-6 uppercase italic tracking-tighter">
                    O que mais te <span className="text-red-500">impede de crescer hoje?</span>
                  </h3>
                  <form className="space-y-4" onSubmit={nextStep}>
                    <textarea 
                      required 
                      name="pain"
                      value={formData.pain}
                      onChange={handleInputChange}
                      autoFocus
                      rows={4}
                      placeholder="Descreva sua maior dificuldade hoje..." 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500/20 outline-none font-bold text-slate-800 resize-none" 
                    />
                    <button type="submit" className="w-full py-5 bg-red-600 text-white font-black uppercase italic tracking-tighter rounded-2xl hover:bg-red-700 transition-all shadow-lg text-sm">
                      Descobrir meu Presente! 🎁
                    </button>
                  </form>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-4 animate-fade-in">
                  <div className="w-20 h-20 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/30">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">PRESENTE DESBLOQUEADO!</h3>
                  <p className="text-slate-500 font-bold mb-8 uppercase text-[10px] tracking-widest">Parabéns, {formData.name.split(' ')[0]}! Você ganhou:</p>
                  
                  <div className="bg-slate-900 text-white p-6 rounded-3xl mb-8 relative overflow-hidden text-left border-l-4 border-teal-500">
                    <div className="absolute top-0 right-0 bg-teal-500 px-3 py-1 text-[8px] font-black uppercase">VÁLIDO POR 24H</div>
                    <span className="text-slate-400 text-xs line-through block">De R$ 1.597,00</span>
                    <span className="text-4xl font-black italic text-teal-400">R$ 479,90</span>
                    <p className="text-[10px] mt-2 font-bold text-slate-300 uppercase leading-tight italic">
                      70% OFF na estrutura completa para <span className="text-white">{formData.niche}</span>
                    </p>
                  </div>

                  <button 
                    onClick={redirectToWhatsApp}
                    className="w-full py-6 bg-teal-600 hover:bg-teal-500 text-white font-black uppercase italic tracking-tighter rounded-2xl shadow-xl shadow-teal-500/20 transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Resgatar Desconto via WhatsApp
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
