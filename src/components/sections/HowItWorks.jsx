import { FaUpload, FaCogs, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";
import ShinyText from "../reactbits/ShinyText";

const steps = [
  {
    icon: <FaUpload size={28} />,
    title: "Carga tus fuentes de conocimiento",
    description:
      "Documentos, webs, bases de datos... Vectoriza.me transforma todo en conocimiento estructurado y usable por IA sin necesidad de conversión manual."
  },
  {
    icon: <FaCogs size={28} />,
    title: "Procesamos, entrenamos y afinamos",
    description:
      "Dividimos tu contenido, generamos embeddings y entrenamos un sistema conversacional que responde con precisión, adaptado a tu contexto."
  },
  {
    icon: <FaComments size={28} />,
    title: "Habla con tu información",
    description:
      "Consulta todo tu conocimiento con lenguaje natural, recibe respuestas inteligentes y contextualizadas, sin scripts ni configuraciones complicadas."
  }
];

export default function HowItWorks() {
  return (
    <section className="relative w-full min-h-screen py-40 px-6 bg-black text-white z-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="text-sm uppercase tracking-widest text-cyan-500 mb-4 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Sin complicaciones. Solo resultados.
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cómo funciona <span className="text-cyan-400">Vectoriza.me</span>
        </motion.h2>

        <motion.p
          className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Desde que cargas tus datos hasta que interactúas con tu propia IA entrenada, todo está automatizado, visual y adaptado a ti.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:scale-[1.02] shadow-md shadow-cyan-500/5 cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="mb-4 text-cyan-400 text-3xl group-hover:animate-pulse">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                <ShinyText text={step.title} />
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
