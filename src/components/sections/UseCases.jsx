import { FaBookOpen, FaBuilding, FaUserShield, FaGlobe } from "react-icons/fa6";
import { motion } from "framer-motion";

const cases = [
  {
    icon: <FaBookOpen size={20} />,
    title: "Asistentes sobre documentación técnica",
    desc: "Sube manuales, políticas internas o PDFs complejos. Vectoriza.me crea un asistente que responde dudas sin perder contexto, con comprensión semántica real.",
  },
  {
    icon: <FaBuilding size={20} />,
    title: "IA para intranets y equipos",
    desc: "Tus empleados podrán hacer preguntas sobre procesos, herramientas o normativas internas. Ideal para onboarding, recursos humanos y soporte interno.",
  },
  {
    icon: <FaUserShield size={20} />,
    title: "Atención al cliente con IA personalizada",
    desc: "Convierte tus FAQs, tutoriales y flujos de soporte en una experiencia conversacional con IA. Sin reglas. Sin scripts. Solo conocimiento real.",
  },
  {
    icon: <FaGlobe size={20} />,
    title: "Potencia tu web o portal digital",
    desc: "¿Y si tu web pudiera responder por sí sola? Integra Vectoriza.me para ofrecer respuestas personalizadas y contextualizadas sobre tu negocio, al instante.",
  },
];

export default function UseCases() {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 bg-black text-white z-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Casos de uso reales para soluciones IA <br className="hidden md:block" />
          que transforman tu conocimiento en resultados
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Vectoriza.me no es un chatbot genérico. Es un sistema que entiende tu información, se entrena con tu contenido y responde con contexto real.
        </motion.p>

        <div className="space-y-16 max-w-4xl mx-auto">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Icon circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center border border-cyan-500/20 text-cyan-400 shadow-md shadow-cyan-500/10">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
