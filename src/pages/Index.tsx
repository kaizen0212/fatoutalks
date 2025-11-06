import Hero from "@/components/Hero";
import About from "@/components/About";
import WhySection from "@/components/WhySection";
import Approach from "@/components/Approach";
import Programs from "@/components/Programs";
import CustomServices from "@/components/CustomServices";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WhySection />
      <Approach />
      <Programs />
      <CustomServices />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
