import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainSection } from './components/PainSection';
import { ResultsSection } from './components/ResultsSection';
import { MethodSection } from './components/MethodSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { FooterCta } from './components/FooterCta';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-['Inter',sans-serif] selection:bg-[#C9A84C]/30 selection:text-[#E5C565]">
      {/* Fixed Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <PainSection />
        <ResultsSection />
        <MethodSection />
        <AboutSection />
        <FaqSection />
      </main>

      {/* Footer & Final Conversion CTA */}
      <FooterCta />

      {/* Floating Sticky WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
