import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help automate and transform your business operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <Card className="p-6 text-center hover:shadow-neural transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-neural flex items-center justify-center mx-auto mb-4 shadow-neural">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
              <Button asChild variant="outline" size="sm">
                <a href="tel:7892748115" aria-label="Call NeuraFlowy">
                  7892748115
                </a>
              </Button>
            </Card>

            {/* Email */}
            <Card className="p-6 text-center hover:shadow-neural transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-neural flex items-center justify-center mx-auto mb-4 shadow-neural">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Email</h3>
              <Button asChild variant="outline" size="sm">
                <a href="mailto:hemchandrabusi11@gmail.com" aria-label="Email NeuraFlowy">
                  Email Us
                </a>
              </Button>
            </Card>

            {/* WhatsApp */}
            <Card className="p-6 text-center hover:shadow-neural transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
              <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                <a
                  href="https://wa.me/917892748115"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  Chat Now
                </a>
              </Button>
            </Card>
          </div>

          {/* Book Consultation CTA */}
          <Card className="p-8 bg-gradient-neural text-white text-center">
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
                href="https://calendar.app.google/wRuhoJAFqSXioHXT7" 
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
    </section>
  );
};

export default ContactSection;
