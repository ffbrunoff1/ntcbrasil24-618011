import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, HardHat, Wrench } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  const iconContainerVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.8,
      },
    },
  };
  return (
    <section
      id="home"
      className="relative bg-gray-light min-h-screen flex items-center section-padding"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-light via-blue-50 to-primary/10 opacity-50"></div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-4"
          >
            Validando suas ideias em{' '}
            <span className="gradient-text">realidade concreta</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            NTC Brasil: Soluções em construção que vão além do esperado, com
            qualidade e compromisso em cada projeto.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href="#contact" className="btn btn-secondary group">
              Fale com um especialista
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
        <div className="relative hidden md:flex justify-center items-center h-full">
          <motion.div
            className="absolute w-72 h-72 bg-primary/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          ></motion.div>
          <motion.div
            className="absolute w-56 h-56 bg-secondary/20 rounded-full blur-2xl bottom-10 right-10"
            animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 2,
            }}
          ></motion.div>
          <motion.div
            variants={iconContainerVariants}
            initial="hidden"
            animate="visible"
            className="relative grid grid-cols-2 gap-6"
          >
            <div className="bg-light p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <Building className="w-16 h-16 text-primary" />
            </div>
            <div className="bg-light p-8 rounded-2xl shadow-xl mt-8 transform hover:-translate-y-2 transition-transform duration-300">
              <HardHat className="w-16 h-16 text-secondary" />
            </div>
            <div className="bg-light p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <Wrench className="w-16 h-16 text-secondary" />
            </div>
            <div className="bg-light p-8 rounded-2xl shadow-xl mt-8 transform hover:-translate-y-2 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
