import { Button } from "@/components/ui/button";
import { useState } from "react";

const learningDevelopment = [
  { icon: "👔", title: "Executive Development", desc: "High-impact programmes for senior leaders and executives driving institutional transformation." },
  { icon: "🏆", title: "Professional Certification", desc: "Accredited certifications that validate expertise and advance professional careers." },
  { icon: "🤝", title: "Mentorship Programmes", desc: "Structured mentorship connecting emerging professionals with experienced leaders." },
  { icon: "🏢", title: "Corporate Training", desc: "Tailored in-house training designed around your organization's specific needs." },
  { icon: "💻", title: "E-Learning Academy", desc: "Flexible, technology-enabled learning accessible anytime, anywhere." },
];

const programmes = [
  { icon: "👥", title: "Human Capital Development", desc: "Comprehensive strategies for attracting, developing, and retaining top talent." },
  { icon: "📊", title: "Strategic HR Management", desc: "Equipping HR professionals to align people practices with business goals." },
  { icon: "🎖️", title: "Leadership Excellence Academy", desc: "A flagship programme building transformational leadership at all levels." },
  { icon: "⚖️", title: "Governance & Ethics Training", desc: "Building institutional integrity through sound governance and ethical leadership." },
  { icon: "🏛️", title: "Public Sector Capacity Building", desc: "Strengthening capabilities of government institutions and civil servants." },
  { icon: "🛡️", title: "Risk Management", desc: "Practical frameworks for identifying and managing organizational risks." },
  { icon: "🌅", title: "Retirement Programme", desc: "Preparing employees for fulfilling and financially secure retirement." },
  { icon: "🤖", title: "AI Tools for the Workplace", desc: "Building AI literacy and practical tools for modern workplace productivity." },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<"learning" | "programmes">("learning");

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programmes" className="bg-white">

      {/* Section header */}
      <div className="bg-gray-50 py-16 px-6 text-center border-b border-gray-200">
        <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">What We Offer</p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Our Solutions</h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-xl mx-auto text-base">
          Comprehensive learning and development solutions designed to drive lasting transformation.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="container mx-auto px-6 flex">
          {(["learning", "programmes"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-5 px-8 text-sm font-bold uppercase tracking-wide border-b-4 transition-all ${
                activeTab === tab
                  ? "border-accent text-accent"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab === "learning" ? "Learning & Development" : "Programmes"}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="container mx-auto px-6 py-16">
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 rounded-xl overflow-hidden`}>
          {(activeTab === "learning" ? learningDevelopment : programmes).map((item, i) => (
            <div
              key={i}
              className="group p-8 border-r border-b border-gray-200 hover:bg-primary transition-all duration-300 cursor-default last:border-r-0"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <h4 className="font-black text-foreground group-hover:text-white text-base mb-3 transition-colors">{item.title}</h4>
              <p className="text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">{item.desc}</p>
              <div className="mt-5 h-0.5 w-8 bg-accent group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-widest px-12 py-4 text-sm shadow-button"
          >
            Enquire About a Programme ›
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
