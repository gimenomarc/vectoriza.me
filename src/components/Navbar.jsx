export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 px-8 py-4 bg-white/5 backdrop-blur-xl shadow shadow-white/5 flex justify-between items-center rounded-b-2xl">
      <h1 className="text-xl font-bold text-white tracking-wide">vectoriza.me</h1>
      <div className="space-x-6 text-white/90 text-sm font-medium">
        <a href="#features" className="hover:text-cyan-400 transition">Características</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contacto</a>
      </div>
    </nav>
  );
}
