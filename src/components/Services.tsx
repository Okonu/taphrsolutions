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

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="training" className="w-full mb-12">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-12 h-14 p-1 bg-muted/50">
                <TabsTrigger value="training" className="flex items-center gap-3 h-12 px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm text-base font-medium">
                  <span className="text-xl">🎓</span>
                  Training Solutions
                </TabsTrigger>
                <TabsTrigger value="consultancy" className="flex items-center gap-3 h-12 px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm text-base font-medium">
                  <span className="text-xl">💼</span>
                  Consultancy Services
                </TabsTrigger>
              </TabsList>

              <TabsContent value="training" className="animate-fade-in">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary-foreground text-4xl">🎓</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Training Solutions</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Comprehensive learning programs designed to unlock potential and drive performance across your organization
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {trainingServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary hover:border-l-primary-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {service}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Expert-led training to enhance capabilities and drive results
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="consultancy" className="animate-fade-in">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-accent-foreground text-4xl">💼</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Consultancy Services</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Strategic consulting solutions to transform your organization and optimize performance
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {consultancyServices.map((service, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent hover:border-l-accent/80">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {service}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Strategic guidance to drive organizational transformation
                            </p>
                          </div>
                        </div>
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