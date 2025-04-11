
import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { TrendingUp, Users, Sprout, Droplet } from 'lucide-react';

const MarketAnalysis = () => {
  // Data for pie chart
  const pieData = [
    { name: 'Métodos Tradicionales', value: 65 },
    { name: 'Agricultura de Precisión', value: 35 },
  ];
  const COLORS = ['#8E9AAF', '#4ECDC4'];

  // Data for bar chart
  const barData = [
    { name: '2020', value: 28 },
    { name: '2021', value: 42 },
    { name: '2022', value: 55 },
    { name: '2023', value: 78 },
    { name: '2024', value: 98 },
  ];

  // Data for line chart
  const lineData = [
    { year: '2020', traditional: 100, precision: 20 },
    { year: '2021', traditional: 95, precision: 45 },
    { year: '2022', traditional: 90, precision: 60 },
    { year: '2023', traditional: 85, precision: 75 },
    { year: '2024', traditional: 80, precision: 90 },
    { year: '2025', traditional: 75, precision: 110 },
  ];

  const stats = [
    { 
      icon: <TrendingUp className="text-neon-green" size={24} />,
      value: '+35%',
      label: 'Crecimiento Anual'
    },
    { 
      icon: <Users className="text-neon-cyan" size={24} />,
      value: '75%',
      label: 'Adopción en 2025'
    },
    { 
      icon: <Sprout className="text-neon-green" size={24} />,
      value: '+42%',
      label: 'Aumento de Rendimiento'
    },
    { 
      icon: <Droplet className="text-neon-cyan" size={24} />,
      value: '-30%',
      label: 'Reducción de Agua'
    },
  ];

  return (
    <section id="market" className="gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Análisis de Mercado</h2>
          <p className="text-metallic text-lg max-w-3xl mx-auto">
            El sector agrícola está experimentando una transformación digital sin precedentes, creando oportunidades significativas para implementar soluciones tecnológicas avanzadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <h3 className="text-neon-cyan mb-4 text-xl">Adopción de Agricultura de Precisión</h3>
            <p className="text-metallic mb-6">
              Actualmente, solo el 35% de las explotaciones agrícolas implementan tecnologías de precisión, mientras que la mayoría sigue dependiendo de métodos tradicionales.
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <h3 className="text-neon-green mb-4 text-xl">Crecimiento del Mercado de Drones Agrícolas</h3>
            <p className="text-metallic mb-6">
              La demanda de drones especializados para agricultura ha experimentado un crecimiento exponencial en los últimos años, con proyecciones de continuar esta tendencia.
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" stroke="#8E9AAF" />
                  <YAxis stroke="#8E9AAF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1B1E2E', border: '1px solid #4ECDC4' }} 
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#4ECDC4' }}
                  />
                  <Bar dataKey="value" fill="#04E762" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card mb-16">
          <h3 className="text-white mb-4 text-xl">Comparativa de Rendimiento</h3>
          <p className="text-metallic mb-6">
            La agricultura de precisión está superando sistemáticamente a los métodos tradicionales en términos de eficiencia y rendimiento, como muestra esta tendencia comparativa.
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="year" stroke="#8E9AAF" />
                <YAxis stroke="#8E9AAF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1B1E2E', border: '1px solid #4ECDC4' }} 
                  labelStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="traditional" 
                  stroke="#8E9AAF" 
                  strokeWidth={2} 
                  name="Agricultura Tradicional"
                  dot={{ stroke: '#8E9AAF', strokeWidth: 2, fill: '#1B1E2E' }}
                />
                <Line A
                  type="monotone" 
                  dataKey="precision" 
                  stroke="#04E762" 
                  strokeWidth={2} 
                  name="Agricultura de Precisión"
                  dot={{ stroke: '#04E762', strokeWidth: 2, fill: '#1B1E2E' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-metallic">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-metallic max-w-3xl mx-auto">
            El mercado demanda soluciones que combinen tecnología avanzada, facilidad de uso y retorno de inversión tangible. Nuestra propuesta está diseñada para satisfacer estas necesidades.
          </p>
          <a href="#solution" className="btn-primary mt-8 inline-block">
            Descubrir Nuestra Solución
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
