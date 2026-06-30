import { Button } from "@/components/ui/button";
import churdLogo from "@/assets/churd-logo.jpeg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to strengthen your institution? Partner with CHURD Africa today.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info panel */}
            <div className="lg:col-span-2 bg-primary rounded-2xl p-10 text-white flex flex-col">
              <img src={churdLogo} alt="CHURD Africa" className="h-20 w-auto object-contain bg-white rounded-lg p-2 mb-8" />

              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-5 flex-grow">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-xl mt-0.5">📧</span>
                  <div>
                    <p className="text-xs text-primary-foreground/60 uppercase tracking-wide mb-0.5">Email</p>
                    <p className="font-medium">info@churdafrica.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-xl mt-0.5">🌐</span>
                  <div>
                    <p className="text-xs text-primary-foreground/60 uppercase tracking-wide mb-0.5">Website</p>
                    <p className="font-medium">www.churdafrica.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-xl mt-0.5">🌍</span>
                  <div>
                    <p className="text-xs text-primary-foreground/60 uppercase tracking-wide mb-0.5">Location</p>
                    <p className="font-medium">Africa</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15">
                <p className="text-sm font-semibold text-primary-foreground/70 mb-3 uppercase tracking-wide">Follow Us</p>
                <div className="flex gap-3">
                  {["LinkedIn", "Twitter", "Facebook"].map((s) => (
                    <button key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/20 hover:bg-accent hover:border-accent transition-colors font-medium">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send an Inquiry</h3>
              <p className="text-muted-foreground text-sm mb-8">Fill in the form and our team will get back to you within 24 hours.</p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none bg-white transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none bg-white transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none bg-white transition-all" placeholder="john@organization.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none bg-white transition-all" placeholder="+XXX XXX XXX XXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Organization</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none bg-white transition-all" placeholder="Your Organization" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">How can we help? *</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none bg-white transition-all resize-none" placeholder="Tell us about your learning, development, or advisory needs..." />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide py-4 text-sm shadow-button">
                  Send Message ›
                </Button>
              </div>
            </div>
          </div>

          {/* Quick action strip */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "📅", title: "Training Calendar", desc: "View upcoming training sessions and register your team", bg: "bg-primary" },
              { icon: "🎙️", title: "Conferences & Webinars", desc: "Join our knowledge events across Africa", bg: "bg-accent" },
              { icon: "🤝", title: "Corporate Partnerships", desc: "Explore strategic co-development opportunities", bg: "bg-primary" },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-xl p-6 text-white flex items-center gap-5 cursor-pointer hover:opacity-90 transition-opacity`}>
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
