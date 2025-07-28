import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: 'beforeChildren' },
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const features = [
    {
      icon: <Target className="w-10 h-10 text-light" />,
      title: 'Nossa Missão',
      description:
        'Entregar soluções de construção inovadoras e de alta qualidade que superem as expectativas dos nossos clientes, sempre com foco na segurança e sustentabilidade.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-light" />,
      title: 'Nossa Visão',
      description:
        'Ser a empresa de construção referência no Brasil, reconhecida pela excelência, integridade e pelo compromisso com o desenvolvimento de projetos que transformam comunidades.',
    },
    {
      icon: <Users className="w-10 h-10 text-light" />,
      title: 'Nossos Valores',
      description:
        'Compromisso com o cliente, integridade em todas as ações, busca contínua por inovação, valorização da nossa equipe e responsabilidade socioambiental.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Construindo o Futuro com{' '}
            <span className="gradient-text">Bases Sólidas</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Na NTC Brasil, cada projeto é mais do que uma construção; é a
            materialização de um sonho. Combinamos técnica apurada, materiais de
            ponta e uma equipe apaixonada para garantir resultados duradouros e
            de excelência.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-primary to-secondary p-8 rounded-xl shadow-lg text-light flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-light/20 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
