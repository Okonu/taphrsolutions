import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[108px]"> {/* offset for fixed header (top bar ~36px + nav ~72px) */}
        <Hero />
        <StatsBanner />
        <About />
        <Services />
        <Values />
        <Clients />
        <Testimonials />
        <CTABanner />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
