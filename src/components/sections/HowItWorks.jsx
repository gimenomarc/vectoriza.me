import { FaUpload, FaCogs, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";
import ShinyText from "../reactbits/ShinyText";

const steps = [
  {
    icon: <FaUpload size={28} />,
    title: "Analizo tu situación y objetivos",
    description:
      "Estudiamos cómo funciona tu negocio, qué procesos quieres mejorar y qué herramientas ya usas. Todo empieza por entender qué necesitas realmente."
  },
  {
    icon: <FaCogs size={28} />,
    title: "Diseño una solución a medida",
    description:
      "Propongo y desarrollo una solución de inteligencia artificial adaptada a tu contexto: práctica, usable, sin complicaciones técnicas para tu equipo."
  },
  {
    icon: <FaComments size={28} />,
    title: "Implementamos y empezáis a usarla",
    description:
      "Pongo en marcha la solución en tu entorno y os acompaño para que podáis aprovecharla desde el primer día. Mejora real, sin curva de aprendizaje."
  }
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="relative w-full min-h-screen py-40 px-6 bg-black text-white z-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="text-sm uppercase tracking-widest text-cyan-500 mb-4 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Trabajo simple, resultados potentes
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¿Cómo trabajamos <span className="text-cyan-400">juntos</span>?
        </motion.h2>


        <motion.p
          className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          No necesitas experiencia técnica ni saber de inteligencia artificial. Me explicas tus objetivos y retos, y yo diseño e implemento una solución adaptada que aporta valor desde el primer día.
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
