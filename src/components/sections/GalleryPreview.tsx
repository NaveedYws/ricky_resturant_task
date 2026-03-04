import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish5 from "@/assets/dish-5.jpg";

const images = [
  { src: gallery1, alt: "Wedding Catering", label: "WEDDING CATERING" },
  { src: dish1, alt: "Stags & Doekeys", label: "STAGS & DOEKEYS" },
  { src: gallery2, alt: "Birthday Party Catering", label: "BIRTHDAY PARTY CATERING" },
  { src: dish5, alt: "Kids Party Catering", label: "KIDS PARTY CATERING" },
  { src: dish2, alt: "Staff Party", label: "STAFF PARTY" },
  { src: gallery3, alt: "Yacht Party Catering", label: "YACHT PARTY CATERING" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-restaurant">
        <SectionHeading subtitle="Catering" title="Organising Private & Corporate Parties" />
        <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Are you planning a private party, a corporate event, or a celebration? We offer professional catering services that will make your event unforgettable.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-lg group aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 flex items-end justify-center p-4">
                <span className="font-body text-xs sm:text-sm text-white tracking-wider uppercase font-semibold">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
