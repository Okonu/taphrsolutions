import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Values = () => {
  const values = [
    {
      icon: "⭐",
      title: "Excellence",
      description: "We set and uphold the highest standards in every learning experience, every session, and every advisory engagement we deliver."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We build relationships through transparency, ethical practice, professionalism, and reliability — observing confidentiality to deliver genuine value."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace technology and creative thinking to design forward-looking solutions that address emerging workplace and development challenges."
    },
    {
      icon: "🤲",
      title: "Collaboration",
      description: "We listen, co-create, and partner with clients, governments, and institutions to ensure relevance, ownership, and lasting impact."
    },
    {
      icon: "✅",
      title: "Accountability",
      description: "We take responsibility for outcomes and measure our success by the tangible improvements we create in the organizations and people we serve."
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
            <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our values guide every decision we make and every relationship we build — forming the foundation of our commitment to transformative impact across Africa.
            </p>
          </div>

          <Carousel
            className="w-full max-w-5xl mx-auto"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {values.map((value, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 h-full border-t-4 border-t-accent/60">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Values;
