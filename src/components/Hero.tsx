
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToMarket = () => {
    const marketSection = document.getElementById('market');
    if (marketSection) {
      window.scrollTo({
        top: marketSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1525518392674-39faab64b5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-surface/80 border border-neon-cyan text-neon-cyan text-sm mb-6 animate-fade-in">
            Revolucionando la Agricultura
          </div>
          <h1 className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-white">Optimiza tus cultivos con </span>
            <span className="text-neon-green">drones inteligentes</span>
            <span className="text-white"> y </span>
            <span className="text-neon-cyan">análisis IA</span>
          </h1>
          <p className="text-metallic text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Transformamos la agricultura tradicional en agricultura de precisión utilizando tecnología de vanguardia. Nuestros drones autónomos equipados con IA analizan tus cultivos en tiempo real para maximizar rendimientos y minimizar recursos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#solution" className="btn-primary">
              Explorar Solución
            </a>
            <a href="#contact" className="btn-secondary">
              Solicitar Demostración
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToMarket} 
            className="text-metallic hover:text-white transition-colors duration-300"
            aria-label="Scroll to market analysis"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark-bg to-transparent"></div>
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-neon-green/10 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-neon-cyan/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
