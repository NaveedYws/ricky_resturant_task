import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

const images = [
  { src: gallery1, alt: "Chef preparing dishes", span: "md:col-span-2 md:row-span-2" },
  { src: dish1, alt: "Filet Mignon", span: "" },
  { src: dish2, alt: "Truffle Pasta", span: "" },
  { src: gallery2, alt: "Bar area", span: "md:col-span-2" },
  { src: dish3, alt: "Glazed Salmon", span: "" },
  { src: aboutBg, alt: "Restaurant interior", span: "md:col-span-2" },
  { src: dish4, alt: "Chocolate Mousse", span: "" },
  { src: gallery3, alt: "Terrace dining", span: "md:col-span-2" },
  { src: dish5, alt: "Bruschetta", span: "" },
  { src: dish6, alt: "Fresh salad", span: "" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-foreground"
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-restaurant">
          <SectionHeading subtitle="Visual Journey" title="A Feast for the Eyes" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500 flex items-end p-4">
                  <span className="font-body text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
