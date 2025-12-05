import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Database, MessageSquare, Globe, Clock, BarChart3, Network, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation Workflows",
      description: "Streamline your business operations with intelligent automation that works 24/7. From data processing to task management, our AI workflows eliminate manual work.",
      features: ["Custom Workflow Design", "Process Optimization", "Real-time Monitoring", "Scalable Solutions"],
      slug: "ai-automation",
    },
    {
      icon: Database,
      title: "CRM & Lead Systems",
      description: "Custom CRM solutions with automated lead management, tracking, and nurturing. Turn prospects into customers with intelligent automation.",
      features: ["Lead Capture Automation", "Pipeline Management", "Customer Insights", "Integration Ready"],
      slug: "crm-systems",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Deploy intelligent chatbots on your website and WhatsApp. Provide 24/7 customer support with natural language processing.",
      features: ["Web Chatbots", "WhatsApp Integration", "Natural Language AI", "Multi-language Support"],
      slug: "ai-chatbots",
    },
    {
      icon: Globe,
      title: "Website & App Development",
      description: "Modern, responsive web and mobile applications built for performance and user experience. From landing pages to complex platforms.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Mobile-First"],
      slug: "web-development",
    },
    {
      icon: Clock,
      title: "AI Receptionist",
      description: "The AI Receptionist automates front-desk interactions, ensuring every customer call, text, or chat is handled instantly, professionally, and 24/7.",
      features: ["24/7 Availability", "Automatic Lead Qualification", "Instant Appointment Booking", "Operational Cost Reduction"],
      slug: "ai-receptionist",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Real-time business intelligence dashboards for informed decision-making. Visualize data, track KPIs, and gain actionable insights.",
      features: ["Custom Dashboards", "Real-time Data", "KPI Tracking", "Data Visualization"],
      slug: "analytics-dashboards",
    },
    {
      icon: Network,
      title: "Personalized Email Follow-Up System",
      description: "Ditch generic outreach: Our S-Tier System deploys human-like, hyper-personalized email follow-ups that turn cold leads into warm appointments automatically.",
      features: ["24/7 Automated Responses", "Instant Call Handling", "Multi-Channel Support", "Professional Interactions"],
      slug: "email-follow-up",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-neural-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Complete automation solutions designed to accelerate your business growth and eliminate manual workflows.
            </p>
            <Button size="lg" asChild className="bg-gradient-neural shadow-neural">
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.slug}
                className="p-8 hover:shadow-neural transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-neural flex items-center justify-center mb-6 shadow-neural">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all group"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business is unique. Let's discuss how we can create a tailored automation solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-neural shadow-neural">
                <a 
                  href="https://calendar.app.google/wRuhoJAFqSXioHXT7" 
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

export default Services;