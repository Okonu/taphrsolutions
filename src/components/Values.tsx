const values = [
  { icon: "⭐", title: "Excellence", description: "We uphold the highest standards in every learning experience, every session, and every advisory engagement." },
  { icon: "🤝", title: "Integrity", description: "We build relationships through transparency, ethical practice, professionalism, and reliability." },
  { icon: "💡", title: "Innovation", description: "We embrace technology and creative thinking to design forward-looking solutions for emerging challenges." },
  { icon: "🤲", title: "Collaboration", description: "We listen, co-create, and partner with clients to ensure relevance, ownership, and lasting impact." },
  { icon: "✅", title: "Accountability", description: "We measure our success by the tangible improvements we create in the organizations and people we serve." },
];

const Values = () => {
  return (
    <section id="values" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Core Values</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 text-center rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group border-b-4 border-b-transparent hover:border-b-accent"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-base font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
