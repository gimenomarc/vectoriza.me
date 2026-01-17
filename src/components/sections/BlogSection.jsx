import { motion } from 'framer-motion';
import { HiArrowRight, HiBookOpen } from 'react-icons/hi';

const featuredPosts = [
  {
    title: "¿Qué es un RAG? La tecnología que está revolucionando la IA empresarial",
    slug: "que-es-un-rag",
    summary: "Guía completa 2025: qué es RAG, cómo funciona, casos de uso reales y por qué está transformando empresas.",
    category: "Tecnología RAG",
  },
  {
    title: "Cómo ahorrar 20+ horas semanales automatizando procesos con IA",
    slug: "como-automatizar-procesos-con-ia",
    summary: "Guía completa con casos de éxito reales, ROI calculado y ejemplos prácticos. Automatiza procesos empresariales.",
    category: "Automatización",
  },
  {
    title: "Casos de éxito reales: Cómo empresas están usando RAG para transformar su negocio",
    slug: "casos-exito-rag",
    summary: "5 casos de éxito reales con métricas verificables. Descubre cómo empresas están ahorrando miles de euros.",
    category: "Casos de éxito",
  },
  {
    title: "AI-First: De AI-Enhanced a IA Nativa",
    slug: "ai-first-ia-nativa",
    summary: "Descubre por qué las empresas líderes están reconstruyendo su arquitectura para que la IA sea el motor principal.",
    category: "Tendencias IA",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="w-full py-32 px-6 bg-gradient-to-b from-black via-black to-black/95 text-white relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
            <HiBookOpen className="w-4 h-4" />
            <span>Blog de IA Empresarial</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Aprende IA con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              contenido de valor
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Guías prácticas, casos de éxito reales, tendencias y mejores prácticas para implementar IA en tu empresa. 
            <span className="text-cyan-400 font-semibold"> Todo basado en experiencia real.</span>
          </p>

          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-full shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all transform hover:scale-105"
          >
            Ver todos los artículos
            <HiArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <HiArrowRight className="w-5 h-5 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-white/60 text-sm md:text-base leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2">12+</div>
            <div className="text-white/60 text-sm">Artículos publicados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2">100%</div>
            <div className="text-white/60 text-sm">Basados en casos reales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2">2025</div>
            <div className="text-white/60 text-sm">Tendencias actuales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2">0€</div>
            <div className="text-white/60 text-sm">Contenido gratuito</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

