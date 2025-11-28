import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with your webhook
    console.log("Form submitted:", formData);
    
    toast.success("Thank you! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      businessType: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-neural-subtle py-20 border-b border-accent-gold/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Let's discuss how we can help automate and transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
                    <a
                      href="tel:+917892748115"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      +91 7892748115
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
                    <a
                      href="https://wa.me/917892748115"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-gold hover:text-accent-gold/80 transition-colors font-medium"
                    >
                      💬 Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                    <a
                      href="mailto:hemchandrabusi11@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      hemchandrabusi11@gmail.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Request a Free Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Phone *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Business Type
                      </label>
                      <Input
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        placeholder="e.g., E-commerce, SaaS"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Service Needed
                    </label>
                    <Input
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g., AI Automation, CRM"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project and requirements..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-neural shadow-glow hover:shadow-neural transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
