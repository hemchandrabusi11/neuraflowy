import { Search, Hammer, Rocket } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description: "We analyze your business processes and identify automation opportunities.",
    },
    {
      icon: Hammer,
      number: "02",
      title: "Build",
      description: "Our team designs and develops custom AI-powered solutions tailored to your needs.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Deploy & Optimize",
      description: "We launch your systems and continuously optimize for maximum efficiency.",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology to transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/20" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-neural flex items-center justify-center text-white font-bold shadow-neural">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
