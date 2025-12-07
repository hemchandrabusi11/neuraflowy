import { Card } from "@/components/ui/card";
import { Brain, Zap, Target, Rocket, Shield, Users } from "lucide-react";
import logo from "@/assets/logo-neuraflowy-new.png";

const AboutSection = () => {
  const values = [
    { icon: Brain, title: "Intelligence First", description: "Cutting-edge AI for complex challenges." },
    { icon: Zap, title: "Simple Solutions", description: "Powerful automation that just works." },
    { icon: Shield, title: "Reliability", description: "Systems built for 24/7 uptime." },
    { icon: Target, title: "Transparency", description: "Clear communication always." },
    { icon: Rocket, title: "Fast Execution", description: "Rapid implementation." },
    { icon: Users, title: "Results Driven", description: "Measurable outcomes." },
  ];

  return (
    <section id="about" className="py-20 bg-secondary scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About NeuraFlowy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Accelerating business growth through intelligent automation.
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-muted-foreground mb-4">
              NeuraFlowy was founded with a singular mission: to empower businesses with intelligent, 
              automated systems that eliminate manual work and accelerate growth.
            </p>
            <p className="text-muted-foreground">
              Our name reflects our core philosophy—combining neural intelligence (Neura) with seamless 
              workflows (Flowy). We believe automation should be intelligent, intuitive, and integrated.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-3 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground text-sm">
              To empower businesses with intelligent, automated systems that eliminate manual work 
              and accelerate growth.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-3 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground text-sm">
              To become the most trusted AI automation partner for SMEs worldwide, making advanced 
              technology accessible to every business.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="p-4 text-center hover:shadow-neural transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-neural flex items-center justify-center mx-auto mb-3 shadow-neural">
                <value.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-semibold mb-1 text-foreground">{value.title}</h4>
              <p className="text-xs text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Founder */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-1 flex justify-center">
                <img 
                  src={logo} 
                  alt="NeuraFlowy logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="md:col-span-3 text-center md:text-left">
                <h3 className="text-xl font-bold mb-1 text-foreground">Hemachandra L</h3>
                <p className="text-primary font-medium mb-3 text-sm">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  With a passion for AI and automation, Hemachandra founded NeuraFlowy to help 
                  businesses harness the power of intelligent systems, making advanced automation 
                  accessible to every business.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
