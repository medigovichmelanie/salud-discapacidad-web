import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import HowToAct from "@/components/HowToAct";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <HowToAct />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
