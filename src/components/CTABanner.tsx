import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-[hsl(248,56%,20%)]">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Ready to Strengthen Your Institution?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Partner with CHURD Africa today and unlock the human potential that drives lasting change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="xl"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-button min-w-[200px]"
          >
            Partner With Us
          </Button>
          <Button
            size="xl"
            onClick={() => {
              const el = document.getElementById('programmes');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-semibold min-w-[200px]"
          >
            Explore Programmes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
