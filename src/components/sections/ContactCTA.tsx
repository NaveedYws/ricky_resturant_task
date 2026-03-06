"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Savoria Restaurant Background"
        fill
        className="object-cover opacity-100" // We'll rely on the overlay-dark div
        sizes="100vw"
      />
      <div className="absolute inset-0 overlay-dark" />

      <div className="relative z-10 container-restaurant text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">Get Delivery</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            On Your Desired Time
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
          >
            Order Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
