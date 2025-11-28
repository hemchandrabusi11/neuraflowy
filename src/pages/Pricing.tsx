import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCurrency } from "@/hooks/useCurrency";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";

const Pricing = () => {
  const { currency, setCurrency, formatPrice } = useCurrency();

  const plans = [
    {
      name: "Starter Automation",
      priceINR: 12000,
      period: "/month",
      description: "Perfect for small businesses getting started with automation",
      features: [
        { name: "Basic AI Chatbot (Web)", included: true },
        { name: "1 CRM Module", included: true },
        { name: "Up to 3 Automation Workflows", included: true },
        { name: "Email Support", included: true },
        { name: "WhatsApp Bot", included: false },
        { name: "AI Receptionist", included: false },
        { name: "Analytics Dashboard", included: false },
        { name: "Priority Support", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth Automation",
      priceINR: 25000,
      period: "/month",
      description: "For growing businesses needing more automation power",
      features: [
        { name: "Advanced AI Chatbot (Web + WhatsApp)", included: true },
        { name: "Full CRM System", included: true },
        { name: "Up to 10 Automation Workflows", included: true },
        { name: "Basic Analytics Dashboard", included: true },
        { name: "Email & Phone Support", included: true },
        { name: "AI Receptionist", included: false },
        { name: "Custom Integrations", included: false },
        { name: "Dedicated Account Manager", included: false },
      ],
      cta: "Start Growing",
      popular: false,
    },
    {
      name: "Business Automation Suite",
      priceINR: 55000,
      period: "/month",
      description: "Complete automation for established businesses",
      features: [
        { name: "Premium AI Chatbots (All Channels)", included: true },
        { name: "Enterprise CRM", included: true },
        { name: "Unlimited Automation Workflows", included: true },
        { name: "Advanced Analytics Dashboard", included: true },
        { name: "AI Receptionist & Field Automation", included: true },
        { name: "Up to 5 Custom Integrations", included: true },
        { name: "Priority Support (24/7)", included: true },
        { name: "Monthly Strategy Calls", included: true },
      ],
      cta: "Go Premium",
      popular: true,
    },
    {
      name: "Enterprise Automation",
      priceINR: null,
      period: "",
      description: "Tailored solutions for enterprise-level operations",
      features: [
        { name: "Custom AI Solutions", included: true },
        { name: "Custom CRM Development", included: true },
        { name: "Unlimited Everything", included: true },
        { name: "Real-time Dashboards & BI", included: true },
        { name: "Advanced Automation Systems", included: true },
        { name: "Unlimited Integrations", included: true },
        { name: "Dedicated Support Team", included: true },
        { name: "SLA Guarantees", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const addons = [
    { name: "Additional Automation Workflow", price: "₹2,000/mo" },
    { name: "WhatsApp Bot Module", price: "₹5,000/mo" },
    { name: "Custom CRM Module", price: "₹8,000/mo" },
    { name: "Advanced Analytics Package", price: "₹10,000/mo" },
    { name: "Custom App Development", price: "Starting ₹50,000" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-neural-subtle py-20 border-b border-accent-gold/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              Choose the automation system that fits your business. Scale as you grow.
            </p>
            <div className="flex justify-center">
              <CurrencySwitcher currency={currency} onCurrencyChange={setCurrency} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-8 flex flex-col relative animate-fade-in-up bg-card/50 backdrop-blur-sm ${
                  plan.popular ? "border-primary shadow-glow" : "border-border/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-neural text-white text-sm font-semibold rounded-full shadow-glow">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.priceINR ? formatPrice(plan.priceINR) : "Custom"}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40 shrink-0 mt-0.5" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground/60"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.popular
                      ? "bg-gradient-neural shadow-glow w-full hover:shadow-neural transition-all"
                      : "w-full"
                  }
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">{plan.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/30 border-y border-accent-gold/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Add-On Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Extend your automation capabilities with these optional services
              </p>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex justify-between items-center p-4 rounded-lg bg-background border border-border"
                  >
                    <span className="font-medium text-foreground">
                      {addon.name}
                    </span>
                    <span className="text-primary font-semibold">
                      {addon.price}
                    </span>
                  </div>
                ))}
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
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business has unique needs. Let's discuss a tailored plan that fits your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-neural shadow-neural">
                <a 
                  href="https://calendar.app.google/bv3YjwZwfayx6TPd6?utm_source=website&utm_medium=cta&utm_campaign=book_consultation&utm_content=pricing_cta" 
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

export default Pricing;