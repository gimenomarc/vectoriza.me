import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";

const benefits = [
  {
    title: "Chatbots con tus propios documentos",
    text: "Sube archivos como PDFs, webs o bases de datos y crea un asistente inteligente que entiende tu contenido y responde con precisión. Sin saber programar, sin complicaciones."
  },
  {
    title: "Respuestas que entienden tu negocio",
    text: "No es solo una búsqueda. Tu chatbot entiende el contexto, da respuestas claras y útiles incluso ante preguntas complejas. Como si hablara un experto de tu equipo."
  },
  {
    title: "Conversaciones humanas y naturales",
    text: "Tu asistente puede hablar de forma profesional o cercana, seguir el hilo de una conversación y adaptarse a tu forma de comunicar. Tú marcas el tono."
  },
  {
    title: "Actualiza y mejora en segundos",
    text: "¿Cambiaste una respuesta o añadiste un nuevo documento? Tu asistente se actualiza al momento. Mejora continua sin depender de desarrolladores."
  },
  {
    title: "Privacidad y control total",
    text: "Todo funciona en tu entorno. Nadie accede a tus datos. Tú decides qué aprende, cómo responde y cuándo se actualiza. Transparente y seguro."
  },
  {
    title: "Úsalo en cualquier parte de tu empresa",
    text: "Atención al cliente, soporte técnico, formación interna o ventas. Vectoriza.me adapta la inteligencia artificial a lo que tu empresa realmente necesita."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative w-full min-h-screen bg-black text-white py-40 px-6 z-10 overflow-hidden">
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
