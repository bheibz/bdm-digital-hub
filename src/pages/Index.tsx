import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ContentSection from "@/components/ContentSection";
import AcademySection from "@/components/AcademySection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <ContentSection />
      <AcademySection />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
