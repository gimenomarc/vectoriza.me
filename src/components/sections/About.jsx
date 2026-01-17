import { motion } from 'framer-motion';
import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import { FaLinkedin, FaBriefcase, FaRocket, FaBrain, FaCode } from 'react-icons/fa';

export default function About() {
  const experience = [
    {
      role: 'Responsable de Tecnología de la Oficina de IA',
      company: 'CaixaBank Payments & Consumer',
      period: 'Jul 2025 - Actualidad',
      location: 'Barcelona, España',
      description: 'Lidero la implementación de soluciones avanzadas de IA, incluyendo sistemas RAG, agentes autónomos y automatizaciones. Desarrollo e integro IA en aplicaciones corporativas utilizando Vertex AI, Google Cloud y frameworks como LangChain.',
      icon: <FaBrain />,
      logo: '/logo_caixa.png'
    },
    {
      role: 'Gestión de Proyectos TIC & IA',
      company: 'AMB Informació i Serveis SA',
      period: 'Sept 2022 - Jul 2025',
      location: 'Barcelona, España',
      description: 'Coordiné equipos de desarrollo e implementé sistemas de IA, incluyendo chatbots avanzados y soluciones RAG. Desarrollé aplicaciones inteligentes con LangChain y bases de datos vectoriales (Pinecone, FAISS). Gestioné sistemas críticos como el BackOffice de tarjetas de transporte y el sistema ZBE de Barcelona.',
      icon: <FaRocket />,
      logo: '/logo_amb.png'
    },
    {
      role: 'Fundador',
      company: 'Vectoriza.me',
      period: 'May 2024 - Actualidad',
      location: 'Barcelona, España',
      description: 'Fundé y lidero Vectoriza.me, especializándome en IA personalizada para empresas. Desarrollo soluciones completas de agentes autónomos, RAGs y automatizaciones para transformar operaciones empresariales.',
      icon: <FaCode />
    },
    {
      role: 'Desarrollador Automatización de Procesos',
      company: 'AMB Informació i Serveis SA',
      period: 'Ene 2021 - Sept 2022',
      location: 'Barcelona, España',
      description: 'Desarrollé sistemas de automatización que optimizaron procesos internos y mejoraron la eficiencia operativa de la organización.',
      icon: <FaBriefcase />,
      logo: '/logo_amb.png'
    }
  ];


  return (
    <section id="about" className="w-full py-32 px-6 bg-black text-white z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-cyan-500 mb-2 font-mono">
            Sobre mí
          </p>
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GradientText>
              Marc Gimeno: Experto en IA Integral
            </GradientText>
          </motion.h2>
          <motion.p
            className="text-lg text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Como especialista en Inteligencia Artificial, me encargo de implementar soluciones avanzadas de IA, incluyendo sistemas basados en Retrieval-Augmented Generation (RAG), para optimizar procesos y mejorar la experiencia del usuario. Utilizo tanto APIs de OpenAI como soluciones internas, trabajando con grandes volúmenes de datos e integrándolos en bases de datos vectoriales como Pinecone mediante frameworks como LangChain.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/marc-gimeno-b2546020a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
            >
              <FaLinkedin size={20} />
              <span>Conectar en LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Experiencia */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 flex items-center justify-center gap-3">
            <FaBriefcase className="text-cyan-400" />
            <span>Experiencia Profesional</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#0f0f0f] p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {exp.logo ? (
                      <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-3 flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-2xl flex-shrink-0">
                        {exp.icon}
                      </div>
                    )}
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-lg font-bold text-white mb-1">{exp.role}</h4>
                      <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                      <p className="text-sm text-white/60 mb-3">
                        {exp.period} • {exp.location}
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologías */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4">Tecnologías y Herramientas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['LangChain', 'RAG', 'Vertex AI', 'Google Cloud', 'OpenAI', 'Pinecone', 'FAISS', 'React', 'Python', 'Node.js', 'Docker', 'CI/CD'].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-sm text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

