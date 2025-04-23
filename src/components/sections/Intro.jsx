import Hyperspeed from '../reactbits/Hyperspeed.jsx';
import GradientText from '../reactbits/GradientText';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-black pt-24">
      {/* Fondo animado */}
      <Hyperspeed />

      {/* Título principal más arriba con glow */}
      <motion.h1
        className="relative -mt-40 bg-transparent text-5xl md:text-7xl font-extrabold text-center z-10 tracking-tight"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <GradientText>
          vectoriza.me
        </GradientText>
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
