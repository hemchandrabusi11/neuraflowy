import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-neuraflow.png";

const Footer = () => {
  const services = [
    { name: "AI Automation", href: "/services/ai-automation" },
    { name: "CRM Systems", href: "/services/crm-systems" },
    { name: "AI Chatbots", href: "/services/ai-chatbots" },
    { name: "Web Development", href: "/services/web-development" },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black border-t border-accent-gold/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand - Logo 2x scaled with responsive sizing */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="NeuraFlow logo" 
                className="h-16 md:h-20 lg:h-24 w-auto max-h-[64px] md:max-h-[80px] lg:max-h-[96px]" 
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Smarter Systems. Seamless Flow.
            </p>
            <p className="text-sm text-muted-foreground">
              AI-powered automation that accelerates your business workflows.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:7892748115"
                  aria-label="Call NeuraFlow"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  7892748115
                </a>
              </li>
              <li>
                <a
                  href="mailto:hemchandrabusi11@gmail.com"
                  aria-label="Email NeuraFlow"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  hemchandrabusi11@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917892748115"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="text-sm text-accent-gold hover:text-accent-gold/80 transition-colors font-medium"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NeuraFlow. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;