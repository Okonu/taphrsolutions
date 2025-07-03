import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium">🚀 Transforming Organizations Across Africa</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Tap HR Solutions
          </h1>
          
          <div className="relative mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl mb-2 leading-relaxed font-light">
              "Empowering People and
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-8 leading-relaxed font-light">
              Elevating Performance"
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Leading training and consultancy firm specializing in human capital development, 
            organizational effectiveness, and strategic workforce solutions across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              variant="accent" 
              size="xl"
              onClick={scrollToServices}
              className="min-w-[220px] group"
            >
              <span className="mr-2">Discover Our Services</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToContact}
              className="min-w-[220px] border-2 border-primary-foreground text-blue-500"
            >
              <span className="mr-2">Start Your Journey</span>
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm opacity-80">
            <div className="text-center">
              <p className="font-semibold">500+</p>
              <p>Clients Served</p>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <p className="font-semibold">15+</p>
              <p>Years Experience</p>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <p className="font-semibold">100%</p>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;