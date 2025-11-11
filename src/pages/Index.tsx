import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
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
      <Packages />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
