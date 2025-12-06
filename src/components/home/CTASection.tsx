import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-neural relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how NeuraFlowy can transform your operations with intelligent automation.
            Book a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-white/90 shadow-lg group"
            >
              <a 
                href="https://calendar.app.google/wRuhoJAFqSXioHXT7" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Book Consultation — opens in new tab"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Book Free Consultation
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Automation Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">System Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10x</div>
              <div className="text-white/80">Efficiency Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;