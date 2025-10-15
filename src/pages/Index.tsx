import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Tours />
      <About />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
