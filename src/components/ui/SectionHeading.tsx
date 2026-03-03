import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">{subtitle}</span>
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 ${light ? "text-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`mt-4 h-[2px] w-16 bg-primary ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
};

export default SectionHeading;
