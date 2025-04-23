import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import { FaFileUpload, FaBrain, FaMagic, FaComments, FaRobot, FaCode } from 'react-icons/fa';

export default function Features() {
  return (
    <section id="features" className="relative z-10 min-h-screen py-32 flex flex-col justify-center bg-gradient-to-tr from-black via-black to-[#0f0f23] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-widest text-cyan-500 mb-4 font-mono">
          Sin código. Sin límites.
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto">
          De tu contenido a una <span className="text-cyan-400">IA funcional</span>
        </h2>

        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-20">
          Convierte documentos, procesos y experiencias internas en sistemas de inteligencia artificial útiles, accesibles y listos para escalar. Todo empieza con tu conocimiento.
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
    title: 'Sube tu contenido',
    desc: 'Documentos técnicos, webs, políticas internas, FAQs... Lo que sepas, lo transformamos en conocimiento estructurado y entrenable.'
  },
  {
    icon: <FaBrain />,
    title: 'IA que contextualiza',
    desc: 'No se limita a buscar palabras. Entiende contexto, relaciona ideas y responde como un experto que ha leído todo tu material.'
  },
  {
    icon: <FaMagic />,
    title: 'Conversación natural',
    desc: 'Olvídate de reglas y flujos forzados. La interacción es flexible, como hablar con un especialista que conoce tu negocio.'
  },
  {
    icon: <FaComments />,
    title: 'Interacción en lenguaje real',
    desc: 'Admite preguntas complejas, seguimiento de contexto, reformulaciones y multidioma. Comunicación fluida y sin fricciones.'
  },
  {
    icon: <FaRobot />,
    title: 'Entrena y ajusta al instante',
    desc: 'Añade nuevas fuentes, corrige respuestas o mejora precisión sin tocar código. Iteración visual en segundos.'
  },
  {
    icon: <FaCode />,
    title: 'Resultados sin programar',
    desc: 'Diseñado para equipos técnicos o no técnicos. Todo visual, editable y desplegable sin desarrolladores de por medio.'
  }
];
