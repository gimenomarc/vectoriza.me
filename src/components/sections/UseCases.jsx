import { FaComments, FaUsersCog, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";
import ShinyText from "../reactbits/ShinyText";

const cases = [
  {
    icon: <FaComments size={24} />,
    title: "Mejora la atención al cliente",
    desc: "Responde dudas frecuentes de forma inmediata y profesional, incluso fuera del horario comercial. Soluciones que alivian carga operativa sin perder calidad humana."
  },
  {
    icon: <FaUsersCog size={24} />,
    title: "Soporte interno para tu equipo",
    desc: "Automatiza respuestas sobre procesos internos, herramientas o normativas. Ideal para formación, onboarding o asistencia constante a departamentos clave."
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Consultas inteligentes sobre datos",
    desc: "Haz que cualquier persona pueda entender y consultar información relevante de tu negocio, sin depender de analistas ni perder tiempo buscando entre archivos."
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: "Guías interactivas en web o app",
    desc: "Mejora la experiencia de usuario ofreciendo asistencia en tiempo real en tu sitio web o aplicación: desde procesos de compra hasta soporte técnico."
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
          <span className="text-cyan-400">hacer crecer</span> tu empresa con IA
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
