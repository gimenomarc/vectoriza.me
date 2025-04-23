import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import { FaFileUpload, FaBrain, FaBolt, FaComments, FaSyncAlt, FaCode } from 'react-icons/fa';

export default function Features() {
  return (
    <section id="features" className="relative z-10 min-h-screen py-32 flex flex-col justify-center bg-gradient-to-tr from-black via-black to-[#0f0f23] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-widest text-cyan-500 mb-4 font-mono">
          Lo que puedo hacer por tu empresa
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto">
          Soluciones de <span className="text-cyan-400">IA práctica y personalizada</span>
        </h2>

        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-20">
          Diseño e implemento sistemas de inteligencia artificial adaptados a tu contenido, tu sector y tus objetivos. Automatiza procesos, resuelve dudas y mejora el rendimiento de tu equipo sin depender de desarrolladores.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] group shadow-md shadow-cyan-500/5"
            >
              <div className="mb-4 text-cyan-400 text-3xl group-hover:animate-pulse">
                {icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                <ShinyText text={title} />
              </h3>
              <p className="text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
