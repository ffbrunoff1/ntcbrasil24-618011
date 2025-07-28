import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, HardHat, Building, Scaling } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ClipboardList className="w-12 h-12 text-primary" />,
      title: 'Planejamento e Projeto',
      description:
        'Desenvolvemos projetos detalhados e planejamentos estratégicos para garantir a viabilidade e o sucesso da sua obra, otimizando recursos e prazos.',
    },
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: 'Execução de Obras',
      description:
        'Realizamos a construção de empreendimentos residenciais, comerciais e industriais com mão de obra qualificada e seguindo rigorosos padrões de qualidade.',
    },
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: 'Gerenciamento de Obras',
      description:
        'Coordenamos todas as etapas do projeto, desde a contratação de fornecedores até a fiscalização da execução, assegurando a entrega no prazo e orçamento.',
    },
    {
      icon: <Scaling className="w-12 h-12 text-primary" />,
      title: 'Consultoria Especializada',
      description:
        'Oferecemos consultoria técnica para auxiliar na tomada de decisões, análise de viabilidade de projetos e soluções para desafios complexos na construção civil.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };

  return (
    <section id="services" className="section-padding bg-gray-light">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossas <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender todas as
            necessidades do seu projeto de construção, com a garantia de
            qualidade NTC Brasil.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-light p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col text-center items-center"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
