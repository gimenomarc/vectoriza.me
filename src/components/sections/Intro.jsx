import Hyperspeed from '../reactbits/Hyperspeed.jsx';
import '../reactbits/Hyperspeed.css';

export default function Intro() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Fondo de neones */}
      <Hyperspeed />

      {/* Título central */}
      <h1 className="text-white text-5xl md:text-7xl font-cyber font-extrabold z-10">
        vectoriza.me
      </h1>

      {/* Gradiente inferior para transicionar a negro */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
