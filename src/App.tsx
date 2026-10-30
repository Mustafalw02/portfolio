import React, { useState } from 'react';
import { SkipLink } from './components/common/SkipLink';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { ResumeModal } from './components/sections/ResumeModal';
import './styles/globals.scss';
import './styles/animations.scss';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="site-wrapper">
      <SkipLink />

      <Header onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      <main id="main-content">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
