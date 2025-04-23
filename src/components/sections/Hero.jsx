import CircularText from '../reactbits/CircularText';
import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import ScrollFloat from '../reactbits/ScrollFloat';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-black px-4">
      {/* Decoración flotante circular */}
      <ScrollFloat className="absolute top-10 left-10 scale-75 md:scale-100 z-20">
        <CircularText text="VECTORIZA.ME*AI*KNOWLEDGE*" spinDuration={18} onHover="speedUp" />
      </ScrollFloat>

      {/* Visual FX background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-black via-black to-[#0f0f23]" />

      {/* Contenido Hero */}
      <motion.div
        className="relative z-10 max-w-5xl backdrop-blur-2xl bg-black/50 rounded-3xl px-8 py-20 border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.1)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <GradientText>
            Potencia tu negocio con <span className="text-cyan-400">IA hecha a medida</span>
          </GradientText>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/80 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Desarrollo e integración de inteligencia artificial adaptada a tus procesos, productos y datos reales. Automatiza, responde y escala con soluciones hechas para ti.
        </motion.p>

        <motion.p
          className="text-base text-white/60 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Soy <strong className="text-cyan-300">Marc Gimeno</strong>, especialista en IA aplicada. Te ayudo a convertir tu conocimiento en asistentes conversacionales inteligentes y personalizados que entienden tu negocio y mejoran tu productividad.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contact"
            className="relative px-8 py-3 text-white text-lg font-semibold rounded-full border-2 border-cyan-500 bg-black hover:bg-cyan-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.15)] cursor-pointer"
          >
            Reservar cita gratuita
          </a>
          <ShinyText text="Descubre cómo funciona" className="text-base font-medium text-white cursor-pointer" />
        </motion.div>
      </motion.div>
    </section>
  );
}
