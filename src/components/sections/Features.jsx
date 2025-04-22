import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import { FaFileUpload, FaBrain, FaMagic, FaComments, FaRobot, FaCode } from 'react-icons/fa';

export default function Features() {
  return (
    <section className="relative z-10 min-h-screen py-32 flex flex-col justify-center bg-gradient-to-tr from-black via-black to-[#0f0f23] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-widest text-cyan-500 mb-4 font-mono">
          Sin código. Sin límites.
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-3xl mx-auto">
          <GradientText>
            De tu contenido a una IA funcional
          </GradientText>
        </h2>

        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-20">
          Vectoriza.me transforma textos, webs y documentos en experiencias conversacionales reales. Sin complejidad, sin perder contexto, en tu propio espacio.
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
    desc: 'PDFs, páginas web, DOCX, texto plano... lo que tengas, lo convertimos en conocimiento estructurado.'
  },
  {
    icon: <FaBrain />,
    title: 'IA que contextualiza',
    desc: 'No se limita a buscar, comprende lo que dices y responde como un experto.'
  },
  {
    icon: <FaMagic />,
    title: 'Conversación mágica',
    desc: 'Tus usuarios no verán filtros ni técnicas. Solo una IA que responde como un humano inteligente.'
  },
  {
    icon: <FaComments />,
    title: 'Interactúa en natural',
    desc: 'Multi-turn conversations, contexto persistente, idiomas, follow-ups… como hablas tú.'
  },
  {
    icon: <FaRobot />,
    title: 'Entrena y mejora',
    desc: 'Afina respuestas, corrige errores, añade fuentes o feedback en tiempo real.'
  },
  {
    icon: <FaCode />,
    title: 'Sin escribir una línea',
    desc: 'Diseñado para quien no programa y para quienes necesitan resultados ya. Visual, editable y tuyo.'
  }
];
