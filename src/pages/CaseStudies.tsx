import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      slug: "ecommerce-automation",
      title: "E-commerce Order Automation",
      industry: "E-commerce",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      problem: "Manual order processing taking 4+ hours daily",
      solution: "AI-powered order automation with CRM integration",
      results: [
        { label: "Time Saved", value: "90%" },
        { label: "Order Processing", value: "10x faster" },
        { label: "Error Reduction", value: "95%" },
      ],
      tags: ["AI Automation", "CRM", "E-commerce"],
    },
    {
      slug: "lead-management-system",
      title: "Real Estate Lead Management",
      industry: "Real Estate",
      image: "bg-gradient-to-br from-emerald-500 to-teal-600",
      problem: "Losing qualified leads due to delayed follow-ups",
      solution: "Intelligent CRM with automated lead nurturing",
      results: [
        { label: "Lead Response", value: "Instant" },
        { label: "Conversion Rate", value: "+40%" },
        { label: "Sales Cycle", value: "-30%" },
      ],
      tags: ["CRM", "Lead Management", "Automation"],
    },
    {
      slug: "customer-support-chatbot",
      title: "24/7 Customer Support Bot",
      industry: "SaaS",
      image: "bg-gradient-to-br from-orange-500 to-pink-600",
      problem: "High support costs and slow response times",
      solution: "AI chatbot handling 80% of customer queries",
      results: [
        { label: "Cost Reduction", value: "60%" },
        { label: "Response Time", value: "Instant" },
        { label: "Satisfaction", value: "+35%" },
      ],
      tags: ["AI Chatbot", "Customer Support", "WhatsApp"],
    },
    {
      slug: "field-attendance-tracking",
      title: "Field Workforce Automation",
      industry: "Logistics",
      image: "bg-gradient-to-br from-violet-500 to-purple-600",
      problem: "No visibility into field team attendance and location",
      solution: "GPS-based attendance system with real-time tracking",
      results: [
        { label: "Attendance Accuracy", value: "100%" },
        { label: "Admin Time", value: "-80%" },
        { label: "Productivity", value: "+25%" },
      ],
      tags: ["Attendance", "GPS Tracking", "Automation"],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-neural-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Success Stories
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Real results from businesses that automated with NeuraFlow.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card
                key={study.slug}
                className="overflow-hidden group hover:shadow-neural transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image/Header */}
                <div className={`h-48 ${study.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <Badge variant="secondary" className="relative z-10 bg-white/90 text-foreground">
                    {study.industry}
                  </Badge>
                </div>

                <div className="p-8">
                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>

                  {/* Problem & Solution */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-semibold text-muted-foreground">Problem:</span>
                      <p className="text-foreground">{study.problem}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-muted-foreground">Solution:</span>
                      <p className="text-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary rounded-lg">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-primary font-medium group/link"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-xl bg-gradient-neural flex items-center justify-center mx-auto mb-4 shadow-neural">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">3x</div>
                <div className="text-muted-foreground">Average ROI Increase</div>
              </div>
              <div>
                <div className="w-16 h-16 rounded-xl bg-gradient-neural flex items-center justify-center mx-auto mb-4 shadow-neural">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">75%</div>
                <div className="text-muted-foreground">Time Saved on Average</div>
              </div>
              <div>
                <div className="w-16 h-16 rounded-xl bg-gradient-neural flex items-center justify-center mx-auto mb-4 shadow-neural">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how NeuraFlow can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-neural shadow-neural">
                <a 
                  href="https://calendar.app.google/bv3YjwZwfayx6TPd6?utm_source=website&utm_medium=cta&utm_campaign=book_consultation&utm_content=case_studies_cta" 
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

export default CaseStudies;
