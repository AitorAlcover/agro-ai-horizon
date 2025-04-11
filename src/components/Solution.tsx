
import React from 'react';
import { 
  Cpu, 
  Cloud, 
  BarChart, 
  Database, 
  Shield, 
  Zap, 
  Droplets, 
  Bug, 
  Sprout, 
  ArrowRight 
} from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: <Cpu className="text-neon-cyan" size={24} />,
      title: "Sensores Multiespectrales",
      description: "Captura de imágenes en diferentes bandas del espectro para análisis detallado del estado de los cultivos."
    },
    {
      icon: <Cloud className="text-neon-green" size={24} />,
      title: "Procesamiento en la Nube",
      description: "Análisis de datos en tiempo real con algoritmos avanzados de machine learning en nuestra plataforma."
    },
    {
      icon: <BarChart className="text-neon-cyan" size={24} />,
      title: "Análisis Predictivo",
      description: "Predicciones basadas en IA sobre rendimiento, enfermedades y necesidades hídricas."
    },
    {
      icon: <Database className="text-neon-green" size={24} />,
      title: "Historial y Tendencias",
      description: "Almacenamiento y análisis de datos históricos para identificar patrones y tendencias."
    },
    {
      icon: <Shield className="text-neon-cyan" size={24} />,
      title: "Sistema Autónomo",
      description: "Drones con capacidad de vuelo completamente autónomo y planificación de rutas optimizadas."
    },
    {
      icon: <Zap className="text-neon-green" size={24} />,
      title: "Eficiencia Energética",
      description: "Baterías de alta duración y estaciones de carga solar para operación sostenible."
    }
  ];

  const benefits = [
    {
      icon: <Droplets className="text-neon-cyan" size={24} />,
      title: "Optimización de Riego",
      description: "Reducción del consumo de agua hasta un 30% mediante mapas de humedad de alta precisión."
    },
    {
      icon: <Bug className="text-neon-green" size={24} />,
      title: "Detección Temprana de Plagas",
      description: "Identificación de problemas fitosanitarios antes de que sean visibles al ojo humano."
    },
    {
      icon: <Sprout className="text-neon-cyan" size={24} />,
      title: "Mayor Rendimiento",
      description: "Incremento promedio del 42% en la productividad mediante fertilización variable y gestión precisa."
    }
  ];

  return (
    <section id="solution" className="bg-dark-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-neon-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-neon-cyan/5 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Nuestra Solución</h2>
          <p className="text-metallic text-lg max-w-3xl mx-auto">
            Un sistema integral que combina drones autónomos de última generación con una plataforma de análisis impulsada por inteligencia artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div>
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Drone agrícola volando sobre campos" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold">Drones Autónomos</h3>
                <p className="text-metallic mt-2">Equipados con la tecnología más avanzada</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="card">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-white text-lg font-medium mb-2">{feature.title}</h4>
                  <p className="text-metallic text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Plataforma de análisis de datos agrícolas" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold">Plataforma de Análisis</h3>
                <p className="text-metallic mt-2">Inteligencia artificial al servicio del agricultor</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.slice(4, 8).map((feature, index) => (
                <div key={index} className="card">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-white text-lg font-medium mb-2">{feature.title}</h4>
                  <p className="text-metallic text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-neon-cyan mb-4">Beneficios Principales</h3>
            <p className="text-metallic max-w-2xl mx-auto">
              Nuestro sistema no solo proporciona datos, sino resultados tangibles que transforman la operación agrícola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center h-full">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h4 className="text-white text-lg font-medium mb-3">{benefit.title}</h4>
                <p className="text-metallic">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-surface rounded-lg p-8 neon-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white mb-4">Demo Interactiva</h3>
              <p className="text-metallic mb-6">
                Accede a nuestra demostración interactiva para experimentar de primera mano cómo nuestra plataforma transforma datos en decisiones accionables.
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center">
                Solicitar Acceso <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Demostración de la plataforma" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-neon-green rounded-full p-4 cursor-pointer hover:bg-opacity-90 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
