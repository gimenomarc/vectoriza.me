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
    serviceType: '',
    budget: '',
    urgency: '',
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
    if (!form.serviceType) newErrors.serviceType = 'Por favor, selecciona el tipo de servicio';
    if (!form.message) newErrors.message = 'Por favor, describe tu necesidad o proyecto';
    if (form.message && form.message.length < 30) {
      newErrors.message = 'Por favor, describe mejor tu necesidad (mínimo 30 caracteres)';
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
      serviceType: form.serviceType,
      budget: form.budget || 'No especificado',
      urgency: form.urgency || 'No especificado',
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
      setForm({ name: '', email: '', company: '', role: '', serviceType: '', budget: '', urgency: '', message: '', website: '' });
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
          ¿Listo para transformar tu empresa con IA?
          </GradientText>
        </motion.h2>

        <ShinyText
          text="Cuéntame qué necesitas y te envío una propuesta completa en 24-48h con soluciones específicas para tu caso. Sin compromiso, solo para entender cómo puedo ayudarte."
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
          <div className="flex flex-col relative">
            <label className="text-sm mb-1">Nombre completo *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border ${errors.name ? 'border-red-500 animate-pulse' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            />
            {errors.name && (
              <span className="absolute top-full mt-1 text-xs text-red-400 animate-pulse">
                {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm mb-1">Email de contacto *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border ${errors.email ? 'border-red-500 animate-pulse' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            />
            {errors.email && (
              <span className="absolute top-full mt-1 text-xs text-red-400 animate-pulse">
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm mb-1">Empresa o proyecto *</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className={`bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border ${errors.company ? 'border-red-500 animate-pulse' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            />
            {errors.company && (
              <span className="absolute top-full mt-1 text-xs text-red-400 animate-pulse">
                {errors.company}
              </span>
            )}
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm mb-1">Tu rol o cargo *</label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Ej: CEO, CTO, Director de Innovación..."
              className={`bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border ${errors.role ? 'border-red-500 animate-pulse' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            />
            {errors.role && (
              <span className="absolute top-full mt-1 text-xs text-red-400 animate-pulse">
                {errors.role}
              </span>
            )}
          </div>

          <div className="flex flex-col relative md:col-span-2">
            <label className="text-sm mb-1">¿Qué servicio necesitas? *</label>
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              className={`bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border ${errors.serviceType ? 'border-red-500 animate-pulse' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            >
              <option value="">Selecciona un servicio</option>
              <option value="agentes-ia">Agentes de IA autónomos</option>
              <option value="rags">Sistemas RAG (Retrieval-Augmented Generation)</option>
              <option value="flujos-agenticos">Flujos agénticos y automatización</option>
              <option value="insta-web">Insta Web (webs personalizadas ultra-rápidas)</option>
              <option value="videos-imagenes">Videos e imágenes con IA</option>
              <option value="formaciones">Formaciones de implementación de IA</option>
              <option value="cultura-ia">Cultura IA organizacional</option>
              <option value="gobierno-ia">Gobierno IA e IA Responsable</option>
              <option value="ia-act">Cumplimiento IA ACT (UE)</option>
              <option value="consultoria">Consultoría estratégica IA</option>
              <option value="multiple">Múltiples servicios</option>
              <option value="otro">Otro</option>
            </select>
            {errors.serviceType && (
              <span className="absolute top-full mt-1 text-xs text-red-400 animate-pulse">
                {errors.serviceType}
              </span>
            )}
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm mb-1">Presupuesto aproximado</label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Selecciona un rango</option>
              <option value="menos-5k">Menos de 5.000€</option>
              <option value="5k-15k">5.000€ - 15.000€</option>
              <option value="15k-30k">15.000€ - 30.000€</option>
              <option value="30k-50k">30.000€ - 50.000€</option>
              <option value="mas-50k">Más de 50.000€</option>
              <option value="a-definir">A definir según propuesta</option>
            </select>
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm mb-1">Urgencia / Plazo</label>
            <select
              name="urgency"
              value={form.urgency}
              onChange={handleChange}
              className="bg-[#1a1a1a] text-white rounded-lg px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">Selecciona un plazo</option>
              <option value="urgente">Urgente (1-2 semanas)</option>
              <option value="1-mes">1 mes</option>
              <option value="2-3-meses">2-3 meses</option>
              <option value="mas-3-meses">Más de 3 meses</option>
              <option value="explorando">Solo explorando opciones</option>
            </select>
          </div>

          <div className="flex flex-col md:col-span-2 relative">
            <label className="text-sm mb-1">Describe tu necesidad o proyecto *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Cuéntame qué problema quieres resolver, qué proceso quieres automatizar, qué objetivo tienes con la IA, o cualquier detalle relevante de tu proyecto..."
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
              className="relative inline-block text-white text-lg font-semibold px-10 py-4 rounded-full border-2 border-cyan-500 bg-black transition duration-300 hover:bg-cyan-500/10 cursor-pointer shadow-[0_0_40px_rgba(0,255,255,0.15)] hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]"
            >
              Solicitar propuesta personalizada
            </button>
            <p className="text-xs text-white/50 mt-3">
              Te responderé en 24-48 horas con una propuesta adaptada a tu caso
            </p>
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
