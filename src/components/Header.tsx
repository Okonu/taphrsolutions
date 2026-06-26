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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={churdLogo}
              alt="CHURD Africa – Centre for Human Resource Development Africa"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('programmes')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Learning & Development
            </button>
            <button
              onClick={() => scrollToSection('programmes')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Programmes
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Partnerships
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Contact Us
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold"
              size="sm"
            >
              Join Our Community
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('programmes')}
                className="text-left text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Learning & Development
              </button>
              <button
                onClick={() => scrollToSection('programmes')}
                className="text-left text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Programmes
              </button>
              <button
                onClick={() => scrollToSection('partners')}
                className="text-left text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Partnerships
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Contact Us
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit text-sm font-semibold"
                size="sm"
              >
                Join Our Community
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
