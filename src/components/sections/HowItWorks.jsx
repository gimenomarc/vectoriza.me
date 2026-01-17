import { FaUpload, FaCogs, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import ShinyText from "../reactbits/ShinyText";

const steps = [
  {
    icon: <FaUpload size={24} />,
    title: "1. Analizamos tu necesidad",
    desc: "Llamada de 30 minutos para entender tu operación, identificar procesos automatizables y definir objetivos claros. Sin compromiso, solo para alinear expectativas."
  },
  {
    icon: <FaCogs size={24} />,
    title: "2. Propuesta en 24-48h",
    desc: "Te envío una propuesta concreta: qué agente desarrollamos, qué soluciones implementamos, qué flujos automatizamos. Presupuesto claro, plazos reales, resultados medibles."
  },
  {
    icon: <FaComments size={24} />,
    title: "3. Implementación rápida",
    desc: "Agentes funcionando en días, Insta Web lista en tiempo récord, flujos operativos mejorados desde la primera semana. Resultados visibles desde el inicio, sin esperar meses."
  }
];

export default function HowItWorks() {
  return (
    <section
      id="howitworks"
      itemScope
      itemType="https://schema.org/Service"
      aria-label="Proceso de trabajo con soluciones de inteligencia artificial"
      className="w-full min-h-screen flex items-center justify-center px-6 bg-black text-white z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-widest text-cyan-500 font-mono">
            Proceso rápido y directo
          </p>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Cómo trabajamos? <span className="text-cyan-400">Simple y rápido</span>
          </motion.h1>
          <motion.p
            className="text-base text-white/70 max-w-xl mx-auto"
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Sin burocracias, sin reuniones interminables. Analizamos tu necesidad, te damos una propuesta clara en 24-48h y empezamos a implementar. Agentes funcionando en días, Insta Web lista rápidamente, resultados desde la primera semana.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center max-w-xs text-center relative" itemProp="hasOfferCatalog">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-600/10 text-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.2)] mb-4 text-xl">
                {step.icon}
              </div>
              <h2 className="text-lg font-bold text-white mb-2">
                <ShinyText text={step.title} />
              </h2>
              <p className="text-sm text-white/60 leading-relaxed" itemProp="serviceType">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-40px] top-7">
                  <div className="w-16 h-px bg-cyan-500/30" />
                  <div className="w-3 h-3 border-t-2 border-r-2 border-cyan-400 rotate-45 mt-[-6px] ml-[52px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}