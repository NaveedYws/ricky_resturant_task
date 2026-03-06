import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

const AboutPreview = dynamic(() => import("@/components/sections/AboutPreview"));
const FeaturedDishes = dynamic(() => import("@/components/sections/FeaturedDishes"));
const Catring = dynamic(() => import("@/components/sections/Catring"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA"));

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutPreview />
            <Catring />
            <FeaturedDishes />
            <Testimonials />
            <ContactCTA />
        </>
    );
}
