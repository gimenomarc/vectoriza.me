import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import { FaBrain, FaCode, FaBolt, FaComments, FaSyncAlt, FaFileUpload, FaVideo, FaImage, FaGraduationCap, FaUsers, FaShieldAlt, FaBalanceScale, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaBrain />,
    title: 'Agentes de IA autónomos',
    desc: 'Creo agentes inteligentes que trabajan 24/7, toman decisiones autónomas, ejecutan tareas complejas y aprenden de tus procesos. No son chatbots simples: son sistemas autónomos que transforman operaciones completas.'
  },
  {
    icon: <FaRocket />,
    title: 'Sistemas RAG (Retrieval-Augmented Generation)',
    desc: 'Implemento RAGs que combinan modelos generativos con tus documentos, bases de datos y conocimiento interno. Respuestas precisas, sin alucinaciones, basadas en información real y actualizada de tu empresa.'
  },
  {
    icon: <FaBolt />,
    title: 'Flujos agénticos complejos',
    desc: 'Diseño flujos donde múltiples agentes colaboran, coordinan sistemas, ejecutan workflows completos y toman decisiones en cadena. Automatización de procesos end-to-end sin intervención humana.'
  },
  {
    icon: <FaCode />,
    title: 'Insta Web: Webs personalizadas ultra-rápidas',
    desc: 'Desarrollo sitios web completamente personalizados usando IA: diseño único y profesional, contenido generado inteligentemente, optimización SEO automática, integración de agentes conversacionales. Webs perfectas, listas en tiempo récord.'
  },
  {
    icon: <FaVideo />,
    title: 'Videos publicitarios con IA',
    desc: 'Creo videos promocionales, explicativos y publicitarios usando inteligencia artificial: generación de guiones, voces sintéticas, animaciones, edición automática. Contenido profesional que vende, creado con IA.'
  },
  {
    icon: <FaImage />,
    title: 'Imágenes perfectas con IA',
    desc: 'Genero imágenes profesionales para marketing, productos, presentaciones y contenido visual usando IA avanzada. Logos, ilustraciones, fotos de producto, gráficos personalizados. Calidad profesional, resultados inmediatos.'
  },
  {
    icon: <FaGraduationCap />,
    title: 'Formaciones de implementación de IA',
    desc: 'Capacito a tu equipo en implementación práctica de IA: desde conceptos hasta desarrollo real. Formaciones personalizadas, hands-on, para que tu empresa domine la IA internamente.'
  },
  {
    icon: <FaUsers />,
    title: 'Cultura IA organizacional',
    desc: 'Ayudo a construir cultura IA en tu empresa: cambio organizacional, adopción de herramientas, mentalidad data-driven, equipos preparados para la era de la IA. Transformación cultural completa.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Gobierno IA y IA Responsable',
    desc: 'Implemento frameworks de gobierno IA: políticas, ética, transparencia, auditorías, control de sesgos, privacidad. Tu empresa usa IA de forma responsable, ética y cumpliendo regulaciones.'
  },
  {
    icon: <FaBalanceScale />,
    title: 'Cumplimiento IA ACT (UE)',
    desc: 'Te ayudo a cumplir con el Artificial Intelligence Act europeo: clasificación de sistemas, evaluación de riesgos, documentación, transparencia, supervisión humana. Implementación completa y certificación.'
  },
  {
    icon: <FaSyncAlt />,
    title: 'Integraciones y automatización completa',
    desc: 'Conecto todo: agentes con CRMs, RAGs con bases de datos, flujos con APIs, sistemas legacy con IA moderna. Integración completa sin cambiar tu infraestructura existente.'
  },
  {
    icon: <FaComments />,
    title: 'Consultoría estratégica IA',
    desc: 'Estrategia completa de IA para tu empresa: diagnóstico, roadmap, arquitectura, selección de tecnologías, ROI, métricas. Te guío desde la idea hasta la implementación exitosa.'
  }
];

export default function Features() {
  return (
    <section id="features" className="w-full py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-16">
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-500 mb-2 font-mono">
            Servicios completos de IA
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
          Todo lo que necesitas para dominar
          <span className="text-cyan-400"> la Inteligencia Artificial</span>
          </h2>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mt-4">
            No me limito a una tecnología: ofrezco soluciones integrales de IA. Desde implementación técnica (agentes, RAGs, flujos) hasta contenido multimedia, formaciones, cultura organizacional, gobierno IA y cumplimiento normativo. Todo en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.015] group shadow-md shadow-cyan-500/5 flex flex-col items-center text-center"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_12px_rgba(0,255,255,0.1)]">
                {icon}
              </div>
              <h3 className="text-base font-semibold mb-2 text-white">
                <ShinyText text={title} />
              </h3>
              <p className="text-sm text-white/60 leading-snug">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}