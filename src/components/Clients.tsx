const partners = [
  { icon: "🏛️", title: "Governments & Public Institutions", description: "Ministries, departments, agencies, and public sector bodies across Africa" },
  { icon: "🏢", title: "Corporations", description: "Large corporations and SMEs across diverse industries and sectors" },
  { icon: "🌍", title: "Development Organizations", description: "NGOs, international development agencies, and foundations" },
  { icon: "🎓", title: "Education & Research", description: "Universities, training institutes, and research organizations" },
  { icon: "👤", title: "Individual Professionals", description: "Leaders and professionals seeking personal and career growth" },
];

const Clients = () => {
  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Who We Serve</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Partners</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We partner with governments, corporations, and development organizations committed to building resilient institutions and capable leaders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {partners.map((p, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <h3 className="font-bold text-foreground text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Statement */}
          <div className="bg-primary rounded-2xl p-12 text-white text-center">
            <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-4">Our Promise</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Creating Measurable Value and Lasting Impact</h3>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6"></div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto text-lg">
              Whether supporting public institutions, private sector organizations, development agencies, or individual professionals — our focus remains the same: creating measurable value and lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
