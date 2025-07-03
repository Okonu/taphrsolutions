import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Company Overview */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Tap HR Solutions Ltd is a leading training and consultancy firm specializing in human capital development, 
                organizational effectiveness, and strategic workforce solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with organizations to unlock potential at every level, combining expert facilitation 
                with global best practices to deliver transformative solutions.
              </p>
            </div>
          </div>

          {/* Approach Statement */}
          <div className="bg-white rounded-2xl p-12 mb-20 shadow-elevated border border-border/5">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Our Approach
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Grounded in purpose-driven engagement, expert facilitation, and actionable insights. 
                We combine local expertise with global best practices to deliver lasting transformation.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Purpose-Driven</h4>
                  <p className="text-sm text-muted-foreground">Every engagement focused on meaningful outcomes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Global Standards</h4>
                  <p className="text-sm text-muted-foreground">International best practices with local relevance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Measurable Impact</h4>
                  <p className="text-sm text-muted-foreground">Tangible results that drive sustainable growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-elevated hover:shadow-lg transition-all duration-300 animate-scale-in border-l-4 border-l-primary">
              <CardContent className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-primary-foreground text-3xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      To be Africa's most trusted partner in training and transformative HR solutions that empower people, 
                      shape culture, and optimize performance to achieve sustainable organizational growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elevated hover:shadow-lg transition-all duration-300 animate-scale-in border-l-4 border-l-accent">
              <CardContent className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-accent-foreground text-3xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      To deliver reliable, ethical, purpose-driven and impactful training and strategic consultancy 
                      solutions that promote workplace excellence and sustainable growth.
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