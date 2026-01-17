import { FaComments, FaUsersCog, FaChartLine, FaMobileAlt, FaDatabase, FaVideo, FaImage, FaGraduationCap, FaShieldAlt, FaBolt, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";
import GradientText from "../reactbits/GradientText";
import ShinyText from "../reactbits/ShinyText";

const cases = [
  {
    icon: <FaComments size={24} />,
    title: "RAG + Agente: Soporte técnico inteligente",
    desc: "Sistema RAG que consulta documentación técnica, manuales y bases de conocimiento, combinado con agente que resuelve problemas complejos. Respuestas precisas basadas en información real, sin errores. Reducción del 80% en tickets repetitivos."
  },
  {
    icon: <FaDatabase size={24} />,
    title: "RAG empresarial: Tu conocimiento consultable",
    desc: "Transformo tus documentos, procesos internos y bases de datos en un sistema RAG consultable. Tu equipo pregunta en lenguaje natural y obtiene respuestas precisas de toda la información de la empresa. Onboarding instantáneo, decisiones informadas."
  },
  {
    icon: <FaBolt size={24} />,
    title: "Flujo agéntico: Automatización end-to-end",
    desc: "Flujo donde múltiples agentes colaboran: uno recibe pedidos, otro verifica inventario, otro gestiona pagos, otro coordina envíos. Proceso completo automatizado sin intervención humana. De días a minutos."
  },
  {
    icon: <FaVideo size={24} />,
    title: "Videos publicitarios con IA: Marketing escalable",
    desc: "Genero videos promocionales completos con IA: guiones optimizados, voces sintéticas personalizadas, animaciones, edición automática. Campañas de video profesionales creadas en horas, no semanas. Costos reducidos en un 90%."
  },
  {
    icon: <FaImage size={24} />,
    title: "Imágenes IA: Contenido visual ilimitado",
    desc: "Genero imágenes profesionales para catálogos, redes sociales, presentaciones: productos, ilustraciones, gráficos personalizados. Sin sesiones fotográficas costosas, sin esperar diseñadores. Contenido visual de calidad profesional al instante."
  },
  {
    icon: <FaGraduationCap size={24} />,
    title: "Formación IA: Tu equipo como expertos",
    desc: "Capacito a tu equipo en implementación práctica de IA: desde conceptos hasta desarrollo real de agentes y RAGs. Formaciones hands-on, personalizadas a tu sector. Tu empresa domina la IA internamente, sin depender de externos."
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Gobierno IA + IA Responsable: Implementación ética",
    desc: "Implemento frameworks completos de gobierno IA: políticas éticas, control de sesgos, transparencia, auditorías, privacidad. Tu empresa usa IA de forma responsable, cumpliendo regulaciones y ganando confianza de clientes y stakeholders."
  },
  {
    icon: <FaBalanceScale size={24} />,
    title: "Cumplimiento IA ACT: Listo para Europa",
    desc: "Te preparo para el Artificial Intelligence Act: clasificación de sistemas de riesgo, documentación técnica, evaluación de conformidad, supervisión humana. Cumplimiento completo con la regulación europea de IA."
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
          Qué puedes solucionar con IA: <span className="text-cyan-400">Casos reales</span>
        </motion.h2>

        <ShinyText
          text="La IA no es solo una tecnología: es la solución a problemas reales de negocio. Aquí tienes ejemplos concretos de cómo implemento IA para resolver desafíos empresariales. Desde automatización técnica hasta contenido multimedia, formaciones y cumplimiento normativo. Todo con resultados medibles."
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