import { Card, CardContent } from "@/components/ui/card";

const Values = () => {
  const values = [
    {
      icon: "🤝",
      title: "Trust",
      description: "We build relationships through transparency, ethical practice, professionalism, reliability, and observe confidentiality to deliver value."
    },
    {
      icon: "⚡",
      title: "Agility", 
      description: "We adapt to changing client needs and deliver flexible, future-focused solutions."
    },
    {
      icon: "👥",
      title: "People-Centricity",
      description: "We strive to deliver solutions customized and aligned to the needs, growth, and well-being of people at all levels."
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "We strive for the highest standards in every training, every session, every strategy."
    },
    {
      icon: "🤲",
      title: "Collaboration",
      description: "We listen, co-create, and partner with clients to ensure relevance and ownership."
    }
  ];

  return (
    <section id="values" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our values guide every decision we make and every relationship we build. 
              They form the foundation of our commitment to excellence and ethical practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;