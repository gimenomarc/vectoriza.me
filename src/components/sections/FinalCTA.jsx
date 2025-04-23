import { useState } from 'react';
import { motion } from 'framer-motion';
import ShinyText from '../reactbits/ShinyText';
import GradientText from '../reactbits/GradientText';

export default function FinalCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    'Asistente IA personalizado',
    'Consultoría IA / RAG',
    'Integración Web',
    'Desarrollo a medida'
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Mensaje enviado. ¡Te contactaremos pronto!');
  };

  return (
    <section className="relative w-full min-h-screen py-36 px-6 from-black via-black to-[#0f0f23] text-white z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientText>
            Empieza a trabajar con IA real
          </GradientText>
        </motion.h2>

        <ShinyText
          text="Agenda una llamada personalizada y descubre cómo podemos transformar tu negocio con inteligencia artificial."
          className="text-lg md:text-xl max-w-2xl mx-auto mb-14"
        />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-[#0f0f0f] p-8 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.05)]"
        >
          {[
            { label: 'Nombre', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Fecha', name: 'date', type: 'date' },
            { label: 'Hora', name: 'time', type: 'time' },
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
            <label className="text-sm mb-1">¿Qué servicio te interesa?</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            >
              <option value="">Selecciona un servicio</option>
              {services.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm mb-1">Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Cuéntame más sobre tu proyecto, tus retos o ideas..."
              className="bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="relative inline-block text-white text-lg font-semibold px-8 py-3 rounded-full border-2 border-cyan-500 bg-black transition duration-300 hover:bg-cyan-500/10 cursor-pointer shadow-[0_0_40px_rgba(0,255,255,0.15)]"
            >
              Reservar cita gratuita
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
