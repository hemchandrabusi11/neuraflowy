import Layout from "@/components/layout/Layout";
import NeuralHero from "@/components/home/NeuralHero";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyNeuraFlowy from "@/components/home/WhyNeuraFlowy";
import ProcessSteps from "@/components/home/ProcessSteps";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <Layout>
      <NeuralHero />
      <ServicesGrid />
      <WhyNeuraFlowy />
      <ProcessSteps />
      <CTASection />
    </Layout>
  );
};

export default Home;
