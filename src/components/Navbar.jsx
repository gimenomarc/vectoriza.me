import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
  };

  const links = [
    { id: 'intro', label: 'Inicio' },
    { id: 'hero', label: 'Qué hago' },
    { id: 'features', label: 'Soluciones IA' },
    { id: 'benefits', label: 'Antes y después' },
    { id: 'usecases', label: 'Casos de uso' },
    { id: 'howitworks', label: 'Cómo trabajamos' },
    { id: 'finalcta', label: 'Contacto' },
    { href: '/blog', label: 'Blog', external: true }
  ];

  return (
    <motion.nav
      className="w-full fixed top-0 z-50 px-6 md:px-10 py-4 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-md shadow-black/30 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a
        href="/"
        className="text-xl md:text-2xl font-extrabold tracking-tight text-white hover:text-cyan-400 transition cursor-pointer"
      >
        vectoriza.<span className="text-cyan-400">me</span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        {links.map((link) => (
          link.external ? (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-cyan-400 transition duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ) : (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white/80 hover:text-cyan-400 transition duration-300 cursor-pointer"
            >
              {link.label}
            </button>
          )
        ))}
      </div>

      {/* Botones CTA */}
      <div className="hidden md:flex items-center space-x-4 ml-4">
        {/* Botón Proyectos */}
        <a
          href="/projects"
          className="px-5 py-2 text-white text-sm font-semibold rounded-full border-2 border-cyan-500 bg-transparent hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
        >
          Proyectos
        </a>

        {/* Botón Empezar ahora */}
        <button
          onClick={() => scrollTo('finalcta')}
          className="px-5 py-2 text-black text-sm font-semibold rounded-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 cursor-pointer"
        >
          Empezar ahora
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-black/90 px-6 py-6 flex flex-col space-y-4 md:hidden border-t border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-cyan-400 transition text-left cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-white/80 hover:text-cyan-400 transition text-left cursor-pointer"
                >
                  {link.label}
                </button>
              )
            ))}

            {/* Botón Proyectos en menú móvil */}
            <a
              href="/projects"
              className="mt-4 px-5 py-2 text-white text-center rounded-full border-2 border-cyan-500 bg-transparent hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>

            {/* Botón Empezar ahora en menú móvil */}
            <button
              onClick={() => scrollTo('finalcta')}
              className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              Empezar ahora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
