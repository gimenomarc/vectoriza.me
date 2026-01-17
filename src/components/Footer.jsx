import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="text-center text-sm py-6 text-gray-500 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-3">
            &copy; {new Date().getFullYear()} vectoriza.me — Creado por{' '}
            <a
              href="https://www.linkedin.com/in/marc-gimeno-b2546020a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 inline-flex items-center gap-1"
            >
              <span>Marc Gimeno</span>
              <FaLinkedin size={14} />
            </a>
          </p>
          <p className="text-white/40 text-xs">
            Made with ❤️ usando IA
          </p>
        </div>
      </footer>
    );
  }
  