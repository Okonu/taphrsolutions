const About = () => {
  return (
    <section id="about" className="bg-white">

      {/* Split hero block */}
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        {/* Left — dark panel */}
        <div className="bg-primary px-12 py-16 flex flex-col justify-center text-white">
          <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            About<br />CHURD Africa
          </h2>
          <div className="w-12 h-1 bg-accent mb-8"></div>
          <p className="text-white/75 leading-relaxed text-base mb-6">
            The Centre for Human Resource Development Africa (CHURD Africa) partners with governments, corporations, and development organizations to build capable leaders, high-performing teams, and resilient institutions.
          </p>
          <p className="text-white/65 leading-relaxed text-sm">
            Our work is anchored in innovation, integrity, and measurable impact — leveraging technology, evidence-based methodologies, and global best practices.
          </p>
        </div>

        {/* Right — purpose pillars */}
        <div className="bg-gray-50 px-12 py-16 grid grid-cols-2 gap-6 content-center">
          {[
            { icon: "🎯", title: "Future-Ready Workforces", desc: "Building capabilities for an evolving world" },
            { icon: "🏛️", title: "Institutional Strength", desc: "Strengthening governance and resilience" },
            { icon: "💡", title: "Evidence-Based Learning", desc: "Practical, technology-enabled interventions" },
            { icon: "📈", title: "Measurable Impact", desc: "Solutions that drive sustainable growth" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-l-accent shadow-card hover:shadow-elevated transition-all">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission strip */}
      <div className="grid md:grid-cols-2">
        <div className="bg-accent px-12 py-12 text-white">
          <p className="text-white/70 font-bold uppercase tracking-widest text-xs mb-3">Our Vision</p>
          <h3 className="text-2xl font-black mb-4">Where We're Headed</h3>
          <div className="w-10 h-0.5 bg-white/40 mb-5"></div>
          <p className="text-white/85 leading-relaxed">
            To be Africa's leading centre for transformative human capital and institutional excellence.
          </p>
        </div>
        <div className="bg-[hsl(248,56%,22%)] px-12 py-12 text-white">
          <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Our Mission</p>
          <h3 className="text-2xl font-black mb-4">What We Do</h3>
          <div className="w-10 h-0.5 bg-accent/60 mb-5"></div>
          <p className="text-white/85 leading-relaxed">
            To design and deliver innovative, technology-enabled development solutions that drive measurable performance and sustainable growth.
          </p>
        </div>
      </div>

      {/* Learning philosophy */}
      <div className="bg-gray-900 py-14 px-6 text-center text-white">
        <p className="text-accent font-bold uppercase tracking-widest text-xs mb-5">Our Learning Philosophy</p>
        <p className="text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed italic text-white/90">
          "Learning should inspire critical thinking, develop practical skills, promote ethical leadership, and create measurable improvements in performance."
        </p>
      </div>
    </section>
  );
};

export default About;
