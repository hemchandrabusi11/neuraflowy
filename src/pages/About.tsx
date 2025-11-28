import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Zap, Target, Rocket, Shield, Users } from "lucide-react";
import logo from "@/assets/logo-neuraflow.png";

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Intelligence First",
      description: "We leverage cutting-edge AI to solve complex business challenges.",
    },
    {
      icon: Zap,
      title: "Automation Without Complexity",
      description: "Simple, powerful solutions that just work.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Systems built to run 24/7 with zero downtime.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Clear communication and honest partnership.",
    },
    {
      icon: Rocket,
      title: "Fast Execution",
      description: "Rapid implementation without compromising quality.",
    },
    {
      icon: Users,
      title: "Results Driven",
      description: "Focused on measurable business outcomes.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-neural-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              About NeuraFlow
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Accelerating business growth through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                NeuraFlow was founded with a singular mission: to empower businesses with intelligent, 
                automated systems that eliminate manual work and accelerate growth. We recognized that 
                while AI and automation technologies were rapidly advancing, most businesses struggled 
                to harness their power effectively.
              </p>
              <p className="text-muted-foreground mb-4">
                Our name reflects our core philosophy—combining neural intelligence (Neura) with seamless 
                workflows (Flow). We believe automation should be intelligent, intuitive, and integrated 
                into the fabric of business operations.
              </p>
              <p className="text-muted-foreground">
                Today, we help businesses across industries transform their operations through custom AI 
                solutions, workflow automation, and intelligent systems that work tirelessly to drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with intelligent, automated systems that eliminate manual work 
                and accelerate growth.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted AI automation partner for SMEs worldwide, making advanced 
                technology accessible to every business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 hover:shadow-neural transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-neural flex items-center justify-center mb-4 shadow-neural">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder - HL logo replaced with NeuraFlow logo */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-neural flex items-center justify-center shadow-neural overflow-hidden p-4">
                    <img 
                      src={logo} 
                      alt="NeuraFlow logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Hemachandra L
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-muted-foreground mb-4">
                    With a passion for AI and automation, Hemachandra founded NeuraFlow to help 
                    businesses harness the power of intelligent systems. His vision is to make 
                    advanced automation accessible to every business, regardless of size or industry.
                  </p>
                  <p className="text-muted-foreground">
                    Under his leadership, NeuraFlow has helped dozens of companies transform their 
                    operations through custom AI solutions, delivering measurable results and 
                    sustainable growth.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how NeuraFlow can help you achieve your automation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-neural shadow-neural">
                <a 
                  href="https://calendar.app.google/bv3YjwZwfayx6TPd6?utm_source=website&utm_medium=cta&utm_campaign=book_consultation&utm_content=about_cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book Free Consultation — opens in new tab"
                >
                  Book Free Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;