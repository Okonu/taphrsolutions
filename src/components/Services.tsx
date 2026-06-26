import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const learningDevelopment = [
    { icon: "👔", title: "Executive Development", desc: "High-impact programmes for senior leaders and executives driving institutional transformation." },
    { icon: "🏆", title: "Professional Certification Programmes", desc: "Accredited certifications that validate expertise and advance professional careers." },
    { icon: "🤝", title: "Mentorship Programmes", desc: "Structured mentorship connecting emerging professionals with experienced leaders." },
    { icon: "🏢", title: "Corporate Training", desc: "Tailored in-house training solutions designed around your organization's specific needs." },
    { icon: "💻", title: "E-Learning Academy", desc: "Flexible, technology-enabled learning solutions accessible anytime, anywhere." },
  ];

  const programmes = [
    { icon: "👥", title: "Human Capital Development", desc: "Comprehensive strategies for attracting, developing, and retaining top talent." },
    { icon: "📊", title: "Strategic HR Management", desc: "Equipping HR professionals with strategic skills to align people practices with business goals." },
    { icon: "🎖️", title: "Leadership Excellence Academy", desc: "A flagship programme building transformational leadership capacity at all levels." },
    { icon: "⚖️", title: "Governance and Ethics Training", desc: "Building institutional integrity through sound governance principles and ethical leadership." },
    { icon: "🏛️", title: "Public Sector Capacity Building", desc: "Specialized programmes strengthening the capabilities of government institutions and civil servants." },
    { icon: "🛡️", title: "Risk Management", desc: "Practical frameworks for identifying, assessing, and managing organizational risks." },
    { icon: "🌅", title: "Retirement Programme", desc: "Preparing employees for fulfilling and financially secure retirement transitions." },
    { icon: "🤖", title: "AI Tools for the Workplace", desc: "Equipping professionals with practical AI literacy and tools for modern workplace productivity." },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programmes" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive, technology-enabled learning and development solutions designed to unlock your organization's full potential and drive lasting transformation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="learning" className="w-full mb-12">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-12 h-14 p-1 bg-muted/50">
                <TabsTrigger value="learning" className="flex items-center gap-2 h-12 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm font-medium">
                  <span className="text-lg">🎓</span>
                  Learning & Development
                </TabsTrigger>
                <TabsTrigger value="programmes" className="flex items-center gap-2 h-12 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm font-medium">
                  <span className="text-lg">📚</span>
                  Programmes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="learning" className="animate-fade-in">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <span className="text-white text-4xl">🎓</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">Learning & Development</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Innovative, learner-centred programmes designed to build capability and unlock potential at every level.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {learningDevelopment.map((item, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="programmes" className="animate-fade-in">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <span className="text-white text-4xl">📚</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">Programmes</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Specialized development programmes that strengthen human capital and institutional capacity across Africa.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {programmes.map((item, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to strengthen your institution? Partner with CHURD Africa today.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-button"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
