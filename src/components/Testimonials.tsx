const testimonials = [
  {
    quote: "CHURD Africa transformed how our leadership team thinks and operates. The programme was practical, deeply relevant, and immediately applicable to our institutional context.",
    name: "Director General",
    org: "Government Ministry",
  },
  {
    quote: "The quality of facilitation and depth of content exceeded our expectations. Our team left with tools they use every single day. A truly impactful investment.",
    name: "Head of Human Resources",
    org: "Financial Institution",
  },
  {
    quote: "What sets CHURD Africa apart is how they tailor every programme to your specific needs. They don't just train — they partner with you for real transformation.",
    name: "CEO",
    org: "Development Organization",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50">
      {/* Header */}
      <div className="py-16 px-6 text-center border-b border-gray-200">
        <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">What Our Partners Say</p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Trusted by Leaders Across Africa</h2>
        <div className="w-16 h-1 bg-accent mx-auto"></div>
      </div>

      {/* Testimonial cards */}
      <div className="grid md:grid-cols-3 divide-x divide-gray-200">
        {testimonials.map((t, i) => (
          <div key={i} className="group p-12 bg-white hover:bg-primary transition-all duration-300">
            <div className="text-7xl text-accent/20 group-hover:text-white/20 font-serif leading-none mb-6 transition-colors">"</div>
            <p className="text-muted-foreground group-hover:text-white/80 leading-relaxed italic mb-10 text-base transition-colors">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100 group-hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg">{t.name[0]}</span>
              </div>
              <div>
                <p className="font-bold text-foreground group-hover:text-white text-sm transition-colors">{t.name}</p>
                <p className="text-xs text-muted-foreground group-hover:text-white/60 transition-colors">{t.org}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
