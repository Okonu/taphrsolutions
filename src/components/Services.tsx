import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const trainingServices = [
    "Leadership and Executive Development",
    "Team Dynamics and Collaboration", 
    "Emotional Intelligence and Self-Leadership",
    "Customer Service and Client Experience",
    "Strategic Communication and Influence",
    "Workplace Ethics and Integrity Building",
    "Performance and Productivity Enhancement",
    "Leadership styles and Conflict Resolution",
    "Change management and Strategy Alignment",
    "HR for non HR professionals",
    "Employee wellness and Productivity",
    "Data Driven HR to Optimize performance",
    "Tailored In-House Training Programs"
  ];

  const consultancyServices = [
    "Organizational Development and Culture Change",
    "Talent Management and Succession Planning",
    "Performance Management Frameworks",
    "Organizational Restructuring and Job Evaluation",
    "HR Policy and Compliance Advisory",
    "Workforce Planning and Capability Assessment",
    "Staff Engagement and Retention Strategies",
    "Change Management and Strategy Alignment",
    "Succession Planning and Workforce Planning",
    "Staff Engagement and Culture Transformation",
    "HR Risks and Risk Management", 
    "HR policy Development and Compliance",
    "Performance Management Frameworks"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive training solutions and strategic consultancy services 
              designed to unlock your organization's full potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Training Solutions */}
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary-foreground text-2xl">🎓</span>
                  </div>
                  <CardTitle className="text-2xl text-foreground">Training Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {trainingServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Consultancy Services */}
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                    <span className="text-accent-foreground text-2xl">💼</span>
                  </div>
                  <CardTitle className="text-2xl text-foreground">Consultancy Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {consultancyServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your organization? Let's discuss how our solutions can help you achieve your goals.
            </p>
            <Button variant="professional" size="lg" onClick={scrollToContact}>
              Get Custom Solution
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;