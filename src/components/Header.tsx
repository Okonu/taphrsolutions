import { Button } from "@/components/ui/button";
import { useState } from "react";
import churdLogo from "@/assets/churd-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-10">
        <div className="w-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span>📧 info@churdafrica.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-primary-foreground/70">Follow us:</span>
            {["LinkedIn", "X", "Facebook"].map((s) => (
              <button key={s} className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img
              src={churdLogo}
              alt="CHURD Africa"
              className="h-20 w-auto object-contain cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "About Us", id: "about" },
                { label: "Our Solutions", id: "programmes" },
                { label: "Partnerships", id: "partners" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact Us", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-semibold text-gray-900 hover:text-accent transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-sm uppercase tracking-wide px-6"
              >
                Get Started
              </Button>
            </nav>

            {/* Mobile toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-5 flex flex-col justify-between">
                <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-100 mt-2">
              <div className="flex flex-col gap-4">
                {[
                  { label: "About Us", id: "about" },
                  { label: "Our Solutions", id: "programmes" },
                  { label: "Partnerships", id: "partners" },
                  { label: "Testimonials", id: "testimonials" },
                  { label: "Contact Us", id: "contact" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-sm font-semibold text-gray-900 hover:text-accent transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent hover:bg-accent/90 text-white font-semibold w-fit"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
