import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsGrid from './components/BenefitsGrid';
import TestimonialsSection from './components/TestimonialsSection';
import SignupSection from './components/SignupSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsGrid />
      <TestimonialsSection />
      <SignupSection />
      <Footer />
    </div>
  );
}

export default App;