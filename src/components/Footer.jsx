import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753741494352_0.png';

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-dark text-light"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4"
              />
            </a>
            <p className="text-gray-400 max-w-xs">
              Transformando ideias em realidade concreta com qualidade e
              compromisso.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-light mb-4 uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-light mb-4 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="tel:+5544991040774"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +55 44 99104-0774
                </a>
              </li>
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-primary transition-colors duration-300"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>
                <p>Rua Padre Lebret, 801, G05, Bloco 03</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
