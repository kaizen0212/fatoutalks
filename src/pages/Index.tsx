import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhySection from "@/components/WhySection";
import Approach from "@/components/Approach";
import Programs from "@/components/Programs";
import CustomServices from "@/components/CustomServices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="why">
          <WhySection />
        </section>
        <section id="approach">
          <Approach />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="services">
          <CustomServices />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Index;
