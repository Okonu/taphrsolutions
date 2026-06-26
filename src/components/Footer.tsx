import churdLogo from "@/assets/churd-logo.jpeg";

const Footer = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={churdLogo}
                alt="CHURD Africa"
                className="h-20 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-primary-foreground/75 leading-relaxed text-sm max-w-sm">
              Empowering People. Strengthening Institutions. Transforming Africa. We design and deliver innovative, technology-enabled development solutions that drive measurable performance and sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", id: "about" },
                { label: "Learning & Development", id: "programmes" },
                { label: "Programmes", id: "programmes" },
                { label: "Partnerships", id: "partners" },
                { label: "Contact Us", id: "contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-primary-foreground/75 text-sm">
              <p>📧 info@churdafrica.com</p>
              <p>🌐 www.churdafrica.com</p>
              <p>🌍 Africa</p>
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold mb-2">Follow Us</p>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                  <span
                    key={social}
                    className="text-xs px-2 py-1 rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 cursor-pointer transition-colors"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} CHURD Africa. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm font-medium">
            Advancing Learning, Transforming Futures
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
