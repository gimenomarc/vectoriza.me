import { useState } from 'react';
import { motion } from 'framer-motion';
import ShinyText from '../reactbits/ShinyText';
import GradientText from '../reactbits/GradientText';

export default function FinalCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Gracias por tu mensaje. Te responderé personalmente para valorar cómo aplicar IA en tu empresa.');
  };

  return (
    <section id="finalcta" className="snap-start h-screen w-full bg-black text-white z-10 flex items-center justify-center px-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientText>
            Empieza a trabajar con IA
          </GradientText>
        </motion.h2>

        <ShinyText
          text="Cuéntame qué hace tu empresa, qué problemas quieres resolver o qué ideas tienes, y te propondré cómo podríamos aplicar inteligencia artificial a medida."
          className="text-lg md:text-xl max-w-2xl mx-auto"
        />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-[#0f0f0f] p-8 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.05)] w-full"
        >
          {[
            { label: 'Nombre', name: 'name', type: 'text' },
            { label: 'Email de contacto', name: 'email', type: 'email' },
            { label: 'Nombre de la empresa o proyecto', name: 'company', type: 'text' },
            { label: 'Tu rol o cargo', name: 'role', type: 'text' },
          ].map(({ label, name, type }) => (
            <div className="flex flex-col" key={name}>
              <label className="text-sm mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
          ))}

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm mb-1">¿Qué necesitas o qué quieres conseguir con IA?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Describe brevemente tu negocio, procesos que quieras mejorar, ideas que tengas o retos que quieras resolver."
              className="bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="relative inline-block text-white text-lg font-semibold px-8 py-3 rounded-full border-2 border-cyan-500 bg-black transition duration-300 hover:bg-cyan-500/10 cursor-pointer shadow-[0_0_40px_rgba(0,255,255,0.15)]"
            >
              Enviar solicitud de valoración IA
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
