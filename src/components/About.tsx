import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Company Overview */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Company Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Tap HR Solutions Ltd is a leading training and consultancy firm specializing in human capital development, 
              organizational effectiveness, and strategic workforce solutions. We partner with organizations to unlock 
              potential at every level, equipping individuals, teams, and institutions with the skills, systems, and 
              mindset required to thrive in today's dynamic work environment.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary-foreground text-2xl">🌍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's most trusted partner in training and transformative HR solutions that empower people, 
                  shaping culture, and optimizing performance to achieve sustainable organizational growth.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                    <span className="text-accent-foreground text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver reliable, ethical, purpose-driven and impactful training and strategic consultancy 
                  solutions that promote workplace excellence and sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our approach is grounded in purpose-driven engagement, expert facilitation, and actionable insights. 
              We combine local expertise with global best practices to deliver impactful training programs and 
              consultancy services that foster lasting transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;