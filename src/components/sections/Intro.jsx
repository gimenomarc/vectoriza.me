import Hyperspeed from '../reactbits/Hyperspeed.jsx';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="snap-start h-screen w-full overflow-hidden flex items-center justify-center bg-black relative px-6">
      {/* Fondo animado */}
      <Hyperspeed className="pointer-events-none" />

      {/* Contenido centrado */}
      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white hover:text-cyan-400 transition cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          vectoriza.<span className="text-cyan-400">me</span>
        </motion.h1>

        <motion.p
          className="text-white/70 text-lg md:text-xl mt-6 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Transforma el conocimiento de tu empresa en soluciones de inteligencia artificial consultables en tiempo real. Rápido. Preciso. Sin necesidad de programar.
        </motion.p>
      </div>

      {/* Gradiente inferior */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </section>
  );
}
