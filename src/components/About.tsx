import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Who We Are */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The Centre for Human Resource Development Africa (CHURD Africa) partners with governments, corporations, and development organizations to build capable leaders, high-performing teams, and resilient institutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our work is anchored in innovation, integrity, and measurable impact. We leverage technology, evidence-based methodologies, and global best practices to deliver solutions that enhance performance, foster innovation, and drive sustainable growth.
              </p>
            </div>
          </div>

          {/* Our Purpose */}
          <div className="bg-white rounded-2xl p-12 mb-20 shadow-elevated border border-border/10">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Our Purpose
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We promote a culture of lifelong learning by designing and delivering practical, technology-enabled, and evidence-based learning interventions that respond to emerging workplace and development challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Future-Ready Workforces</h4>
                  <p className="text-sm text-muted-foreground">Building skills and capabilities for an evolving world</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Institutional Transformation</h4>
                  <p className="text-sm text-muted-foreground">Strengthening governance and organizational resilience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Measurable Impact</h4>
                  <p className="text-sm text-muted-foreground">Evidence-based solutions that drive sustainable growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-10 mb-20 text-white text-center shadow-hero">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Our Learning Philosophy</h3>
            <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
              Learning should inspire critical thinking, develop practical skills, foster growth, promote ethical leadership, and create measurable improvements in performance. Our programmes are learner-centred, interactive, and results-oriented.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-elevated hover:shadow-lg transition-all duration-300 animate-scale-in border-l-4 border-l-primary">
              <CardContent className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white text-3xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      To be Africa's leading centre for transformative human capital and institutional excellence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elevated hover:shadow-lg transition-all duration-300 animate-scale-in border-l-4 border-l-accent">
              <CardContent className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white text-3xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      To design and deliver innovative, technology-enabled development solutions that drive measurable performance and sustainable growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
