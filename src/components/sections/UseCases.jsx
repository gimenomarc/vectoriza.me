import { FaComments, FaUsersCog, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";
import ShinyText from "../reactbits/ShinyText";

const cases = [
  {
    icon: <FaComments size={24} />,
    title: "Asistentes que explican tus productos",
    desc: "Convierte tu catálogo en chatbots que responden dudas, asesoran a los clientes y ayudan a vender. Ideal para tiendas online, servicios digitales o soporte automatizado."
  },
  {
    icon: <FaUsersCog size={24} />,
    title: "Soporte interno instantáneo",
    desc: "Tu equipo podrá resolver dudas sobre procesos, herramientas o normativas al momento, con un asistente entrenado con tus documentos. Perfecto para ventas, atención al cliente o RRHH."
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Consulta tus informes con IA",
    desc: "Tus datos, ahora fáciles de consultar. Crea asistentes que entienden dashboards, informes o PDFs técnicos, y responden en lenguaje claro. Ideal para cualquier área de la empresa."
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: "IA que guía a tus usuarios",
    desc: "Integra un asistente en tu web o app que resuelve dudas, guía procesos de compra u onboarding, y mejora la experiencia del usuario con respuestas precisas."
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
          Casos de uso concretos para{" "}
          <span className="text-cyan-400">hacer crecer tu empresa con IA</span>
        </motion.h2>
        <ShinyText
          text="Descubre cómo puedes usar inteligencia artificial para responder preguntas, ayudar a tus clientes, formar a tu equipo o automatizar tareas con asistentes hechos a medida, entrenados con tu propio contenido."
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
