const values = [
  { icon: "⭐", title: "Excellence", description: "We uphold the highest standards in every learning experience, every session, and every advisory engagement." },
  { icon: "🤝", title: "Integrity", description: "We build relationships through transparency, ethical practice, professionalism, and reliability." },
  { icon: "💡", title: "Innovation", description: "We embrace technology and creative thinking to design forward-looking solutions for emerging challenges." },
  { icon: "🤲", title: "Collaboration", description: "We listen, co-create, and partner with clients to ensure relevance, ownership, and lasting impact." },
  { icon: "✅", title: "Accountability", description: "We measure our success by the tangible improvements we create in the organizations and people we serve." },
];

const Values = () => {
  return (
    <section id="values" className="bg-primary">
      <div className="py-16 px-6 text-center text-white border-b border-white/10">
        <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">What We Stand For</p>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Core Values</h2>
        <div className="w-16 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-x divide-white/10">
        {values.map((value, i) => (
          <div
            key={i}
            className="group px-8 py-12 text-white hover:bg-accent transition-all duration-300 cursor-default border-b lg:border-b-0 border-white/10"
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
            <h3 className="text-lg font-black mb-4 uppercase tracking-wide">{value.title}</h3>
            <div className="w-8 h-0.5 bg-white/30 group-hover:bg-white mb-4 group-hover:w-16 transition-all duration-300"></div>
            <p className="text-white/65 group-hover:text-white/90 text-sm leading-relaxed transition-colors">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
