import { FaUpload, FaCogs, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import ShinyText from "../reactbits/ShinyText";

const steps = [
  {
    icon: <FaUpload size={24} />,
    title: "Escucho y analizo",
    desc: "Conozco tu negocio, tus procesos, tus retos. Todo empieza por entender lo que realmente necesitas."
  },
  {
    icon: <FaCogs size={24} />,
    title: "Diseño y propongo",
    desc: "Te presento una solución clara, práctica y 100% personalizada. Sin complicaciones técnicas."
  },
  {
    icon: <FaComments size={24} />,
    title: "Implementamos juntos",
    desc: "Lo pongo en marcha contigo. Desde el día uno, funciona. Y te acompaño para que lo aproveches al máximo."
  }
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="snap-start h-screen w-full bg-black text-white z-10 flex items-center justify-center px-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center h-full text-center gap-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-500 mb-2 font-mono">
              Tu camino hacia la IA personalizada
            </p>

            <motion.h2
              className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ¿Cómo trabajamos <span className="text-cyan-400">juntos</span>?
            </motion.h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 relative">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center max-w-xs text-center relative">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-600/10 text-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.2)] mb-4 text-xl">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  <ShinyText text={step.title} />
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute right-[-40px] top-7">
                    <div className="w-16 h-px bg-cyan-500/30 animate-pulse" />
                    <div className="w-3 h-3 border-t border-r border-cyan-400 rotate-45 mt-[-6px] ml-[52px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
