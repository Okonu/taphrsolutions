import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

          <Carousel
            className="w-full max-w-6xl mx-auto mb-12"
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
              {clientTypes.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {client.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {client.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        {client.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

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