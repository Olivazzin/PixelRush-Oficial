
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import WhatsAppButton from './components/WhatsAppButton';
import SignupModal from './components/SignupModal';
import SpecialOfferOverlay from './components/SpecialOfferOverlay';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero onSignupClick={openModal} />
        <PainPoints />
        <Solution />
        <SocialProof />
        <FAQ />
        <FinalCTA onSignupClick={openModal} />
      </main>
      <WhatsAppButton />
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
      <SpecialOfferOverlay onAccept={openModal} />
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Pixel Rush - Alta Performance em Vendas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
