import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-32 px-6 bg-black text-white z-10">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-24">
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-500 mb-2 font-mono">
            El impacto real de la IA integral
          </p>

          <motion.h2
            className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Antes vs Después: <br />
            <span className="text-cyan-400">IA transformando tu empresa completa</span>
          </motion.h2>

          <motion.p
            className="text-white/70 text-lg max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            La IA no es solo automatización: transforma operaciones, contenido, formación, cultura y cumplimiento. Desde agentes que trabajan 24/7 hasta videos generados con IA, formaciones que capacitan equipos y frameworks de gobierno que aseguran uso responsable. Esto es el impacto real.
          </motion.p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-20 max-w-5xl mx-auto items-center">
          {/* ANTES */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.05)]"
          >
            <h3 className="text-cyan-500 text-xl font-semibold mb-6 tracking-tight">
              Antes: Sin IA, limitaciones en todos los frentes
            </h3>
            <div className="space-y-5 text-white/60 text-sm leading-relaxed">
              <p>Operaciones manuales, costosas y lentas.</p>
              <p>Contenido multimedia caro y lento de producir.</p>
              <p>Equipos sin formación en IA, dependientes de externos.</p>
              <p>Sin cultura IA: resistencia al cambio, miedo a la tecnología.</p>
              <p>Riesgos legales: sin gobierno IA, sin cumplimiento normativo.</p>
              <p>Información dispersa, conocimiento no consultable.</p>
            </div>
          </motion.div>

          {/* FLECHA NEON */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* DESPUÉS */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0d0d0d] p-10 rounded-3xl border border-cyan-500/10 shadow-[0_0_60px_rgba(0,255,255,0.08)] hover:shadow-[0_0_100px_rgba(0,255,255,0.25)] transition-all duration-500"
          >
            <h3 className="text-cyan-400 text-xl font-semibold mb-6 tracking-tight">
              Después: IA integral transformando todo
            </h3>
            <div className="space-y-5 text-white/90 text-sm leading-relaxed">
              <p>Agentes y RAGs que automatizan operaciones y responden con precisión.</p>
              <p>Videos e imágenes generados con IA: contenido profesional en horas, no semanas.</p>
              <p>Equipos formados: tu empresa domina la IA internamente.</p>
              <p>Cultura IA establecida: adopción natural, innovación constante.</p>
              <p>Gobierno IA + cumplimiento: uso responsable, ético y legal garantizado.</p>
              <p>Conocimiento consultable: RAGs que responden preguntas de toda tu empresa.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}