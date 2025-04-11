
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-surface text-metallic">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-neon-cyan font-poppins font-bold text-xl mr-1">Agro</span>
              <span className="text-white font-poppins font-bold text-xl">AI</span>
              <span className="text-neon-green font-poppins font-bold text-xl ml-1">Horizon</span>
            </div>
            <p className="mb-6">
              Transformando la agricultura con drones inteligentes y análisis de IA para una gestión más eficiente y sostenible de los cultivos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-neon-cyan transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-neon-cyan transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-neon-cyan transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-neon-cyan transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-neon-cyan transition-colors duration-200" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-neon-cyan transition-colors duration-200">Inicio</a>
              </li>
              <li>
                <a href="#market" className="hover:text-neon-cyan transition-colors duration-200">Análisis de Mercado</a>
              </li>
              <li>
                <a href="#solution" className="hover:text-neon-cyan transition-colors duration-200">Nuestra Solución</a>
              </li>
              <li>
                <a href="#viability" className="hover:text-neon-cyan transition-colors duration-200">Viabilidad</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neon-cyan transition-colors duration-200">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-neon-cyan transition-colors duration-200">Drones Agrícolas</a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition-colors duration-200">Análisis de Cultivos</a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition-colors duration-200">Plataforma de Gestión</a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition-colors duration-200">Formación y Soporte</a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-cyan transition-colors duration-200">Consultoría Agrícola</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-6">Boletín Informativo</h4>
            <p className="mb-4">
              Suscríbete para recibir las últimas noticias y actualizaciones sobre agricultura de precisión y nuestros servicios.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full bg-dark-bg border border-metallic/30 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-neon-cyan text-dark-surface px-4 py-2 rounded-r-md hover:bg-neon-cyan/90 transition-colors duration-200"
                >
                  Enviar
                </button>
              </div>
            </form>
            <p className="text-sm">
              Al suscribirte, aceptas nuestra <a href="#" className="text-neon-cyan hover:underline">Política de Privacidad</a>.
            </p>
          </div>
        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AgroAI Horizon. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-neon-cyan transition-colors duration-200">Términos de Servicio</a>
            <a href="#" className="text-sm hover:text-neon-cyan transition-colors duration-200">Política de Privacidad</a>
            <a href="#" className="text-sm hover:text-neon-cyan transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-neon-green text-dark-surface hover:bg-neon-green/90 transition-all duration-200 shadow-lg z-10"
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
