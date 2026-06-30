import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section label pattern */}
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About CHURD Africa
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Centre for Human Resource Development Africa (CHURD Africa) partners with governments, corporations, and development organizations to build capable leaders, high-performing teams, and resilient institutions.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Our work is anchored in innovation, integrity, and measurable impact. We leverage technology, evidence-based methodologies, and global best practices to deliver solutions that enhance performance, foster innovation, and drive sustainable growth.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We promote a culture of lifelong learning by designing and delivering practical, technology-enabled interventions that respond to emerging workplace and development challenges — building future-ready workforces and transforming institutions across Africa.
              </p>
            </div>

            {/* Purpose pillars */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "🎯", title: "Future-Ready Workforces", desc: "Building capabilities for an evolving world" },
                { icon: "🏛️", title: "Institutional Strength", desc: "Strengthening governance and resilience" },
                { icon: "💡", title: "Evidence-Based Learning", desc: "Technology-enabled, practical interventions" },
                { icon: "📈", title: "Measurable Impact", desc: "Solutions that drive sustainable growth" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning philosophy strip */}
          <div className="bg-primary rounded-2xl p-10 mb-16 text-white text-center">
            <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">Our Learning Philosophy</p>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              "Learning should inspire critical thinking, develop practical skills, promote ethical leadership, and create measurable improvements in performance."
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-elevated hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary overflow-hidden">
              <CardContent className="p-10">
                <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-2">Vision</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">Where We're Headed</h3>
                <div className="w-10 h-0.5 bg-accent mb-5"></div>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's leading centre for transformative human capital and institutional excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elevated hover:shadow-lg transition-all duration-300 border-t-4 border-t-accent overflow-hidden">
              <CardContent className="p-10">
                <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-2">Mission</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">What We Do</h3>
                <div className="w-10 h-0.5 bg-accent mb-5"></div>
                <p className="text-muted-foreground leading-relaxed">
                  To design and deliver innovative, technology-enabled development solutions that drive measurable performance and sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
