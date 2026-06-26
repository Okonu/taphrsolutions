import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProgrammes = () => {
    const element = document.getElementById('programmes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(248,56%,29%)]/92 to-[hsl(25,90%,50%)]/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 mb-6">
              <span className="text-sm font-medium tracking-wide">Empowering People. Strengthening Institutions. Transforming Africa.</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Advancing Learning,
            <br />
            <span className="text-[hsl(25,90%,72%)]">Transforming Futures</span>
          </h1>

          <div className="w-24 h-1 bg-white/60 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg md:text-xl mb-4 max-w-4xl mx-auto leading-relaxed opacity-90">
            At CHURD Africa, we believe that learning is the cornerstone of personal growth, organizational excellence, and sustainable development.
          </p>
          <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed opacity-80">
            Through transformative learning, leadership development, and strategic advisory services, we equip professionals, leaders, and institutions with the tools needed to succeed in an evolving world.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Button
              size="xl"
              onClick={scrollToProgrammes}
              className="min-w-[220px] bg-accent hover:bg-accent/90 text-white font-semibold group shadow-button"
            >
              <span className="mr-2">Explore Programmes</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button
              size="xl"
              onClick={scrollToContact}
              className="min-w-[220px] bg-white/10 hover:bg-white/20 border-2 border-white text-white font-semibold backdrop-blur-sm"
            >
              Join Our Learning Community
            </Button>
          </div>

          <div className="flex justify-center items-center gap-10 text-sm opacity-85">
            <div className="text-center">
              <p className="text-2xl font-bold text-[hsl(25,90%,72%)]">Governments</p>
              <p className="text-white/80 text-xs mt-1">& Public Institutions</p>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[hsl(25,90%,72%)]">Corporations</p>
              <p className="text-white/80 text-xs mt-1">& Private Sector</p>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[hsl(25,90%,72%)]">Development</p>
              <p className="text-white/80 text-xs mt-1">Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
