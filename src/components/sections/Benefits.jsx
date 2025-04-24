import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";

const benefits = [
  {
    title: "Aumenta la productividad",
    text: "Reduce tareas manuales, automatiza procesos y haz más con menos recursos. Tus empleados se enfocan en lo que importa."
  },
  {
    title: "Toma decisiones más rápidas y mejores",
    text: "Analiza tus datos en segundos con IA. Obtén respuestas claras para actuar sin perder tiempo."
  },
  {
    title: "Atiende clientes 24/7 sin contratar a nadie",
    text: "Implementa asistentes personalizados que resuelven dudas y dan soporte día y noche. Sin depender de nadie."
  },
  {
    title: "Integra IA en tus herramientas actuales",
    text: "Conecta la inteligencia artificial con tu web, CRM, correo, ERP o sistema interno. Sin complicaciones."
  },
  {
    title: "Adapta todo a tu empresa",
    text: "No uso soluciones genéricas. Cada sistema se entrena con tus documentos, procesos y estilo de comunicación."
  },
  {
    title: "Empieza en días, no en meses",
    text: "Diseño soluciones funcionales desde el primer día. Nada de promesas a largo plazo. Resultados rápidos y medibles."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative w-full min-h-screen bg-black text-white py-40 px-6 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-cyan-500 mb-4 font-mono">
          Ventajas clave
        </p>

        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tu empresa, impulsada por <span className="text-cyan-400">IA</span>
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Soluciones de inteligencia artificial pensadas para ti. Rápidas de implementar, fáciles de usar y con impacto real desde el primer día.
        </motion.p>

        <div className="relative grid md:grid-cols-2 gap-12 mt-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-[#0a0a0a] to-[#121212] rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.07)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-all duration-500 hover:scale-[1.03] cursor-default"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}