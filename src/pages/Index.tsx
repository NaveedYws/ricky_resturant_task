import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <FeaturedDishes />
      <GalleryPreview />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
