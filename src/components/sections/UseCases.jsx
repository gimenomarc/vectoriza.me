import { FaComments, FaUsersCog, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";
import ShinyText from "../reactbits/ShinyText";

const cases = [
  {
    icon: <FaComments size={24} />,
    title: "Chatbots inteligentes por producto",
    desc: "Transforma cada línea de tu catálogo en asistentes IA que explican, asesoran y venden. Cada conversación basada en tu conocimiento real. Ideal para ecommerce, software o soporte automatizado personalizado."
  },
  {
    icon: <FaUsersCog size={24} />,
    title: "IA para empoderar a tus equipos",
    desc: "Resuelve dudas internas sobre normativas, flujos o herramientas con un asistente IA entrenado con tus recursos. Soporte instantáneo para ventas, atención o RRHH."
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Asistentes que entienden tus datos",
    desc: "Convierte informes, dashboards y regulaciones en experiencias conversacionales accesibles. Cualquier persona de tu empresa podrá consultar información clave en segundos."
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: "IA integrada en tu web o app",
    desc: "Guía a tus usuarios con respuestas contextuales y precisas. Desde onboarding hasta procesos de compra. Sin fricción, con estilo."
  }
];

export default function UseCases() {
  return (
    <section id="usecases" className="relative w-full min-h-screen py-36 px-6 bg-black text-white z-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Casos reales de uso para{" "}
          <span className="text-cyan-400">empresas reales</span>
        </motion.h2>
        <ShinyText
          text="Automatiza, responde y evoluciona con IA hecha a medida para ti"
          className="text-lg text-white/70 max-w-3xl mx-auto mb-20"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#0f0f0f] p-6 rounded-3xl border border-white/5 shadow-md shadow-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] group text-left cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-600/10 text-cyan-400 border border-cyan-500/10 shadow-md shadow-cyan-500/10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  <ShinyText text={item.title} />
                </h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
