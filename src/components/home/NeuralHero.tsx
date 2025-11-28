import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const NeuralHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Neural network particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = 50;
    const connectionDistance = 150;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(15, 107, 255, 0.6)";
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.strokeStyle = `rgba(15, 107, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 bg-gradient-neural-subtle opacity-30" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-neural-pulse" />
            <span className="text-sm font-medium text-primary">
              AI-Powered Automation Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Smarter Systems.
            <br />
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              Seamless Flow.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-powered automation that accelerates your business workflows.
            Eliminate manual work and scale operations effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild className="bg-gradient-neural shadow-glow hover:shadow-neural transition-all group">
              <a 
                href="https://calendar.app.google/bv3YjwZwfayx6TPd6?utm_source=website&utm_medium=cta&utm_campaign=book_consultation&utm_content=hero" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Book Free Consultation — opens in new tab"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-neural-pulse" />
              <span>Reliable AI Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-neural-pulse" />
              <span>Fast Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-neural-pulse" />
              <span>Data-Driven Automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gold Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
    </section>
  );
};

export default NeuralHero;
