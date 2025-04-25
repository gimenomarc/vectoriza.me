import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import { FaFileUpload, FaBrain, FaBolt, FaComments, FaSyncAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaFileUpload />,
    title: 'Trabajo con tu contenido real',
    desc: 'Puedo utilizar tus documentos, procesos internos, manuales o bases de datos para crear soluciones de IA que respondan dudas, guíen tareas o automaticen pasos repetitivos.'
  },
  {
    icon: <FaBrain />,
    title: 'IA que entiende tu negocio',
    desc: 'Desarrollo sistemas que no repiten lo que encuentran: comprenden tu lenguaje, tu lógica y tus reglas. Están entrenados con lo que hace única a tu empresa.'
  },
  {
    icon: <FaBolt />,
    title: 'Automatización que ahorra tiempo',
    desc: 'Reduzco tareas manuales y tiempos de respuesta. Ganas productividad real al automatizar procesos con precisión y sin esfuerzo.'
  },
  {
    icon: <FaComments />,
    title: 'Respuestas claras a preguntas reales',
    desc: 'Desde información técnica hasta preguntas frecuentes. La IA responde con lógica, contexto y el estilo que necesite tu empresa.'
  },
  {
    icon: <FaSyncAlt />,
    title: 'Actualización constante y sin fricción',
    desc: 'Si cambias tus contenidos o procesos, la IA se adapta. Puedo actualizarla en cualquier momento para que evolucione contigo.'
  },
  {
    icon: <FaCode />,
    title: 'Sin que tú programes nada',
    desc: 'Tú solo defines qué necesitas. Yo me encargo del diseño, desarrollo e implementación. Todo funciona sin que tengas que escribir una línea de código.'
  }
];

export default function Features() {
  return (
    <section id="features" className="w-full py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-16">
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-500 mb-2 font-mono">
            Lo que puedo hacer por tu empresa
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
          Soluciones de Inteligencia Artificial
          <span className="text-cyan-400"> Personalizadas para Empresas</span>
          </h2>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mt-4">
            Diseño e implemento sistemas de inteligencia artificial adaptados a tu contenido, tu sector y tus objetivos. Automatiza procesos, resuelve dudas y mejora el rendimiento de tu equipo sin depender de desarrolladores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.015] group shadow-md shadow-cyan-500/5 flex flex-col items-center text-center"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_12px_rgba(0,255,255,0.1)]">
                {icon}
              </div>
              <h3 className="text-base font-semibold mb-2 text-white">
                <ShinyText text={title} />
              </h3>
              <p className="text-sm text-white/60 leading-snug">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}