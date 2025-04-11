
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarketAnalysis from '@/components/MarketAnalysis';
import Solution from '@/components/Solution';
import Viability from '@/components/Viability';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-white">
      <Navbar />
      <Hero />
      <MarketAnalysis />
      <Solution />
      <Viability />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
