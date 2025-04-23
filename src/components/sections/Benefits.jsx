import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";

const benefits = [
  {
    title: "Carga sin fricción",
    text: "Sube PDFs, webs, notas o bases de datos: Vectoriza.me lo entiende todo. Limpieza automática, estructura inteligente, y listo para entrenar IA sin necesidad de pasos técnicos."
  },
  {
    title: "Entendimiento real del contexto",
    text: "No es una búsqueda. Es una comprensión profunda. Vectoriza.me interpreta preguntas complejas y genera respuestas con lógica, precisión y memoria conversacional."
  },
  {
    title: "Conversaciones naturales y adaptables",
    text: "Sigue hilos, detecta matices, responde con tono profesional o informal. La IA se adapta a tu estilo de comunicación, como un experto que conoce tu negocio."
  },
  {
    title: "Iteración y mejora continua",
    text: "Corrige, entrena y mejora al instante. Añade nuevas fuentes, cambia respuestas o amplía conocimientos sin esperar a desarrolladores. Evolución sin fricción."
  },
  {
    title: "Privacidad, trazabilidad y control total",
    text: "Todo el conocimiento se procesa en tu entorno. Tienes control sobre lo que se aprende, lo que se responde y cuándo se actualiza. 100% configurable."
  },
  {
    title: "Aplicaciones sin límites",
    text: "Desde atención al cliente hasta inteligencia de negocio, onboarding o asistencia legal. Vectoriza.me crea una IA útil, escalable y precisa para cualquier industria."
  }
];

export default function Benefits() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-40 px-6 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtítulo visual tipo etiqueta */}
        <p className="text-sm uppercase tracking-widest text-cyan-500 mb-4 font-mono">
          Ventajas clave
        </p>

        {/* Título visualmente sólido pero no llamativo como GradientText */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tu conocimiento, potenciado por <span className="text-cyan-400">IA</span>
        </motion.h2>
        
        <motion.p
          className="text-white/70 text-lg max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          No es una IA más. Es tu motor de conocimiento: entrenado con tus datos, controlado por ti y preparado para evolucionar con tu negocio.
        </motion.p>

        <div className="relative grid md:grid-cols-2 gap-12 mt-16">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-gradient-to-br from-[#0a0a0a] to-[#121212] rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.07)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition-all duration-500 hover:scale-[1.03] cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
