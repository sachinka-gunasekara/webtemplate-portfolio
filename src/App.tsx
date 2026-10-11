import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { WorkProcess } from './components/WorkProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-light flex flex-col font-sans selection:bg-accent selection:text-navy-950 relative">
      {/* Floating Translucent Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <About />
        <Skills />
        <Services />
        <WorkProcess />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
