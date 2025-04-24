// Esta es la versión corregida y robusta del componente ScrollIndicator
// para que funcione bien incluso con componentes client:only / client:visible

import { useEffect, useState } from 'react';

const sections = [
  { id: 'intro', label: 'Inicio' },
  { id: 'hero', label: 'Qué hago' },
  { id: 'features', label: 'Soluciones IA' },
  { id: 'benefits', label: 'Antes y después' },
  { id: 'usecases', label: 'Casos de uso' },
  { id: 'howitworks', label: 'Proceso' },
  { id: 'finalcta', label: 'Contacto' }
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // más justo y preciso que 0.6 para scroll snap
      }
    );

    const observeSections = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.observe(el);
      });
    };

    // Esperamos al render completo para asegurar que todos los componentes montan
    const timeout = setTimeout(observeSections, 300);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
            activeSection === id
              ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.6)] scale-125'
              : 'bg-white/10 border-white/20 hover:bg-cyan-400/30'
          }`}
          title={label}
        />
      ))}
    </div>
  );
}