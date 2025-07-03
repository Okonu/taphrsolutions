import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const clientTypes = [
    {
      icon: "🏛️",
      title: "Government Agencies",
      description: "Ministries, Departments and Government Agencies"
    },
    {
      icon: "🏢", 
      title: "Private Sector",
      description: "Corporates and SMEs across various industries"
    },
    {
      icon: "🌍",
      title: "NGOs & Foundations", 
      description: "Non-profits and Development Partners"
    },
    {
      icon: "🎓",
      title: "Education & Healthcare",
      description: "Educational and Healthcare Institutions"
    },
    {
      icon: "🚀",
      title: "Startups & Social Impact",
      description: "Emerging businesses and Social Enterprises"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We serve organizations seeking to grow through people across diverse sectors and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {clientTypes.map((client, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {client.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {client.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statement of Service */}
          <Card className="shadow-card bg-gradient-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">Statement of Service</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl mx-auto">
                At Tap HR Solutions Ltd, we are committed to purpose-driven delivery. Whether through powerful 
                learning experiences or strategic consulting, we ensure that every engagement leads to measurable 
                progress. We don't just provide services — we enable transformation.
              </p>
              <p className="text-lg font-semibold text-primary">
                Our goal is simple: Empower people. Enhance performance. Drive sustainable results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;