import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const ContactCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 overlay-dark" />

      <div className="relative z-10 container-restaurant text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">Make a Reservation</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Book Your Table Today
          </h2>
          <p className="font-body text-foreground/70 max-w-lg mx-auto mb-10">
            Join us for an extraordinary culinary experience. Reserve your table and let us create unforgettable moments for you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
