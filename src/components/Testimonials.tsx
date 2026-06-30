import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "CHURD Africa transformed how our leadership team thinks and operates. The programme was practical, deeply relevant, and immediately applicable to our institutional context.",
    name: "Director General",
    org: "Government Ministry",
    initial: "D",
  },
  {
    quote: "The quality of facilitation and the depth of content exceeded our expectations. Our team left with tools they use every single day. A truly impactful investment.",
    name: "Head of Human Resources",
    org: "Financial Institution",
    initial: "H",
  },
  {
    quote: "What sets CHURD Africa apart is how they tailor every programme to your specific needs. They don't just train — they partner with you for real transformation.",
    name: "CEO",
    org: "Development Organization",
    initial: "C",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">What Our Partners Say</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trusted by Leaders Across Africa</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-none shadow-elevated hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col h-full">
                  <span className="text-5xl text-accent/30 font-serif leading-none mb-4">"</span>
                  <p className="text-muted-foreground leading-relaxed flex-grow italic mb-6">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-11 h-11 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-base">{t.initial}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.org}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
