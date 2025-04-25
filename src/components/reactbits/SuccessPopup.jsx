import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';

export default function SuccessPopup({ isSending }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-10 right-10 bg-[#0f0f0f] border border-cyan-400/30 shadow-lg shadow-cyan-500/10 text-white px-8 py-6 rounded-3xl z-50 flex items-center gap-4"
    >
      {isSending ? (
        <FaSpinner className="animate-spin text-cyan-400 text-3xl" />
      ) : (
        <FaCheckCircle className="text-cyan-400 text-4xl" />
      )}
      <div>
        <p className="text-base">
          {isSending ? 'Enviando tu mensaje...' : '¡Mensaje enviado con éxito!'}
        </p>
      </div>
    </motion.div>
  );
}
