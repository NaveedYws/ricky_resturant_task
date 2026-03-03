import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import dish5 from "@/assets/dish-5.jpg";

const images = [
  { src: gallery1, alt: "Chef preparing gourmet dish", span: "col-span-1 row-span-2" },
  { src: gallery2, alt: "Elegant bar area", span: "col-span-1" },
  { src: dish5, alt: "Bruschetta appetizer", span: "col-span-1" },
  { src: gallery3, alt: "Outdoor terrace dining", span: "col-span-2" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-restaurant">
        <SectionHeading subtitle="Our Gallery" title="Moments at Savoria" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-lg group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-block border border-primary text-primary px-8 py-3 font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
