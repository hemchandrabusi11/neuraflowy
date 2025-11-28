import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Bot, Database, MessageSquare, Globe, Target, Clock, BarChart3, Network } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation Workflows",
      description: "Intelligent process automation that works 24/7 to streamline operations.",
      href: "/services/ai-automation",
    },
    {
      icon: Database,
      title: "CRM & Lead Systems",
      description: "Custom CRM solutions with automated lead management and tracking.",
      href: "/services/crm-systems",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Smart chatbots for web and WhatsApp with natural language processing.",
      href: "/services/ai-chatbots",
    },
    {
      icon: Globe,
      title: "Website & App Development",
      description: "Modern, responsive web and mobile applications built for performance.",
      href: "/services/web-development",
    },
    {
      icon: Target,
      title: "Google & Meta Ads",
      description: "Data-driven advertising campaigns that maximize ROI and conversions.",
      href: "/services/ads-management",
    },
    {
      icon: Clock,
      title: "AI Receptionist",
      description: "Automated attendance, selfie-based punch & smart logging for field workforce.",
      href: "/services/ai-receptionist",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Real-time business intelligence dashboards for informed decision-making.",
      href: "/services/analytics-dashboards",
    },
    {
      icon: Network,
      title: "Business Integrations",
      description: "Seamless API integrations connecting your business tools and systems.",
      href: "/services/business-integrations",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Complete Automation Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI workflows to business integrations, we provide end-to-end automation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full p-6 hover:shadow-neural transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 bg-card">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Learn more →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;