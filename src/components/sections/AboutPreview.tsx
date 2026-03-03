import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-bg.jpg";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "30+", label: "Trained Chefs" },
  { value: "200+", label: "Stunning Dishes" },
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-restaurant">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="Savoria restaurant interior with warm candlelit atmosphere"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading subtitle="About Us" title="EAT WHAT MAKES YOU HAPPY" centered={false} />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Get the food that makes you drool! Savoria is one of the finest restaurants to dine-in with the best combination of spices according to your taste. Our professional staff is at your service with food delivery, event catering, and other services.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Every dish tells a story, crafted from the freshest locally sourced ingredients with meticulous attention to flavor, texture, and presentation.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
            >
              Order Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
