import Layout from "@/components/layout/Layout";
import NeuralHero from "@/components/home/NeuralHero";
import ServicesSection from "@/components/home/ServicesSection";
import WhyNeuraFlowy from "@/components/home/WhyNeuraFlowy";
import ProcessSteps from "@/components/home/ProcessSteps";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <Layout>
      <NeuralHero />
      <ServicesSection />
      <WhyNeuraFlowy />
      <ProcessSteps />
      <AboutSection />
      <ContactSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
