import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-neural-subtle py-20 border-b border-accent-gold/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Let's discuss how we can help automate and transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Only */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                Contact Us Directly
              </h2>
              <p className="text-muted-foreground">
                Reach out through any of the following channels. We're here to help!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Phone */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-neural transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-neural flex items-center justify-center shrink-0 shadow-neural">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Phone</h3>
                    <p className="text-muted-foreground mb-3">Call us directly for immediate assistance</p>
                    <Button asChild size="lg" className="bg-gradient-neural shadow-neural">
                      <a
                        href="tel:7892748115"
                        aria-label="Call NeuraFlow"
                      >
                        <Phone className="mr-2 w-4 h-4" />
                        7892748115
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-neural transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-neural flex items-center justify-center shrink-0 shadow-neural">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Email</h3>
                    <p className="text-muted-foreground mb-3">Send us an email anytime</p>
                    <Button asChild size="lg" variant="outline">
                      <a
                        href="mailto:hemchandrabusi11@gmail.com"
                        aria-label="Email NeuraFlow"
                      >
                        <Mail className="mr-2 w-4 h-4" />
                        hemchandrabusi11@gmail.com
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* WhatsApp */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-neural transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0 shadow-lg">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">Chat with us on WhatsApp for quick responses</p>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                      <a
                        href="https://wa.me/917892748115"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                      >
                        <MessageSquare className="mr-2 w-4 h-4" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Book Consultation CTA */}
            <div className="mt-12 text-center">
              <Card className="p-8 bg-gradient-neural text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Book a free consultation to discuss your automation needs.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  asChild 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <a 
                    href="https://calendar.app.google/bv3YjwZwfayx6TPd6?utm_source=website&utm_medium=cta&utm_campaign=book_consultation&utm_content=contact_page" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Book Consultation — opens in new tab"
                  >
                    Book Free Consultation
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;