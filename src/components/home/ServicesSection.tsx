import { Card } from "@/components/ui/card";
import { Bot, Database, MessageSquare, Globe, Clock, BarChart3, Network } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation Workflows",
      description: "Streamline your business operations with intelligent automation that works 24/7.",
      features: ["Custom Workflow Design", "Process Optimization", "Real-time Monitoring", "Scalable Solutions"],
    },
    {
      icon: Database,
      title: "CRM & Lead Systems",
      description: "Custom CRM solutions with automated lead management, tracking, and nurturing.",
      features: ["Lead Capture Automation", "Pipeline Management", "Customer Insights", "Integration Ready"],
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Deploy intelligent chatbots on your website and WhatsApp for 24/7 customer support.",
      features: ["Web Chatbots", "WhatsApp Integration", "Natural Language AI", "Multi-language Support"],
    },
    {
      icon: Globe,
      title: "Website & App Development",
      description: "Modern, responsive web and mobile applications built for performance.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Mobile-First"],
    },
    {
      icon: Clock,
      title: "AI Receptionist",
      description: "Automates front-desk interactions, ensuring every customer call, text, or chat is handled instantly.",
      features: ["24/7 Availability", "Lead Qualification", "Appointment Booking", "Cost Reduction"],
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Real-time business intelligence dashboards for informed decision-making.",
      features: ["Custom Dashboards", "Real-time Data", "KPI Tracking", "Data Visualization"],
    },
    {
      icon: Network,
      title: "Personalized Email Follow-Up",
      description: "Hyper-personalized email follow-ups that turn cold leads into warm appointments.",
      features: ["Automated Responses", "High Open Rates", "Automated Sequences", "Personalized Content"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete automation solutions designed to accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 hover:shadow-neural transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-neural flex items-center justify-center mb-4 shadow-neural">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {service.description}
              </p>

              <ul className="grid grid-cols-2 gap-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary mr-1.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
