"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    text: "An absolutely unforgettable dining experience. The truffle pasta was divine and the ambiance was perfection.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    text: "From the moment we walked in, everything was impeccable. The salmon was the best I've ever had. Truly world-class.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    text: "We celebrated our anniversary here and it was magical. The attention to detail in every dish is extraordinary.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-restaurant">
        <SectionHeading subtitle="Testimonials" title="What Our Guests Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-cream p-8 rounded-lg shadow-sm relative"
            >
              <Quote size={32} className="text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="font-display font-semibold text-foreground">{review.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
