import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Clients = () => {
  const partners = [
    {
      icon: "🏛️",
      title: "Governments & Public Institutions",
      description: "Ministries, departments, agencies, and public sector bodies across Africa"
    },
    {
      icon: "🏢",
      title: "Corporations",
      description: "Large corporations and SMEs across diverse industries and sectors"
    },
    {
      icon: "🌍",
      title: "Development Organizations",
      description: "NGOs, international development agencies, and foundations"
    },
    {
      icon: "🎓",
      title: "Education & Research Institutions",
      description: "Universities, training institutes, and research organizations"
    },
    {
      icon: "🤝",
      title: "Corporate Partnerships",
      description: "Strategic partners co-creating impactful learning solutions"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partnerships
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We partner with governments, corporations, and development organizations committed to building capable leaders, high-performing teams, and resilient institutions.
            </p>
          </div>

          <Carousel
            className="w-full max-w-6xl mx-auto mb-14"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {partner.icon}
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-3">
                        {partner.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        {partner.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Statement */}
          <Card className="shadow-elevated bg-gradient-to-r from-primary/5 to-accent/5 border-none">
            <CardContent className="p-10 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-5">Ready to Strengthen Your Institution?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl mx-auto text-lg">
                At CHURD Africa, our purpose is to unlock human potential, inspire excellence, and cultivate a culture of continuous learning that transforms individuals, strengthens institutions, and accelerates Africa's development.
              </p>
              <p className="text-lg font-semibold text-primary">
                Creating measurable value and lasting impact — wherever we work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;
