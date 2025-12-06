import { Brain, Zap, Target, Rocket } from "lucide-react";

const WhyNeuraFlowy = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Intelligence Driven",
      description: "Powered by advanced AI and machine learning algorithms for optimal decision-making.",
    },
    {
      icon: Zap,
      title: "Automation First",
      description: "Built from the ground up to eliminate manual work and accelerate processes.",
    },
    {
      icon: Target,
      title: "Predictable Results",
      description: "Data-driven approach ensures consistent, measurable outcomes every time.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Rapid implementation and deployment to get your systems running quickly.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Why Choose NeuraFlowy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge AI technology with practical business automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-neural flex items-center justify-center mx-auto mb-4 shadow-neural">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNeuraFlowy;
