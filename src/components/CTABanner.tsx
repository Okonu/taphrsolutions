import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-accent">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white">
            <p className="font-bold uppercase tracking-widest text-xs text-white/70 mb-3">Take the Next Step</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Ready to Strengthen<br />Your Institution?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Button
              onClick={scrollToContact}
              className="bg-white text-accent hover:bg-gray-100 font-black uppercase tracking-wide px-10 py-4 text-sm"
            >
              Partner With Us ›
            </Button>
            <Button
              onClick={() => {
                const el = document.getElementById('programmes');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-black uppercase tracking-wide px-10 py-4 text-sm"
            >
              Explore Programmes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
