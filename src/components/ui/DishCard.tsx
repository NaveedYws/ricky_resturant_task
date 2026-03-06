"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DishCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  horizontal?: boolean;
}

const DishCard = ({ image, name, description, price, horizontal = false }: DishCardProps) => {
  if (horizontal) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="group flex flex-col sm:flex-row items-center gap-6 bg-background rounded-lg overflow-hidden p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
      >
        <div className="relative overflow-hidden w-full sm:w-32 h-32 flex-shrink-0 rounded-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 128px"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h3>
            <span className="font-display text-lg font-bold text-primary ml-4">{price}</span>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
          <span className="font-display text-lg font-bold text-primary">{price}</span>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default DishCard;
