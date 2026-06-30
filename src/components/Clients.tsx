const partners = [
  { icon: "🏛️", title: "Governments & Public Institutions", description: "Ministries, departments, agencies, and public sector bodies across Africa" },
  { icon: "🏢", title: "Corporations", description: "Large corporations and SMEs across diverse industries and sectors" },
  { icon: "🌍", title: "Development Organizations", description: "NGOs, international development agencies, and foundations" },
  { icon: "🎓", title: "Education & Research", description: "Universities, training institutes, and research organizations" },
  { icon: "👤", title: "Individual Professionals", description: "Leaders and professionals seeking personal and career growth" },
];

const Clients = () => {
  return (
    <section id="partners" className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 px-6 text-center border-b border-gray-200">
        <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Who We Serve</p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Our Partners</h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          We partner with governments, corporations, and development organizations committed to building resilient institutions and capable leaders.
        </p>
      </div>

      {/* Partner grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-x divide-y divide-gray-200 border-b border-gray-200">
        {partners.map((p, i) => (
          <div
            key={i}
            className="group p-10 text-center hover:bg-primary transition-all duration-300 cursor-default"
          >
            <div className="text-6xl mb-5 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
            <h3 className="font-black text-foreground group-hover:text-white text-sm mb-3 transition-colors">{p.title}</h3>
            <p className="text-xs text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">{p.description}</p>
          </div>
        ))}
      </div>

      {/* Promise strip */}
      <div className="grid md:grid-cols-3 bg-gray-900 text-white">
        <div className="p-10 border-r border-white/10">
          <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Our Promise</p>
          <h3 className="text-xl font-black">Measurable Value. Lasting Impact.</h3>
        </div>
        <div className="p-10 border-r border-white/10 flex items-center">
          <p className="text-white/65 text-sm leading-relaxed">
            Whether supporting public institutions, private sector organizations, development agencies, or individual professionals — our focus remains the same.
          </p>
        </div>
        <div className="p-10 flex items-center">
          <p className="text-white/65 text-sm leading-relaxed">
            We don't just provide services — we enable transformation that creates measurable value and lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
