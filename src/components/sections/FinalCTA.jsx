import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from '../reactbits/ShinyText';
import GradientText from '../reactbits/GradientText';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

export default function FinalCTA({ emailjsConfig }) {
  const formRef = useRef();
  const formStartTime = useRef(Date.now()); // Para medir el tiempo entre carga y envío

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    website: '' // Honeypot
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check
    if (form.website) {
      console.warn('SPAM detectado. Formulario bloqueado.');
      return;
    }

    // Tiempo mínimo antes de enviar
    const timeElapsed = (Date.now() - formStartTime.current) / 1000;
    if (timeElapsed < 5) {
      console.warn('Formulario enviado demasiado rápido. Posible spam.');
      return;
    }

    // Validaciones manuales
    const newErrors = {};
    if (!form.name) newErrors.name = 'Por favor, introduce tu nombre';
    if (!form.email) newErrors.email = 'Por favor, introduce tu email';
    if (!form.company) newErrors.company = 'Por favor, indica tu empresa o proyecto';
    if (!form.role) newErrors.role = 'Por favor, indica tu cargo';
    if (!form.message) newErrors.message = 'Por favor, escribe tu mensaje';
    if (form.message && form.message.length < 20) {
      newErrors.message = 'Por favor, describe mejor tu necesidad (mínimo 20 caracteres)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSending(true);
    setShowPopup(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      company: form.company,
      role: form.role,
      message: form.message,
    };

    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    )
    .then((result) => {
      console.log("Resultado OK:", result.text);
      setIsSending(false);
      setTimeout(() => setShowPopup(false), 3000);
      setForm({ name: '', email: '', company: '', role: '', message: '', website: '' });
      formStartTime.current = Date.now(); // Resetea el contador
    }, (error) => {
      console.error("Error en envío:", error);
      setIsSending(false);
      setShowPopup(false);
    });
  };

  return (
    <section id="finalcta" className="snap-start min-h-[100dvh] w-full bg-black text-white z-10 flex items-center justify-center px-6 py-16">
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
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-[#0f0f0f] p-8 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.05)] w-full"
        >
          {/* Honeypot */}
          <div className="hidden">
            <label htmlFor="website">No rellenar este campo</label>
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
            />
          </div>

          {/* Inputs principales */}
          {[
            { label: 'Nombre', name: 'name', type: 'text' },
            { label: 'Email de contacto', name: 'email', type: 'email' },
            { label: 'Nombre de la empresa o proyecto', name: 'company', type: 'text' },
            { label: 'Tu rol o cargo', name: 'role', type: 'text' },
          ].map(({ label, name, type }) => (
            <div className="flex flex-col relative" key={name}>
              <label className="text-sm mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className={`bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border ${errors[name] ? 'border-red-500 animate-pulse' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
              />
              {errors[name] && (
                <span className="absolute top-full mt-1 text-xs text-red-400 animate-pulse">
                  {errors[name]}
                </span>
              )}
            </div>
          ))}

          <div className="flex flex-col md:col-span-2 relative">
            <label className="text-sm mb-1">¿Qué necesitas o qué quieres conseguir con IA?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              className={`bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border ${errors.message ? 'border-red-500 animate-pulse' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            />
            {errors.message && (
              <span className="absolute top-full mt-1 text-xs text-red-400 animate-pulse">
                {errors.message}
              </span>
            )}
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

      {/* Popup de envío */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 right-10 bg-[#0f0f0f] border border-cyan-400/30 shadow-lg shadow-cyan-500/10 text-white px-8 py-6 rounded-3xl z-50 flex items-center gap-4"
          >
            {isSending ? (
              <FaSpinner className="animate-spin text-cyan-400 text-4xl" />
            ) : (
              <FaCheckCircle className="text-cyan-400 text-5xl" />
            )}
            <div>
              <p className="text-base">
                {isSending ? 'Enviando tu mensaje...' : '¡Mensaje enviado con éxito!'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
