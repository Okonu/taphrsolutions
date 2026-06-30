import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProgrammes = () => {
    const element = document.getElementById('programmes');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Full-width background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Floating text box — right-aligned, matching thecatalead style */}
      <div className="relative z-10 container mx-auto px-6 flex justify-end">
        <div className="w-full max-w-lg bg-primary/90 backdrop-blur-sm p-10 md:p-14 text-white">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-5">
            Empowering People · Strengthening Institutions
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-5">
            Advancing Learning,
            <br />
            <span className="text-accent">Transforming</span>
            <br />
            Futures
          </h1>
          <p className="text-primary-foreground/80 text-base leading-relaxed mb-8">
            We equip professionals, leaders, and institutions with innovative, technology-enabled solutions that drive measurable performance and sustainable growth across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToProgrammes}
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8 py-3 group"
            >
              Our Solutions <span className="ml-2 group-hover:translate-x-1 transition-transform">›</span>
            </Button>
            <Button
              onClick={scrollToContact}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold uppercase tracking-wide px-8 py-3 transition-all"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
