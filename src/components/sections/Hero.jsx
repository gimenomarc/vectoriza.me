import CircularText from '../reactbits/CircularText';
import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import ScrollFloat from '../reactbits/ScrollFloat';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full py-32 px-6 bg-black relative text-center overflow-hidden"
    >
      {/* Decoración flotante circular */}
      <ScrollFloat className="absolute top-10 left-10 scale-75 md:scale-100 z-20">
        <CircularText text="VECTORIZA.ME*IA*COMPLETA*RAG*AGENTES*" spinDuration={18} onHover="speedUp" />
      </ScrollFloat>

      {/* Fondo visual limpio */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 max-w-5xl backdrop-blur-2xl bg-black/50 rounded-3xl px-6 py-14 md:px-8 md:py-16 border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.1)] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <GradientText>
            Experto en IA: Transformo tu negocio con inteligencia artificial integral
          </GradientText>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/80 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          No solo hago agentes o webs: domino <strong className="text-cyan-300">la IA en todos sus niveles</strong>. Desde <strong className="text-cyan-300">agentes autónomos y RAGs</strong> hasta <strong className="text-cyan-300">Insta Web</strong> (webs personalizadas ultra-rápidas), <strong className="text-cyan-300">videos publicitarios con IA</strong>, <strong className="text-cyan-300">imágenes perfectas</strong>, <strong className="text-cyan-300">formaciones empresariales</strong>, <strong className="text-cyan-300">cultura y gobierno IA</strong>, <strong className="text-cyan-300">IA Responsable</strong> y <strong className="text-cyan-300">cumplimiento IA ACT</strong>. Todo lo que necesitas para liderar con IA.
        </motion.p>

        <motion.p
          className="text-sm text-white/60 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Soy <strong className="text-cyan-300">Marc Gimeno</strong>, experto en inteligencia artificial integral. No me limito a una tecnología: implemento soluciones completas que transforman empresas. Agentes que trabajan solos, RAGs que responden con precisión, flujos agénticos que automatizan operaciones, Insta Web para presencia digital instantánea, contenido multimedia con IA, y toda la estrategia organizacional para que tu empresa domine la IA de forma responsable y efectiva.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#finalcta"
            className="relative px-6 py-3 text-white text-base font-semibold rounded-full border-2 border-cyan-500 bg-black hover:bg-cyan-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.15)] cursor-pointer"
          >
            Solicitar propuesta (24-48h)
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}