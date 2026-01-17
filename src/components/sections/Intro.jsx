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
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white transition cursor-pointer select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="hover:text-cyan-400 transition duration-300">
            vectoriza
          </span>
          .<span className="text-cyan-400">me</span>

          <span className="block mt-4 text-white/50 text-sm md:text-base font-semibold tracking-wide uppercase">
            Multiplica tu eficiencia con IA
          </span>

        </motion.h1>


        <motion.p
          className="text-white/90 text-2xl md:text-3xl mt-8 px-4 font-bold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Automatiza lo que te quita horas.<br />
          <span className="text-cyan-400">Potencia lo que genera valor.</span>
        </motion.p>
        
        <motion.p
          className="text-white/70 text-lg md:text-xl mt-6 px-4 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Agentes de IA que trabajan 24/7. Sistemas que reducen costes hasta un 80%. Automatización que libera a tu equipo para lo estratégico. <span className="text-cyan-300 font-semibold">Resultados medibles desde la primera semana.</span>
        </motion.p>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a
            href="#finalcta"
            className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]"
          >
            Quiero ver resultados
          </a>
        </motion.div>
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
