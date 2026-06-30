import churdLogo from "@/assets/churd-logo.jpeg";

const Footer = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(248,56%,18%)] text-white">
      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand col */}
          <div className="md:col-span-1">
            <img src={churdLogo} alt="CHURD Africa" className="h-20 w-auto object-contain bg-white rounded-lg p-2 mb-5" />
            <p className="text-white/65 text-sm leading-relaxed">
              Advancing Learning, Transforming Futures. Empowering People, Strengthening Institutions, and Transforming Africa.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", id: "about" },
                { label: "Our Solutions", id: "programmes" },
                { label: "Core Values", id: "values" },
                { label: "Partnerships", id: "partners" },
                { label: "Testimonials", id: "testimonials" },
              ].map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-sm text-white/65 hover:text-accent transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-accent">Our Solutions</h4>
            <ul className="space-y-3">
              {[
                "Executive Development",
                "Professional Certification",
                "Leadership Excellence Academy",
                "Corporate Training",
                "E-Learning Academy",
                "Public Sector Capacity",
              ].map((s) => (
                <li key={s}>
                  <button onClick={() => scrollTo('programmes')} className="text-sm text-white/65 hover:text-accent transition-colors text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-accent">Contact</h4>
            <div className="space-y-4 text-sm text-white/65">
              <p>📧 info@churdafrica.com</p>
              <p>🌐 www.churdafrica.com</p>
              <p>🌍 Africa</p>
            </div>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Facebook"].map((s) => (
                  <button key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/20 hover:bg-accent hover:border-accent transition-all font-medium">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} CHURD Africa. All rights reserved.</p>
          <p className="font-medium text-white/50">Advancing Learning, Transforming Futures</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
