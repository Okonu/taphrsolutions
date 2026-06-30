import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const learningDevelopment = [
  { icon: "👔", title: "Executive Development", desc: "High-impact programmes for senior leaders and executives driving institutional transformation." },
  { icon: "🏆", title: "Professional Certification", desc: "Accredited certifications that validate expertise and advance professional careers." },
  { icon: "🤝", title: "Mentorship Programmes", desc: "Structured mentorship connecting emerging professionals with experienced leaders." },
  { icon: "🏢", title: "Corporate Training", desc: "Tailored in-house training solutions designed around your organization's specific needs." },
  { icon: "💻", title: "E-Learning Academy", desc: "Flexible, technology-enabled learning solutions accessible anytime, anywhere." },
];

const programmes = [
  { icon: "👥", title: "Human Capital Development", desc: "Comprehensive strategies for attracting, developing, and retaining top talent." },
  { icon: "📊", title: "Strategic HR Management", desc: "Equipping HR professionals with skills to align people practices with business goals." },
  { icon: "🎖️", title: "Leadership Excellence Academy", desc: "A flagship programme building transformational leadership capacity at all levels." },
  { icon: "⚖️", title: "Governance & Ethics Training", desc: "Building institutional integrity through sound governance and ethical leadership." },
  { icon: "🏛️", title: "Public Sector Capacity Building", desc: "Strengthening capabilities of government institutions and civil servants." },
  { icon: "🛡️", title: "Risk Management", desc: "Practical frameworks for identifying, assessing, and managing organizational risks." },
  { icon: "🌅", title: "Retirement Programme", desc: "Preparing employees for fulfilling and financially secure retirement transitions." },
  { icon: "🤖", title: "AI Tools for the Workplace", desc: "Building AI literacy and practical tools for modern workplace productivity." },
];

const Services = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programmes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Solutions</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive, technology-enabled learning and development solutions designed to unlock your organization's full potential.
            </p>
          </div>

          <Tabs defaultValue="learning" className="w-full">
            <TabsList className="flex w-full max-w-md mx-auto mb-12 h-12 p-1 bg-gray-100 rounded-lg">
              <TabsTrigger
                value="learning"
                className="flex-1 h-10 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white rounded-md transition-all"
              >
                Learning & Development
              </TabsTrigger>
              <TabsTrigger
                value="programmes"
                className="flex-1 h-10 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white rounded-md transition-all"
              >
                Programmes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="learning" className="animate-fade-in">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {learningDevelopment.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-gray-50 hover:bg-primary p-8 rounded-xl border border-gray-100 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated cursor-default"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="font-bold text-foreground group-hover:text-white mb-2 transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-white/75 leading-relaxed transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="programmes" className="animate-fade-in">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {programmes.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-gray-50 hover:bg-accent p-6 rounded-xl border border-gray-100 hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated cursor-default"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-foreground group-hover:text-white mb-2 text-sm transition-colors">{item.title}</h4>
                    <p className="text-xs text-muted-foreground group-hover:text-white/80 leading-relaxed transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Button
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-10 py-4 text-sm shadow-button"
            >
              Enquire About a Programme ›
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
