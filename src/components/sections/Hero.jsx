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
        <CircularText text="VECTORIZA.ME*AI*KNOWLEDGE*" spinDuration={18} onHover="speedUp" />
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
            Moderniza tu empresa con inteligencia artificial
          </GradientText>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/80 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Automatizo procesos, mejoro la eficiencia de tu empresa y adapto tu negocio a la era de la inteligencia artificial. Soluciones prácticas de IA para empresas, seguras y sin necesidad de programar.
        </motion.p>

        <motion.p
          className="text-sm text-white/60 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Soy <strong className="text-cyan-300">Marc Gimeno</strong>, especialista en inteligencia artificial aplicada. Trabajo con empresas que quieren avanzar, ahorrar tiempo y multiplicar su productividad gracias a la IA. Tú pones el conocimiento, yo lo transformo en soluciones reales.
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
            Quiero una propuesta personalizada
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}