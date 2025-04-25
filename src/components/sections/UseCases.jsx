import { FaComments, FaUsersCog, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";
import ShinyText from "../reactbits/ShinyText";

const cases = [
  {
    icon: <FaComments size={24} />,
    title: "Atiende sin límites, las 24h",
    desc: "Chatbots inteligentes que responden al instante, resuelven preguntas frecuentes, gestionan incidencias y solo escalan lo realmente urgente. Funciona día y noche, sin colapsar a tu equipo humano. Perfecto para ecommerce, servicios o cualquier empresa con alta demanda."
  },
  {
    icon: <FaUsersCog size={24} />,
    title: "Tu equipo, más autónomo",
    desc: "¿Cuántas veces alguien hace la misma pregunta? Crea un asistente interno que explique procesos, herramientas, políticas y más. Ideal para el onboarding de nuevas personas, resolver dudas frecuentes y liberar tiempo a RRHH y managers."
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Haz preguntas a tus datos (¡como si hablaras con alguien!)",
    desc: "Transforma tus hojas de cálculo y reportes en un sistema accesible por lenguaje natural. Pregunta '¿cómo fueron las ventas el último trimestre?' y obtén la respuesta al momento, sin buscar entre archivos ni depender de nadie."
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: "Guía a tus usuarios en vivo",
    desc: "Incorpora asistentes IA en tu sitio web o app para guiar al usuario mientras navega: resolver dudas, explicar pasos de compra, asistir en configuraciones o resolver bloqueos técnicos. Es como tener un experto digital al lado de cada cliente."
  }
];

export default function UseCases() {
  return (
    <section id="usecases" className="w-full py-32 px-6 bg-black text-white z-10">
      <div className="max-w-6xl mx-auto text-center flex flex-col gap-y-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Aplicaciones reales de inteligencia artificial <span className="text-cyan-400">para empresas</span>
        </motion.h2>

        <ShinyText
          text="¿Qué pasaría si tuvieras un equipo digital que nunca duerme, siempre responde y entiende tu negocio al detalle? Aquí tienes 4 formas en las que ya estoy ayudando a empresas como la tuya a ahorrar tiempo, mejorar su atención y desbloquear su potencial con IA personalizada."
          className="text-lg text-white/70 max-w-3xl mx-auto"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#0f0f0f] p-6 rounded-3xl border border-white/5 shadow-md shadow-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] group text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-600/10 text-cyan-400 border border-cyan-500/10 shadow-md shadow-cyan-500/10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  <ShinyText text={item.title} />
                </h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}