import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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

          <Tabs defaultValue="training" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="training" className="flex items-center gap-2">
                <span className="text-xl">🎓</span>
                Training Solutions
              </TabsTrigger>
              <TabsTrigger value="consultancy" className="flex items-center gap-2">
                <span className="text-xl">💼</span>
                Consultancy Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="training" className="animate-fade-in">
              <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground text-3xl">🎓</span>
                  </div>
                  <CardTitle className="text-3xl text-foreground">Training Solutions</CardTitle>
                  <p className="text-muted-foreground">Comprehensive programs to develop your team's capabilities</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trainingServices.map((service, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="p-3 h-auto text-sm font-normal justify-start hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consultancy" className="animate-fade-in">
              <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-foreground text-3xl">💼</span>
                  </div>
                  <CardTitle className="text-3xl text-foreground">Consultancy Services</CardTitle>
                  <p className="text-muted-foreground">Strategic solutions for organizational transformation</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {consultancyServices.map((service, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="p-3 h-auto text-sm font-normal justify-start hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

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