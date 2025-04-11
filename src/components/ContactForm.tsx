
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    farmSize: 'small'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo pronto. ¡Gracias por tu interés!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        farmSize: 'small'
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-dark-bg relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-neon-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-neon-cyan/5 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Contacto</h2>
          <p className="text-metallic text-lg max-w-3xl mx-auto">
            ¿Interesado en transformar tu agricultura con tecnología de vanguardia? Completa el formulario y nuestro equipo se pondrá en contacto contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="card">
            <h3 className="text-neon-cyan mb-6 text-xl">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border border-metallic/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border border-metallic/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-metallic/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white mb-2">Empresa/Organización</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-metallic/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="farmSize" className="block text-white mb-2">Tamaño de la explotación</label>
                <select
                  id="farmSize"
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleChange}
                  className="w-full bg-dark-bg border border-metallic/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                >
                  <option value="small">Pequeña (< 10 hectáreas)</option>
                  <option value="medium">Mediana (10-50 hectáreas)</option>
                  <option value="large">Grande (50-200 hectáreas)</option>
                  <option value="enterprise">Muy grande (> 200 hectáreas)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg border border-metallic/30 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                  placeholder="Describe tu proyecto o necesidades específicas..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  ) : (
                    <Send className="mr-2" size={18} />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h3 className="text-neon-green mb-6 text-xl">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-neon-cyan flex-shrink-0 mt-1 mr-4" size={20} />
                  <div>
                    <p className="text-white font-medium">Teléfono</p>
                    <p className="text-metallic">+34 911 234 567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-neon-cyan flex-shrink-0 mt-1 mr-4" size={20} />
                  <div>
                    <p className="text-white font-medium">Correo Electrónico</p>
                    <p className="text-metallic">info@agroaihorizon.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-neon-cyan flex-shrink-0 mt-1 mr-4" size={20} />
                  <div>
                    <p className="text-white font-medium">Oficina Central</p>
                    <p className="text-metallic">Parque Tecnológico, Edificio Innovación<br />28023 Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-white mb-6 text-xl">¿Listo para empezar?</h3>
              <p className="text-metallic mb-6">
                Ofrecemos una demostración gratuita en tu propia explotación para que puedas ver los beneficios de primera mano.
              </p>
              
              <div className="bg-dark-bg rounded-lg p-6 neon-border">
                <h4 className="text-neon-cyan text-lg mb-4">Demo personalizada incluye:</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <svg className="text-neon-green flex-shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-metallic">Vuelo de reconocimiento con nuestros drones</p>
                  </li>
                  <li className="flex">
                    <svg className="text-neon-green flex-shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-metallic">Análisis preliminar de tu cultivo</p>
                  </li>
                  <li className="flex">
                    <svg className="text-neon-green flex-shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-metallic">Presentación de resultados y recomendaciones</p>
                  </li>
                  <li className="flex">
                    <svg className="text-neon-green flex-shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-metallic">Propuesta personalizada para tu caso</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
