import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to strengthen your institution? Partner with CHURD Africa today and transform your people, teams, and organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in lg:col-span-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <CardTitle className="text-xl text-foreground">CHURD Africa</CardTitle>
                <p className="text-xs text-muted-foreground">Centre for Human Resource Development Africa</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center p-3 rounded-lg bg-muted">
                    <span className="text-xl mr-3">📧</span>
                    <div>
                      <p className="font-medium text-foreground text-sm">info@churdafrica.com</p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-muted">
                    <span className="text-xl mr-3">📍</span>
                    <div>
                      <p className="font-medium text-foreground text-sm">Africa</p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 rounded-lg bg-muted">
                    <span className="text-xl mr-3">🌐</span>
                    <div>
                      <p className="font-medium text-foreground text-sm">www.churdafrica.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      LinkedIn
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      Twitter
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      Facebook
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inquiry Form */}
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in lg:col-span-2">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <CardTitle className="text-2xl text-foreground">Send an Inquiry</CardTitle>
                  <p className="text-muted-foreground mt-2">Partner with CHURD Africa — we'd love to hear from you.</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-all bg-background text-foreground hover:border-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-all bg-background text-foreground hover:border-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-all bg-background text-foreground hover:border-primary"
                      placeholder="john@organization.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-all bg-background text-foreground hover:border-primary"
                      placeholder="+XXX XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-all bg-background text-foreground hover:border-primary"
                    placeholder="Your Organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">How can we help you? *</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-all bg-background text-foreground hover:border-primary resize-none"
                    placeholder="Tell us about your learning, development, or advisory needs..."
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold shadow-button"
                >
                  <span className="mr-2">Send Message</span>
                  <span>→</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">📅</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Upcoming Trainings</h3>
                <p className="text-sm text-muted-foreground">View our training calendar and register</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">🎙️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Conferences & Webinars</h3>
                <p className="text-sm text-muted-foreground">Join our knowledge events and webinars</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Corporate Partnerships</h3>
                <p className="text-sm text-muted-foreground">Explore strategic partnership opportunities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
