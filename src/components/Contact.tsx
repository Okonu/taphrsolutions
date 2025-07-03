import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your organization? Get in touch with us today to discuss your training and consultancy needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary-foreground text-lg">📍</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Location</p>
                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary-foreground text-lg">📞</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-muted-foreground">+254 7XX XXX XXX</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary-foreground text-lg">📧</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">info@taphrsolutions.co.ke</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary-foreground text-lg">🌐</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Website</p>
                        <p className="text-muted-foreground">www.taphrsolutions.co.ke</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-card hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <span className="mr-2">📘</span>
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <span className="mr-2">📷</span>
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <span className="mr-2">🐦</span>
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="lg:sticky lg:top-8">
              <Card className="shadow-card bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Let's discuss how we can help empower your people and elevate your organization's performance. 
                    Our team is ready to create a customized solution for your specific needs.
                  </p>
                  
                  <div className="space-y-4">
                    <Button variant="professional" size="lg" className="w-full">
                      Schedule a Consultation
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Request a Proposal
                    </Button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Or send us an email at{" "}
                      <a 
                        href="mailto:info@taphrsolutions.co.ke" 
                        className="text-primary hover:underline font-semibold"
                      >
                        info@taphrsolutions.co.ke
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;