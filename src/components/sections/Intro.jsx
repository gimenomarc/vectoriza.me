import Hyperspeed from '../reactbits/Hyperspeed.jsx';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-black pt-24">
      {/* Fondo animado */}
      <Hyperspeed />

      {/* Título principal - mismo estilo que navbar pero más grande */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-white hover:text-cyan-400 transition cursor-pointer text-center z-10 mt-[-150px]"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        vectoriza.<span className="text-cyan-400">me</span>
      </motion.h1>
      {/* Slogan destacado */}
      <motion.p
        className="text-white/70 text-lg md:text-xl mt-4 px-4 max-w-2xl text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Transforma tu conocimiento en <span className="text-cyan-400 font-semibold">IA consultable</span> en tiempo real. Rápido. Preciso. Sin código.
      </motion.p>

      {/* Gradiente inferior para transición visual */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
