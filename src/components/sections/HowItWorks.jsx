import { FaUpload, FaCogs, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollFloat from "../reactbits/ScrollFloat";

const steps = [
  {
    icon: <FaUpload size={28} />,
    title: "Sube tus fuentes de conocimiento",
    description:
      "Documentos, webs, bases de datos... Vectoriza.me los transforma automáticamente en bloques comprensibles por IA.",
  },
  {
    icon: <FaCogs size={28} />,
    title: "Procesamos, fragmentamos y entrenamos",
    description:
      "Usamos técnicas avanzadas de vectorización, chunking y embeddings para crear una base conversacional precisa y eficiente.",
  },
  {
    icon: <FaComments size={28} />,
    title: "Interactúa con tu conocimiento",
    description:
      "Haz preguntas complejas y obtén respuestas precisas, contextuales y útiles en lenguaje natural.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 bg-gradient-to-t from-[#0e0e0e] to-black text-white z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          ¿Cómo funciona <span className="text-cyan-400">Vectoriza.me</span>?
        </h2>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mb-20">
          Convierte documentos y datos en una IA consultable sin esfuerzo. Vectoriza.me
          automatiza cada paso, desde la carga hasta la interacción final con tu propio conocimiento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-[#151515] rounded-3xl border border-white/10 p-8 shadow-md hover:shadow-cyan-500/10 transition-all duration-300 text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="text-cyan-400 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
