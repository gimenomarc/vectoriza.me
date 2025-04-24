import ScrollVelocity from "../reactbits/ScrollVelocity";

export default function ScrollBanner() {
  return (
    <section className="w-full bg-black py-10 border-t border-white/10">
      <ScrollVelocity
        texts={['Automatización Inteligente', 'Productividad con IA', 'Consultoría Técnica', 'Vectoriza.me']}
        velocity={100}
        className="text-white/10 hover:text-cyan-400 transition-colors duration-300"
      />
    </section>
  );
}
