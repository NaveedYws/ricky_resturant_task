import { motion } from "framer-motion";

interface DishCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const DishCard = ({ image, name, description, price }: DishCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-500" />
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
