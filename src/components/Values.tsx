import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
                  <Card className="shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">
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