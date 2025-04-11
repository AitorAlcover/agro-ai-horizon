
import React from 'react';
import { CheckCircle, Server, DollarSign, Users, Clock, FileCode, Calendar, Activity } from 'lucide-react';

const Viability = () => {
  const technicalItems = [
    "Drones equipados con cámaras multiespectrales y sensores de alta precisión",
    "Sistema de navegación GPS RTK con precisión centimétrica",
    "Algoritmos de IA para análisis de imágenes y detección de anomalías",
    "APIs para integración con sistemas de gestión agrícola existentes",
    "Infraestructura cloud escalable con procesamiento en tiempo real"
  ];

  const financialItems = [
    {
      label: "Inversión Inicial",
      value: "Desde 8.500€",
      description: "Incluye hardware, software y capacitación inicial"
    },
    {
      label: "Modelos de Negocio",
      value: "Flexible",
      description: "Venta directa de equipos o suscripción mensual a la plataforma"
    },
    {
      label: "ROI Estimado",
      value: "12-18 meses",
      description: "Basado en aumento de rendimiento y reducción de costos"
    },
    {
      label: "Ahorro Mensual",
      value: "15-25%",
      description: "En insumos, agua y personal comparado con métodos tradicionales"
    }
  ];

  const implementationPhases = [
    {
      icon: <Calendar className="text-neon-cyan" size={24} />,
      phase: "Fase 1",
      title: "Evaluación y Planificación",
      timeline: "2-4 semanas",
      description: "Análisis de necesidades, mapeo de parcelas y personalización de la solución"
    },
    {
      icon: <Server className="text-neon-green" size={24} />,
      phase: "Fase 2",
      title: "Implementación Técnica",
      timeline: "4-6 semanas",
      description: "Configuración de hardware, software e integración con sistemas existentes"
    },
    {
      icon: <Users className="text-neon-cyan" size={24} />,
      phase: "Fase 3",
      title: "Capacitación",
      timeline: "2-3 semanas",
      description: "Formación del personal técnico y usuarios finales para maximizar los beneficios"
    },
    {
      icon: <Activity className="text-neon-green" size={24} />,
      phase: "Fase 4",
      title: "Monitoreo y Optimización",
      timeline: "Continuo",
      description: "Ajustes basados en feedback y mejora continua del sistema"
    }
  ];

  return (
    <section id="viability" className="gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Viabilidad y Plan de Implementación</h2>
          <p className="text-metallic text-lg max-w-3xl mx-auto">
            Una solución técnicamente robusta, financieramente viable y con un plan de implementación estructurado para garantizar el éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="card h-full">
            <div className="flex items-center mb-6">
              <FileCode className="text-neon-cyan mr-3" size={24} />
              <h3 className="text-white text-xl">Análisis Técnico</h3>
            </div>
            
            <p className="text-metallic mb-6">
              Nuestra solución utiliza tecnología de vanguardia que ha sido probada y validada en entornos agrícolas reales, con una arquitectura escalable y adaptable a diferentes cultivos y condiciones.
            </p>
            
            <div className="space-y-4">
              {technicalItems.map((item, index) => (
                <div key={index} className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card h-full">
            <div className="flex items-center mb-6">
              <DollarSign className="text-neon-green mr-3" size={24} />
              <h3 className="text-white text-xl">Análisis Financiero</h3>
            </div>
            
            <p className="text-metallic mb-6">
              Hemos desarrollado un modelo financiero sostenible que permite a los agricultores adoptar nuestra tecnología con una inversión inicial razonable y un rápido retorno de inversión.
            </p>
            
            <div className="space-y-6">
              {financialItems.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-metallic">{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </div>
                  <p className="text-sm text-metallic/80">{item.description}</p>
                  {index < financialItems.length - 1 && <hr className="border-gray-700 my-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card mb-16">
          <div className="text-center mb-8">
            <h3 className="text-white text-xl mb-4">Plan de Implementación</h3>
            <p className="text-metallic max-w-2xl mx-auto">
              Un enfoque estructurado en fases para asegurar una integración fluida con las operaciones existentes y maximizar la adopción.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="bg-dark-bg p-6 rounded-lg border border-dark-surface">
                <div className="mb-4">
                  {phase.icon}
                </div>
                <div className="inline-block px-2 py-1 rounded bg-dark-surface text-neon-cyan text-xs mb-3">
                  {phase.phase} • {phase.timeline}
                </div>
                <h4 className="text-white font-medium mb-2">{phase.title}</h4>
                <p className="text-metallic text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-surface rounded-lg p-8 neon-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white mb-4">Cumplimiento y Regulaciones</h3>
              <p className="text-metallic mb-6">
                Nuestro sistema cumple con todas las regulaciones pertinentes para el uso de drones en agricultura, incluyendo:
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">Certificación de la Agencia Estatal de Seguridad Aérea (AESA)</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">Conformidad con normativa de privacidad de datos (RGPD)</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">Protocolos de seguridad en vuelo y gestión de emergencias</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">Certificaciones ISO para procesos de calidad y seguridad</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Capacitación y Soporte</h3>
              <p className="text-metallic mb-6">
                Ofrecemos un programa completo para asegurar que nuestros clientes obtengan el máximo valor:
              </p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">Formación inicial y avanzada para operadores de drones</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">Capacitación para interpretación de datos y toma de decisiones</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">Soporte técnico 24/7 mediante diversos canales</p>
                </li>
                <li className="flex">
                  <CheckCircle className="text-neon-green flex-shrink-0 mt-1 mr-3" size={18} />
                  <p className="text-metallic">Actualizaciones regulares de software con nuevas funcionalidades</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Solicitar Estudio de Viabilidad
          </a>
        </div>
      </div>
    </section>
  );
};

export default Viability;
