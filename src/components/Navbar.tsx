
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, active, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    className={cn("nav-link", active && "active")}
    onClick={onClick}
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'market', 'solution', 'viability', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-dark-surface/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center" onClick={() => scrollToSection('home')}>
              <span className="text-neon-cyan font-poppins font-bold text-xl mr-1">Agro</span>
              <span className="text-white font-poppins font-bold text-xl">AI</span>
              <span className="text-neon-green font-poppins font-bold text-xl ml-1">Horizon</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink 
              href="#home" 
              active={activeSection === 'home'}
              onClick={() => scrollToSection('home')}
            >
              Inicio
            </NavLink>
            <NavLink 
              href="#market" 
              active={activeSection === 'market'}
              onClick={() => scrollToSection('market')}
            >
              Análisis de Mercado
            </NavLink>
            <NavLink 
              href="#solution" 
              active={activeSection === 'solution'}
              onClick={() => scrollToSection('solution')}
            >
              Solución
            </NavLink>
            <NavLink 
              href="#viability" 
              active={activeSection === 'viability'}
              onClick={() => scrollToSection('viability')}
            >
              Viabilidad
            </NavLink>
            <NavLink 
              href="#contact" 
              active={activeSection === 'contact'}
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden fixed inset-0 bg-dark-surface/95 backdrop-blur-sm z-40 transition-all duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <NavLink 
              href="#home" 
              active={activeSection === 'home'}
              onClick={() => scrollToSection('home')}
            >
              Inicio
            </NavLink>
            <NavLink 
              href="#market" 
              active={activeSection === 'market'}
              onClick={() => scrollToSection('market')}
            >
              Análisis de Mercado
            </NavLink>
            <NavLink 
              href="#solution" 
              active={activeSection === 'solution'}
              onClick={() => scrollToSection('solution')}
            >
              Solución
            </NavLink>
            <NavLink 
              href="#viability" 
              active={activeSection === 'viability'}
              onClick={() => scrollToSection('viability')}
            >
              Viabilidad
            </NavLink>
            <NavLink 
              href="#contact" 
              active={activeSection === 'contact'}
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
