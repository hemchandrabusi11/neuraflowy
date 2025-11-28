import Layout from "@/components/layout/Layout";
import NeuralHero from "@/components/home/NeuralHero";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyNeuraFlow from "@/components/home/WhyNeuraFlow";
import ProcessSteps from "@/components/home/ProcessSteps";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <Layout>
      <NeuralHero />
      <ServicesGrid />
      <WhyNeuraFlow />
      <ProcessSteps />
      <CTASection />
    </Layout>
  );
};

export default Home;
