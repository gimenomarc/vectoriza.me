import { useState } from 'react';
import { motion } from 'framer-motion';
import ShinyText from '../reactbits/ShinyText';

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
    <section className="relative w-full min-h-screen py-32 px-6 bg-black text-white z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¿Preparado para transformar <span className="text-cyan-400">tu negocio</span> con IA?
        </motion.h2>

        <ShinyText
          text="Agenda una llamada y da el primer paso"
          className="text-xl mb-12"
        />

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-[#111] p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.05)]">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-[#222] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#222] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm mb-1">¿Qué servicio te interesa?</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-[#222] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            >
              <option value="">Selecciona un servicio</option>
              {services.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Fecha</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="bg-[#222] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Hora</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="bg-[#222] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm mb-1">Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Cuéntame más sobre tu proyecto o necesidades..."
              className="bg-[#222] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 transition-all text-white text-lg rounded-full font-semibold px-8 py-3 shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            >
              Reservar cita gratuita
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}