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

      {/* CTA Button Desktop */}
      <button
        onClick={() => scrollTo('finalcta')}
        className="ml-4 hidden md:inline-block px-5 py-2 bg-cyan-500 hover:bg-cyan-600 transition-all text-black font-semibold rounded-full shadow-[0_0_20px_rgba(0,255,255,0.2)] cursor-pointer hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
      >
        Empezar ahora
      </button>

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

            <button
              onClick={() => scrollTo('finalcta')}
              className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.2)] cursor-pointer hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            >
              Empezar ahora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
